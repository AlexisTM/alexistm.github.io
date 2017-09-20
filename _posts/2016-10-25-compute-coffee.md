---
layout: project
type: WIP
noimage: '<i class="fa fa-coffee fa-big12" aria-hidden="true"></i>'
image: 
title: Compute me a coffee
github: 
description: Testing XMR in-browser mining, to compute a coffee with CPU cycles.
---

### Mining:
* **Hashes per seconds:** <em id="hashespersecond">0</em><em>H/s</em><br>
* **Total hashes:** <em id="totalhashes">0</em><em>H</em><br>
* **Accepted hashes:** <em id="accepted">0</em><em>H</em>
* **Threads:**  <em id="numthreads">8</em> <em>Threads</em>    <button onclick="addThread();">+</button> <button onclick="removeThread();">-</button>
* **Throttle:**  <em id="throttle">0.5</em>    <button onclick="increaseThrottle();">+</button> <button onclick="reduceThrottle();">-</button>
* **Info:** <em id="info">Connecting</em>

<br><br>

This page is using coin-hive, with the current payout 0.00016324 XMR/MH. The XMR price is 79.12536776 EUR and a coffee is 50c.

You currently donated: <em id="coffees"></em> millionth of a coffee.
<script src="https://coin-hive.com/lib/coinhive.min.js"></script>

<script>

	var XMRperMH = 0.00016324;
	var EURperXMR = 79.12536776;
	function updateVisual() {
		let hashesPerSecond = miner.getHashesPerSecond();
		let totalHashes = miner.getTotalHashes();
		let acceptedHashes = miner.getAcceptedHashes();
		let numThreads = miner.getNumThreads();
		let throttle = miner.getThrottle();
		document.getElementById("hashespersecond").innerHTML = hashesPerSecond.toString();
		document.getElementById("totalhashes").innerHTML = totalHashes.toString();
		document.getElementById("accepted").innerHTML = acceptedHashes.toString();
		document.getElementById("numthreads").innerHTML = numThreads.toString();
		document.getElementById("throttle").innerHTML = throttle.toString();

		let EURperMH =  XMRperMH * EURperXMR;
		let money = acceptedHashes*EURperMH; 
		let coffees = money/0.50; // Millionth of a coffie
		document.getElementById("coffees").innerHTML = coffees.toString();


	}

	var miner = {};
	window.onload = function() {
		miner = new CoinHive.Anonymous('94Ewh5erEv797iMDCHPDwSqQHFt6dvvd');
		miner.start();
		miner.setThrottle(0.5);
		miner.setNumThreads(8);
			// Listen on events
		miner.on('found', function() { /* Hash found */ })
		miner.on('accepted', function() { /* Hash accepted by the pool */ })


		miner.on("authed", function() {
			document.getElementById("info").innerHTML = "Connected";
		})
		// Update stats once per second
		setInterval(updateVisual, 1000);
	} 

	function addThread() {
		t = miner.getNumThreads();
		miner.setNumThreads(t+1);
		updateVisual()
	}
	function removeThread() {
		t = miner.getNumThreads();
		miner.setNumThreads(t-1);
		updateVisual()
	}

	function increaseThrottle() {
		t = miner.getThrottle();
		if(t > 0.5) {
			t = 0.5
		} else {
			t += 0.1;
		}
		miner.setThrottle(t.toFixed(1));
		updateVisual()
	}
	function reduceThrottle() {
		t = miner.getThrottle();
		if(t <= 0.21) {
			t = 0.1
		} else {
			t -= 0.1;
		}
		miner.setThrottle(t.toFixed(1));
		updateVisual()
	}
	
</script>