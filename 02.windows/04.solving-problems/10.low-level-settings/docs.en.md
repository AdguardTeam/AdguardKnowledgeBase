---
title: 'Low-level Settings guide'
taxonomy:
    category:
        - docs
visible: true
---

## How to reach the Low-level settings
 
> Changing *Low-level settings* can cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. You should only open this section if you are sure of what you are doing or our support-team has asked you about it.  
 
To go to *Low-level settings*, click *Settings* —> *General settings* —> *Advanced settings* and scroll down. 

## Low-level settings

`Block Teredo when the WFP driver is selected`

If you enable this feature, AdGuard will block Teredo when the WFP driver is selected. 

`Block TCP Fast Open`

If enabled, AdGuard will block TCP Fast Open in the Edge browser. To apply settings, you need to restart the browser. 

`Exclude app from filtering by entering the full path`

If you want AdGuard not to filter any application, specify the full path to it and the app will be excluded from filtering. Separate different paths by semicolons. 

`Enable AdGuard pop-up notifications`

Enable this feature to see AdGuard pop-up notifications. They do not appear too often and contain only important information.

`Automatically intercept filter subscription URLs`

Enable this feature if you want AdGuard to automatically intercept filter subscription URLs (i.e. `abp:subscribe` and alike) and to open a custom filter installation dialog.
 
`Use redirect driver mode`

If this option is enabled, AdGuard intercepts all the traffic and redirects it to the local proxy server for further filtering. 

Otherwise, AdGuard will filter all the traffic on the fly, without redirection. In this case, the system will consider AdGuard to be the sole application that connects to the Internet (other applications are routed through it). The downside is that it will make the system Firewall less effective. The upside is that this approach works a little bit faster.

`Open main window at system start-up`

Enable this option to make the main AdGuard window open after the system is loaded. 

`Filter localhost`

If you want AdGuard to filter loopback connections, check the box. 

`Enable HAR writing`

This option should be enabled only for debugging purposes. If you tick the checkmark, AdGuard will create a file that contains information about all filtered HTTP requests in HAR 1.2 format. This file can be analyzed with the Fiddler app. Note that it may slow down your web browsing significantly.

`Show QUIC`

Allows displaying the QUIC protocol records in the filtering log. For blocked requests only. 

`Block Java`

Some websites and web services still support Java Plug-Ins. The API, which is the basis of Java plug-ins, has serious security vulnerabilities. You can disable such plug-ins for security purposes. Nevertheless, even if you decide to use *Block Java* option, Javascript will still be enabled. 

`Action applied to blocked DNS requests`

Here you can select the way AdGuard will respond to DNS queries that should be blocked:

* Reply with “Refused” error  
* Reply with “NxDomain” error
* Reply with “Custom IP address”

`Custom IPv4 address`

If “Custom IP address” is selected as an action applied to blocked DNS requests, here you should specify the IPv4 address that will be returned in response to blocked “A” requests. 

`Custom IPv6 address`

If “Custom IP address” is selected as an action applied to blocked DNS requests, here you should specify the IPv6 address that will be returned in response to blocked “AAAA” requests. 

`Fallback servers`

Here you can specify an alternate server to which a request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from: 

* Don’t use fallback servers;
* Use system default servers;
* Use custom servers.

`DNS server timeout period`

In this block, you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used. 

`List of custom fallback servers`

If you want AdGuard to use custom fallback servers, list them in this section, one per line.  

`List of custom bootstrap addresses`

If you don't want to use the system DNS resolver as a bootstrap, enter here IP addresses of the DNS servers that are used to determine the address of the encrypted DNS servers. The specified IP addresses will be applied in the order listed. If you specify invalid addresses, or no addresses at all, the system IPs will be used. 

`DNS exclusions` 

All DNS requests to domains listed here will be redirected to the system default DNS server instead of the DNS server specified in the app’s settings. Also, DNS blocking rules will not be applied to such requests. 
