---
title: 'How VPN works'
taxonomy:
    category:
        - docs
---
* [VPN features](#features)
* [VPN structure](#structure)
* [Types of VPN protocols](#types)
* [VPN usage](#use)
* [VPN drawbacks](#drawbacks)
* [AdGuard VPN](#adguard-vpn)

To understand how AdGuard VPN works, you should at first understand the general principles of the VPN service.

<a name="features"></a>

## VPN features

A VPN is a Virtual Private Network that helps hide your location and protect your data on the web. A VPN connects a computer or a mobile device to a VPN server and uses the IP address of this server to make it seem to an outside observer that you are in another place. This allows you to access various Internet resources and protect your personal data.

In that way, a VPN has 3 main advantages:

1. *Anonymity*. A VPN hides your real location by replacing the IP address of your device with the IP address of the selected VPN server.

2. *Free browsing*. Some sites are only available from certain countries and regions. By connecting to a VPN server that is located in one of these countries, you will be able to use previously inaccessible resources.

3. *Data protection*. A VPN creates an encrypted tunnel between your device and a remote server through which your web traffic passes. Along the way, all your data will be securely protected.

<a name="structure"></a>

## VPN structure

When you connect to a network, your computer or mobile device is assigned a unique ID number, or IP address. It usually consists of numbers from 0 to 255, separated by dots or colons. Knowing this sequence, one can determine the geolocation of the device, and therefore the location. The IP address is usually set by your ISP, and it will be visible all the way to the desired resource. For this reason, the web server of the site you are visiting can register your IP address and record what you have requested on it. This record can then be used primarily for data collection and traffic analysis.

A VPN creates a tunnel between your device and the VPN server. Your data goes through this tunnel, gets encrypted and then enters the open Internet in a secure form. Therefore, it will seem to the web server that your device has no longer your real IP address, but the IP address of the endpoint of the tunnel, that is, the VPN server. Thus, the site that you get to after passing through the VPN tunnel will consider the geolocation of the VPN server you selected as your real location. And the encrypted data will not fall into the hands of advertisers, hackers and security services.

<img src="https://cdn.adguard.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg" style="max-width: 350px; ">

<a name="types"></a>

## Types of VPN protocols

VPN security protocols are tools that encrypt data in a VPN tunnel and allow you to maintain user privacy in an open Internet. At the moment, the vast majority of modern VPN services use one of the following three VPN protocols:

1. [*IPSec*](https://en.wikipedia.org/wiki/IPsec). One of its main advantages is that it is available on most devices and operating systems and provides a high level of security. However, the use of double [encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(networking)) in this protocol may result in a lower connection speed.

2. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN). This modern protocol is open source, so third-party manufacturers can improve and update the technology.

3. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). Its main advantages are ease of use, high efficiency and low vulnerability to attacks.

In addition to these VPN protocols, there are others (for example, TLS, SSTP, IKEv2), but they are unpopular or do not meet modern data encryption standards.

<object data="https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/4.svg" type="image/svg+xml">
    <img src="https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/4.svg"></object>

AdGuard VPN also has its own [*protocol*](link). One of its advantages is that the traffic transmitted using the AdGuard protocol is difficult to distinguish from usual traffic. The VPN tunnel looks like normal HTTPS traffic, so it is extremely difficult to detect and block it. In addition, it is based on the mechanisms of the modern HTTP/2 protocol, which ensures high connection speed.

<object data="https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/5.svg" type="image/svg+xml">
    <img src="https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/5.svg"></object>

<a name="use"></a>

## VPN usage

A VPN performs three important functions:

1. **Maintaining anonymity**

Using an Internet connection, the user leaves their digital footprint, which can then be analyzed and used by third parties. For example, one of the online stores that you have visited can save your search history and then offer you their products based on it through targeted advertising. Or the secret services, having learned your location through the IP address of your device and having determined your identity, can secretly monitor your activity on the web. In addition, web browsers and ISPs themselves can use your browsing history for their own purposes, as well as sell it to advertisers and provide it to government institutions. VPN allows you to hide your IP address and replace it with the IP address of the VPN server to which you are connected. This way you will be able to maintain your privacy and anonymously search for information on the web.

2. **Data protection**

If you connect to an unreliable or public network, the data on your device may become vulnerable to cybercriminals. Bank card details, usernames and passwords, passport data — all this data can be intercepted by online fraudsters. The VPN tunnel encrypts the information that you send and receive from the web, so it can not fall into the wrong hands.

3. **Free browsing**

Many sites, including streaming services and online platforms, are available only in certain countries. In particular, some streaming services are available only on the specific territories, and, for example, when going on vacation abroad, you will not be able to use them without a VPN. Besides, torrent clients are also blocked in some states. You can learn more about streaming and torrents in [this article](link). With a VPN, you can change your visible IP address (and thus your perceived location) and use previously blocked resources.

<a name="drawbacks"></a>

## VPN drawbacks

Despite the obvious advantages, VPN is not perfect and has some disadvantages:

**Speed**

Since your traffic does not go directly to the web server, but first passes through the VPN server, the speed of the VPN connection decreases. Other factors also affect the speed when using a VPN: the load of the VPN server, its bandwidth, the compatibility of the VPN protocol with your operating system. All these factors, as well as the speed of the network itself, can reduce the quality of your VPN connection.

**Access blocking**

Many VPN providers use protocols that do not allow the VPN connection to imitate normal traffic. Therefore, some online services may detect a VPN connection and restrict access for users with VPNs.

**VPN connections breaking**

A weak signal, network overload, VPN incompatibility with a firewall, antivirus and other programs, an outdated VPN protocol — all this can cause a sudden failure in the VPN connection, especially by unreliable VPN providers.

<a name="adguard-vpn"></a>

## AdGuard VPN

Our VPN service has several important [advantages](link):

* [*Own VPN protocol*](link), which works stably even with a weak Internet connection and disguises itself as normal traffic, making it more difficult to track and block it

* [*"No-logs" policy*](https://adguard-vpn.com/en/privacy.html), which means that AdGuard VPN does not collect your personal data and does not transfer it to third parties

* *More than 50 VPN servers in dozens of countries*

* *Ease of use and extensive customization options*

Currently, AdGuard VPN is available as:

* [Browser extension](link) for Chrome, Firefox and Edge

* Mobile app for [Android](link) and [iOS](link)

* Desktop application for [Windows](link) and [Mac](link)

You can learn more about the features of AdGuard VPN (including the unlimited version) [here](https://adguard-vpn.com/en/welcome.html).