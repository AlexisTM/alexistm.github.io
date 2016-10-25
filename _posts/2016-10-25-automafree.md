---
layout: project
type: standby
noimage: '<i class="fa fa-home fa-big12" aria-hidden="true"></i>'
image: 
title: Automafree
github: https://github.com/AlexisTM/Automafree
description: Automafree aims to <strong>control a house</strong>. It is a free open-source framework workin on a RaspberryPi/Odroid (later any ARM or linux) and one microcontroler (Arduino in first).
---

Automafree is an open-source home automation working on the Arduino (any ATMEL) and a Raspberry PI (any ARM). 

## Introduction 
The idea behind AutomaFree is to make a *cheap*, *open-source*, *easy to use* home automation service.

## Architecture
* The Arduino reads the I/O.
* The Raspberry host one local web-server for the local users.
* The Raspberry host one I/O server that manage history, call the Arduino, and send data accros the web via SSL
* The web server is pretty much the same as the local web server. 

The I/O server sends data to the web server every hour and read values every 10 minutes by default OR by change (temperature or button or door status) or when the web-server ask for it. 

The pins of the Arduino are rebindable and the logic is a pseudo code. So you create if you 
have a module with the pin "5" that reads a potentiometer value, then, you choose the module _potentiometer_, 
select the pin 5 that store value every 5 minuts, revise the pseudo code wich would be _value/10,23_ to ensure we got a percent value. 
The we should be able to create specific actions if something happens on a second module (could be a button).

We should be able to choose when we read and when we store. We could want to have the mean, so the mean every hour, while reading the data every 10 minuts.

## Credits
Alexis Paques