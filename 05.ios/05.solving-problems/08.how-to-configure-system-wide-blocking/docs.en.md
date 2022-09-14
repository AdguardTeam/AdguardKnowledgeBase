---
title: 'How to configure system-wide blocking with AdGuard for iOS?'
taxonomy:
    category:
        - docs
---

   * [About system-wide blocking](#system-wide)
   * [How to add a DNS filter/hosts file](#filters)

<a name="system-wide"></a>
System-wide blocking means blocking ads and trackers beyond the Safari browser, i.e. in other apps and browsers. This article will tell you how to set it up on your iOS device.

On iOS, the only way to block ads and trackers system-wide is to use [DNS filtering](https://kb.adguard.com/en/general/dns-filtering). First, you have to enable DNS protection. To do so, open the *app*, click on the AdGuard icon (second icon at the bottom left of the screen) and enable *DNS protection*.

![Protection screen](https://cdn.adguard.com/content/kb/ad_blocker/iOS/ios_dns_protection1.png)

Now, if your purpose is to block ads and trackers system-wide, you have two options:

1. Enable AdGuard DNS server (*Settings* —> *DNS protection* —> *DNS server* —> *AdGuard DNS*).
2. Add a DNS filter/hosts file that will block ad and tracking domains, e.g. AdGuard DNS filter.

The second option takes a bit more time to set up but has several advantages:

* You can use any DNS server at your discretion and you are not tied up to a specific blocking server.
* You can add multiple DNS filters and/or hosts files at the same time, but you can't use multiple DNS servers at once.

![How DNS filtering works](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

<a name="filters"></a>
### How to add a DNS filter/hosts file

You can add any DNS filter or hosts file, the instruction will be the same for all of them. For the sake of the example, let's add [AdGuard DNS filter](https://github.com/AdguardTeam/AdguardSDNSFilter). It is composed of several other filters (AdGuard Base filter, Social Media filter, Tracking Protection filter, Mobile Ads filter, EasyList, EasyPrivacy, etc.) and it's simplified specifically to be better compatible with DNS-level ad blocking.

1. Open *AdGuard for iOS settings* —> *General*.
2. Enable *Advanced mode*. The 'Advanced settings' tab will appear. Open it.

![Advanced settings](https://cdn.adguard.com/public/Adguard/Blog/ios_advanced.jpg)


> Note: We don't recommend touching other settings you'll find inside the *Advanced settings* tab, especially when it comes to *Low-level settings*. Some of them might break the Internet connection or compromise your privacy and security, so it's better to be careful. The text below describes the exact actions required to add AdGuard DNS filter.

3. Copy this link: `https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt`.
4. Open *AdGuard for iOS* —> *Protection screen* —> *DNS filtering* (available while *Advanced mode* is enabled) —> *DNS filters*.
5. Click *Add a filter* button, paste the link into the filter URL field, and click 'Next'.

![Add a filter](https://cdn.adguard.com/content/kb/ad_blocker/iOS/ios_adding_a_filter1.png)

> Add any number of other DNS filters the same way by pasting a different URL at step 3. You can find various filters and links to them [here](https://filterlists.com).
