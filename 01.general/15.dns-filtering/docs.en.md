---
title: "DNS filtering"
taxonomy:
    category:
        - docs
published: true
visible: true
---

* [What is DNS?](#what-is-dns)
* [How does DNS filtering work?](#dns-filtering)
    * [DNS servers](#dns-servers)
    * [Local DNS blocklists](#dns-blocklists)
* [Comparing DNS filtering to network filtering](#compare)

To better understand DNS filtering, first, we should answer the question "What is DNS"?

<a id="what-is-dns"></a>
### What is DNS?

DNS stands for "Domain Name System", and its purpose is to translate the names of websites into terms understood by browsers, namely, IP addresses. Thus, every time you go to a website, your browser sends a request to a special server (DNS server). That server looks up the requested domain name and replies with the corresponding IP address. Very schematically, it can be represented like this:

<img src="https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_works_en.png" style="border: 1px solid #efefef; padding: 2px;" />

The same applies, of course, to all apps and programs that send any web requests, not just browsers.

<a id="dns-filtering"></a>
### How does DNS filtering work?

When you use one of the AdGuard apps that supports DNS filtering, it acts as a buffer between your device and the DNS server. All DNS requests that your browsers or apps are about to send first get processed by AdGuard. If you're using the default DNS server provided by your ISP, your DNS traffic is likely not encrypted and vulnerable to snooping and hijacking. AdGuard will encrypt all your DNS requests before they leave your device, so that no malefactor could get access to their contents. On top of that, AdGuard can identify requests to ad, tracking, and/or adult domains and redirect them to a "blackhole" instead of forwarding them to the DNS server. More on that [later](#dns-blocklists).

<img src="https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png" style="border: 1px solid #efefef; padding: 2px;" />

DNS filtering is a powerful tool and it's supported by all major AdGuard apps: [AdGuard for Windows](https://adguard.com/en/adguard-windows/overview.html), [AdGuard for Mac](https://adguard.com/en/adguard-mac/overview.html), [AdGuard for Android](https://adguard.com/en/adguard-android/overview.html) and [AdGuard for iOS](https://adguard.com/en/adguard-ios/overview.html).

DNS filtering can be broken down into two separate functions: to encrypt and reroute DNS traffic to DNS servers, and to block some domains locally by applying DNS blocklists.

<a id="dns-servers"></a>
#### DNS servers

There are thousands of DNS servers to choose from, and they are all unique in their properties and purposes. Most of them simply return the IP address of the requested domain, but some have additional features such as blocking ads, trackers, adult domains, and so on. Nowadays, all major DNS servers support such reliable encryption protocols as DNS-over-HTTPS or DNS-over-TLS. AdGuard has its own [DNS service](https://adguard-dns.com/en/welcome.html) and was the first provider in the world to offer a very new and promising [DNS-over-QUIC](https://adguard.com/en/blog/dns-over-quic.html) encryption protocol. AdGuard has different servers for different goals. This diagram illustrates how AdGuard's blocking servers work:

<img src="https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg" style="border: 1px solid #efefef; padding: 2px;" />

Other DNS providers may work differently, so learn more about them before committing to a particular DNS server. You can find a list of the most popular DNS providers in [this article](https://kb.adguard.com/en/general/dns-providers). All AdGuard apps that support DNS functionality also have a list of DNS servers to choose from or even allow you to select any custom DNS server you want.


<a id="dns-blocklists"></a>
#### Local DNS blocklists

Yet, by relying only on DNS servers to filter your DNS traffic, you lose all flexibility. If the selected server blocks a domain, you can't access it. With AdGuard, you do not even need to configure any specific DNS server to filter DNS traffic. All AdGuard products let you employ DNS blocklists, be it simple host files or lists that use [more advanced syntax](https://kb.adguard.com/en/general/dns-filtering-syntax). They work similarly to regular blocklists: when a DNS request matches one of the rules in the active filter list, it gets blocked. More precisely, it gets rerouted to a "black hole".

>In AdGuard for iOS, you must first enable "Advanced Mode" in Settings to access DNS blocking.

You can add as many custom blocklists as you wish. For instance, you can use the [AdGuard DNS filter](https://github.com/AdguardTeam/AdGuardSDNSFilter). It does the same thing as the AdGuard DNS server in terms of blocking and can be used with any other DNS server. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple "use a blocking DNS server" setup.

>There are hundreds of different DNS blocklists, you can look for them [here](https://filterlists.com/).

<a id="compare"></a>
### Comparing DNS filtering to network filtering

Network filtering is what we call the 'regular' way AdGuard standalone apps process network traffic, hence the name. Feel free to brush up on it by reading [this article](https://kb.adguard.com/en/general/how-ad-blocking-works).

First of all, we have to mention that, with AdGuard, you don't have to choose. You can always use regular network filtering and DNS filtering simultaneously. However, it's important to understand their key differences. DNS filtering has both unique advantages and drawbacks:


**Pros of DNS filtering:**

1. On some platforms, this is the only way to achieve system-wide filtering. For example, on iOS, only the Safari browser supports content blocking in the familiar sense, for everything else, there's only DNS filtering.
2. Some forms of tracking (like [CNAME-cloaked tracking](https://adguard.com/en/blog/cname-tracking.html)) can only be dealt with by DNS filtering.
3. The stage of processing a DNS request is the earliest you could possibly deal with an ad or a tracker. This helps save a little bit of battery life and traffic.

**Cons of DNS filtering:**

1. DNS filtering is "rough": it doesn't remove whitespaces left behind by blocked ads or apply any cosmetic filtering. It is often impossible to block many of the more complex ads at the DNS level unless you block the entire domain that may be used for other purposes.

<img src="https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/dns_diff.jpg" style="max-width: 550px; border: 1px solid #efefef; padding: 2px;" />
<p align="center"><i>An example of difference between DNS and network filtering</i></p>

2. It's not possible to know the origin of a DNS request, which means you can't distinguish between different apps on the DNS level. This harms the statistics and makes it impossible to create app-specific filtering rules.

We recommend to use DNS filtering in addition to network filtering, not instead of it, whenever possible.
