---
layout: project
type: work
noimage: '<i class="fa fa-globe fa-big12" aria-hidden="true"></i>'
image: ../../assets/images/roadrunner.jpg
title: UWB localization system
github: https://github.com/AlexisTM/MultilaterationTDOA
description: Development of a TDoA localization algorithm for the bitcraze roadrunner.
---

This work is a combination of three projects.

- [roadrunner_mavlink](https://github.com/AlexisTM/roadrunner_mavlink) - The MAVLink middleware serial protocol
- [Crazflie Firmware](https://github.com/AlexisTM/crazyflie-firmware) - The Crazyflie/Roadrunner firmware
- [MultilatirationTDoA](https://github.com/AlexisTM/roadrunner_mavlink) - The TDoA localization Python library

The roadrunner is using the Decawave DWM1000 chip to send/receive UWB packets. It implements TDoA communication by having the anchors sending continuous data (200 msg/seconds in total for all anchors). The roadrunner (tag) is only listening to produce TDoA measurements between pairs of anchors. The roadrunner encodes it using MAVLink and forwards the TDoA measurements and IMU data from the roadrunner through the serial (roadrunner_mavlink).

The data is received and decoded by the roadrunner_mavlink library and is then given to the MultilaterationTDoA library. The algorithm is simply optimizing the (x,y,z) position via the jacobians of the measurement using Numpy.

The closed source version adds a version for multiple receivers and the optimization problem formulated with [X,Y,Z,Theta].

In production, this is used with 8 unique pairs of anchors and achieves 15Hz for every robots.

<center>
<amp-img height="434" width="608" src="../../assets/images/roadrunner.jpg" layout="responsive" alt="5G bus web interface" ></amp-img>

The roadrunner
</center>
