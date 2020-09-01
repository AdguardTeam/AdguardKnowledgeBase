---
title: '如何添加您的 DNS 过滤器'
taxonomy:
    category:
        - docs

---
如您想在 iOS 拦截 Safari 中之外的广告和跟踪器，那么您需要使用 DNS。在一般情况下，需要使用 DNS 服务阻止器（比如，[AdGuard DNS](https://adguard.com/zh_cn/adguard-dns/overview.html)）。但 iOS 版的 AdGuard 应用有其他方式能够让用户拦截广告：您可以添加您的 DNS 过滤器或 hosts 文件。 

此方式有以下几种优势：
1) 您可亲自选择任何 DNS 服务器，不会绑定到特定的阻止服务器。
2) 您可以同时添加几个 DNS 过滤器 和/或 hosts 文件，但您不能同时使用几个 DNS 服务器。 

为了在 iOS 版的 AdGuard  应用程序中添加用户的 DNS 过滤器*，请您根据以下步骤来操作：

**⠀不要与 “将自定义过滤器添加到 Safari 中”混淆。*

1. 前往 AdGuard Pro 设置 —> 通用—> 开启*高级模式*。
<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Zh/advanced_mode.png" style="border: 1px solid #efefef; max-height: 700px; max-width: 350px; padding: 2px;">

2. 前往 DNS 保护 —>  DNS 过滤 —>  DNS 过滤器 —> 点击*添加过滤器*。
<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Zh/dns_filters.png" style="border: 1px solid #efefef; max-height: 700px; max-width: 350px; padding: 2px;">

我们以[AdGuard DNS 过滤器](https://kb.adguard.com/en/general/adguard-ad-filters#domains)作为例子，来展示如何添加自己的 DNS 过滤器。

>  DNS 过滤器是由几个过滤器，包括英文、社交媒体、间谍软件、移动广告、EasyList、EasyPrivacy等过滤器组成，以更好地通过 DNS 拦截广告的过滤方式与之兼容。

3. 粘贴该链接： [https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt](https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt) 以添加 AdGuard DNS 过滤器（或使用其他您所想添加的过滤器链接）。

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Zh/new_dns_filter.png" style="border: 1px solid #efefef; max-height: 700px; max-width: 350px; padding: 2px;">

就是这样！您已成功添加自定义过滤器。
