---
layout: project
type: work
noimage: '<i class="fa fa-car fa-big12" aria-hidden="true"></i>'
image: ../../assets/images/bosch/indego-stock.jpg
title: Indego robot
github: https://www.bosch.com/
description: Development of the next-gen Indego robot for Robert Bosch GmbH
---

After the Acquisition of The Kobi Company by Robert Bosch I have been working on the Autonomous mower project called Indego.

While the Indego is a robot based on a wire around the garden, this development has been to allow using Computer Vision in order to remove the need to set up wire and damage your garden in the process.

The project went from baremetal embedded C to C++ on Linux with ROS 2 thus required heavy refactors in order to mordernize the codebase and allow new features to be implemented successfully.

We took this opportunity for code sanitization with UBSAN/ASAN and setup a CI to track code quality. 

My responsability on the project has been Principal Robotics Engineer:
- Implement major features
- Convert the (1MLOC) embedded C project into a C++ project
- Sanitize the code (ASAN & UBSAN)
- Enable ROS2 developments
- Integrate the different systems (cloud, vision, safety, control)
- Train the existing team for C++ & ROS2
- Setup the development environment (CI, ROS2, dependencies)

<center>
<amp-img width="864" height="486" src="../../assets/images/bosch/indego-stock.jpg" layout="responsive" alt="A real cute indego robot"></amp-img>
</center>
