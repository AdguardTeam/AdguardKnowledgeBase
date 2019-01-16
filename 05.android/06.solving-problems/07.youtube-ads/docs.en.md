---
title: 'How to block ads in Youtube app'
taxonomy:
    category:
        - docs
visible: true
---

One of the most popular questions users ask us - is it possible to block ads in YouTube app on Android? Unfortunately, there is no simple answer to it. In this article we will try to tell everything we know by this moment.

So far we haven't found a way to completely remove ads from YouTube app. At this moment, due to the nuances of Android OS there is no way to completely remove ads from the YouTube app. Each of the ways described below asks some additional actions of you, and many will find this too troublesome. We understand that, and continue monitoring the situation for a better solution, but for now we cannot guarantee that these ads will be blocked

## Instruction
### Step 1: Enabling HTTPS filtering

First of all, you have to enable HTTPS filtering in AdGuard settings. It is necessary for decrypting the data sent to YouTube by its servers. To do it, simply go to Settings -> HTTPS Filtering:

 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/settings.png" width="350" />
 
 Turn on HTTPS filtering: 
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/httpsfiltering.png" width="350" />

>_Our advice is to get yourself familiar with HTTPS filtering detailed description. You can access it right from the respective section of AdGuard Settings._

**To Android 7.0+ (Nougat) users**

Sadly, HTTPS filtering capabilities in Android Nougat are limited, so in modern versions of YouTube app there will be no filtering. There are two possible solutions to this:

1. You can download the older version of Youtube from [apkmirror.com](http://www.apkmirror.com/apk/google-inc/youtube/). For example, the [11.13.56 release](http://www.apkmirror.com/apk/google-inc/youtube/youtube-11-13-56-release/) of April. In this case you will need to prohibit automatic update of Youtube app in Google Play settings.

2. If you have ROOT access, you can add AdGuard certificate to the system in the Settings - HTTPS Filtering - Certificate status - Move to the system store.

### Step 2: Clearing the app data

The next step is to clear the Youtube app data. To do so, open Android settings, go to Application Manager, then tap on Youtube and on the "Clear storage” button:

 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/youtubestorage.png" width="350" />

This is our major problem. AdGuard can remove all ads from the app, but only if Youtube is ‘cleared’. After the device reboot or Youtube restart (restart is carried out by "swipe" and followed by the launch), it switches to another algorithm, in which some video ads will still break through.

**Thus, you will need to clear the Youtube app data at every reboot of your device (at least)**. For users with ROOT access this process can be automated. We have added a new flag to the Low Level settings just for that. To enable it, go to Settings -> Advanced -> Low Level Settings -> find the **pref.root.clear.youtube** preference and check it:

 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/lowclear.png" width="350" />

If it is enabled, AdGuard will clear Youtube app data at the device start.
