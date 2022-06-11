---
title: 'AdGuard Home概述'
taxonomy:
    category:
        - docs
---

*  [AdGuard Home是什么](#whatis)
*  [特点](#features)
*  [如何安装](#install)
*  [与其他解决方案的比较](#compare)


<a id="whatis"></a>

## AdGuard Home是什么?

AdGuard Home是一个全网范围的，[开源](https://github.com/adguardteam/adguardhome) 软件，用于屏蔽广告&追踪以及控制你家庭网络中的所有流量。在你设置完后,它将会涵盖你的家庭WiFi网络中的所有设备，并且对此你不需要安装任何客户端软件。与此同时，它提供了一个用户友好的 Web 界面，使您可以轻松管理流量，即使是从移动设备访问。

<img src="https://cdn.adguard.com/public/Adguard/Blog/AGHome/dashboard.jpg" width="650" />

AdGuard Home作为一个DNS服务器，将跟踪域名重新路由到一个 "黑洞"，从而避免你的设备连接到这些服务器。它基于我们用于公共的[AdGuard DNS](https://adguard-dns.io/welcome.html)服务器的软件 —两者共用许多代码。


<a id="features"></a>

## 特点

AdGuard Home不仅仅是一个广告过滤器。它是一个复杂的工具，其最终目标是让你控制家庭网络中发生的一切。AdGuard Home有许多不同的特点，这里我们只介绍其中的一部分。

### 屏蔽广告和跟踪器

尽管AdGuard Home为你提供的服务远不止这些，其主要目的可以说是阻止广告和跟踪器。 它作为一个过滤的DNS服务器，你可以了解更多有关于DNS过滤的内容在这篇[知识库文章](https://kb.adguard.com/zh/dns/overview#how-does-it-work)。但与AdGuard DNS不同的是，你可以按照你的喜好自定义过滤功能：添加你自己的过滤列表，排除或阻止某些域和更多。查询日志将帮助您解决这个问题。

### 查询日志

它提供在你的网络中可能需要的各类与DNS查询有关的信息。

<img src="https://cdn.adguard.com/public/Adguard/Blog/AGHome/log.png" width="650" />

### 浏览安全

与在其他AdGuard产品中的浏览安全功能类似，它可以阻止对恶意、欺诈的和挂马网站的访问。它是一个可选项，由你决定是否启用它。

<img src="https://cdn.adguard.com/public/Adguard/Blog/AGHome/phishing.png" width="650" />


### 家长控制和安全搜索

另一种可选的模式。如果启用，它将阻止对有成人和敏感内容的网站的访问，并在可能的情况下在任何地方强制执行安全搜索。
<img src="https://cdn.adguard.com/public/Adguard/Blog/AGHome/parental.png" width="650" />


### 客户端

AdGuard Home允许您为网络中的不同设备（客户端）配置不同的规则并应用不同的设置。

<img src="https://cdn.adguard.com/public/Adguard/Blog/AGHome/clients.png" width="550" />


多个客户端可以合并进客户端组。所有这些都提供了很多灵活性：例如，你可能希望你的孩子使用一个具有一些额外保护的DNS服务器。

### 阻止特定的服务

对于每个客户端，都可以一键屏蔽和解禁特定服务（例如Twitch、Snapchat、Facebook等）。

<img src="https://cdn.adguard.com/public/Adguard/Blog/AGHome/services.png" width="650" />


### 其它特点

AdGuard Home为您提供了许多其他的功能和设置调整，但其中一些需要一定的技术知识。你可以找到更多信息[在GitHub上](https://github.com/adguardteam/adguardhome)。


<a id="install"></a>

## 如何安装

AdGuard Home可以安装在以下任何操作系统上。

* Raspberry Pi (32-bit ARMv6)
* MacOS
* Windows 64-bit
* Windows 32-bit
* Linux 64-bit
* Linux 32-bit
* FreeBSD 64-bit
* Linux 64-bit ARM
* Linux 32-bit ARMv5
* MIPS
* MIPSLE

详细的安装指南可以在[这里](https://github.com/AdguardTeam/AdGuardHome/wiki/Getting-Started)找到。开始AdGuard Home的安装过程需要最少的技术知识和对命令提示符等概念的熟悉。然而，一旦你执行了前几个步骤，你就会看到一个可视化的安装向导。

<img src="https://cdn.adguard.com/public/Adguard/Blog/AGHome/wizard.png" width="650" />


AdGuard Home也可以被安装在一个[虚拟私人服务器（VPS）](https://github.com/AdguardTeam/AdGuardHome/wiki/VPS)，从[Snap Store](https://snapcraft.io/adguard-home)下载 (对于Linux用户)，或者从一个[Docker image](https://hub.docker.com/r/adguard/adguardhome)安装。


<a  id="compare"></a>

## 与其他解决方案的比较

### 与传统广告拦截器的比较

AdGuard Home不能直接与传统的广告拦截器相提并论，因为它们有交集，但最终目的不同。传统的广告拦截器[更擅长拦截广告和跟踪器](https://adguard.com/en/blog/adguard-vs-adaway-dns66/)在任何一个特定设备上，但AdGuard Home会让你对家庭网络有一定程度的控制，这是任何广告拦截器都无法做到的。它也可以用于智能电视等设备，在这些设备上不一定能安装一个完整的广告拦截器。顺便说一句，除了AdGuard Home，在家用设备上使用广告拦截器也是绝对正常的。

### 与公共AdGuard DNS服务器的比较

运行你自己的AdGuard Home服务器，可以比使用公共DNS服务器做得更多。使用公共DNS服务器，你只能按原样使用它；相反，使用AdGuard Home，你可以：

* 选择服务器确切的阻止或不阻止什么。
* 监测你的网络活动。
* 添加你自己的自定义过滤规则。
* 最重要的是，这是你自己的服务器，你是唯一能控制的人。

### 与Pi-Hole的比较

在这一点上，AdGuard Home与Pi-Hole有很多共同之处。两者都使用 "DNS sinkholing "方法阻止广告和跟踪器，并且都允许自定义阻止的内容。

然而，AdGuard Home提供了许多开箱即用的功能，不需要安装和配置其他软件。我们希望它能简单到即使是普通用户也能以最小的努力进行设置。AdGuard Home和Pi-Hole之间的差异可以在这个表格中总结出来：

| 特点                                                                    | AdGuard Home | Pi-Hole                                                |
|-------------------------------------------------------------------------|--------------|--------------------------------------------------------|
| 屏蔽广告和跟踪器                                                         | ✅            | ✅                                                      |
| 自定义封锁列表                                                           | ✅            | ✅                                                      |
| 内置DHCP服务器                                                           | ✅            | ✅                                                      |
| 管理界面采用HTTPS                                                        | ✅            | 算是吧，但需要手动配置lighthttpd                           |
| 加密的DNS上游服务器(DNS-over-HTTPS, DNS-over-TLS, DNSCrypt)               | ✅            | ❌ (需要额外的软件)                                      |
| 跨平台                                                                   | ✅            | ❌ (非原生，仅仅通过Docker)                              |
| 作为一个DNS-over-HTTPS or DNS-over-TLS服务器运行                          | ✅            | ❌ (需要额外的软件)                                      |
| 阻止钓鱼网站和恶意软件的域名                                               | ✅            | ❌ (需要非默认的封锁列表 )                                |
| 家长控制（阻止成人域名）                                                   | ✅            | ❌                                                      |
| 在搜索引擎上强制进行安全搜索                                               | ✅            | ❌                                                      |
| 每个客户端（设备）的配置                                                   | ✅            | ✅                                                      |
| 访问设置（选择谁可以使用AGH DNS）                                          | ✅            | ❌                                                      |
