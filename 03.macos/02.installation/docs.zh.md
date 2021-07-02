---
title: '安装/卸载'
taxonomy:
    category:
        - docs
---
* [系统需求](#system-requirements)
* [安装过程](#installation)
* [卸载](#uninstall)
	* [进阶卸载](#uninstall-advanced)

<a id="system-requirements"></a>
## 系统需求

**操作系统版本：** macOS 10.12（64 位）或更高版本

**RAM：** 至少 2 GB

**浏览器：** Safari、Google Chrome、Opera、Yandex.Browser、Mozilla Firefox 和其他在 macOS 上可用的浏览器

**可用磁盘空间：** 120 MB
<a id="installation"></a>
## 安装过程

为了将 AdGuard macOS 版安装到您的电脑上，请您打开浏览器，在地址栏键入 _adguard.com_ 后，在打开的网页上点击**下载**即可。

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/zh/installation-1-cn.png" width="600" />

请等待 _AdguardInstaller.dmg_ 下载完成后，在 Dock 栏上已安装的文件列表里双击它的图标。

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/zh/installation-2-cn.png" width="600" />

您的操作系统将会提示您：该应用程序是从互联网下载的 App。点击**打开**。 

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/zh/installation-3-cn.png" width="400" />

桌面上将会显示 AdGuard 图标。点击**安装** 

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/zh/installation-4-cn.png" width="300" />

请等待安装程序完成安装所需要的文件。

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/zh/installation-5-cn.png" width="500" />

以使用应用程序，需要输入 macOS 账号的用户名和密码。在弹出的对话框上输入用户名和密码后，点击**好**。

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/zh/installation-6-cn.png" width="400" />

下一步，您会看到视窗确认您是否要安装从互联网下载的 App。请您点击**打开系统首选项**

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/zh/installation-7-cn.png" width="600" />

先**点按锁按钮以进行更改**，然后请您选择 **App Store 和被认可的开发者**

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/zh/installation-8-cn.png" width="500" />

您将会看到视窗确认您是否允许 AdGuard 添加代理配置：

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/zh/installation-9-cn.png" width="300" />

接着您将会看到快速安装向导。这里我们将会建议您按自己的需求来配置保护。您可以马上开始设置（**来试试吧！**）或暂时无设置需求（**先保持这样**）。

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/zh/installation-13-cn.png" width="600" />

完成啦！AdGuard 已成功安装到您的 Mac！
<a id="uninstall"></a>
## 卸载

### 一般卸载方式

首先，请您点击相应的图标以打开 'Finder'：

![](https://cdn.adguard.com/public/Adguard/En/Articles/howtodelete/finder.png)

前往**应用程序**。在列表中找到 AdGuard，右键它并选择**移到废纸篓**。

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/zh/installation-10-cn.png" width="600" />

<a id="uninstall-advanced"></a>
### 进阶卸载方式
**除非您知道如何操作或有我们技术支持专门为您推荐使用进阶方式卸载应用程序，我们不推荐您使用该方式。此外，请您先使用一般卸载方式。** 

如果一般卸载方式无效，再请您执行以下操作：
* 删除以下的 AdGuard 文件：
    * */Library/Application Support/com.adguard.mac.adguard*（文件夹）
    * *~/Library/Application Support/com.adguard.mac.adguard*（文件夹）
    * *~/Library/Preferences/com.adguard.mac.adguard.plist*（文件）

**为了执行上述步骤**，请您打开 Terminal。然后输入并执行以下的指令：

`sudo rm -R "/Library/Application Support/com.adguard.mac.adguard"`

`rm -R "~/Library/Application Support/com.adguard.mac.adguard"`

`rm ~/Library/Preferences/com.adguard.mac.adguard.plist`

* 开启  ’活动监视器’。
* 通过搜索查找 **cfprefsd** 进程。

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/zh/installation-11-cn.png" width="600" />

* 为了退出在用户态下运行的进程（不是在 root 权限运行的），请点击进程。然后在左上角点击 X。在对话窗确定要退出。 

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/zh/installation-12-cn.png" width="400" />

AdGuard 卸载完成。
