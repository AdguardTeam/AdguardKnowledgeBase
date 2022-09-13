---
title: 'Preventing Possible AdGuard DNS Leaks'
taxonomy:
    category:
        - docs
visible: true
---
AdGuard for Windows allows its users to assign a DNS server to resolve queries instead of system DNS addresses, which are provided by your ISP if not overridden in the system settings. Using a non-default DNS server can safeguard your DNS traffic from the ISP’s interception. Moreover, by choosing an encrypted and/or filtering DNS server, you get another layer of protection against bad actors and annoying ads.

Many AdGuard for Windows users appreciate the DNS protection feature. But some of them encounter the following issue: a check on a website like https://ipleak.net/ shows that requests are handled by default DNS server instead of the selected one. In this article we will tell you why this happens and how to avoid it.

## Bootstrap DNS address

The DNS server addresses could be written as IPs or as domain names. 
In the case of IP addresses there are no difficulties: AdGuard forwards the DNS request directly to the server specified in the DNS protection module. However, encrypted DNS server addresses, like DoT or DoH, are most often written as domain names. In this case, to first resolve the encrypted DNS server address, AdGuard sends a DNS query to the bootstrap address, which is by default a system DNS server. This connection is what check services perceive as a leak.

**To eliminate this leak:**

* go to the *Advanced settings* 
* scroll down to the *List of custom bootstrap addresses* section
* enter the custom bootstrap address in IP address format (you may use [the list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers))
* click *Save*

## Fallback DNS server

It could happen that AdGuard cannot reach the specified server because of a weak internet connection, an expiration of timeout set by default or some server related issues. In this case, it will connect to the fallback server, which is by default a system DNS server. This connection will also be considered by the check service as a leak. 

**To eliminate this leak:**

* go to the *Advanced settings* 
* scroll down to the *Fallback servers* section
* check the *Don’t use fallback servers* option

or

* go to the *Advanced settings* 
* scroll down to the *DNS server timeout period* section
* enter an arbitrary large number 

