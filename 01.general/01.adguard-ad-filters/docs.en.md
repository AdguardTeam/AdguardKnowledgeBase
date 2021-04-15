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
*   [AdGuard filters](#filters)

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

We rely on the community to let us know about issues with our filters. This way we can be most efficient with our time and keep filters constantly updated. To submit a report, please use this [web reporting tool](https://agrd.io/report).

### Suggest Filtering Rules

You will find a lot of open issues in the [GitHub filter repository](https://github.com/AdguardTeam/AdguardFilters/issues). Each references a problem with some website — a missed ad, a false positive etc. — choose any one and suggest your own rules in comments. AdGuard filter engineers will review your suggestions, and if they find them correct, your rules will be added to AdGuard filters.

Here is the [official documentation](https://kb.adguard.com/general/how-to-create-your-own-ad-filters) on AdGuard filtering rules syntax. You'll need to read it before you'll be able to create your own filtering rules.

### Other ways to contribute

Here is [a dedicated page](https://adguard.com/contribute.html) for people willing to contribute to AdGuard in other ways.

<a name="filters"></a>
## AdGuard filters

* **Base filter** — removes ads from websites with English content. Originally based on [EasyList](https://easylist.to/) and modified by us. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_English/filter.txt)
* **Tracking Protection filter** — comprehensive list of various online counters and web analytics tools. Use it to hide your actions online and avoid tracking. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt)
* **AdGuard URL Tracking filter** — enhances privacy by removing tracking parameters from URLs. When a user opts to block tracking parameters in Stealth Mode, this filter will be enabled automatically. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt)
* **Social media filter** — removes numerous "Like" and "Tweet" buttons and other social media integrations on popular websites. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_4_Social/filter.txt)
* **Annoyances filter** —  blocks irritating elements on webpages, including cookie notices, third-party widgets and in-page popups (except for social media elements). Inspired by Fanboy Annoyances List, but doesn’t duplicate it. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt)
* **Filter unblocking search ads and self-promotions** — unblocks ads that may be useful to users. Learn more about this filter on [this page](https://kb.adguard.com/en/general/search-ads-and-self-promotion). [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_10_Useful/filter.txt)
* **Russian filter** — removes ads from websites in Russian. Initially based on [RU AdList](https://code.google.com/p/ruadlist/) filter but subsequently developed completely independently. Currently, there are very little intersections with RU AdList left. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_1_Russian/filter.txt)
* **German filter** — removes ads from websites in German. Originally based on the [EasyList Germany](https://easylist.to/) filter and subsequently modified by us according to the complaints from users. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_6_German/filter.txt)
* **French filter** — removes ads from websites in French. Originally based on the [Liste FR](https://forums.lanik.us/viewforum.php?f=91) filter and subsequently modified by us according to the complaints from users. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_16_French/filter.txt)
* **Japanese filter** — removes ads from websites in Japanese. Originally based on the [Fanboy’s Japanese](https://www.fanboy.co.nz/fanboy-japanese.txt) filter and subsequently modified by us according to the complaints from users. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_7_Japanese/filter.txt)
* **Dutch filter** — removes ads from websites in Dutch. Originally based on the [EasyList Dutch](https://easylist.to/) filter and subsequently modified by us according to the complaints from users. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_8_Dutch/filter.txt)
* **Spanish/Portuguese filter** — removes ads from websites in Spanish and Portuguese. Originally based on the [Fanboy’s Spanish/Portuguese](https://www.fanboy.co.nz/fanboy-espanol.txt) filter and subsequently modified by us according to the complaints from users. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_9_Spanish/filter.txt)
* **Turkish filter** — removes ads from websites in Turkish. Created by us according to the complaints from users. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_13_Turkish/filter.txt)
* **Chinese filter** — removes ads from websites in Chinese. Originally based on the [EasyList China](http://abpchina.org/forum/forum.php) filter and subsequently modified by us according to the complaints from users. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt)
* **Experimental filter** — serves to test some new filtering rules that can potentially cause conflicts and mess with websites' work. In case these rules perfrom without any issues, they get added to main filters. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_5_Experimental/filter.txt)
* **Mobile ads filter** — blocks ads on mobile devices. Contains all known mobile ad networks. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt)
* **DNS filter** — composed of several other filters (AdGuard Base filter, Social media filter, Spyware filter, Mobile ads filter, EasyList and EasyPrivacy) and simplified specifically to be better compatible with DNS-level ad blocking. This filter is used by AdGuard DNS servers to block ads and tracking. To learn more about DNS-level blocking, visit [this page](https://adguard.com/adguard-dns/overview.html). [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt)
