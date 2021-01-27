---
title: 'How to block ads in YouTube'
taxonomy:
    category:
        - docs
visible: true
---

One of the most popular questions users ask us is: 'Is it possible to block ads in YouTube app on Android'? Unfortunately, there is no simple answer to it. In this article we will try to tell everything we know by this moment.

Due to the technical restrictions of the Android OS, there is no way to *completely* remove ads from the YouTube app. There used to exist only one complicated way that required additional actions from a user, and many would find that too troublesome. But now we've found an alternative that brings you  to it as close as possible, while getting around the Android-imposed restrictions.

## 3 ways to block ads in YouTube

### Watch YouTube in the AdGuard app (a newer way)

<img src="https://cdn.adguard.com/public/Adguard/Blog/Android/3-6/share.gif" style="border: 1px solid #efefef; max-height: 700px; max-width: 350px; padding: 2px;">

1. Open YouTube app and start the video you want to watch.
2. Tap on the *Share* button and select *AdGuard for Android* from the list of apps.

That's it! A new window with the video will open where you'll be able to watch it without being interrupted by ads.

* You can also watch YouTube in a browser and there will be no ads if you have a decent ad blocker such as AdGuard installed and enabled. Of course, it can't be compared to the pure in-app experience but it will definitely minimise the chance of seeing another annoying mid-roll ad break. 
 
### Adjust AdGuard and YouTube settings (an older way)

#### Step 1. Enable HTTPS filtering

First of all, you have to enable HTTPS filtering in AdGuard settings. It is necessary for decrypting the data sent to YouTube by its servers. To do it, simply go to Settings -> HTTPS Filtering:

 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/settings.png" width="350" />
 
 Turn on HTTPS filtering: 
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/httpsfiltering.png" width="350" />

>_Our advice is to get yourself familiar with HTTPS filtering detailed description. You can access it right from the respective section of AdGuard Settings._

**To Android 7.0+ (Nougat) users**

Sadly, HTTPS filtering capabilities in Android Nougat are limited, so in modern versions of YouTube app there will be no filtering. There are two possible solutions to this:

1. You can download the older version of Youtube from [apkmirror.com](http://www.apkmirror.com/apk/google-inc/youtube/). For example, the [11.13.56 release](http://www.apkmirror.com/apk/google-inc/youtube/youtube-11-13-56-release/) of April. In this case you will need to prohibit automatic update of Youtube app in Google Play settings.

2. If you have root access, you can add AdGuard certificate to the system in the Settings - HTTPS Filtering - Certificate status - Move to the system store.

#### Step 2. Clear the app data

The next step is to clear the Youtube app data. To do so, open Android settings, go to Application Manager, then tap on Youtube and on the "Clear storage” button:

 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/youtubestorage.png" width="350" />

This is our major problem. AdGuard can remove all ads from the app, but only if Youtube is ‘cleared’. After the device reboot or Youtube restart (restart is carried out by "swipe" and followed by the launch), it switches to another algorithm, in which some video ads will still break through.

**Thus, you will need to clear the Youtube app data at every reboot of your device (at least)**. For users with root access this process can be automated. We have added a new flag to the Low Level settings just for that. To enable it, go to Settings -> Advanced -> Low Level Settings -> find the **pref.root.clear.youtube** preference and check it:

 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/lowclear.png" width="350" />

If it is enabled, AdGuard will clear Youtube app data at the device start.

### Watch YouTube Vanced

Finally, there is the third way to watch YouTube without ads. You can try [YouTube Vanced](https://vancedapp.com) — a modded YouTube client for Android that works without displaying ads and doesn't require root access.

* So, which way to choose? It's up to you. The first two ways can be used together, if what you seek is variability in actions: you can follow an easy way and watch YouTube in the AdGuard app, or try your luck with adjusting settings and watch it in the YouTube itself. For sure, the third way is the easist one but it's only available for Android.
