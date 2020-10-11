---
title: 'AdGuard广告过滤器'
taxonomy:
    category:
        - docs
visible: true
---

*   [简介](#introduction)
*   [AdGuard过滤器政策](#policy)
*   [帮助AdGuard过滤器的开发](#contribute)
*   [AdGuard过滤器](#filters)

<a name="introduction"></a>
## 简介

本文介绍了我们创建的过滤器，这些过滤器将在AdGuard和其他广告拦截软件（例如uBlock Origin）中使用。 每个过滤器均代表一组文本格式的规则，AdGuard应用和程序可使用这些规则来过滤广告和威胁隐私的内容（例如横幅，弹出式窗口，防跟踪保护过滤器等）。 特定于特定Internet网段的规则（德语过滤器，俄语过滤器等）或用于特定目的的规则（社交媒体过滤器，Tracking Protection过滤器等）被组合到一个列表中—过滤器—可以一次启用/停用所有规则 。

<a name="policy"></a>
## AdGuard过滤器政策

我们的过滤器政策在 [这里](https://kb.adguard.com/general/adguard-filter-policy).

<a name="contribute"></a>
## 帮助AdGuard过滤器的开发

我们很幸运，拥有一个不仅热爱AdGuard，还能回馈社会的社区。很多人以各种方式做志愿者，让其他用户使用 AdGuard 的体验更好，您也可以加入他们的行列! 我们则只能高兴地奖励社区中最活跃的成员。那么，你能做什么呢？

### 报告问题

我们依靠社区让我们知道过滤器的问题。这样我们才能最有效地利用我们的时间，并保持过滤器的不断更新。要提交报告，请使用 [网络报告工具](https://agrd.io/report).

### 建议的过滤规则

你会在[GitHub 过滤器仓库](https://github.com/AdguardTeam/AdguardFilters/issues).中发现很多公开的问题。每个问题都涉及到某个网站的问题 — 遗漏的广告、错误的积极性等 — 请选择其中一个问题并在评论中提出您自己的规则。AdGuard 过滤器工程师将审查您的建议，如果他们认为这些建议正确，您的规则将被添加到 AdGuard 过滤器中。

这里是 AdGuard 过滤规则语法的 [官方文档](https://kb.adguard.com/general/how-to-create-your-own-ad-filters) 在您创建自己的过滤规则之前，您需要阅读它。

### 其他贡献方式

我们有 [专门的页面](https://adguard.com/contribute.html) 您可以在其中详细了解如何参与AdGuard开发。

<a name="filters"></a>
## AdGuard过滤器

* **基础过滤器** — 删除英文内容网站的广告。最初是基于 [EasyList](https://easylist.to/) 并由我们修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_English/filter.txt)
* **防跟踪保护过滤器** — 各种在线计数器和网络分析工具的综合列表。用它来隐藏你在网上的行动，避免跟踪。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt)
* **社交媒体过滤器** — 此过滤器适用于社交媒体小工具 "喜欢" 按钮及类似的元素。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_4_Social/filter.txt)
* **恼人广告过滤器** —  屏蔽网页上的恼人元素，包括 Cookie 通知，第三方小部件和页内弹出式窗口。 (社交媒体元素除外). 受 Fanboy Annoyances List 启发， 但不重复。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt)
* **解除搜索广告和自我推销过滤器** — 解除可能对用户有用的广告。在 [此页](https://kb.adguard.com/en/general/search-ads-and-self-promotion).上了解更多关于此过滤器的信息。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_10_Useful/filter.txt)
* **俄语过滤器** — 删除俄语网站上的广告。最初是基于 [RU AdList](https://code.google.com/p/ruadlist/) 过滤器，但随后完全独立发展。目前，已脱离 RU AdList 开发。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_1_Russian/filter.txt)
* **德语过滤器** — 删除德语网站上的广告。最初是基于 [EasyList Germany](https://easylist.to/) 过滤器，随后我们根据用户的反馈进行修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_6_German/filter.txt)
* **法语过滤器** — 删除法语网站上的广告。最初是基于 [Liste FR](https://forums.lanik.us/viewforum.php?f=91) 过滤器，随后我们根据用户的反馈进行修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_16_French/filter.txt)
* **日语过滤器** — 删除日语网站上的广告。最初是基于 [Fanboy’s Japanese](https://www.fanboy.co.nz/fanboy-japanese.txt) 过滤器，随后我们根据用户的反馈进行修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_7_Japanese/filter.txt)
* **荷兰语过滤器** — 删除荷兰语网站上的广告。最初是基于 [EasyList Dutch](https://easylist.to/) 过滤器，随后我们根据用户的反馈进行修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_8_Dutch/filter.txt)
* **西班牙语/葡萄牙语过滤器** — 删除西班牙语和葡萄牙语网站上的广告。最初是基于 [Fanboy’s Spanish/Portuguese](https://www.fanboy.co.nz/fanboy-espanol.txt) 过滤器，随后我们根据用户的反馈进行修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_9_Spanish/filter.txt)
* **土耳其语过滤器** — 删除土耳其语网站上的广告。由我们根据用户的反馈创建。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_13_Turkish/filter.txt)
* **中文过滤器** — 删除中文网站上的广告。最初是基于 [EasyList China](http://abpchina.org/forum/forum.php) 过滤器，随后我们根据用户的反馈进行修改。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt)
* **实验性过滤器** — 此过滤器设计用于在将某些有风险的过滤规则添加到基本过滤器之前对其进行测试。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_5_Experimental/filter.txt)
* **移动广告过滤器** — 该过滤器将过滤已知的所有移动广告网络。对移动设备非常有帮助。 [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt)
* **DNS 过滤器** — 此过滤器由其他几个过滤器 (AdGuard 基础过滤器、社交媒体过滤器、防跟踪保护过滤器、移动广告过滤器、EasyList 和 EasyPrivacy) 组成，并经过简化，以便更好地与 DNS 级别的广告拦截兼容。AdGuard DNS 服务器使用此过滤器来拦截广告和跟踪。要了解更多有关 DNS 级别拦截的信息，请访问 [此页](https://adguard.com/adguard-dns/overview.html). [查看规则](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt)
