---
title: 'How AdGuard VPN protocol works'
taxonomy:
    category:
        - docs
---
*   [Why we developed the AdGuard VPN protocol](#reasons) 
*   [Disadvantages of popular VPN protocols](#vpn-drawbacks)
*   [What's great about AdGuard VPN protocol](#adguard-vpn-protocol)

Our protocol is used by [all AdGuard VPN mobile and desktop applications](https://adguard-vpn.com/en/welcome.html). Download any of our products and use it knowing that your data is protected in the most secure way.

<a id="reasons"></a>

## Why we developed the AdGuard VPN protocol

For years, we were concentrating on developing all flavors of ad blocking apps and browser extensions. And in 2019 we resolved to develop our own VPN service, seemingly out of nowhere. When in reality, there were a few reasons that prompted us to do so.

* AdGuard mobile apps had compatibility issues with VPN apps. Normally, two VPN-based mobile apps can't work together: in rare cases on iOS, and never on Android. As AdGuard ad blocker apps use local VPN to filter network traffic, using them alongside any VPN app would be out of the question. That's why we saw the development of an in-house VPN as the only feasible solution that could guarantee compatibility: after we apply some magic, the two apps are able to work together as one VPN service.
* Secondly, VPN seemed more than relevant to our philosophy and priorities. Our primary goal is to protect users' privacy, and this is exactly what VPNs are for.
* Finally, over the years of developing AdGuard software, we have become experts in filtering network traffic. This allowed us to bring in something new instead of becoming another wishy-washy VPN.

From the outset, we decided that AdGuard VPN would have one key difference from its competitors — we shall develop and deploy an in-house VPN protocol which would not force users to choose between security and speed.

<a id="vpn-drawbacks"></a>

## Disadvantages of popular VPN protocols

We developed the AdGuard VPN protocol seeing the disadvantages of popular VPN protocols (OpenVPN, WireGuard, IPSec, etc.):

* They can be easily detected and blocked on the network level.
* If you try to "hide" them, the performance will drop.

To "conceal" the use of VPN, the data flow is often "wrapped" in a TCP connection, and sometimes it is additionally encrypted to make the traffic look like a normal website connection. Unfortunately, this approach has a disadvantage – due to the use of TCP, there is a need for additional confirmation of delivery.

<object data="https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/6.svg" type="image/svg+xml">
    <img src="https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/6.svg"></object>

Using any popular VPN protocol, we are always facing a trade-off: fast but easy to detect vs. slow.

<a id="adguard-vpn-protocol"></a>

## What's great about AdGuard VPN protocol

<object data="https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/5.svg" type="image/svg+xml">
    <img src="https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/5.svg"></object>

* It's *nearly impossible to distinguish from normal HTTPS traffic*, that is, the connection to the AdGuard VPN server looks exactly the same as the connection to a normal website.
* For encryption we use **HTTPS (TLS)**, which copes with this task perfectly. It is the most popular encryption method in the world, and the libraries that implement it are constantly audited for security.

Some existing VPN protocols also handle the encryption task, and they (and thus, the fact of using a VPN) are hard to detect. But this usually comes at the price of reduced speed. This is not our case, thanks to several solutions.

* We use the **HTTP/2 transport protocol**, which makes it virtually impossible to detect AdGuard VPN protocol while maintaining high speed.
* Unlike others, AdGuard VPN protocol *operates with data and not with packets*. This means that AdGuard VPN establishes a separate "tunnel" for each connection, each HTTP/2 stream corresponds to one connection. AdGuard VPN transfers data through this tunnel. This allows us to speed up the operation by saving on confirmation packets, because we can buffer the data of several packets into one before sending it to the VPN server (or from the server to the client). And the fewer packets, the fewer confirmations are needed.

<object data="https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/sravnenie5:6.svg" type="image/svg+xml">
    <img src="https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/sravnenie5:6.svg"></object>