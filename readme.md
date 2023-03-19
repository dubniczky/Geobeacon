# Geo Beacon

A global IP beacon and resolver server project with common file types

## How it works

The " watchtower " server is the central command center hosted on some platform with a publicly accessible IP or domain address. Specially crafted documents can then be generated and sent to targets. These documents, upon being opened, will ping back to the watchtower.

The source IP addresses of these pings are logged and can attempt to resolve some approximate location based on IP information.

## Purpose

This project is an example deanonymization method useful for retrieving the real IP and geographic location data on a user of for example a Tor network. Tor network is usually accessed with the Tor browser, so if the target downloads a file and opens it, the response will travel the open internet.

## Usage

Host the server on some public network and make note of the IP address (or domain)

```
make server
```

Create a beacon payload with any of the supported generators. You'll find more info in the [Makefile](Makefile)

These will generate a single output file in the `dist/` directory

> TIP: since any file name will return the same image, try to generate something unique for all beacons, for example: `http://mypublicip/images/03D51E04-EE42-4847-B163-11539D6725D9.jpg`

Share the beacon file with the target by any method deemed appropriate and wait for the ping.
