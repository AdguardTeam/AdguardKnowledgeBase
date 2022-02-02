---
title: 'Advanced Settings guide'
taxonomy:
    category:
        - docs
visible: true
---

## How to reach the Advanced settings

> Changing *Low-level settings* can cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. You should only open this section if you are sure of what you are doing or our support-team has asked you about it.  

To go to *Advanced settings*, follow this route: the AdGuard icon at the tray menu → the gear icon → Advanced → Advanced settings.

## Advanced settings

`network.extension.exclude.domains` 

The listed domains will be excluded from filtering in *Network Extension* mode. Use a comma or line break to separate values. 

`network.extension.exclude.ports`

The listed ports will be excluded from filtering in *Network Extension* mode. Use a comma or line break to separate values.

`network.extension.route.exclude` 

The listed routes will be excluded from filtering in *Network Extension* mode. Set routes using an IP address or destination CIDR. Separate values with commas or line breaks. 

`network.extension.http.downgrade.bundleids`

Here you can specify a list of applications for which the HTTP/2 protocol will be downgraded to HTTP/1.1 in the *Network Extension* filtering mode. The bundle ID should be separated by a comma or a line break.

`network.extension.monterey.force.split.tunnel` 

Here you can prohibit AdGuard from using the "default route" which is enabled by default in *Network Extension* mode on macOS Monterey. AdGuard uses "default route" to disable iCloud Private Relay and Protect Mail Activity, because it cannot work with them simultaneously. 

You will find more information about the problem [in this article](https://kb.adguard.com/en/macos/solving-problems/icloud-private-relay). 

`network.extension.dns.redirect.exclude.bundleids` 

Here you can specify a list of applications that make DNS queries directly not via system DNS resolver (for example, some VPN clients or DNS filtering applications). DNS filtering will be disabled for them in the *Network Extension mode*. The bundle IDs should be separated by a comma or line break.

`network.https.ocsp.check` 

By setting `true`, you enable HTTPS certificate revocation checking.

`network.filtering.localnetwork` 

By setting `true`, you enable local network filtering. 

`network.filtering.localhost` 

By setting `true`, you enable LoopBack filtering. 

`upstream.proxy` 

In this string, you can specify a proxy server for upstream connections.

`upstream.proxy.socks5udp` 

By setting `true`, you enable redirection of UDP traffic through the local server in SOCKS5 mode. Note: If your SOCKS5 server does not support the UDP protocol, enabling this setting will cause your Internet connection to fail.

`dns.proxy.bootstrap.ips`

Here you can enter the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server.

`dns.proxy.fallback.ips`

Here you can specify a list of IP addresses of DNS servers that will be used as backups in case the encrypted DNS server fails to respond. 

`dns.proxy.detect.search.domains`

This option enables automatic detection of the local network domain, which will be automatically redirected to the fallback DNS server instead of the main DNS server.  

`dns.proxy.fallback.domains`

Here you can list domains for which the fallback DNS server will be used instead of the main DNS server.  

`dns.proxy.adblockrules.blocking.mode`

Here you can specify the type of DNS server response to blocked requests, corresponding to ad-blocker-style rules. 

0 — respond with REFUSED
1 — respond with NXDOMAIN 
2 — respond with 0.0.0.0 or the addresses specified in `dns.proxy.blocking.response.IPv4.address` and/or `dns.proxy.blocking.response.IPv6.address`

`dns.proxy.hostrules.blocking.mode`

Here you can specify the type of DNS server response to blocked requests, corresponding to hosts rules:

0 - respond with REFUSED
1 - respond with NXDOMAIN 
2 - respond with 0.0.0.0 or the addresses specified in dns.proxy.blocking.response.IPv4.address and/or dns.proxy.blocking.response.IPv6.address

`dns.proxy.blocking.response.IPv4.address`

Here you can specify the IPv4 address that will be returned in response to blocked "A" requests when dns.proxy.adblockrules.blocking.mode or dns.proxy.hostrules.blocking.mode is set to  the response type "ADDRESS".

`dns.proxy.blocking.response.IPv6.address`

Here you can specify the IPv6 address that will be returned in response to blocked "AAAA" requests when `dns.proxy.adblockrules.blocking.mode` or `dns.proxy.hostrules.blocking.mode` is set to the response type "ADDRESS".

`dns.proxy.block.AAAA.requests`

Here you can enable IPv6 DNS query blocking.

`dns.proxy.blocked.response.TTL.in.seconds`

Here you can specify the TTL (time to live) value that will be returned in response to a blocked request.  

`subscription.link.interception.userscript`

Activate this feature if you want AdGuard to automatically intercept the URLs of userscripts and open the installation window.

`subscription.link.interception.filter`

Activate this feature if you want AdGuard to automatically intercept subscription URLs (for example, abp:subscribe, etc.) and open the custom filter setup window.
