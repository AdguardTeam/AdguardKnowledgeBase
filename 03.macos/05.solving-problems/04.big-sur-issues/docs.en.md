---
title: 'Issues specific to macOS 11 Big Sur'
taxonomy:
    category:
        - docs
visible: true
---

The next version of macOS, **Big Sur**, is scheduled for release in late 2020, but its beta is already available. And it already causes some problems to many applications, AdGuard not being an exception. In this article we go over the known issues and possible ways to solve them.

* [Compatibility with local proxies](#local-proxies)
* [Using "Automatic proxy" filtering mode](#automatic-proxy)
* [Enabling Kernel Extension in Big Sur](#kernel-extension)
* [VPN apps with legacy API](#legacy-api)


<a id="local-proxies"></a>

## Compatibility with local proxies

Any remote (non-local) proxy will work normally in Big Sur and doesn't require any additional actions from you. But with a local proxy (localhost), you have to remove it from System settings and configure it in AdGuard.

To configure an upstream proxy in AdGuard for Mac in Big Sur, you need to go to *AdGuard menu -> Advanced -> Advanced Settings...*. Click on the *Value* area of the `upstream.proxy` setting to configure a proxy.

<img src="https://cdn.adguard.com/public/Adguard/kb/BigSur/problems/proxy_en.png" style="max-width: 650px;">

Enter a string that looks like `scheme://user:password@host:port`, where

* `scheme` is either `http`, `https`, `socks4` or `socks5`, depending on your proxy type.

>If you use `socks5` proxy type, set the value of the `upstream.proxy.socks5udp` setting to `true` to make AdGuard route UDP traffic to the proxy server.

* `user` and `password` are corresponding username and password of your proxy (if needed). Ignore either or both when not applicable
* `host` is the IP address of your proxy server 
* `port` is the desired port number to be used by the proxy server

>Example: `socks5://localhost:6322` will configure a SOCKS5 local proxy that listens to port 6322 and doesn't require a username or a password.

Click *Apply* to make AdGuard route all traffic that went through it to the configured proxy server.

### Example 1: Configuring an upstream Shadowsocks proxy

Here's an example of how to configure an upstream proxy for [Shadowsocks](https://shadowsocks.org/en/index.html).

First of all, you need a working server side for your proxy. Most likely, to set it up, you would use a JSON file like this (`server` and `password` values were chosen randomly here):

```
{
    "server":"111.222.333.444",
    "server_port":8388,
    "local_port":1080,
    "password":"barfoo!",
    "timeout":600,
    "method":"chacha20-ietf-poly1305"
}
```

>You can find more information about how to get started on [Shadowsocks website](https://shadowsocks.org/en/config/quick-guide.html).

Then you'd have to install Shadowsocks client on your Mac. Make sure that you select 'Manual Mode' in its settings! AdGuard won't work if you select 'Auto Mode' or 'Global Mode'.

<img src="https://cdn.adguard.com/public/Adguard/kb/BigSur/problems/shadowsocks.png" style="max-width: 350px;">

Now go to *AdGuard menu -> Advanced -> Advanced Settings...* and set the *Value* area of the `upstream.proxy` setting to `socks5://localhost:1080`. Notice that you need to use "local_port" value from the JSON file here.

Because Shadowsocks uses SOCKS5, you also need to set the value of the `upstream.proxy.socks5udp` setting in AdGuard Advanced Settings to `true` to make AdGuard route UDP traffic to the proxy server.

### Example 2: Configuring an upstream Surge proxy

Once you install Surge proxy client, you need to pay attention to several things to ensure it doesn't conflict with AdGuard.

First, check that **System Proxy** in the bottom right corner is disabeld. Otherwise, Surge won't work with AdGuard. On the other hand, **Enhanced Mode** can be enabled without causing a conflict.

<img src="https://cdn.adguard.com/public/Adguard/kb/BigSur/problems/shadowsocks.png" style="max-width: 650px;">

Now go to *AdGuard menu -> Advanced -> Advanced Settings...* and set the *Value* area of the `upstream.proxy` setting to `socks5://localhost:6153` or `http://localhost:6152`, depending on which type of proxy you want to use. Notice that you need to use **port** value that's indicated in the **Events** area of the **Activity** tab in your Surge client. 

If you chose SOCKS5 protocol, you also need to set the value of the `upstream.proxy.socks5udp` setting in AdGuard Advanced Settings to `true` to make AdGuard route UDP traffic to the proxy server.


<a id="automatic-proxy"></a>

## Using "Automatic proxy" filtering mode

If you face problems in Big Sur which can't be resolved by any of the methods above, you can try switching AdGuard to *Automatic proxy* mode.

1) Open AdGuard's menu.
2) Select *Preferences...*. 
3) Switch to the *Network* tab. 
4) Click the *Select Mode...* button.
5) Select *Automatic Proxy*.

<img src="https://cdn.adguard.com/public/Adguard/kb/BigSur/problems/automatic-proxy_en.png" style="max-width: 650px;">

Now AdGuard has automatically added a **.pac** file to your Mac's network settings, so that the system will consider AdGuard a proxy and try to send all traffic through AdGuard.

>Take into account that some apps may ignore this system setting and their traffic will not be filtered.


<a id="kernel-extension"></a>

## Enabling Kernel Extension in Big Sur

By default AdGuard uses Network Extension framework in Big Sur as the old Kernel Extension framework is disabled there. This can cause some compatibility problems, but to enable Kernel Extension back, you need to disable System Integrity Protection (SIP) first. To disable SIP, follow this instruction:

1) Click the *Apple symbol* in the Menu bar.
2) Click *Restart…*
3) Hold down *Command-R* to reboot into Recovery Mode.
4) Click *Utilities*.
5) Select *Terminal*.
6) Type `csrutil disable`.
7) Press *Return* or *Enter* on your keyboard.
8) Click the *Apple symbol* in the Menu bar.
9) Click *Restart…*

Now that SIP is disabled, this is how you enable Kernel Extension:

<img src="https://cdn.adguard.com/public/Adguard/kb/BigSur/problems/kernel_en.png" style="max-width: 650px;">

1) Open AdGuard's menu.
2) Select *Preferences...*. 
3) Switch to the *Network* tab. 
4) Click the *Select Mode...* button.
5) Select *Kernel Extension*.
6) Confirm that you want to switch to Kernel Extension.

>However, we only recommend using this method if everything else fails, as this may lead to unexpected issues.


<a id="legacy-api"></a>

## VPN apps with legacy API

Despite AdGuard is displayed as a VPN in system settings, it shouldn't cause any comflicts when working alongside other VPN-based apps. However, if you're using a VPN-based app that was downloaded from outside AppStore, there's a chance it uses the old VPN API and you have to exclude it from filtering:

1) Open AdGuard's menu.
2) Select *Preferences...*. 
3) Switch to the *Network* tab. 
4) Click the *Applications...* button.
5) Find the app you want to exclude and uncheck the checkbox next to it.