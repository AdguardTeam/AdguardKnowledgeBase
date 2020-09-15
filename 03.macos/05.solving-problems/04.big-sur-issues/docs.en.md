---
title: 'Issues specific to macOS 11 Big Sur'
taxonomy:
    category:
        - docs
visible: true
---

The next version of macOS, **Big Sur**, is scheduled for release in late 2020, but its beta is already available. And it already causes some problems to many applications, AdGuard not being an exception. In this article we go over the known issues and possible ways to solve them.

* [Compatibility with local proxies](#local-proxies)
* [Accepting connections to your Mac](#accepting-connections)
* [Using "Automatic proxy" filtering mode](#automatic-proxy)
* [Solving issues with SSH](#ssh)
* [Enabling Kernel Extension in Big Sur](#kernel-extension)


<a htef="local-proxies"></a>

## Compatibility with local proxies

To configure an upstream proxy in AdGuard for Mac in Big Sur, you need to go to *AdGuard menu -> Advanced -> Advanced Settings...*. Click on the *Value* area of the `upstream.proxy` setting to configure a proxy.

<img src="https://cdn.adguard.com/public/Adguard/kb/BigSur/problems/proxy_en.png" style="max-width: 650px;">

Enter a string that looks like `scheme://user:passwrod@host:port`, where

* `scheme` is either `http`, `https`, `socks4` or `socks5`, depending on your proxy type.

>If you use `socks5` proxy type, set the value of the `upstream.proxy.socks5udp` setting to `true` to make AdGuard route UDP traffic to the proxy server.

* `user` and `password` are corresponding username and password of your proxy (if needed). Ignore either or both when not applicable
* `host` is the IP address of your proxy server 
* `port` is the desired port number to be used by the proxy server

>Example: `socks5://localhost:6322` will configure a SOCKS5 local proxy that listens to port 6322 and doesn't require a username or a password.

Click *Apply* to make AdGuard route all traffic that went through it to the configured proxy server.


<a href="accepting-connections"></a>

## Accepting connections to your Mac

In Big Sur, any server from a network that's filtered by AdGuard won't be able to reach your Mac if you use it as a server (and by default AdGuard filters all traffic except for localhost). To avoid this problem you need to add to exclusions the hosts (and maybe entire subnetworks) that the connections originated from.

Go to *AdGuard menu -> Advanced -> Advanced Settings...* and click on the *Value* area of the `network.extension.route.exclude` setting.

<img src="https://cdn.adguard.com/public/Adguard/kb/BigSur/problems/connections_en.png" style="max-width: 650px;">

Enter there any IP addresses and subnetworks, separating them with commas or line breaks.


<a href="automatic-proxy"></a>

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


<a href="kernel-extension"></a>

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


<a href="ssh"></a>

## Solving issues with SSH

Network Extension framework that AdGuard is forced to use in Big Sur conflicts with some other frameworks by Apple, such as Network framework (not to be confused with *Network Extension*). As a result, any process that involves these libraries may not work correctly when AdGuard is active. One of such issues is connecting to a remote server via SSH.

To solve this problem, you can switch to [HomeBrew SSH](https://formulae.brew.sh/formula/openssh) that doesn't employ Network framework.

Alternatively, you can select a different operating mode in AdGuard: [Automatic proxy](#automatic-proxy) or [Kernel Extension](#kernel-extension).