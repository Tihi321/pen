---
title: TS Udp discovery
date: 2021-02-23
tags: ["typescript", "node"]
excerpt: Ts Udp Discovery is module that provides discovery services using UDP multicast. It implements the zero-configuration UDP multicast discovery.
featured: false
publish: true
---

In this article i would like to present a library that can help you connect multiple computers on the same network without knowing their ip-s. Ts Udp Discovery is module that provides discovery services using UDP multicast. It implements the zero-configuration UDP multicast discovery and works only between nodes on the same subnet as typically, broadcast packets don't route.

It is written in typescript, fully tested. It is available as npm package and can be installed with

```bash
yarn add ts-udp-discovery
```

You can use it by sending messages from one computer, and subscribing/lisnenintg on others.

```javascript
import { TSUDPDiscovery } from "ts-udp-discovery";

const service = {
 port: 80,
 proto: "tcp",
 annInterval: 1000,
 addrFamily: "IPv4",
 data: {
   name: "Edmond",
   day: 2233,
   week: ["monday", "tuesday", "wednesday", "thursday", "friday"],
 },
};

const discovery = new TSUDPDiscovery({ port, timeOutIntervalTime: interval });

discovery.announce(name, serv, interval, available);

discovery.on('MessageBus', function(event, data) {
 ...
});
```

```javascript
discovery.on('available', function(name, data, reason) {
 var obj = {a: 1, b: '2', c: true, d: {e: 333}};
 discovery.sendEvent('Hello', obj);
});

discover.on('unavailable', function(name, data, reason) {
 ...
});
```

<br />

### Options

- **port**: number - The port to listen upon for service announcements. Default: 44201.
- **timeOutIntervalTime**: number - Duration of time between timeout checks in ms. Default 1000.
- **bindAddress**: string - The address to bind to. Default: listens to all interfaces.
- **type**: string - Either 'udp4' or 'udp6'. Default: 'udp4'.

### Methods

**announce(name, userData, [,interval][,available])**

Starts announcing the service at the specified interval. The parameter, serviceObject, is an object describing the service that udp-discoveryy announces.

- **name**: string - The name of the service being announced. It must be unique, or it will collide with another.
- **interval**: number - (optional) The duration between announcements in milliseconds.
- **userData**: any - Any data that can be serialized into JSON.
- **available**: boolean - Optional parameter to set availability of the service. If not specified, the default is 'true', meaning available.

Any property with a default can be left out and the code supplies the default value. The name and data are required.

**pause(name)**

- **name**: string - The name of the service.

Returns true if successful, false otherwise.
Halts announcements.

**resume(name, [,interval])**

- **name**: string - The name of the service being announced.
- **interval**: number - (optional) The duration between announcements in milliseconds.

Returns true if successful, false otherwise.
Resumes the announcements at the time interval.

**getData(name)**

- **name**: string - The name of the service being announced.
  Returns the service object, which can be modified. For example, if you need to alter the userData, you can. You cannot, however, alter the name (it's a constant property).

**update(name, userData [,interval][,available])**

- **name**: string - The name of the service being announced. It must be unique, or it will collide with another.
- **userData**: any - Any data that can be serialized into JSON.
- **interval**: number - (optional) The duration between announcements in milliseconds.
- **available**: boolean - Optional parameter to set availability of the service. If not specified, the default is 'true', meaning available.
