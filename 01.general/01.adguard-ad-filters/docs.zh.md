---
title: 'AdGuard广告过滤器'
taxonomy:
    category:
        - docs
visible: true
---

* [简介](#introduction)
* [过滤条件](#policy)
* [贡献给AdGuard过滤器](#contribute)
* [AdGuard过滤器](#filters)

<a name="introduction"></a>
## 介绍

本文介绍了我们创建的过滤器，这些过滤器将在AdGuard和其他广告拦截软件(例如uBlock Origin)中使用。每个过滤器均代表一组文本格式的规则，AdGuard应用和程序可使用这些规则来过滤广告和威胁隐私的内容(例如横幅，弹出式窗口，跟踪器等)。特定于特定Internet网段的规则(德语过滤器，俄语过滤器等)或用于特定目的的规则(社交媒体过滤器，追踪保护过滤器等)被组合到一个列表中-过滤器-可以一次启用/停用所有规则。

<a name="policy"></a>
## AdGuard过滤器政策

我们的过滤器政策可在[此处](https://kb.adguard.com/general/adguard-filter-policy)获得。

<a name="contribute"></a>
## 贡献AdGuard过滤器

我们很幸运，拥有一个不仅热爱AdGuard而且回馈社会的社区。许多人以各种方式志愿服务，以改善其他用户对AdGuard的使用体验，您可以加入其中！就我们而言，我们只能乐于回报社区中最活跃的成员。所以，你可以做什么？

### 报告问题

我们依靠社区来通知我们有关过滤器的问题。这样，我们可以节省时间并保持过滤器的不断更新。要提交报告，请使用此[网络报告工具](https://agrd.io/report)。

### 建议过滤规则

您会在[GitHub过滤器存储库](https://github.com/AdguardTeam/AdguardFilters/issues)中发现很多未解决的问题。每个人都引用某个网站的问题-广告丢失，误报等-选择任何一个并在注释中提出自己的规则。 AdGuard过滤器工程师将审核您的建议，如果发现正确，则您的规则将添加到AdGuard过滤器中。

这是有关AdGuard过滤规则语法的[官方文档](https://kb.adguard.com/general/how-to-create-your-own-ad-filters)。您需要先阅读它，然后才能创建自己的过滤规则。

### 其他贡献方式

这是[专用页面](https://adguard.com/contribute.html)，供愿意以其他方式为AdGuard做出贡献的人们使用。

<a name="filters"></a>
## AdGuard过滤器

* **基本过滤器**-从具有英语内容的网站上删除广告。最初基于[EasyList](https://easylist.to/)并由我们修改。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/2.txt)
* **跟踪保护过滤器**-各种在线计数器和Web分析工具的完整列表。使用它可以在线隐藏您的操作并避免跟踪。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/3.txt)
* **社交媒体过滤器**-删除了流行网站上的许多“喜欢”和“推文”按钮以及其他社交媒体集成。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/4.txt)
* **烦恼过滤器**-阻止网页上的刺激性元素，包括cookie通知，第三方小部件和页面内弹出窗口(社交媒体元素除外)。受“狂热男孩烦恼名单”的启发，但不重复。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/14.txt)
* **过滤解除阻止的搜索广告和自我促销**-解除阻止可能对用户有用的广告。在[本页](https://kb.adguard.com/zh/general/search-ads-and-self-promotion)上了解有关此过滤器的更多信息。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/10.txt)
* **俄罗斯过滤器**-从俄语网站中删除广告。最初基于[RUAdList](https://code.google.com/p/ruadlist/)过滤器，但随后完全独立开发。目前，与RUAdList的交集很少。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/1.txt)
* **德语过滤器**-从德语网站中删除广告。最初基于[EasyList Germany](https://easylist.to/)过滤器，然后由我们根据用户的投诉对其进行了修改。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/6.txt)
* **法语过滤器**-从法语网站中删除广告。最初基于[Liste FR](https://forums.lanik.us/viewforum.php?f=91)过滤器，然后根据用户的投诉由我们进行了修改。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/16.txt)
* **日语过滤器**-从日语网站中删除广告。最初基于[Fanboy的日语](https://www.fanboy.co.nz/fanboy-japanese.txt)过滤器，后来根据用户的投诉被我们修改。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/7.txt)
* **荷兰过滤器**-从荷兰语网站中删除广告。最初基于[EasyList Dutch](https://easylist.to/)过滤器，然后由我们根据用户的投诉对其进行了修改。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/8.txt)
* **西班牙语/葡萄牙语过滤器**-从西班牙语和葡萄牙语网站中删除广告。最初基于[Fanboy的西班牙语/葡萄牙语](https://www.fanboy.co.nz/fanboy-espanol.txt)过滤器，后来根据用户的投诉被我们修改。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/9.txt)
* **土耳其语过滤器**-从土耳其语网站中删除广告。由我们根据用户的投诉创建。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/13.txt)
* **中文过滤器**-从中文网站删除广告。最初基于[EasyList China](http://abpchina.org/forum/forum.php)过滤器，然后根据用户的投诉由我们进行了修改。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/224.txt)
* **实验过滤器**-用于测试一些新的过滤规则，这些规则可能会引起网站工作的冲突和混乱。如果这些规则没有问题，则将它们添加到主过滤器中。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/5.txt)
* **移动广告过滤器**-阻止移动设备上的广告。包含所有已知的移动广告网络。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/11.txt)
* ** DNS过滤器**-由其他几个过滤器(AdGuard Base过滤器，社交媒体过滤器，间谍软件过滤器，移动广告过滤器，EasyList和EasyPrivacy)组成，并经过专门简化以更好地与DNS级别的广告拦截兼容。 AdGuard DNS服务器使用此过滤器来阻止广告和跟踪。要了解有关DNS级别阻止的更多信息，请访问[本页](https://adguard.com/adguard-dns/overview.html)。 [查看规则](https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt)
