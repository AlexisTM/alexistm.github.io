---
layout: project
type: personal
noimage: '<i class="fa fa-code fa-big12" aria-hidden="true"></i>'
image: 
title: Simple JSON for PHP
github: https://github.com/AlexisTM/Simple-Json-PHP
description: Simple JSON PHP is <strong>the simplest</strong> library to convert any PHP object or array into a clean JSON while keeping the <strong>performances</strong>. 
---

[![Build Status](https://travis-ci.org/AlexisTM/Simple-Json-PHP.svg?branch=master)](https://travis-ci.org/AlexisTM/Simple-Json-PHP)

Introduction
-------
Simple JSON for PHP makes you able to create your own JSON-API easily by passing PHP objects, PHP Array, JsonString or adding a single property.

Pros : 
* Can output Object or Array
* Easy      : Coded with PHP Objects
* Fast      : JSON are encoded with the native json_encode()
* Reliable  : Headers are send automatically
* Modulable : You can extend the 'content' class to make a custom JSON
* Complete  : You can add objects, properties or arrays
* Callback/Variable or raw option 
* JSONP compatible
* JQuery compatible

Cons : 
* Optimized for objects because JSON is an object notation.

Contribute
----------

To contribute, just contact me! The first fork will be awesome for me!

mailto:alexis.paques@gmail.com

Licence
--------
This work is under GPLv2 licence. Short version : You have to add Alexis Paques in the credits, you are free to use, modify and redistribute but your code must be open-source.

For any change (entreprises), feel free to contact me.

mailto:alexis.paques@gmail.com

What next ?
---------
The next step is obviously to add routes, which is needed to make a powerful API.

References
----------

Informations : https://en.wikipedia.org/wiki/JSONP

Validator : http://json.parser.online.fr

ECMA-404 : http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf

json_encode : https://php.net/manual/fr/function.json-encode.php

Comparaison of JSON PHP libs : http://gggeek.altervista.org/sw/article_20061113.html

JSON API Standard : http://jsonapi.org/

Credits
--------

Alexis PAQUES

NOTE:
-----

If you read until here, you are allowed to know the real reason this project is here: How many people would rely on a 30 lines library which literally only wraps a single command (json_encode)?
