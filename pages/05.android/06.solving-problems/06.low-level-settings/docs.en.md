---
title: '  Low Level Settings guide'
taxonomy:
    category:
        - docs
visible: true
---

Inside AdGuard for Android 'Advanced settings' tab there is a 'Low Level Settings' button. Once you tap it, you will see a big list of various settings, many of which might be confusing to an average user.

**WARNING! ** Changing any of these settings without knowledge of what that particular setting does may lead to undesirable consequences! Ask our support for advice if you are in doubt about this or that setting.

Below we will try to describe what some of the most important and often-used low level settings are for.

**pref.net.exclusions**

If you tap this button, you will find a list, and each entry of this list is a package name of some application. The whole reason of this section is to whitelist any app on a level deeper than you would get using AdGuard Firewall. Traffic of apps from _pref.net.exclusions_ list will not even go through AdGuard, so it can't be modified in any way by definition.

To add an app to this list simply add a new entry with app's package name. For apps from Google Play it is really easy to determine the package name. Just open the apps page in GooglePlay and look at the address bar. The part after '**id=**' is exactly what you need to look for. For example, for YouTube app the whole link would be

**https://play.google.com/store/apps/details?id=com.google.android.youtube**

with **com.google.android.youtube** being the package name.

**HTTPS filtering preferences**

We united several settings under this category: _pref.https.apps.exclusions_, _pref.https.domains.blacklist_ and _pref.https.domains.whitelist_. They are essentially the same settings you can find in HTTPs filtering settings tab. You can find more information about them in our blog:

<https://blog.adguard.com/en/adguard-for-android-25-official/>

**pref.vpn.ipv6.bypass**

Nowadays, more and more often SMS and MMS are sent via network, and when they are, non-standard IPv6 network is often used. When we try to filter this traffic, it is not extremely unusual that we interfere with sending and even receiving MMS. If you suspect this is your case, we recommend checking the **pref.vpn.ipv6.bypass** checkbox or adding the app responsible for MMS managing to **pref.net.exclusions**.

**pref.samsungpay.autopause.enable**

This setting was developed specifically for the South Korean users in order to make AdGuard compatible with the *"Samsung Pay"* app which doesn’t work on devices with running VPN in South Korea. If you want to learn more, please read this [article](https://kb.adguard.com/en/android/solving-problems/%20samsungpay-with-adguard-in-south-korea#english).
