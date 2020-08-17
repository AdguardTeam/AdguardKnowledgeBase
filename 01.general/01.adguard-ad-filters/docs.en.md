---
title: 'AdGuard Ad Filters'
taxonomy:
    category:
        - docs
visible: true
---

*   [Introduction](#introduction)
*   [Filters policy](#policy)
*   [Contributing to AdGuard filters](#contribute)
*   [Base filter](#english)
*   [Tracking Protection filter](#privacy)
*   [Social media filter](#social)
*   [Annoyances filter](#annoyances)
*   [Filter unblocking search ads and self-promotion](#useful)
*   [Russian filter](#russian)
*   [German filter](#german)
*   [French filter](#french)
*   [Japanese filter](#japanese)
*   [Dutch filter](#dutch)
*   [Spanish/Portuguese filter](#spanish)
*   [Turkish filter](#turkish)
*   [Chinese filter](#chinese)
*   [Experimental filter](#experimental)
*   [Mobile ads filter](#mobile)
*   [DNS filter](#domains)
*   [Safari filter](#safari)

<a name="introduction"></a>
## Introduction

This article is about filters that we create to be used in AdGuard and other ad blocking software (e.g. uBlock Origin). Every filter represents a set of rules in text format which are used by AdGuard apps and programs to filter advertising and privacy-threatening content (such as banners, pop-ups, trackers etc.). Rules specific for a particular Internet segment (German filter, Russian filter etc.), or serving a specific purpose (Social media filter, Tracking Protection filter etc.) are combined into one list — filter — and can be enabled/disabled all at once.

<a name="policy"></a>
## AdGuard Filters Policy

Our filter policy is available [here](https://kb.adguard.com/general/adguard-filter-policy).

<a name="contribute"></a>
## Contributing to AdGuard filters

We are blessed to have a community that does not only love AdGuard, but also gives back. A lot of people volunteer in various ways to make other users' experience with AdGuard better, and you can join them! We, on our part, can only be happy to reward the most active members of the community. So, what can you do?

### Report Issues

We rely on the community to let us know about issues with our filters. This way we can be most effeicient with our time and keep filters constantly updated. To submit a report, please use this [web reporting tool](https://agrd.io/report).

### Suggest Filtering Rules

You will find a lot of open issues in the [GitHub filter repository](https://github.com/AdguardTeam/AdguardFilters/issues). Each references a problem with some website — a missed ad, a false positive etc. — choose any one and suggest your own rules in comments. AdGuard filter engineers will review your suggestions, and if they find them correct, your rules will be added to AdGuard filters.

Here is the [official documentation](https://kb.adguard.com/general/how-to-create-your-own-ad-filters) on AdGuard filtering rules syntax. You'll need to read it before you'll be able to create your own filtering rules.

### Other ways to contribute

Here is [a dedicated page](https://adguard.com/contribute.html) for people willing to contribute to AdGuard in other ways.

<a name="filters"></a>
## AdGuard filters

<a name="english"></a>
* **Base filter** — removes ads from websites with English content. Originally based on [EasyList](https://easylist.to/) and modified by us. [View rules](https://filters.adtidy.org/extension/chromium/filters/2.txt)
<a name="privacy"></a>
* **Tracking Protection filter** — comprehensive list of various online counters and web analytics tools. Use it to hide your actions online and avoid tracking. [View rules](https://filters.adtidy.org/extension/chromium/filters/3.txt)
<a name="social"></a>
* **Social media filter** — removes numerous "Like" and "Tweet" buttons and other social media integrations on popular websites. [View rules](https://filters.adtidy.org/extension/chromium/filters/4.txt)
<a name="annoyances"></a>
* **Annoyances filter** —  blocks irritating elements on webpages, including cookie notices, third-party widgets and in-page popups (except for social media elements). Inspired by Fanboy Annoyances List, but doesn’t duplicate it. [View rules](https://filters.adtidy.org/extension/chromium/filters/14.txt)
<a name="useful"></a>
* **Filter unblocking search ads and self-promotions** — unblocks ads that may be useful to users. Learn more about this filter on [this page](https://kb.adguard.com/en/general/search-ads-and-self-promotion). [View rules](https://filters.adtidy.org/extension/chromium/filters/10.txt)
<a name="russian"></a>
* **Russian filter** — removes ads from websites in Russian. Initially based on [RU AdList](https://code.google.com/p/ruadlist/) filter but subsequently developed completely independently. Currently, there are very little intersections with RU AdList left. [View rules](https://filters.adtidy.org/extension/chromium/filters/1.txt)
<a name="german"></a>
* **German filter** — removes ads from websites in German. Originally based on the [EasyList Germany](https://easylist.to/) filter and subsequently modified by us according to the complaints from users. [View rules](https://filters.adtidy.org/extension/chromium/filters/6.txt)
<a name="french"></a>
* **French filter** — removes ads from websites in French. Originally based on the [Liste FR](https://forums.lanik.us/viewforum.php?f=91) filter and subsequently modified by us according to the complaints from users. [View rules](https://filters.adtidy.org/extension/chromium/filters/16.txt)
<a name="japanese"></a>
* **Japanese filter** — removes ads from websites in Japanese. Originally based on the [Fanboy’s Japanese](https://www.fanboy.co.nz/fanboy-japanese.txt) filter and subsequently modified by us according to the complaints from users. [View rules](https://filters.adtidy.org/extension/chromium/filters/7.txt)
<a name="dutch"></a>
* **Dutch filter** — removes ads from websites in Dutch. Originally based on the [EasyList Dutch](https://easylist.to/) filter and subsequently modified by us according to the complaints from users. [View rules](https://filters.adtidy.org/extension/chromium/filters/8.txt)
<a name="spanish"></a>
* **Spanish/Portuguese filter** — removes ads from websites in Spanish and Portuguese. Originally based on the [Fanboy’s Spanish/Portuguese](https://www.fanboy.co.nz/fanboy-espanol.txt) filter and subsequently modified by us according to the complaints from users. [View rules](https://filters.adtidy.org/extension/chromium/filters/9.txt)
<a name="turkish"></a>
* **Turkish filter** — removes ads from websites in Turkish. Created by us according to the complaints from users. [View rules](https://filters.adtidy.org/extension/chromium/filters/13.txt)
<a name="chinese"></a>
* **Chinese filter** — removes ads from websites in Chinese. Originally based on the [EasyList China](http://abpchina.org/forum/forum.php) filter and subsequently modified by us according to the complaints from users. [View rules](https://filters.adtidy.org/extension/chromium/filters/224.txt)
<a name="experimental"></a>
* **Experimental filter** — serves to test some new filtering rules that can potentially cause conflicts and mess with websites' work. In case these rules perfrom without any issues, they get added to main filters. [View rules](https://filters.adtidy.org/extension/chromium/filters/5.txt)
<a name="mobile"></a>
* **Mobile ads filter** — blocks ads on mobile devices. Contains all known mobile ad networks. [View rules](https://filters.adtidy.org/extension/chromium/filters/11.txt)
<a name="domains"></a>
* **DNS filter** — composed of several other filters (AdGuard Base filter, Social media filter, Spyware filter, Mobile ads filter, EasyList and EasyPrivacy) and simplified specifically to be better compatible with DNS-level ad blocking. This filter is used by AdGuard DNS servers to block ads and tracking. To learn more about DNS-level blocking, visit [this page](https://adguard.com/adguard-dns/overview.html). [View rules](https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt)
<a name="safari"></a>
* **Safari filter** — special filter designed for Safari 9 and above on iOS and MacOS to use in combination with other AdGuard filter lists. It's required because Safari's Content Blocking API does not fully support AdGuard's advanced rules syntax. [View rules](https://filters.adtidy.org/extension/chromium/filters/12.txt)

**This filter is obsolete. It's not supported anymore and we do not recommend to use it. It was incorporated into AdGuard Base filter.**