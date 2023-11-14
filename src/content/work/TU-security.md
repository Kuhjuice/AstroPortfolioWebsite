---
title: Security Breach - TU Berlin
publishDate: 2023-11-13 00:00:00
img: /assets/security_breach.jpg
img_alt: A official letter from the TU Berlin with some lens blur and noise
description: |
  A technical report uncovering and addressing a security flaw in the room reservation system at Technische Universität Berlin, leading to enhanced system security post-resolution.
tags:
  - Dev
  - Cybersecurity
---
### Introduction

I recently discovered a security breach in the room reservation software used by the Technische Universität Berlin, specifically within their library system. This flaw allowed for unlimited booking durations, deletion of other people's bookings, and, most alarmingly, access to personal data from those reservations.

### Identifying the Issue

Through a detailed examination and testing, I was able to exploit the system flaw which let me manipulate the reservation system extensively. Core of the problem was the API, better said the missing authentication.

### Reporting and Resolution

A comprehensive 12-page report, accompanied by proof of concept Python scripts, was prepared and submitted to the university officials. In response, they promptly took down the system to prevent any misuse. After a period of review a different reservation system is now back online with significant improvements in security and functionality.

![Table of Contents](/assets/security_toc.jpg)

*The table of contents from the report submitted to the university outlining the security breach and proposed solutions.*

### Reflections and Conclusions

This experience has highlighted the importance of diligent security practices and the potential risks of overlooked vulnerabilities. It also serves as a reminder of the ethical responsibilities that come with the discovery of such flaws.

### Acknowledgements

I extend my gratitude to the Technische Universität Berlin for their swift action and commitment to protecting user data and privacy.

### Further Reading

For those interested in the technical aspects of the breach and the resolution process, the full report is available upon request.
