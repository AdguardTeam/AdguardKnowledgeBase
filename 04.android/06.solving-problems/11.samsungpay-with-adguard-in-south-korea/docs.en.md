---
title: 'How to use Samsung Pay with AdGuard in South Korea'
taxonomy:
    category:
        - docs
visible: false
---

In the 'Advanced settings' of AdGuard for Android app there is a 'Low Level Settings' section where you can see a list of various features, the activation of which requires users' special understanding. Among these features you can find one that is called **"pref.samsungpay.autopause.enable"** and that is developed specifically for the South Korean users. Please read more to learn what this feature does.

*The article is available in both languages: [Korean](#korean) and [English](#english).*

<a name="korean"></a>
## "pref.samsungpay.autopause.enable"기능에 대한 설명

이 설정은 특정 문제가 있는 한국인들을 위해 개발되었습니다 — "삼성 페이" 서비스는 VPN을 실행 중인 기기에서 작동되지 않습니다. AdGuard의 경우, 로컬 VPN을 이용해서 트래픽을 필터링하며 이 모드는 기본적으로 켜져 있습니다.

한국 사용자들은 "삼성 페이"로 결제해야 할 때 일일이 AdGuard를 꺼야 했습니다. 하지만 이 기능을 키면 그럴 필요가 없습니다.

**이 기능은 어떻게 작동될까요?**

만약 **"pref.samsungpay.autopause.enable"** 옵션이 켜져 있다면, AdGuard는 사용자가 "삼성 페이" 앱을 켠 상태일 경우 자동으로 중지됩니다. 그리고 앱이 닫혔다면, AdGuard는 다시 정상적으로 작동됩니다.

어떻게 작동하는지 봅시다.

![](pref_samsungpay_autopause_enable.gif.gif)

**참고:** 이 기능은 AdGuard 설정에서 VPN 필터링 모드가 켜져 있을 때만 작동합니다 — 다른 모드를 사용한다면, AdGuard는 정상적으로 작동할 것입니다.

<a name="english"></a>
## The "pref.samsungpay.autopause.enable" feature

As mentioned, the **"pref.samsungpay.autopause.enable"** feature is developed for the South Korean users who often face the following problem — *the "Samsung Pay" service doesn’t work on devices with running VPN.*

AdGuard, in its turn, uses Local VPN to filter traffic and this mode is on by default. This is the reason why the South Korean users have to disable AdGuard when making payments with "Samsung Pay". But fortunately, now it is possible to avoid such difficulties by activating this feature.

**So, what process does this feature initiate?**

If the **"pref.samsungpay.autopause.enable"** option is enabled, AdGuard automatically pauses its work as soon as a user opens the "Samsung Pay" app. But once the app is closed, AdGuard runs again after a while.

Let's see how it works.

![](pref_samsungpay_autopause_enable.gif.gif)

**However, there is an important thing to note:** this feature will work just in case VPN filtering mode is chosen in AdGuard settings — if another mode is being used, AdGuard will function without any interruptions.
