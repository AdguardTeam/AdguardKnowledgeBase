---
title: '设置指南'
taxonomy:
    category:
        - docs
---



## 我们的 IP 地址

* [默认](#default)
* [家庭保护](#family)
* [无过滤](#nonfiltering)


<a id="default"></a>

**默认**

使用这些服务器来阻止广告、跟踪器和网络钓鱼网站。

IPV4:

_94.140.14.14_

_94.140.15.15_

IPV6:

*2a10:50c0::ad1:ff*

*2a10:50c0::ad2:ff*

DNSCrypt:

*sdns://AQIAAAAAAAAAFDE3Ni4xMDMuMTMwLjEzMDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20*

DNS-over-HTTPS:

*https://dns.adguard.com/dns-query*

DNS-over-TLS:

*dns.adguard.com*


<a id="family"></a>

**家庭保护**

使用这些服务器来阻止广告、跟踪器、网络钓鱼和成人网站，并在您的浏览器中强制执行安全搜索。

IPV4:

_94.140.14.15_

_94.140.15.16_

IPV6:

*2a10:50c0::bad1:ff*

*2a10:50c0::bad2:ff*

DNSCrypt:

*sdns://AQIAAAAAAAAAFDE3Ni4xMDMuMTMwLjEzMjo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ*

DNS-over-HTTPS:

*https://dns-family.adguard.com/dns-query*

DNS-over-TLS:

*dns-family.adguard.com*


<a id="nonfiltering"></a>

**无过滤**

"无过滤" DNS 服务器提供安全可靠的连接，但它们不会像“默认”和“家庭保护”服务器那样过滤任何内容。 请不要使用它们，除非您知道自己在做什么。 

IPV4:

*94.140.14.140*

*94.140.14.141* 

IPV6:

*2a10:50c0::1:ff*

*2a10:50c0::2:ff*

DNSCrypt:

*sdns://AQcAAAAAAAAAFDE3Ni4xMDMuMTMwLjEzNjo1NDQzILXoRNa4Oj4-EmjraB--pw3jxfpo29aIFB2_LsBmstr6JTIuZG5zY3J5cHQudW5maWx0ZXJlZC5uczEuYWRndWFyZC5jb20*

DNS-over-HTTPS:

*https://dns-unfiltered.adguard.com/dns-query*

DNS-over-TLS:

*dns-unfiltered.adguard.com*


## 设置指南

* [Windows 10 设置指南 ](#win10)
* [Windows 8/8.1 设置指南 ](#win8)
* [Windows 7 设置指南 ](#win7)
* [Windows Vista 设置指南 ](#vista)
* [Windows XP 设置指南 ](#xp)
* [macOS 设置指南 ](#macos)
* [Android 设置指南 ](#android)
* [iOS 设置指南 ](#ios)
* [Routers 设置指南 ](#router)
* [Ubuntu 设置指南 ](#ubuntu)
* [DNSCrypt](#dns)

<a id="win10"></a>

### Windows 10

1. 通过「开始」菜单或 Windows 搜索打开「控制面板」 

2. 先转到「网络和 Internet」，然后转到「网络和共享中心」 

3. 在屏幕左侧找到「更改适配器设置」并点击它

4. 选择您的活动连接，右键点击它并选择「属性」 

5. 在列表中找到「Internet 协议版本 4 (TCP/IP)」，选择它，然后再次单击「属性」 

6. 选择「使用下面的 DNS 服务器地址」并输入以下内容：

>94.140.14.14 

>94.140.15.15 

用于“默认”服务器；

>94.140.14.15

>94.140.15.16 

用于“家庭保护”服务器。

<a id="win8"></a>

### Windows 8/8.1

1. 将鼠标光标移动到屏幕的底部或右上角并选择齿轮图标进行设置，然后单击「控制面板」

2. 点击「网络和 Internet」->「网络和共享中心」

3. 点击屏幕左侧的「更改适配器设置」

4. 选择您的活动连接，右键单击它并选择「属性」

5. 突出显示「Internet 协议版本 4 (TCP/IP)」并再次单击「属性」（如果您使用 IPv6，则与「Internet 协议版本 6 (TCP/IP)」相同） 

6. 选择「使用下面的 DNS 服务器地址」并输入以下内容： 
 
 
>94.140.14.14 

>94.140.15.15 

用于“默认”服务器；

>94.140.14.15

>94.140.15.16 

用于“家庭保护”服务器。

<a id="win7"></a>

### Windows 7

1. 点击「开始」菜单，选择「控制面板」

2. 点击「网络和 Internet」->「网络和共享中心」

3. 点击屏幕左侧的「更改适配器设置」

4. 选择您的活动连接，右键点击它并选择「属性」

5. 突出显示「Internet 协议版本 4 (TCP/IP)」并再次单击「属性」（如果您使用 IPv6，则与「Internet 协议版本 6 (TCP/IP)」相同）

6. 选择「使用下面的 DNS 服务器地址」并输入以下内容：
 
 
>94.140.14.14 

>94.140.15.15 

用于“默认”服务器；

>94.140.14.15

>94.140.15.16

用于“家庭保护”服务器。

<a id="vista"></a>

### Windows Vista

1. 点击「开始」菜单，选择「控制面板」

2. 点击「网络和 Internet」，然后点击「网络和共享中心」，然后打开「管理网络连接」 

3. 选择您的活动连接，右键单击其图标以调用菜单，然后单击「属性」 

4. 向下滚动并突出显示「Internet 协议 (TCP/IP)」

5. 再次点击「属性」

6. 选择「使用下面的 DNS 服务器地址」并输入以下内容： 
 
>94.140.14.14 

>94.140.15.15 

用于“默认”服务器； 

>94.140.14.15

>94.140.15.16 

用于“家庭保护”服务器。 

<a id="xp"></a>

### Windows XP

1. 通过「开始」菜单 ->「设置」打开「控制面板」 

2. 点击控制面板菜单中的「网络连接」 

3. 从「网络连接」窗口双击您的活动连接 

4. 点击「属性」按钮 

5. 选择「Internet 协议 (TCP/IP)」并再次点击「属性」 

6. 选择「使用下面的 DNS 服务器地址」并输入以下内容： 
 
>94.140.14.14 

>94.140.15.15 

用于“默认”服务器； 

>94.140.14.15

>94.140.15.16 

用于“家庭保护”服务器。 

<a id="macos"></a>

### macOS

1. 请点击苹果图标并前往「系统偏好设置」

2. 点击「网络」

3. 在您的清单里选择第一个连接并点击「高级」

4. 选择 DNS 标签并在 DNS 服务器清单里输入以下的地址：
 
>94.140.14.14 

>94.140.15.15  

用于“默认”服务器； 

>94.140.14.15

>94.140.15.16 

用于“家庭保护”服务器。

<a id="android"></a>

### Android

> #### 为 Wi-Fi 连接设置 AdGuard DNS：

1. 在 Android 菜单主屏幕上，点击「设置」。 
2. 点击菜单上的「Wi-Fi」。 屏幕将显示列出所有可用网络。 
3. 长按您连接的网络，然后点击「修改网络」。 
4. 在某些设备上，您可能需要选中「高级」框以查看更多设置。 要调整您的 Android DNS 设置，您需要将 IP 设置从 «DHCP» 切换到 «静态»。 
5. 将 «DNS 1» 和 «DNS 2» 值更改为以下设置： 
 
>94.140.14.14 

>94.140.15.15 

用于“默认”服务器； 

>94.140.14.15

>94.140.15.16

用于“家庭保护”服务器。 

>#### 为移动网络连接设置 Adguard DNS (Android 9+)

在 Android 9 版本及以上, 您可以按如下方式配置 AdGuard DNS：

1. 打开安卓「设置」。
2. 「网络和互联网」 > 「高级」。 
3. 选择「私密 DNS」部分。 
4. 将此地址输入到「私密 DNS 提供商主机名」中： 
> dns.adguard.com

<a id="iOS"></a>

### iOS

1. 在主屏幕上点击设置

2. 在左侧的菜单里选择「Wi-Fi」（无法为移动网络配置 DNS）

3. 点击当前连接的网络

4. 在 DNS 字段里输入我们的 DNS 地址：
 
>94.140.14.14 

>94.140.15.15 

用于“默认”服务器；

>94.140.14.15

>94.140.15.16 

用于“家庭保护”服务器。 

<a id="router"></a>

###  路由器

1. 打开您的路由器的偏好设置

一般您可以在浏览器输入 URL（比如，**http://192.168.0.1/** 或 **http://192.168.1.1/**） 以打开路由器设置。您将会需要输入密码。如您忘记密码，您可以按路由器上的按钮以重置密码。有些路由器具有特定的应用程序。在这种情况下，该应用程序应该已经安装在您的电脑上。

2. 找到 DNS 设置
在允许输入两或三数组的字段查看 DNS，每个数组分成四小组，每一小组包括一到三个数字。

3.输入我们的 DNS 服务器地址
 
>94.140.14.14 

>94.140.15.15 

用于“默认”服务器；

>94.140.14.15

>94.140.15.16 

用于“家庭保护”服务器。

<a id="ubuntu"></a>

### Ubuntu

1. 点击网络图标（默认在右上面板）并点击「编辑连接」（Edit Connections）以打开「网络连接管理器」（Network Connections Manager）

2. 找到您的连接的名称，突出显示它并点击「编辑」（Edit）

3. 然后请您点击「IPv4 设置」（IPv4 Settings）标签并将方法（Method）改成「仅自动（DHCP）地址」（Automatic (DHCP) addresses only）

4. 在「DNS 服务器」（DNS Servers）字段里输入我们 DNS 服务器的 IP 地址，以逗号分隔：
 
>94.140.14.14 

>94.140.15.15 

用于“默认”服务器；

>94.140.14.15

>94.140.15.16 

用于“家庭保护”服务器。

<a id="dns"></a>
### 用于 AdGuard DNS 的 DNSCrypt

* [设置指导](https://dnscrypt.info/implementations/) 


有可能当您配置 DNSCrypt 时，您需要 **dnscrypt-resolvers.csv** 文件的信息。
您可以[在这里](https://download.dnscrypt.info/dnscrypt-resolvers/v2/)找到所有的信息。

