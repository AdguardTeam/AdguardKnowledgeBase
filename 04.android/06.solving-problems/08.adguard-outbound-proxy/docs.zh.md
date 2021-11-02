---
title: '如何设置外出代理'
taxonomy:
    category:
        - docs
visible: true
---

* [如何同时使用 AdGuard 和 Tor ](#tor)
* [如何同时使用 AdGuard 与 PIA（Private Internet Access）](#pia)
* [如何同时使用 AdGuard 和 TorGuard](#torguard)
* [如何同时使用 AdGuard 和 NordVPN](#nordvpn)
* [如何同时使用 AdGuard 和 Shadowsocks](#shadowsocks)
* [限制](#limitations)

这篇文章为用户讲述如何设置一些主流的代理，让它们与 AdGuard 一起运行。
<a name="tor"></a>
### 如何同时使用 AdGuard 和 Tor


1. 请您打开 AdGuard 并前往「**设置**」--> 「**网路**」-->「**代理**」。打开[谷歌商店](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess)，或者点击「配置 Tor® 整合」以下载  "Orbot: Proxy with Tor"。
2. 打开 Orbot  并在应用程序的首页点击「**开启**」按钮。
3. 返回 AdGuard 的**代理设置**页面。
4. 点击「配置 Tor® 整合」按钮。
5. 所有必填的字符串将会被预填写：

字符串      |  数值
-------    | --------- 
代理分类 | *SOCKS4* 或 *SOCKS5*
代理主机 | *127.0.0.1*
代理端口 | *9050*

或您可以点击「**添加代理**」并手动输入数值。然后设置 Orbot 代理为默认代理。

6. 开启 AdGuard 保护。

> 请注意，AdGuard 现在会将所有流量通过 Orbot 代理发送。如您禁用 Orbot 代理，那么您在 AdGuard 设置中禁用外出代理设置前，互联网连接将不可用。
<a name="pia"></a>
### 如何同时使用 AdGuard 和 PIA（Private Internet Access）
*假设您已是 PIA VPN 的客户，且已将它安装在您的设备上*
1. 打开 AdGuard 并前往「**设置**」--> 「**网路**」-->「**代理**」。
2. 点击「**添加代理**」按钮并输入以下的数据 
   
字符串   |  数值
------- | --------- 
代理分类 | *SOCKS5* 
代理主机 | *proxy-nl.privateinternetaccess.com*
代理端口 | *1080*
	
3. 您还需要输入「**用户名/密码**」字符串。以完成操作，请您在 PIA 官网上登录[客户管理面板](https://www.privateinternetaccess.com/pages/client-sign-in)。在**生成 PPTP/L2TP/SOCKS 密码**部分下面点击「**生成密码**」按钮。您将会看到一串开始于 "x" 的用户名和随机密码。将它们输入到 AdGuard「**用户名**」和「**密码**」相应的空白处。
4. 勾选此代理以设置它为默认代理。然后点击「**保存**」。
5. 启用 AdGuard 保护。
<a name="torguard"></a>
### 如何同时使用 AdGuard 和 TorGuard
*假设您已是  TorGuard 的客户，且已将它安装在您的设备上*
1. 打开 AdGuard 并前往「**设置**」--> 「**网路**」-->「**代理**」。
2. 点击「**添加代理**」按钮并输入以下数据：

字符串     |  数值
-------    | --------- 
代理分类 | *SOCKS5* 
代理主机 | *proxy.torguard.org* 或 *proxy.torguard.io*
代理端口 | *1080* 或 *1085* 或 *1090*	

3. 请在「**用户名**」和「**密码**」的相应空白处输入您的代理名称，以及您在 TorGuard 注册选择的代理密码。
4. 勾选此代理以设置它为默认代理。然后点击「**保存**」。
5. 开启 AdGuard 保护。
<a name="nordvpn"></a>
### 如何同时使用 AdGuard 和 NordVPN
1. 打开 AdGuard 并前往「**设置**」--> 「**网路**」-->「**代理**」。
2. 点击「**添加代理**」按钮并输入以下数据：

字符串      |  数值
-------    | --------- 
代理分类 | *SOCKS5* 
代理主机 | *除了“混淆服务器”以外，任何一个[列表内](https://nordvpn.com/servers/)的服务器*
代理端口	 | *1080*

3. 在「**用户名**」和「**密码**」处输入您的 NordVPN 的用户名和密码。
4. 勾选此代理以设置它为默认代理。然后点击「**保存**」。
5. 开启 AdGuard 保护。
<a id="shadowsocks"></a>
### 如何同时使用 Adguard 和 Shadowsocks
*假设您已是  Shadowsocks 的客户，且已将它安装在您的设备上*

**请注意：在您开始设置前，请将 Shadowsocks 应用程序从过滤的应用程序列表移除（「AdGuard」--> 「应用管理」--> 「Shadowsocks」--> 「禁用保护」）以避免运行错误。**

1. 打开 AdGuard 并前往「**设置**」--> 「**网路**」-->「**代理**」。
2. 点击「**添加代理**」按钮并输入以下数据：

字符串      |  数值
-------    | ---------
代理分类 | *SOCKS5*
代理主机 | *127.0.0.1*
代理端口 | *1080*

3. 点击「**选择并保存**」
<a name="limitations"></a>
### 限制

请注意，有个因素可能会阻止一些特定的流量通过外出代理路由。AdGuard 只重新发送经过它的流量。基本上，也就是在「应用管理」里开启**广告拦截**的应用程序的流量。
