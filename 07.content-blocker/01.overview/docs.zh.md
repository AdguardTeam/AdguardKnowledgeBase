---
title: 综述
taxonomy:
    category:
        - docs
---

有人可能在项，既然已经存在 [AdGuard for Android](https://adguard.com/en/adguard-android/overview.html)，为什么还需要其它应用？那让我们来看看为什么。

由于 Google Play 的商店策略所限，导致不能引入成熟的广告拦截应用。Google Play [禁止](https://adguard.com/en/blog/google-removes-adguard-android-app-google-play.html) ‘那些[拦截或干扰](https://www.androidpolice.com/2016/03/01/google-explicitly-bans-ad-blockers-from-the-play-store-except-all-those-ad-blocking-web-browsers-apparently/) 其它显示广告应用的应用’。

作为替代，Google 给开发者提供了内容拦截 API。其有相当严格的局限性。当前，仅有两个浏览器支持此 API：Yandex Browser 和 Samsung Internet 浏览器。

其它 AdGuard 产品支持复杂的过滤规则，不涉及到此 API。从而使 AdGuard Content Blocker 的广告拦截能力远低于 AdGuard for Android。例如：

<img src="https://cdn.adguard.com/public/Adguard/kb/AdGuard_Content_Blocker/Main_screen.png" width="400" />

为了适合政策框架，我们专门设计了一款单独的免费应用，即 [AdGuard Content Blocker](https://play.google.com/store/apps/details?id=com.adguard.android.contentblocker) — 有限范围内的最佳选择。当然，它有某些限制：

1. AdGuard Content Blocker 仅工作于那些支持拦截内容技术的浏览器。当前有两个：Yandex Browser 和 Samsung Internet browser。 
2. 即使使用了现有技术，其能力也相当有限。本应用仅具备基本功能，很难与我们的主产品相提并论。

但 AdGuard Content Blocker 可以很好的完成某些事情：其有用 20 种语言过滤器，您可精细调整通用过滤器以按需过滤您所访问网站上的广告。用户可通过设置按需配置首选过滤器。

AdGuard Content Blocker 是一款开源应用，其源码可用于 [GitHub](https://github.com/AdguardTeam/ContentBlocker)。您通过本应用可有安全愉快的浏览体验。 

不过如您需要更多功能的广告拦截应用，请[从我们的网站](https://adguard.com/adguard-android/overview.html)下载 AdGuard for Android 。
