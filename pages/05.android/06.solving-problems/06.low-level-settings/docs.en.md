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

This setting was developed specifically for the South Korean users who used to face the following problem — the *"Samsung Pay"* service doesn’t work on devices with running VPN. AdGuard, in its turn, uses Local VPN to filter traffic and this mode is on by default. 

This is the reason why the South Korean users had to disable AdGuard when making payments with *"Samsung Pay"*. But fortunately, now it became possible to avoid such difficulties by activating the **"pref.samsungpay.autopause.enable"** feature. 

So, what process does this feature initiate? If the option is enabled, AdGuard automatically pauses its work as soon as a user opens the *"Samsung Pay"* app. But once the app is closed, AdGuard runs again after a while. 

Let's see how it works.

![](2018_07_20_17_10_22-_online-video-cutter.com_.gif?resize=600)

**Please note:** this feature will work just in case VPN filtering mode is chosen in AdGuard settings — if another mode is being used, AdGuard will function without any interruptions.

And here is a feature description for the Korean-speaking users.

**pref.samsungpay.autopause.enable**

이 설정은 특정 문제가 있는 한국인들을 위해 개발되었습니다 —  "삼성 페이" 서비스는 VPN을 실행 중인 기기에서 작동되지 않습니다. AdGuard의 경우, 로컬 VPN을 이용해서 트래픽을 필터링하며 이 모드는 기본적으로 켜져 있습니다.

한국 사용자들은 "삼성 페이"로 결제해야 할 때 일일이 AdGuard를 꺼야 했습니다. 하지만 이 기능을 키면 그럴 필요가 없습니다.

이 기능은 어떻게 작동될까요? 만약 **"pref.samsungpay.autopause.enable"** 옵션이 켜져 있다면, AdGuard는 사용자가 "삼성 페이" 앱을 켠 상태일 경우 자동으로 중지됩니다. 그리고 앱이 닫혔다면, AdGuard는 다시 정상적으로 작동됩니다.

**참고:** 이 기능은 AdGuard 설정에서 VPN 필터링 모드가 켜져 있을 때만 작동합니다 — 다른 모드를 사용한다면, AdGuard는 정상적으로 작동할 것입니다.
