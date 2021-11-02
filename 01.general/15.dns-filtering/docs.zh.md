---
title: "DNS 过滤"
taxonomy:
    category:
        - docs
published: true
visible: true
---

* [什么是 DNS？](#what-is-dns)
* [DNS 过滤的工作原理](#dns-filtering)
    * [DNS 服务器](#dns-servers)
    * [本地 DNS 黑名单](#dns-blocklists)
* [DNS 过滤与网络层面过滤的对比](#compare)

为了更好了解 DNS 过滤，首先我们要回答一个问题，就是“什么是 DNS”？
<a id="what-is-dns"></a>
### 什么是 DNS？

DNS 是指“域名系统”。它的目标是将网站名称转换成浏览器能识别的 IP 地址。因此，每次您访问网站，您的浏览器都能给特定服务器（DNS 服务器）发送请求。该服务器会查看被请求的域名，并且用对应的 IP 地址响应。具体来讲就是下面这样的：

<img src="https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_works_cn.png" style="border: 1px solid #efefef; padding: 2px;" />

当然，不仅是浏览器，所有发送任何网络请求的应用和程序也都是如此。
<a id="dns-filtering"></a>
### DNS 过滤工作原理是什么？

当您使用某一款支持 DNS 过滤的 AdGuard 应用程序时，它作为您的设备和 DNS 服务器的“缓冲器”。您的浏览器或应用程序所要发送的 DNS 请求会先由 AdGuard 来处理。如您使用的是由您的 ISP（互联网服务提供商）提供的默认 DNS 服务器，很可能您的 DNS 流量未加密，因此容易受到窥探和劫持的威胁。在 DNS 请求从您的设备发送到服务器前，AdGuard 会加密它们，因此没有坏人可以再轻松获取请求的内容。除此之外，AdGuard 能够识别广告、跟踪器和/或成人网站信息，并且将它们发送到“黑洞”，而不是到 DNS 服务器。[下述](#dns-blocklists)可了解更多。

<img src="https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_cn.png" style="border: 1px solid #efefef; padding: 2px;" />

DNS 过滤是效果很强的工具，并且主要的 AdGuard 应用程序都支持它：[AdGuard Windows 版](https://adguard.com/zh_cn/adguard-windows/overview.html)、[AdGuard Mac 版](https://adguard.com/zh_cn/adguard-mac/overview.html)、[AdGuard 安卓版](https://adguard.com/zh_cn/adguard-android/overview.html) 以及 [AdGuard iOS 版](https://adguard.com/zh_cn/adguard-ios/overview.html)。

假设 DNS 过滤可分为两个独立功能：那么第一个将是进行加密并将 DNS 流量改道发送到 DNS 服务器；第二个则是使用本地 DNS 过滤来阻止一些网域。
<a id="dns-servers"></a>
#### DNS 服务器

一共有数千个 DNS 服务器可选。它们的属性与用途都是独一无二的。大部分 DNS 服务器只能返回请求网域的 IP 地址，但也有些 DNS 服务器具有一些额外功能。比如，它们能阻止广告、带有成人内容的网站等等。当今大部分主流 DNS 服务器都应用一个或更多可靠的加密协议，比如：DNS-over-HTTPS、DNS-over-TLS。AdGuard 还提供自己的 [DNS 服务](https://adguard.com/zh_cn/adguard-dns/overview.html)。这当时是世界上首个提供最新且很被看好的 [DNS-over-QUIC](https://adguard.com/zh_cn/blog/dns-over-quic.html) 加密协议的 DNS 提供商。
AdGuard 为不同目的使用不同的服务器。下面的图标展示 AdGuard 拦截服务器的工作原理：

<img src="https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/adguard_dns_cn.png" style="border: 1px solid #efefef; padding: 2px;" />

其它 DNS 提供商的工作方式也可能有所不同，所以在选择某一个 DNS 服务器前，我们建议您要先多了解它们。在[这篇文章](https://kb.adguard.com/en/general/dns-providers)里，您可以找到最受欢迎 DNS 提供商的清单。所有支持 DNS 功能的 AdGuard 应用程序也有 DNS 服务器清单。在清单里用户可以选择自己想使用的 DNS 服务器，或任何自定义 DNS 服务器。
<a id="dns-blocklists"></a>
#### 本地 DNS 黑名单

如您只依靠 DNS 服务器过滤  DNS 流量，那么多少会失去一些灵活性。如您选择的服务器阻止某网域，您就无法继续访问。但如果您使用 AdGuard，您甚至不需要配置任何特定的 DNS 服务器就可以过滤 DNS 流量。所有 AdGuard 产品允许您应用 DNS 黑名单，无论是简单的 Hosts 文件还是使用[更复杂语法](https://kb.adguard.com/en/general/dns-filtering-syntax)的清单。它们与一般的广告过滤器运行相似：当 DNS 请求与某一个属于激活过滤器列表的规则相匹配时，该 DNS 请求将会被阻止。更准确地说，这个 DNS 请求将会发送到“黑洞”。

>在 AdGuard iOS 版上您先要在设置里启用 “高级模式”以使用 DNS 拦截。

您可以自定义添加您所要的黑名单数量。比方说，您可以使用 [AdGuard DNS 过滤器](https://github.com/AdguardTeam/AdGuardSDNSFilter)。它确实能够拦截所有 AdGuard DNS 服务器屏蔽的元素，但是使用 AdGuard DNS 过滤器的话，您还可以使用任何其它 DNS 服务器。此外，这样您可以添加更多过滤器或创建自定义排除项规则。上述的功能都不可能通过简单的 "使用拦截 DNS 服务器" 设置来实现。

>您可以[在这里](https://filterlists.com/)找到几百个不同的 DNS 黑名单。
<a id="compare"></a>
### DNS 过滤与网络层面过滤的对比

网络过滤是我们所说的 AdGuard 独立应用程序处理网络流量的 "常规 "方式，因此得名。您可以阅读[这篇文章](https://kb.adguard.com/en/general/how-ad-blocking-works)回顾往期内容。

首先，我们要提到一点，使用 AdGuard 的话，您不需要二选一。您可以一起使用常规网络层面过滤和 DNS 过滤。不过，还是要明确分出它们俩的区别。DNS 过滤不仅有其独特优点，但也有些缺点：

**DNS 过滤的优点：**
1. 在一些平台上 DNS 过滤是唯一一个涉及全系统的过滤方式。比方说，在 iOS 上只有 Safari 浏览器支持内容拦截。为了拦截其它内容，用户只可以用 DNS 过滤。
2. 有些跟踪方式，比如 [CNAME 跟踪](https://adguard.com/zh_cn/blog/cname-tracking.html)，只可以通过 DNS 过滤被拦截。
3. 处理 DNS 请求是您可以拦截广告或跟踪器的最早阶段。这样您可以节省点电池寿命及流量。

**DNS 过滤的缺点：**

1. DNS 过滤是一种“暴力过滤法”。意思是 DNS 过滤不会移除拦截广告后留下的白空，或让您使用自定义过滤方式。通过 DNS 过滤无法拦截很多更复杂的广告（或者说，可以拦截，但只能通过阻止被用于其他目的的整个域名来实现）。
2. 我们无法知道 DNS 请求的来源。这意味着，在 DNS 层面过滤，您无法区分不同应用程序。这个会损害统计数据，并且不允许我们创建针对特定的应用程序过滤规则。
<img src="https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/dns_diff.jpg" style="max-width: 550px; border: 1px solid #efefef; padding: 2px;" />
<p align="center"><i>DNS 与网络层面过滤的区别</i><p>


我们推荐在网络过滤的基础上再使用 DNS 过滤，而不是完全代替它。
