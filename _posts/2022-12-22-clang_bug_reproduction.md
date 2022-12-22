---
layout: project
type: blog
noimage: '<i class="fa fa-file-text-o fa-big12" aria-hidden="true"></i>'
image:
title: Clang bug reproduction
github:
description: You bumped into a clang issue, what now?
---

Clang bug reproduction
=========================================

## Introduction

I love to run code analysis and sanitizers.
Somehow, unearthing year-long bugs nobody ever knew existed feels extremely rewarding to me. Plus, finding, understanding and fixing those bugs is each time a learning experience.

Last month, tooling started to fail. Sometimes, while working as usual, some Clangd/clang-tidy instances started to stay up for hours instead of seconds using 100% of a cpu. Afterwards `CodeChecker` would never end its analysis (due to the same clang-tidy node).

## "The problem doesn't exist"

Of course, this was due to the usage of an old clang-tidy version. We are using Debian Bullseye and only the version 11 is available by default.

I upgraded to `clang 15.0.6` (+ all tooling) and [installed it](https://apt.llvm.org/) and used it as [default using update-alternative](https://gist.github.com/AlexisTM/676f62afa43b79ccde09d6b7938652ff):

Problem solv... wait, **no**.

For the time being, I switched my linter to `ccls` as I still need to finish my tasks.

## Reproduce the problem

The first part is to reliably reproduce the problem. This was pretty easy, work normally, when you hear your fan starting to spin up, check `htop` and copy the bad command out.

```bash
/usr/lib/llvm-15/bin/clang-tidy '-checks=-clang-analyzer-*,clang-diagnostic-*,bugprone-assert-side-effect,bugprone-bool-pointer-implicit-conversion,bugprone-copy-constructor-init,bugprone-dangling-handle,bugprone-dynamic-static-initializers,bugprone-exception-escape,bugprone-fold-init-type,bugprone-forward-declaration-namespace,bugprone-forwarding-reference-overload,bugprone-inaccurate-erase,bugprone-incorrect-roundings,bugprone-infinite-loop,bugprone-integer-division,bugprone-lambda-function-name,bugprone-macro-repeated-side-effects,bugprone-misplaced-operator-in-strlen-in-alloc,bugprone-misplaced-pointer-arithmetic-in-alloc,bugprone-misplaced-widening-cast,bugprone-move-forwarding-reference,bugprone-narrowing-conversions,bugprone-not-null-terminated-result,bugprone-shared-ptr-array-mismatch,bugprone-signal-handler,bugprone-signed-char-misuse,bugprone-sizeof-container,bugprone-sizeof-expression,bugprone-string-constructor,bugprone-string-literal-with-embedded-nul,bugprone-stringview-nullptr,bugprone-suspicious-enum-usage,bugprone-suspicious-memory-comparison,bugprone-suspicious-memset-usage,bugprone-suspicious-missing-comma,bugprone-suspicious-semicolon,bugprone-swapped-arguments,bugprone-terminating-continue,bugprone-throw-keyword-missing,bugprone-too-small-loop-variable,bugprone-undefined-memory-manipulation,bugprone-undelegated-constructor,bugprone-unhandled-exception-at-new,bugprone-unhandled-self-assignment,bugprone-unused-raii,bugprone-unused-return-value,bugprone-use-after-move,bugprone-virtual-near-miss,cert-con36-c,cert-con54-cpp,cert-dcl03-c,cert-dcl16-c,cert-dcl21-cpp,cert-dcl37-c,cert-dcl50-cpp,cert-dcl51-cpp,cert-dcl54-cpp,cert-dcl58-cpp,cert-dcl59-cpp,cert-env33-c,cert-err09-cpp,cert-err33-c,cert-err34-c,cert-err52-cpp,cert-err58-cpp,cert-err60-cpp,cert-err61-cpp,cert-fio38-c,cert-flp30-c,cert-mem57-cpp,cert-msc30-c,cert-msc32-c,cert-msc50-cpp,cert-msc51-cpp,cert-oop11-cpp,cert-oop54-cpp,cert-oop57-cpp,cert-oop58-cpp,cert-pos44-c,cert-pos47-c,cert-str34-c,concurrency-thread-canceltype-asynchronous,cppcoreguidelines-slicing,cppcoreguidelines-special-member-functions,cppcoreguidelines-virtual-class-destructor,google-build-namespaces,google-global-names-in-headers,-misc-confusable-identifiers,-misc-const-correctness,-misc-definitions-in-headers,-misc-misleading-bidirectional,-misc-misleading-identifier,-misc-misplaced-const,-misc-new-delete-overloads,-misc-no-recursion,-misc-non-copyable-objects,-misc-non-private-member-variables-in-classes,-misc-redundant-expression,-misc-static-assert,-misc-throw-by-value-catch-by-reference,-misc-unconventional-assign-operator,-misc-uniqueptr-reset-release,-misc-unused-alias-decls,-misc-unused-parameters,-misc-unused-using-decls,performance-inefficient-algorithm,performance-move-const-arg,performance-move-constructor-init,performance-no-automatic-move,performance-noexcept-move-constructor,performance-trivially-destructible,readability-container-contains,readability-container-data-pointer,readability-suspicious-call-argument' '-config={"HeaderFilterRegex": ".*"}' /srcpath/file.cpp --export-fixes /buildpath/file.cpp_03d234c20bb4e3b6e6b11166f92df5f7.yaml -- -Qunused-arguments -Wall -Wextra -x c++ --target=x86_64-pc-linux-gnu -O2 -g -DNDEBUG -fPIC -Wall -Wextra -Wpedantic -std=gnu++17 -isystem /usr/include/c++/10 -isystem /usr/include/x86_64-linux-gnu/c++/10 -isystem /usr/include/c++/10/backward -isystem /usr/local/include -isystem /usr/include/x86_64-linux-gnu -isystem /usr/include
```
**Yey!** I can run it again and again choking my laptop!

## Minimise the problem

Well, this _might_ be due to one of those checks? After ensuring the clang-tidy command without any extra check is working, a quick & dirty bash script tested each check.


```bash
IN="clang-analyzer-*,clang-diagnostic-*,[...],readability-suspicious-call-argument"
ARR=(${IN//,/ })

INDEX=0
TOTAL=${#ARR[@]}
for VAL in ${ARR[@]}
do
    DATE=`date`
    INDEX=`expr $INDEX + 1`
    echo "[$DATE] [$INDEX/$TOTAL] $VAL"
    time /usr/lib/llvm-15/bin/clang-tidy "-checks=$VAL" /srcpath/file.cpp --export-fixes /buildpath/file.cpp_03d234c20bb4e3b6e6b11166f92df5f7.yaml -- -Qunused-arguments -Wall -Wextra -x c++ --target=x86_64-pc-linux-gnu -O2 -g -DNDEBUG -fPIC -Wall -Wextra -Wpedantic -std=gnu++17 -isystem /usr/include/c++/10 -isystem /usr/include/x86_64-linux-gnu/c++/10 -isystem /usr/include/c++/10/backward -isystem /usr/local/include -isystem /usr/include/x86_64-linux-gnu -isystem /usr/include  >/dev/null 2>&1
done
```

After few minutes, this was choking on `bugprone-infinite-loop`.

A double check keeping all checks except this one proved this was the sole perpetrator.


## bugprone-infinite-loop

Aaaalright; We have our culprit. [Open an issue on Github](https://github.com/llvm/llvm-project/issues/47658) (aka append your findings to an existing issue of November 2020) and we could finish our story here by simply adding a blacklist for `bugprone-infinite-loop` for our tooling.

How many times did you complain of incomplete information in your tasks? Do you think they have enough informationn to solve the problem without any code (as it is proprietary)? What is the probability for the llvm team to ever fix your issue if they can't reproduce it?

Well that is why this article continues.


## Minimal reproduction

Thanks to [@cor3ntin@vivaldi.net](https://social.vivaldi.net/@cor3ntin) and [@Sdowney@mastodon.social](https://mastodon.social/@Sdowney), I got more information on what to do next.

Either choke clang while using dbg symbols with gdb and recover stacktraces to understand where it chokes, or try to provide a minimal reproduction setup with `creduce` or `cvise`.

Those tools will apply clang code modifications until the code is not "interesting" anymore.

> For this example we will use `cvise`, `creduce` has very similar API.

Let's create a new test folder where we will run creduce:

```bash
mkdir ~/test
```

### Make the code single file

`creduce` expects a single **modifiable** source file to work with. It creates new temporary directy with the modified file and run the test command on it.

If you provide the plain .cpp file, it will reduce it without being able to remove the stdlib & co. This is why I would suggest expanding the file with the `-E` option.

```bash
# Recover your compilation command (such as within your compile_database.json file), add -E, remove the output -o and pipe it to a text file.
clang -E /srcpath/file.cpp -Wall -Wextra -x c++ --target=x86_64-pc-linux-gnu -O2 -g -DNDEBUG -fPIC -Wall -Wextra -Wpedantic -std=gnu++17 -isystem /usr/include/c++/10 -isystem /usr/include/x86_64-linux-gnu/c++/10 -isystem /usr/include/c++/10/backward -isystem /usr/local/include -isystem /usr/include/x86_64-linux-gnu -isystem /usr/include > ~/test/test.cpp
```

> `~/test/test.cpp` is now ready to be reduced

### Interestingness test

The interestingness test is a **bash** file which has to `exit 0` when the code is interesting.

This test *has to be path independant* and expect the test file to be next to our interestingness test.

In my case, I want to reduce the code but "The code is interesting if it takes a long time to run `bugprone-infinite-loop` check."

This is a subpar test as it is a variable problem which will take the **timeout** for each iteration. Plus, we are not checking if the code is actually compiling so the result might not be valid anymore (_my current status_).

To ensure a valid result, we would need to build the code each time and if it builds fine, then try to check if we are chocking.

In this specific case, the timeout was initially set at 60, which was then reduced as running **all the checks but infinite-loop** would be faster. When a timeout is triggered, the error code **124** is returned, which we modify to **0**. If we did not timeout, the command would return the return of clang-tidy, which **could be 0**, in which case we return **124** as we are only interested in the timeouts.

```bash
#!/bin/sh
timeout 60 /usr/lib/llvm-15/bin/clang-tidy "-checks=bugprone-infinite-loop" test.cpp --export-fixes test.yaml -- -Qunused-arguments -Wall -Wextra -x c++ --target=x86_64-pc-linux-gnu -O2 -g -DNDEBUG -fPIC -Wall -Wextra -Wpedantic -std=gnu++17 -isystem /usr/include/c++/10 -isystem /usr/include/x86_64-linux-gnu/c++/10 -isystem /usr/include/c++/10/backward -isystem /usr/local/include -isystem /usr/include/x86_64-linux-gnu -isystem /usr/include  >/dev/null 2>&1

RES=$?

# We need to return 0 if it the bug is present.
if [ "$RES" -eq "0" ]; then
    exit 124
elif [ "$RES" -eq "124" ]; then
    exit 0
else
    # timeout
    exit $RES
fi
```

### Intermediate result

As you can see in the Github issue, I do not have yet a reduced reproducible code. At this stage, my test code is **not building**, runs all checks in **4 seconds** and runs the `bugprone-infinite-loop` in **20 seconds**.

My hopes is to find understand what is the pattern making `bugprone-infinite-loop` slow.
