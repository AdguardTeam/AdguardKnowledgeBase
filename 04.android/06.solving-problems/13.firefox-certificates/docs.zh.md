---
title: '在火狐浏览器中与信任证书相关的问题'
published: true
taxonomy:
    category:
        - docs
---

为了让 Adguard 在火狐浏览器中[成功过滤 HTTPS 流量](https://kb.adguard.com/en/general/https-filtering)，浏览器需要信任 AdGuard 证书。根据火狐浏览器的版本，您要执行以下操作。

#### 第一个方法 

> 该方法只适用于[火狐浏览器 Nightly](https://www.mozilla.org/firefox/channel/android/) v90.0a1 版本。如果您将 Beta- 和火狐浏览器稳定版升级为 v90，该方法也适用。

为了让 AdGuard 证书在火狐浏览器中受信任，请执行以下操作：
1. 打开浏览器
2. 前往「设置」> 「关于 Firefox Nightly」。

<img src="https://cdn.adguard.com/public/Adguard/kb/Firefox_cert/ff_nightly_about_cn.jpg" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">

3. 在屏幕上连续点击若干次火狐浏览器 Nightly 图标。
4. 前往「设置」>「Secret Settings」。

<img src="https://cdn.adguard.com/public/Adguard/kb/Firefox_cert/ff_nightly_secret.jpg" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">

5. 开启**使用第三方 CA 证书**（Use third party CA certificates）。

#### 第二个方法

> 仅在**有 Root 权限**的设备上有效。

1. [安装以及配置](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB；
> 在 Windows 平台上，**三星**用户最可能需要安装[此实用程序](https://developer.samsung.com/mobile/android-usb-driver.html)（Utility）。

2. 启用 **「开发者模式」** 以及开启 **「USB 调试」**：
- 在手机上打开 **「设置」**；
- 前往 **「系统」** 部分（设置菜单中最后一个部分）。点击 **「关于手机」**；
- 点击**版本号**七次。然后，您会收到**你现在已经进入开发模式**的通知（如需要的话，请输入设备的解锁密码）；

- 打开**系统设置** > **开发者选项** > 往下滑并启用 **「USB 调试」** > 仔细阅读提示后，在**允许 USB 调试**的弹窗里确认启用调试。

3. 安装[火狐](https://www.mozilla.org/en-US/firefox/releases/)浏览器（发布版本）；
4. 打开 **AdGuard 设置** > **「网络」**>**「HTTPS 过滤」**> **「安装证书至 Firefox 浏览器」** > **「为旧版本安装」**；
5. 使用 `adb shell su` 和`cd data/data/...` 打开 `data/data/org.mozilla.firefox/files/mozilla` 文件夹，找 `xxxxxxx.default` 文件并记住其名称；

6. 在指定文件夹里我们需要两个文件：
- `cert9.db`
- `key4.db`
7. 请您将这两个文件移动到安全证书发生错误的浏览器的文件夹中：
- `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.
8. 完整命令如下：
- `adb shell su`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.

如您收到**权限不足**的系统提示，请您先将指定文件移动至无权限目录。然后再将它们移动至火狐浏览器中特定的文件夹里。

完整命令的样式大体如下：

- `adb shell su`.
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download `
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download `
- `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`. 
- `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.

如果  `adb shell su` 不起作用，请先尝试使用 `adb shell`，然后再使用 `su`。
