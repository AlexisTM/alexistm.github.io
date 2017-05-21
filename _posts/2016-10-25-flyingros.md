---
layout: project
type: released
noimage: '<i class="fa fa-paper-plane-o fa-big12" aria-hidden="true"></i>'
image: 
title: FlyingROS
github: https://github.com/AlexisTM/flyingros/
description: FlyingROS is <strong>ROS</strong> showing you how to make <strong>multicopter</strong> applications. It uses <i>open-source and open-hardware</i> solutions and give you all the steps and examples to make you own application. 
---

FlyingROS [![Build Status](https://api.travis-ci.org/AlexisTM/flyingros.svg?branch=master)](https://travis-ci.org/AlexisTM/flyingros)
==============

Around the Internet of robotics, there is a lot of open-source/open-hardware projects to make an awesome flying robot : **ROS**, **MAVLink**, **PX4**, **Mavros**, **Odroid XU4**. Multiple companies uses thoses projects to make money without contributing to the community. That's why FlyingROS comes to life. To bring user an ***easy*** way to fly multicopters with all tools incorporated together.

Flying Robot Operating System is designed to be the main **OPEN-SOURCE** package for your multicopter consumer application or closed-source commercial application.

The way the packages are organized are available in the [Project architecture](PROJECT_ARCHITECTURE.MD) file.

Actual status
------------

Due to time restriction, the project is not plug'n'play. Therefore, what you can expect from the project?

* An architecture to follow to create your own package
* Every part of the software is explained
* Explainations on [almost] every "cheap" localisation system you need/want to use
* Many tutorials
* A [great testing node](https://github.com/AlexisTM/flyingros/blob/master/flyingros_nav/nodes/control_thread.py) in Python


Hardware
------------

* PixHawk (200$)
* Odroid XU4 (79$ naked)
* WiFi antenna (connect to external hotspot) or Modem (create an AP)
* The localisation system you want (see the [flyingros_pose package](flyingros_pose))

Software used
-----------

* ROS
* PX4
* MAVLink
* Mavros

Available 
---------

* flyingros_lib : 
 	* tasks.py, task handling for the drone
* flyingros_nav : 
	* nodes/task_node : Interface to tasks.py
	* nodes/control_thread : Test flight the drone
* flyingros_pose : 
	* All the informations about MSF, and available data you can use to get indoor positionning
* flyingros_web : 
 	* Web interface to manage tasks

Goals
------------

Actual goals:

* Indoor Navigation (Pozyx -Decawave-, Camera, Fixed lasers)
* Outdoor Navigation (Camera, RTK-GPS)
* Payloads (different PID configurations depending on the weigth of the multicopter, what it lifts)

Future goals:

* Object tracking 
* SLAM
* Simulation
