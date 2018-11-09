---
title: 'How to protect AdGuard from being disabled by the system'
published: true
taxonomy:
    category:
        - docs
---

In some cases, apps won't stay in the background ("alive" or in a sleep mode) due to Android OS optimization function, or so called "battery save mode" — this function can kill background applications. It may be inconvenient to relaunch them each time they are getting closed. To avoid the background app termination you need to follow these steps which we described separately for each manufacturer (version) of Android OS. Note that instructions for different manufacturers are mostly very similar.

**List of manufacturers with different versions of Android OS:**

* [Xiaomi](#Xiaomi)

* [Samsung](#Samsung)

* [Huawei](#Huawei)

* [Oneplus](#Oneplus)

* [Android stock devices Pixel/Nexus/Essential](#Google)

<a id="Xiaomi"></a>
## Xiaomi

To set up AdGuard's background work for Xiaomi devices you should pay attention to Battery and Permissions.

- Tap on the *recent tasks* button and swipe AdGuard down to make options *visible* (as presented on the screenshot):

<img src="https://raw.githubusercontent.com/TheHasagi/AdguardKnowledgeBase/master/pages/05.android/06.solving-problems/09.background-work/Images/Xiaomi%20Recent%20Tasks.png" width="300">

- Tap on the *lock* icon. This will stop Xiaomi from closing AdGuard automatically. It should look like this:

<img src="https://raw.githubusercontent.com/TheHasagi/AdguardKnowledgeBase/master/pages/05.android/06.solving-problems/09.background-work/Images/Xiaomi%20locked%20app.png" width="300">

- For MIUI 10, the action menu can be invoked by a long tap on the application.

<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesRU/MIUI10_recents.png" width="300">

- Go to *"Battery"*

- Select *"battery saver"* app 

- Find and select AdGuard

- Set up the following *"Background settings"*:

<img src ="https://cloud.githubusercontent.com/assets/8577547/19349402/78d3a9a8-915b-11e6-8c7e-580b3d278433.png" width="300">

- Go to *"Permissions"*

- Select *"Autostart"*

- Make sure that autostart function is enabled for AdGuard:

<img src="https://cloud.githubusercontent.com/assets/8577547/19349511/07b27d2a-915c-11e6-9759-9703df55e36c.png" width="300">

<a id="Samsung"></a>

## Samsung

For Samsung devices, there is no huge need for setting up the background work, but if in your case the application is getting closed or disappears from the recent tasks after a while, do the following:

 - Tap on the "recent tasks" button, tap on the "additional settings" icon. It should look like this:
 
 <img src="https://raw.githubusercontent.com/TheHasagi/AdguardKnowledgeBase/master/pages/05.android/06.solving-problems/09.background-work/Images/Samsung%20Options.png" width="300">

 - Tap on "Lock Apps":
 
 <img src="https://raw.githubusercontent.com/TheHasagi/AdguardKnowledgeBase/master/pages/05.android/06.solving-problems/09.background-work/Images/SamsungLockApps.png" width="300">
 
  - Tap on the lock icon 
 
 <img src="https://raw.githubusercontent.com/TheHasagi/AdguardKnowledgeBase/master/pages/05.android/06.solving-problems/09.background-work/Images/SamsungLock.png" width="300">
 
 <a id="Huawei"></a>
 
 ## Huawei
 
 Huawei devices are the easiest to set up, it is enough to perform two simple steps to lock the application in the background so it won't be terminated by battery saving or background killer process.
 
  - Tap on the recent tasks button:
  
  <img src="https://raw.githubusercontent.com/TheHasagi/AdguardKnowledgeBase/master/pages/05.android/06.solving-problems/09.background-work/Images/HUAWEIRECENTAPPS.jpg" width="300">
  
  - Tap on the lock icon:
  
   <img src="https://raw.githubusercontent.com/TheHasagi/AdguardKnowledgeBase/master/pages/05.android/06.solving-problems/09.background-work/Images/HUAWEILOCK.jpg" width="300">
   
   <a id="Oneplus"></a> 
 ## Oneplus
Devices with OxygenOS on board are the most problematic, with its OS-sepcific cache cleaning and free RAM, including OS optimization. In addition, OxygenOS can interrupt the application's work if you do not use it for a while. To avoid these unwanted consequences, follow these steps:
 
 - Go to Settings
 
 - Battery > Battery optimisation
 
 - Find the app you want to keep awake all the time
 
 - Tap on it and select "Don't optimize" option
 
 - Tap "Done" to save
 
 - Open recent apps menu and then lock AdGuard application (as showed on this screenshot):

<img src="https://github.com/TheHasagi/AdguardKnowledgeBase/blob/master/pages/05.android/06.solving-problems/09.background-work/Images/Oneplus.png?raw=true" width="300">

<a id="Google"></a>

## Android stock devices Pixel/Nexus/Essential

Android stock OS normally does not conflict with applications working in the background, but if you are facing any issues you will need to switch on the "Always on VPN" mode.

 - Go to Settings - Network and Internet
 
 <img src="https://github.com/TheHasagi/AdguardKnowledgeBase/blob/master/pages/05.android/06.solving-problems/09.background-work/Images/Nexus%20Network%20&%20Internet.png?raw=true" width="300">

 - Tap on "VPN" and choose AdGuard
 
 <img src="https://github.com/TheHasagi/AdguardKnowledgeBase/blob/master/pages/05.android/06.solving-problems/09.background-work/Images/NexusVPN.png?raw=true" width="300">
 
 - Set up "Always on VPN" mode
 
 <img src="https://github.com/TheHasagi/AdguardKnowledgeBase/blob/master/pages/05.android/06.solving-problems/09.background-work/Images/NexusAlwaysonVPN.png?raw=true" width="300">
