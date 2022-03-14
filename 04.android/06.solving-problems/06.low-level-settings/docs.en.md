---
title: 'Low-level Settings guide'
taxonomy:
    category:
        - docs
visible: true
---

## How to reach the Low-level settings
 
> Changing *Low-level settings* can cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. You should only open this section if you are sure of what you are doing or our support-team has asked you about it.  
 
To go to *Low-level settings*, open the main menu, tap *Settings*, choose *Advanced* and find *Low-Level Settings* at the bottom of the screen.  
 
## Low-level settings
 
`pref.boot.startup.delay`

Here you can set AdGuard’s startup delay after device boot-up (in seconds). This setting is only relevant if AdGuard autostart is enabled (Settings —> General —> AdGuard autostart).
 
`pref.dns.blocking.type`

Here you can select the way AdGuard will respond to blocked DNS queries:

0 — means block requests with *Refused* response code for *Network filtering rules* and with *Unspecified IP* for *Host rules*.
1 — means block requests with *NXDomain* for all kinds of filtering rules.
2 — means block requests with *Unspecified IP* for all kinds of filtering rules.
3 — means block requests with *Unspecified IP* for all kinds of filtering rules.
4 — means block requests with *Refused* response code for all kinds of filtering rules.
 
1 is used by default if the entered value is not valid.
 
`pref.dns.bootstrap`

Bootstrap DNS for DoH, DoT, and DoQ servers. The System DNS server is used by default.
 
`pref.dns.detect.search.domains`

If enabled AdGuard detects search domains and automatically forwards them to the fallback upstreams if they exist. 
 
`pref.dns.fallback`

Here you can specify a fallback DNS resolver that will be used when the configured server is not available. If not specified, the system default DNS is used as a fallback. A string “none” means no fallback at all.
 

`pref.dns.fallback.domains`

Here you can list domains that will be directly forwarded to the fallback upstreams (if they exist).
 
`pref.dns.timeout`

Here you can specify a timeout in milliseconds to be used for each DNS request. Please note that if you are using multiple upstreams, the fallback DNS resolver will only be used after all the timeouts of each upstream. 
 
`pref.enforce.https.filtering`

Here are already listed package names of apps for which AdGuard enforces HTTPS filtering. You can add this list with any app even if it targets Android 7+. But before check if the application trusts the AdGuard’s HTTPS certificate, which is located in the User storage, or the developers have not provided such an option.  
 
`pref.enforce.paused.notification`

Enforce notification about paused protection even when the notification icon is set to Disabled (for Android below Oreo).
 
`pref.excluded.packages`

Here you can list the packages and UIDs you want to exclude from filtering.
 
`pref.filtered.ports`

Here you can list the ports connections to which will be filtered.
 
`pref.har.capture`

Here you can enable HAR file capture. Use it only for debugging purposes! If the setting is enabled, AdGuard will create a directory named “har” inside the app cache directory. It contains information about all filtered HTTP requests in HAR 1.2 format and can be analyzed with the Fiddler program.
 
`pref.https.ignored.errors`

For the domains and package names listed here, notifications that they do not trust AdGuard's HTTPS certificate will be disabled.
 
`pref.https.opportunistic`

If enabled, AdGuard will bypass the traffic of any app that does not trust our certificate. It is enabled by default.
 
`pref.ipv4.routs.excluded`

Here you can find the list of IPv4 ranges excluded from filtering. For instance, we don’t filter connections to the private IP ranges. You can add this list if required.
 
`pref.ipv6.routs.excluded`

Here you can list the IPv6 ranges which you want to exclude from filtering.
 
`pref.notify.on.unknown.ca`

If enabled, AdGuard shows you a notification if any app doesn’t trust our HTTPS certificate.
 
`pref.proxy.block.ipv6`

If enabled, AdGuard blocks all Internet connections through IPv6 when working in “Proxy with automatic setup” mode.
 
`pref.proxy.disable.reconfigure`

Here you can disable AdGuard automatic root proxy reconfiguration when network connectivity changes.
 
`pref.quic.bypass.packages`

Here you can list packages for which AdGuard will bypass QUIC traffic.
 
`pref.removed.html.log`

If enabled, AdGuard shows information about blocked HTML elements in the filtering log.
 
`pref.root.clear.youtube`

If enabled, AdGuard clears YouTube app data on booting to block YouTube ads. Root access is required.
 
`pref.root.set.oom_adj`

If enabled, AdGuard sets the `minimum oom_score_adj` for its own process to stay alive all the time. Requires root access.
 
`pref.samsungpay.autopause.enable`

If enabled, AdGuard pauses protection when you open the Samsung Pay app. Requires usage access.
 
`pref.vpn.android10.mitigate`

If enabled, AdGuard applies a workaround solution that mitigates the soft reboots issue caused by an Android 10 bug.
 
`pref.vpn.capture`

If enabled, AdGuard will create the special file name “tun.pcap”. It contains all network packets transferred through the VPN. This file is located in the app cache directory and can be analyzed with the Wireshark program.
 
`pref.vpn.disable.pause`

This feature disables automatic VPN pause in case of network absence, tethering, or power-saving mode.
 
`pref.vpn.disable.reconfigure`

This feature disables VPN automatic reconfiguration in case of network absence, tethering, or power-saving mode.

`pref.vpn.ipv4.address`

TUN interface IPv4 address.
 
`pref.vpn.ipv4.bypass`

If enabled, VPN will be configured to bypass all the IPv4 traffic. In this case, IPv4 will work, but it will not be filtered.
 
`pref.vpn.ipv4.force.complex`

If enabled, VPN will bypass the LAN when possible. However, for complex networks, the LAN is not excluded and connections will be filtered, including local ones.
 
`pref.vpn.ipv4.force.default`

This feature disables the routes we use to exclude LAN from filtering.
 
`pref.vpn.ipv6.address`

TUN interface IPv6 address.
 
`pref.vpn.ipv6.bypass`

If enabled, VPN will be configured to bypass all the IPv6 traffic. In this case, IPv6 will work, but it will not be filtered.
 
`pref.vpn.ipv6.disable`

This feature forcibly disables filtering for IPv6 networks. In this case, IPv6 will not work at all.
 
`pref.vpn.ipv6.force`

This feature forcibly enables filtering for IPv6 networks. The app doesn’t filter IPv6 on Lollipop and some cell carriers by default.
 
`pref.vpn.tun.mtu`

Here you can set the maximum transmission unit (MTU) of the VPN interface. The recommended interval for the experiments is from 1500 to 9000.
 
`Reset`

You always can reset Low-level settings to default.
