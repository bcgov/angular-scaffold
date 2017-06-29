# OpenShift and Jenkins Integration
This documentation provides you with step by step instructions on how to build and deploy this 
application in an OpenShift 3.3+ and Jenkins 2.x+ environment.  Jenkins is not required and you could 
just use the built-in OpenShift triggers.

## Overview

This build strategy uses OpenShift's feature called [Extended Builds](https://docs.openshift.com/container-platform/3.3/dev_guide/builds.html#extended-builds).

In a nutshell, it allows you to build with one s2i image, i.e., NodeJS 6+, then use another image, i.e., nginx, for runtime.

The benefits are:

- Uses Nginx to serve static files (10x faster than NodeJS)
- Only build outputs are on runtime container (reduces security risk and container size)
- Uses `mainline` nginx to automatically keep up with patches
- (Optional) configure Nginx as a reverse proxy for REST APIs

Enhancements to base Nginx image are:

- security response HTTP headers
- throttling to reduce DDoS
- W3C standard logging formatting
- performance tuning
- uses X-Forwarded-For for client IP for better logging and access control.
- gzip enabled for better client performance
- Optional IP filtering for access control
- TODO: Optional HTTP Basic for access control 
