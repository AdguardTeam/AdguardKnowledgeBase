---
title: 'AdGuard Home overview'
taxonomy:
    category:
        - docs
---

*  [What is AdGuard Home](#whatis)
*  [Features](#features)
*  [How to install](#install)
*  [Comparison to other solutions](#compare)


<a id="whatis"></a>

## What is AdGuard Home?

AdGuard Home is a network-wide, [open source](https://github.com/adguardteam/adguardhome) software for blocking ads & tracking and for gaining control over all traffic in your home network. After you set it up, it'll cover ALL devices in your home Wi-Fi network, and you won't need any client-side software for that. At the same time, it provides a user-friendly web interface that allows you to easily manage the traffic, even from a mobile device.

<img src="https://cdn.adguard.com/public/Adguard/Blog/AGHome/dashboard.jpg" width="650" />

AdGuard Home operates as a DNS server that re-routes tracking domains to a "black hole", thus preventing your devices from connecting to those servers. It's based on software we use for our public [AdGuard DNS](https://adguard.com/adguard-dns/overview.html) servers — both share a lot of common code.


<a id="features"></a>

## Features

AdGuard Home is not just an ad blocker. It's a complex instrument which ultimate goal is to give you control over everything that happens in your home network. AdGuard Home has many different features, here we will cover only some of them.

### Ad- and tracker blocking

Despite AdGuard Home offers you much more than that, its main purpose is arguably blocking ads and trackers. It acts as a blocking DNS server, you can learn more about DNS blocking in this [Knowledge base article](https://kb.adguard.com/en/dns/overview#how-does-it-work). But unlike with AdGuard DNS, you can customize filtering as you prefer: add your own blocking lists, exclude or block certain domains and more. Query log will help you with that.

### Query log

It offers all kinds of information about DNS requests in your network that you might need. You can also use it for quick requests blocking and unblocking.

<img src="https://cdn.adguard.com/public/Adguard/Blog/AGHome/log.png" width="650" />

### Browsing security

Similar to browsing security in other AdGuard products, it blocks access to malicious, fraudulent and potentially virus-infected websites. Completely optional and up for you to enable it or not.

<img src="https://cdn.adguard.com/public/Adguard/Blog/AGHome/phishing.png" width="650" />


### Parental control and Safe search

Another optional mode. If enabled, it will block access to websites with adult and sensitive content and enforce safe search everywhere where it's possible.

<img src="https://cdn.adguard.com/public/Adguard/Blog/AGHome/parental.png" width="650" />


### Clients

AdGuard Home allows you to configure different rules and apply different settings for different devices in your network (clients). 

<img src="https://cdn.adguard.com/public/Adguard/Blog/AGHome/clients.png" width="550" />


Clients can be united in client groups. All of this offers a lot of flexibility: for instance, you might want your kids to use a DNS server with some additional protection.

### Blocking specific services

For each client, it's possible to block and unblock specific services (for example, Twitch, Snapchat, Facebook, etc.) in one click.

<img src="https://cdn.adguard.com/public/Adguard/Blog/AGHome/services.png" width="650" />


### Other features

There are numerous other features and settings to adjust that AdGuard Home offers you, but some of them require a certain level of technical literacy. You will find more information [on GitHub](https://github.com/adguardteam/adguardhome).


<a id="install"></a>

## How to install

AdGuard Home can be installed on any of the following operating systems:

* Raspberry Pi (32-bit ARMv6)
* MacOS
* Windows 64-bit
* Windows 32-bit
* Linux 64-bit
* Linux 32-bit
* FreeBSD 64-bit
* Linux 64-bit ARM
* Linux 32-bit ARMv5
* MIPS
* MIPSLE

A detailed installation guide can be found [here](https://github.com/AdguardTeam/AdGuardHome/wiki/Getting-Started). Starting the installation process of AdGuard Home requires minimal technical knowledge and familiarity with such concepts as command prompt. However, once you perform first few steps, you'll be met with a visual installation wizard.

<img src="https://cdn.adguard.com/public/Adguard/Blog/AGHome/wizard.png" width="650" />


AdGuard Home can also be installed on a [virtual private server](https://github.com/AdguardTeam/AdGuardHome/wiki/VPS), downloaded from [Snap Store](https://snapcraft.io/adguard-home) (for Linux users), or installed from a [Docker image](https://hub.docker.com/r/adguard/adguardhome).


<a  id="compare"></a>

## Comparison to other solutions

### Comparison to traditional ad blockers

AdGuard Home can't be compared directly to traditional ad blockers, as they have intersecting, but ultimately different purposes. Traditional ad blockers are [better at blocking ads and tracking](https://adguard.com/en/blog/adguard-vs-adaway-dns66/) on any one particular device, but AdGuard Home will give you a degree of control over your home network that no ad blocker can. It also can be used on devices like smart TVs where it's not always possible to install a full-fledged ad blocker. By the way, it is absolutely normal to use ad blockers on your home devices in addition to AdGuard Home.

### Comparison to public AdGuard DNS servers

Running your own AdGuard Home server allows you to do much more than using a public DNS server. With public DNS server you can only use it as it is; on the contrary, with AdGuard Home you can:

* Choose what exactly will the server block or not block.
* Monitor your network activity.
* Add your own custom filtering rules.
* Most importantly, this is your own server, and you are the only one who's in control.

### Comparison to Pi-Hole

At this point, AdGuard Home has a lot in common with Pi-Hole. Both block ads and trackers using "DNS sinkholing" method, and both allow customizing what's blocked.

However, AdGuard Home provides a lot of features out-of-the-box with no need to install and configure additional software. We want it to be simple to the point when even casual users can set it up with minimal effort. Differences between AdGuard Home and Pi-Hole can be summarized in this table:

| Feature                                                                 | AdGuard Home | Pi-Hole                                                |
|-------------------------------------------------------------------------|--------------|--------------------------------------------------------|
| Blocking ads and trackers                                               | ✅            | ✅                                                      |
| Customizing blocklists                                                  | ✅            | ✅                                                      |
| Built-in DHCP server                                                    | ✅            | ✅                                                      |
| HTTPS for the Admin interface                                           | ✅            | Kind of, but you'll need to manually configure lighthttpd |
| Encrypted DNS upstream servers (DNS-over-HTTPS, DNS-over-TLS, DNSCrypt) | ✅            | ❌ (requires additional software)                       |
| Cross-platform                                                          | ✅            | ❌ (not natively, only via Docker)                      |
| Running as a DNS-over-HTTPS or DNS-over-TLS server                      | ✅            | ❌ (requires additional software)                       |
| Blocking phishing and malware domains                                   | ✅            | ❌ (requires non-default blocklists)                    |
| Parental control (blocking adult domains)                               | ✅            | ❌                                                      |
| Force Safe search on search engines                                     | ✅            | ❌                                                      |
| Per-client (device) configuration                                       | ✅            | ✅                                                      |
| Access settings (choose who can use AGH DNS)                            | ✅            | ❌                                                      |