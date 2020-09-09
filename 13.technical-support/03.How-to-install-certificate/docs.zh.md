---
title: '代理证书安装'
taxonomy:
    category:
        - docs
visible: true
---

桌面AdGuard应用程序(适用于Windows的AdGuard和适用于Mac的AdGuard)可以用作代理。这意味着您可以通过AdGuard路由其他设备的流量(全部或特定应用程序/浏览器的流量)。

>请注意，这些设备必须与已安装AdGuard的PC或Mac位于同一网络中。

无论如何，HTTP流量都会被过滤，但是要使AdGuard能够过滤HTTPS流量，您需要在连接的设备上手动安装AdGuard证书。

### 如何下载和安装证书

根据您设备的类型(Android / iOS)，请遵循以下说明之一：

#### Android

1.记下装有AdGuard的台式计算机的IP地址。

2.在要通过AdGuard路由流量的设备上，打开活动WiFi网络的高级设置。

3.将代理类型切换为手动。对于代理主机名，请输入*1)*中注明的IP地址。对于代理端口，输入在桌面AdGuard的网络设置中选择的端口。

4.使用任何浏览器访问此链接：[http://local.adguard.org/cert](http://local.adguard.org/cert)

5.单击下载按钮。

6.证书下载后，需要安装它。如果未自动打开，请点击下载的证书以打开文件。

7.在某些电话上，可能会要求您输入设备密码。这样做，然后按**确定**。证书现已安装。

#### iOS

1.记下装有AdGuard的台式计算机的IP地址。

2.在要通过AdGuard路由流量的设备上，打开活动WiFi网络的高级设置。

3.将代理类型切换为手动。对于代理主机名，请输入* 1)*中注明的IP地址。对于代理端口，输入在桌面AdGuard的网络设置中选择的端口。

4.打开Safari，转到[http://local.adguard.org/cert](http://local.adguard.org/cert)，然后点击下载。在打开的对话框中，允许网站下载配置文件。

5.打开设置-配置文件已下载，然后点击右上角的安装。输入密码并确认安装。点按完成。

6.转到设置-常规-关于**-证书信任设置**。启用**Adguard Personal CA**旁边的开关。证书现已安装。
