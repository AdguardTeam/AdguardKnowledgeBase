---
title: 'AdGuard 广告过滤器'
taxonomy:
    category:
        - docs
visible: true
---

* [简介](#introduction)
* [过滤器政策](#policy)
* [献给 AdGuard 过滤器的改进](#contribute)
* [AdGuard 过滤器](#filters)

<a name="introduction"></a>
## 介绍

本文介绍的是我们创建并在 AdGuard 和其他广告拦截程序 (例如 uBlock Origin) 中使用的过滤器。每个过滤器代表的是文本格式的一系列规则，而 AdGuard 应用程序可使用这些规则来过滤广告（例如横幅，弹出式窗口，跟踪器等）以及保护个人隐私信息 。用于特定 Internet 网段 (德语过滤器，俄语过滤器等) 或特定目的（社交媒体过滤器，防追踪保护过滤器等）的规则被合成一个列表（过滤器）。用户可以一键启用/停用所有规则。

<a name="policy"></a>
## AdGuard 过滤器政策

在[此处](https://kb.adguard.com/general/adguard-filter-policy)可获得我们的过滤器政策。

<a name="contribute"></a>
## 献给 AdGuard 过滤器的改进

我们很幸运，拥有不仅热爱 AdGuard 而且积极留下反馈的用户。许多人以各种方式开展志愿服务来改善其他用户对 AdGuard 的使用体验，您也可以加入其中！对我们而言，我们只能为最活跃的成员准备奖励。那你可以做什么呢？

### 报告问题

我们的用户帮我们了解有关过滤器的问题。这样我们可以节省时间并保持过滤器的不断更新。如要提交报告，请使用此[网络报告工具](https://agrd.io/report)。

### 建议过滤规则

在 [GitHub过滤器存储库](https://github.com/AdguardTeam/AdguardFilters/issues) 中您可以发现很多与广告丢失，错误报告等有关的待解决问题。每个人都可以选择任何一个并在注释中提出自己的规则。 AdGuard 过滤器工程师将审核您的建议。如果他们证明是正确的，那么您的规则将会被添加到 AdGuard 过滤器中。

这是有关 AdGuard 过滤规则语法的[官方文档](https://kb.adguard.com/general/how-to-create-your-own-ad-filters)。您先要阅读它，然后就能创建自己的过滤规则。

### 其他帮助方式

  这是[“奉献”页面](https://adguard.com/contribute.html)，愿意以其他方式为 AdGuard 做出贡献的人们可使用。
<a name="filters"></a>
## AdGuard 过滤器

* **基础过滤器** — 从具有英语内容的网站上删除广告。最初基于[EasyList](https://easylist.to/)并由我们修改。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/2.txt)
* **防跟踪保护过滤器** — 各种在线计数器和 Web 分析工具的完整列表。使用它可以在线隐藏您的操作并避免跟踪。[查看规则](https://filters.adtidy.org/extension/chromium/filters/3.txt)
* **社交媒体过滤器** — 删除了流行网站上的许多“赞”和“转发”按钮以及其他社交媒体集成。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/4.txt)
* **恼人广告过滤器** — 阻止网页上的恼人元素，包括cookie通知，第三方小部件和页面内弹出窗口(社交媒体元素除外)。受 “Fanboy Annoyances List” 的启发，但不完全重叠。[查看规则](https://filters.adtidy.org/extension/chromium/filters/14.txt)
* **解除搜索广告和自我促销的过滤器** — 解除可能对用户有用广告的阻止。在[本页](https://kb.adguard.com/zh/general/search-ads-and-self-promotion)上了解有关此过滤器的更多信息。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/10.txt)
* **俄语过滤器** — 从俄语网站中删除广告。最初基于 [RUAdList](https://code.google.com/p/ruadlist/) 过滤器，但随后完全独立出去。目前，与 RUAdList 的共同点很少。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/1.txt)
* **德语过滤器** — 从德语网站中删除广告。最初基于[EasyList Germany](https://easylist.to/)过滤器，然后由我们根据用户的错误报告对其进行了修改。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/6.txt)
* **法语过滤器** — 从法语网站中删除广告。最初基于[Liste FR](https://forums.lanik.us/viewforum.php?f=91)过滤器，然后根据用户的错误报告由我们进行了修改。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/16.txt)
* **日语过滤器** — 从日语网站中删除广告。最初基于[Fanboy的日语](https://www.fanboy.co.nz/fanboy-japanese.txt)过滤器，后来根据用户的错误报告被我们修改。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/7.txt)
* **荷兰语过滤器** — 从荷兰语网站中删除广告。最初基于[EasyList Dutch](https://easylist.to/)过滤器，然后由我们根据用户的错误报告对其进行了修改。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/8.txt)
* **西班牙语/葡萄牙语过滤器** — 从西班牙语和葡萄牙语网站中删除广告。最初基于[Fanboy的西班牙语/葡萄牙语](https://www.fanboy.co.nz/fanboy-espanol.txt)过滤器，后来根据用户的错误报告被我们修改。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/9.txt)
* **土耳其语过滤器** — 从土耳其语网站中删除广告。由我们根据用户的错误报告创建。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/13.txt)
* **中文过滤器** — 从中文网站删除广告。最初基于[EasyList China](http://abpchina.org/forum/forum.php)过滤器，然后根据用户的错误报告由我们进行了修改。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/224.txt)
* **实验性过滤器** — 用于测试一些新的过滤规则，这些规则可能会引起网站工作的冲突和混乱。如果这些规则没有问题，则将它们添加到主过滤器中。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/5.txt)
* **移动广告过滤器** — 阻止移动设备上的广告。包含所有已知的移动广告网络。 [查看规则](https://filters.adtidy.org/extension/chromium/filters/11.txt)
* **DNS过滤器** — 由其他几个过滤器（AdGuard 基础过滤器，社交媒体过滤器，间谍软件过滤器，移动广告过滤器，EasyList 和 EasyPrivacy）组成，并经过专门简化让它们更好地与 DNS 级别的广告拦截兼容。 AdGuard DNS 服务器使用此过滤器来阻止广告和跟踪器。要了解有关 DNS 级别阻止的更多信息，请访问[本页](https://adguard.com/adguard-dns/overview.html)。[查看规则](https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt)
