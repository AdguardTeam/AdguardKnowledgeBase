---
title: 'local.adguard.org 域名是用来干什么的？'
taxonomy:
    category:
        - docs
visible: true
---

Windows，Mac 和 Android 的 AdGuard 用户可能会注意到 AdGuard 在每个网页上添加了一个小脚本，该脚本是从 `local.adguard.org` 这个域名加载的。

### 用于应用修饰规则的虚拟的域名

首先，不用担心，这不是一个真实的域名，实际上并没有具有该名称的真实服务器。这个域名是用于对网页应用外观过滤，但一切都在您的设备上本地完成，无需连接到任何服务器。

### 技术说明

但是，这是怎么回事，为什么要这样做？请阅读以下技术说明
1. AdGuard 是一个网络级内容阻止程序，因此它不能简单地将自定义 JavaScript 和 CSS 添加到网页中，例如浏览器扩展程序的操作。但是，这样做对于高质量的内容拦截至关重要。
2.为了做到这一点，adguard注入了一个看起来像这样的“内容脚本”：`<script src ="https://local.adguard.org/.../content-script.js">` 这个“内容脚本”会处理 CSS 过滤，隐藏或删除网页中的广告内容。
3. `local.adguard.org` AdGuard 在网络级别拦截到域IP 地址的连接并在本地进行处理。这就是为什么该域具有多年不变的 “静态” IP 地址。
**为什么我们需要使用真实的 IP 地址呢？**

* 我们不能使用 `127.0.0.1`，因为浏览器不接受。
* 可以使用私有子网中的一些 IP 地址，但是该解决方案具有两个弊端
    * 首先，很有可能与现有的 Intranet 服务冲突并破坏对其的访问
    * 其次，一些DNS服务器可能会认为这是DNS重新绑定的攻击，并拒绝回应 `local.adguard.org`

### 验证

这很容易验证。如果您禁用 AdGuard，您会发现根本无法建立连接，local.adguard.org 因为没有具有该地址的服务器 只需在 AdGuard 被禁用时尝试在浏览器中打开它。
