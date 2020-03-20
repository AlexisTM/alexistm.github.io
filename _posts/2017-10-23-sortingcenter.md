---
layout: project
type: work
noimage: '<i class="fa fa-car fa-big12" aria-hidden="true"></i>'
image: ../../assets/images/poc_sorting_center_uai.jpg
title: Sorting Center
github: https://github.com/umdlife/
description: Development of the proof of concept of an <strong>autonomous sorting center</strong> based on rovers for Unmanned Life.
---

This is a project meant to become the product of Unmanned Life. It started with a very basic in-house robot for a proof of concept with **PostNL**.

It was the most basic platform to run: Wooden plate with motors, ultrasound sensors for collision prevention and parcel detection and WiFi in a nice case.

The hardware design was then outsourced to Quimesis (Belgium) which provided the prototypes for SwissPost and an alternative version was also produced from Unsupervised.AI.

In this project, I was in charge of software development.

**Features implemented**:

* Motor control (Arduino then Roboteq SBL2360)
* Collision prevention (Ultrasound then 2D Lidar)
* Path planning (Fixed setups then WebUI to define the inputs/outputs)
* Robot navigation (Fixed setups then paths selected depending on current usage)
* Parcel detection (Ultrasound then IR detectors)
* Multi-robot environment (Grid latching system)
* UWB-based localization (Pozyx TWR then Bitcraze custom TDoA)
* GUI (PyQT then Web interface using Vue.JS)

This solution won multiple awards:
* [The Start-up Postal Innovation award, PostExpo 2017 with PostNL](https://www.parcelandpostaltechnologyinternational.com/news/expo/post-expo-2017-show-review.html)
* [The Postal Innovation award, PostExpo 2018 with SwissPost](https://www.parcelandpostaltechnologyinternational.com/sorting-center-innovation-of-the-year-autonomous-sorting-swiss-post-and-unmanned-life)

<br><br>
<center>
<amp-vimeo
  data-videoid="283651695"
  layout="responsive"
  width="640"
  height="360"
></amp-vimeo>
SwissPost promo video.
</center>

<br>

<center>
<amp-vimeo
  data-videoid="224207412"
  layout="responsive"
  width="640"
  height="360"
></amp-vimeo>
PostNL (Prime Vision) promo video.
</center>

<br>

<center>
<amp-img width="600" height="399" src="../../assets/images/poc_sorting_center_rover.jpg" layout="responsive" alt="In-house built robot"></amp-img>

In-house built robot.
</center>

<br>

<center>
<amp-img width="1024" height="572" src="../../assets/images/poc_sorting_center_quimesis.jpg" layout="responsive" alt="Quimesis robot" ></amp-img>

Quimesis robot with conveyor belt.
</center>

<br>

<center>
<amp-img width="1024" height="572" src="../../assets/images/poc_sorting_center_uai.jpg" layout="responsive" alt="Unsupervised.ai robot" ></amp-img>

Unsupervised.AI robot with conveyor belt.
</center>

<br>

<center>
<amp-img width="1024" height="572" src="../../assets/images/poc_sorting_center.jpg" layout="responsive" alt="Project delivery day with Herna Verhagen (PostNL CEO)" ></amp-img>

PostNL project delivery day with Herna Verhagen (PostNL CEO)
</center>
