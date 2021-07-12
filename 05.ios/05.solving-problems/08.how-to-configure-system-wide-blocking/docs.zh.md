---
title: '如何在 AdGuard iOS 版设置系统层面的广告拦截？'
taxonomy:
    category:
        - docs
---

   * [关于系统层面上的广告拦截](#system-wide)
   * [如何添加 DNS 过滤器/ Hosts 文件](#filters)

<a name="system-wide"></a>
系统层面上的拦截是指不仅在 Safari 浏览器里，而且在其它应用程序和浏览器里屏蔽广告及跟踪器。这篇文章的内容讲述如何在您的 iOS 设备上设置系统层面的广告拦截。

在 iOS 上，仅有一个方式允许我们在系统层面上拦截广告和跟踪器，就是使用 [DNS 过滤](https://kb.adguard.com/en/general/dns-filtering)。首先，您需要启用 DNS 保护。以启用 DNS 保护，请打开 *AdGuard iOS 版的设置*  —>  并启用「DNS 保护」。

<img src="https://cdn.adguard.com/public/Adguard/Blog/ios_dns_protection_zhcn.PNG" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">

到了这一步，如您的目标是在系统层面上拦截广告和跟踪器，那么您有两个选择：
1. 启用 AdGuard DNS 服务器（「设置」—>「DNS 保护」—>「DNS 服务器」—>「AdGuard DNS」）。
2. 添加能够拦截广告和跟踪网域的 DNS 过滤器/hosts 文件，就是 AdGuard DNS 过滤器。

虽然第二个选择需要花更长时间设置，但是这个选择具有以下几个优点：
* 您可亲自选择任何 DNS 服务器，并不需要使用某一个特定的拦截服务器。
* 您可以同时添加几个 DNS 过滤器和/或 Hosts 文件，但是您不能同时使用几个 DNS 服务器。

<img src="https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_cn.png" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">
<p align="center"><i>DNS 过滤工作原理</i></p>

<a name="filters"></a>
### 如何添加 DNS 过滤器/Hosts 文件

您可以添加任何一个 DNS 过滤器或 Hosts 文件。无论是 DNS 过滤器还是 Hosts 文件，说明的内容都是一样的。比如，让我们一起尝试添加 [AdGuard DNS 过滤器](https://github.com/AdguardTeam/AdguardSDNSFilter)。AdGuard DNS 过滤器是由几个过滤器（包括 AdGuard 基础过滤器、社交媒体过滤器、防跟踪保护过滤器、移动广告过滤器、EasyList、EasyPrivacy 等等）组成的。为了使该过滤器与 DNS 级广告拦截的兼容性更佳，我们特地简化了它。
1. 打开 AdGuard iOS 版的设置 —>「通用」
2. 启用高级模式。您将会看到 '高级模式' 的标签。打开它。
<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Zh/advanced_mode.png" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">
     </div>
     <div style="flex:1;padding-left:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/Blog/ios_advanced_settings_zhcn.PNG" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">
     </div>
</div>

> 温馨提示：我们不推荐您更改其它*高级设置* 标签里的设置，特别是*低级设置*。有些设置可能会导致互联网连接中断或会造成您的隐私安全被泄露，因此您要保持警惕。下面的内容讲述的是，为了添加 AdGuard DNS 过滤器需要进行的步骤。
3. 请复制此链接：`https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt`。
4. 打开 AdGuard iOS 版的设置 —>「DNS 保护」—>「DNS 过滤」（仅在高级模式开启时使用）—>「DNS 过滤器」。
5. 点击「添加过滤器」按钮,在过滤器的 URL 字段里粘贴上述链接并点击下一步。

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Zh/dns_filters.png" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">

> 通过在第五步粘贴另一个链接，您就可以使用同样的方式添加任何其它的 DNS 过滤器。[在这里](https://filterlists.com)您可以找到各种过滤器以及它们的链接。
