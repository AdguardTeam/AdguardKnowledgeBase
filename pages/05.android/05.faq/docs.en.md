---
title: FAQ
taxonomy:
    category:
        - docs
---

* [What is AdGuard?](#wtf)

* [How does AdGuard protection work?](#howitworks)

* [Do I need the ROOT access?](#root)

* [How to manually configure a local HTTP proxy?](#http)

* [How to use a third-party VPN along with AdGuard?](#vpn)

* [What restrictions does a VPN mode have?](#restrictions)

* [When asked to enable VPN, I cannot tick the "I trust" checkbox. Why?](#trust)

* [Why do I get a "VPN is not supported" dialog message?](#supp)

* [Why do Android stats show that AdGuard consumed more traffic than it saved?](#traf)

* [Why Wi-Fi and USB tethering do not work with AdGuard?](#usb)

* [Which browsers are not supported by AdGuard?](#browsers)

* [Why a VPN can not be started on Android 5.0?](#a5)

* [How to resolve known compatibility issues with other apps?](#apps)

* [Why is the firewall's function partial and the data stats not that accurate in proxy mode?](#prxy)

* [Then, the proxy mode is bad?](#badproxy)

* [Why are some apps excluded?](#excluded)

* [How does DNS filtering work?](#DNS)

* [How does HTTPS filtering work?](#https)

* [All right, how can I enable it?](#how)

* [How to remove a certificate from the system?](#remove)

* [What is the difference between AdGuard filtering methods?](#methods)



<a id="wtf"></a>
## What is AdGuard? ##

AdGuard is a remarkable internet filter that protects you from annoying advertising, malicious and phishing websites, online tracking and much more. AdGuard handles all types of Internet ads, speeds up page loading, saves bandwidth and increases your device protection against possible threats.

AdGuard uses a unique technology that allows filtering the traffic on your device without ROOT privileges. Filtering speed does not depend on the work of VPN server, as it is embedded right in your device.

<a id="howitworks"></a>

## How does AdGuard protection work? ##

AdGuard filters your browser traffic by blocking requests to phishing and malicious websites and removing intrusive browser advertising. AdGuard can use two modes of traffic filtering.

1. Local VPN mode. 

2. Local HTTP proxy mode.


### Local VPN mode ###

If you are using this mode, AdGuard does not need ROOT privileges to carry out filtering. At the same time, a VPN-server is located on your device, so that there is no need to pass your traffic through a remote server in order to filter it.

### Local HTTP proxy mode ###

In this mode AdGuard launches a local HTTP proxy server on your device. This mode is recommended, if you use a rooted device. Otherwise, manual adjustment of an HTTP proxy will be needed to use this mode, the filtering in mobile networks (Edge/3G/4G) will also be impossible.


<a id="root"></a>
## Do I need the ROOT access? ##

Unlike most applications that are engaged in traffic filtering, AdGuard does not require ROOT access to your device. In local VPN server mode AdGuard, will filter all your traffic and ROOT access is not needed.


<a id="http"></a>

## How to manually configure a local HTTP proxy? ##

If your device does not support automatic proxy configuration, then you can configure a proxy server manually, using the instructions below:

In the AdGuard Settings select *Local HTTP Proxy* mode and Proxy setup mode — *Manual*.

Go to your phone settings and choose Wi-Fi. A list of wireless networks will be opened.

If the device is not yet connected, connect to the Wi-Fi network that you need. Open the network setting by pressing the line with this network. The following menu of the selected Wi-Fi network will appear.

Select *Modify network*. In the new window select *Show advanced options*.

In *Proxy* select *Manual*.

Enter *127.0.0.1* in Proxy hostname and enter the port that is showed in proxy settings in AdGuard application itself (port *8080* is used in AdGuard setting by default).


A proxy server has been set up. Now all Wi-Fi traffic will be filtered by AdGuard.


<a id="vpn"></a>

## How to use a third-party VPN along with AdGuard? ##

If you are already using a VPN for other purposes, then in order for AdGuard filtering to work, you can change it to the *HTTP proxy server mode*. The filtering mode can be changed in the *Advanced Settings*.

In this mode, there are two ways to set up a proxy: *automatic* and *manual*.

### Automatic mode ###

In the automatic mode, enabling of filtering does not require any action from you. Filtering will work in both mobile and Wi-Fi networks. The problem is that the automatic mode can be operated only on rooted devices.


### Manual mode ###

This approach may not work in some situations. It depends on your firmware and the actual VPN app. In some cases traffic bypasses a manually configured proxy.

In the manual mode, filtering will only work in Wi-Fi networks. You will have to manually configure the use of a proxy server for each Wi-Fi network.



<a id="restrictions"></a>
## What restrictions does a VPN mode have? ##

AdGuard filters traffic using a local VPN-server by default. In this mode there are some restrictions.

* In a local VPN mode AdGuard won't be run automatically after turning on the phone, because this capability is blocked by the Android OS.

* Cannot be used along with other VPN applications.

<a id="trust"></a>

## When asked to enable VPN, I cannot tick the "I trust" checkbox. Why? ##

If you are using an application that enhances your display (for example, Night Mode or Twilight), you need to temporarily disable that application. Android prevents your selection for security reasons.

<a id="supp"></a>
## Why do I get a "VPN is not supported" dialog message? ##


This dialog appears when AdGuard fails to create a VPN connection on the device. So far, we've identified the following situations where this can happen.

**1. Custom firmware**

You're using custom firmware that is missing a tun.ko kernel module needed for proper VPN support on Android.


**2. Wrong firmware configuration**

The firmware on the device has not been configured correctly. If the manufacturer is aware of the problem, the issue may fixed in future firmware updates.


### Restore VPN support ###

If you have ROOT access you can restore the VPN module (tun.ko) using a special app **tun.ko installer**.


### Switch the filtering mode ###

You can switch to the *Local HTTP Proxy* filtering mode in AdGuard's extended settings.



<a id="traf"></a>
## Why do Android stats show that AdGuard consumed more traffic than it saved? ##


On Android's Data usage page or in your favorite data-traffic tracking app, you might see an indication that AdGuard has consumed all or most of your mobile traffic. Make no mistake - it's your apps and not AdGuard that consumed the data in question. There is a known issue with Android when VPN or a proxy is established, with all traffic from all apps being assigned to AdGuard.

We hope that this clarifies what's happening.

<a id="usb"></a>
## Why Wi-Fi and USB tethering do not work with AdGuard? ##

Android does not allow tethered connections to route through the VPN. This is an Android rule that applies to all VPN apps running on non-rooted devices. This is done for security, out of concern that if a malicious individual was able to get access to your tether, they could piggyback onto the VPN connection.

**Solutions**

1. Disable AdGuard when you want to use tethering.

2. If you have ROOT access, you may switch to the proxy filtering mode instead of using VPN. It may be done in AdGuard's extended settings.



<a id="browsers"></a>

## Which browsers are not supported by AdGuard? ##

In general, AdGuard does not support browsers with traffic compression option. The only browser supported is **Google Chrome**. We can filter its traffic even if traffic compression is on.

**Opera**

AdGuard can filter the Opera browser, if you don't use the **Off-Road** mode. Otherwise the traffic is compressed, so we cannot filter it.


**Opera Mini**

The Opera Mini browser always compresses the traffic so AdGuard cannot filter it.



**UC Browser**

AdGuard can filter the UC Browser, if **Speed Mode** or **Cloud Acceleration** is disabled. Otherwise some of the traffic is compressed and encrypted so we cannot filter it.



**Puffin Browser**

The Puffin browser always compresses the traffic so AdGuard cannot filter it.


<a id="a5"></a>
## Why a VPN can not be started on Android 5.0? ##

There are two known bugs of Android 5.0 which may break a VPN start-up. The only solution is to reboot your device.


<a id="apps"></a>
## How to resolve known compatibility issues with other apps? ##

This section names third-party apps which are known to be incompatible to some degree with AdGuard. In some cases, either AdGuard or the conflicting app can be configured in some way to resolve the incompatibility.


### Orbot: Proxy with Tor ###

**Problem:** *Orbot: Proxy with Tor* is a VPN app and you cannot have two active VPNs at the same time.


**Solution: **setup AdGuard to use Orbot as an outbound proxy. 

1. Run Orbot. 

2. Open AdGuard, go to Settings - Advanced
 
3. Open Proxy settings
 
4. Use the following settings:

Proxy type SOCKS4, host: 127.0.0.1, port: 9050. 

5. Run AdGuard protection.


### VPN by Private Internet Access ###


**Problem:** VPN by Private Internet Access is a VPN app and you cannot have two active VPNs at the same time.

**Solution: **

1. Ensure that AdGuard protection is started before DroidWall. 

2. Allow AdGuard in DroidWall settings.


### Opera Max ###


**Problem:** *Opera Max* is a VPN app and you cannot have two active VPNs at the same time.

**Solution:** (ROOT is required) switch filtering mode to *Local HTTP proxy* in advanced settings.


<a id="prxy"></a>
## Why is the firewall's function partial and the data stats not that accurate in proxy mode? ##


There are many types of data-traffic on the Internet: the Web, VoIP, Games, VPNs, UDP traffic (including DNS-requests) and so on. In the VPN mode, we control every packet of data that is coming from any app, but in the proxy mode we control only a subset of the traffic. Therefore, we can not guarantee full connection disabling for particular apps and the numbers that you see in AdGuards statistics in proxy mode may be inaccurate.

<a id="badproxy"></a>
## Then, the proxy mode is bad? ##

Not at all. If you don't care so much about the statistics and the UDP traffic you can use it without hesitation.

<a id="excluded"></a>
## Why are some apps excluded? ##

There are some cases in which some applications need very unconventional ways to communicate through the Internet, or the filtering procedure is breaking some app functionality. Therefore, some applications have to be excluded from filtering. We hope such measures are temporary as we are constantly improving our filtering and network algorithms.

<a id="DNS"></a>
## How does DNS filtering work? ##

AdGuard can filter domain resolution requests to the Domain Name System servers, handle them locally, and block requests to phishing, malicious, advertising and tracking systems on such domains.

Blocking is implemented by sending back a specially crafted response that redirects all traffic to local network interface (with 127.0.0.1 IP address).
Then the browser or app that intended to connect to such a domain will try to connect to a server on this particular device, and eventually get an error.


Q: If this seems like a best way to filter ads, why use something else?

A: Because there are many advertising systems that use the same domains for advertising and also some useful services. The DNS filtering can be used just to speed up overall filtering process and to save some battery juice.


Q: Why can't I use DNS-filtering with a Local HTTP proxy mode?

A: Because we need to filter all traffic (all network packets) sent from your device for DNS-filtering. Only VPN mode can accomplish such a thing.


<a id="https"></a>
## How does HTTPS filtering work? ##

**What is HTTPS?**

HTTPS is similar to HTTP (Hyper Text Transfer Protocol), but using an encryption protocol (called SSL/TLS), as indicated by the last letter S (Secure). This protocol is used for the transmission of sensitive information, such as MasterCard/Visa card numbers and personal data.


**Why should it be filtered?**

Now more and more websites, blogs, and social networks are switching to HTTPS. Then, following blogs and websites, more and more ad networks are switching to HTTPS as well, because it is necessary to display ads on the sites working over HTTPS.

The following are examples of popular websites, where ads cannot be removed without HTTPS filtering: youtube.com, facebook.com and twitter.com.

**How does the filtering of encrypted traffic work?**

If this was easy, HTTPS wouldn't be secure. In order to filter secure traffic, AdGuard will create two secure connections. One to a browser, or other application; and another to a server. It is important that in this case the browser "trusts" AdGuard and its created connection. For this purpose AdGuard generates and installs a special root certificate in the system and, if necessary, in certain browsers e.g. Firefox.


**Does my traffic stay secure and encrypted?**

Of course! Your connection to the remote server stays encrypted and secure. Just like a browser AdGuard checks the server certificate before starting to filter it.

By default, AdGuard doesn't filter websites of financial services and websites with important personal data.

There are two modes of HTTPS filtering:

Filter ONLY connections to domains on the blacklist.

Filter ALL connections EXCEPT those to domains on the whitelist. We have pre-added domains of financial institutions and banks there, and this list will be updated in the future.


<a id="how"></a>
## All right, how can I enable it? ##

Install certificate into the system certificates storage.

If you do not have a password or lock screen pattern, then Android will require one of the options to be set up. This is an Android requirement.

Restart the protection. If you have done everything correctly, the HTTPS filtering will work like the usual filtering.


<a id="remove"></a>

## How to remove a certificate from the system? ##

Go to Android settings -> Security -> Trusted credentials.

Go to the "User" section.

Select "AdGuard Personal CA" (it might be the only certificate there).

In the opened dialog window scroll down and tap 'Remove'.

<a id="methods"></a>

## What is the difference between AdGuard filtering methods? ##

There are three AdGuard filtering methods:

+ High-quality;
+ High-speed;
+ Simplified.

**High-quality method** is able to use [all sorts of filtering rules](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters) and can filter everything. This method allows to change the HTML-code of a page cutting out all unwanted elements before the browser even loads the page.

High-quality method can increase the pages loading time, so it is recommended to use only on powerful devices.

**High-speed method** is able to use all rules save for [HTML filtering rules](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#html-filtering-rules) and filters everything except page content. This method uses so called [“cosmetic” filtering rules](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#cosmetic-rules) which are used not for blocking ad requests, but for changing the page appearance. “Cosmetic” rules include adding some special CSS-rules (styles) which hide all unwanted elements on a page.

**Simplified filtering method** is able to use just the [basic filtering rules](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#basic-rules) and lets block only ad requests. 

In contrast to the High-quality and High-speed filtering methods, the Simplified one does not use “cosmetic” filtering rules. 
