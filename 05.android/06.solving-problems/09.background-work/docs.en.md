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

* [Meizu](#Meizu)

* [Nokia](#Nokia)

* [Oneplus](#Oneplus)

* [Android stock devices Pixel/Nexus/Essential](#Google)

<a id="Xiaomi"></a>
## Xiaomi

To set up AdGuard's background work for Xiaomi devices you should pay attention to Battery and Permissions.

- Tap on the *recent tasks* button and swipe AdGuard down to make options *visible* (as presented on the screenshot):

<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/xiaomirecent.png" width="300">

- Tap on the *lock* icon. This will stop Xiaomi from closing AdGuard automatically. It should look like this:

<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/xiaomilocked.png" width="300">

- Go to *"Battery"*

- Select *"battery saver"* app 

- Find and select AdGuard

- Set up the following *"Background settings"*:

<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/xiaomirest.png" width="300">

- Go to *"Permissions"*

- Select *"Autostart"*

- Make sure that autostart function is enabled for AdGuard:

<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/xiaomiautostart.png" width="300">

<a id="Samsung"></a>

## Samsung

For Samsung devices, there is no huge need for setting up the background work, but if in your case the application is getting closed or disappears from the recent tasks after a while, do the following:

 - Tap on the "recent tasks" button, tap on the "additional settings" icon. It should look like this:
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/samsungoptions.png" width="300">

 - Tap on "Lock Apps":
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/samsunglockapps.png" width="300">
 
  - Tap on the lock icon 
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/samsunglock.png" width="300">
 
 <a id="Huawei"></a>
 
 ## Huawei
 
 Huawei devices are the easiest to set up, it is enough to perform two simple steps to lock the application in the background so it won't be terminated by battery saving or background killer process.
 
  - Tap on the recent tasks button:
  
  <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/huaweirecentapps.jpg" width="300">
  
  - Tap on the lock icon:
  
   <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/huaweilock.jpg" width="300">
   
   Also, don't forget to follow these steps:
   
- Phone settings > Advanced Settings > Battery manager > Power plan is set to Performance
- Phone Settings > Advanced Settings > Battery Manager > Protected apps – check for your app as Protected
- Phone Settings > Apps > Your app > Battery > Power-intensive prompt [x] and Keep running after screen off [x]
- Phone settings > Apps > Advanced (At the bottom) > Ignore optimisations > Press Allowed > All apps > Find your app on the list and set to Allow

#### Huawei P9 Plus:

Phone settings > Apps > Settings > Special access > Ignore battery optimisation > select allow for your app.

#### Huawei P20:

Phone settings > Battery > App launch and then set your app to “Manage manually” and make sure everything is turned on.

#### Huawei Honor 9 Lite and Huawei Mate 9 Pro:

Phone settings > Battery > Launch and then set your app to “Manage manually” and make sure everything is turned on.
   
   
<a id="Meizu"></a> 
   
 ## Meizu
 
Meizu is probably on par with Huawei and Xiaomi in their approach to background process limitations, but they get a better rank probably just because those devices are not that common on the market and thus do not cause such a pain to the developers as the aforementioned.

Adjust your settings:

- Device Settings > Advanced Settings > Battery manager > Power plan set to Performance
- Device Settings > Advanced Settings > Battery Manager > Protected apps – check your app as Protected
- Enable Device Settings > Apps > your app > Battery > Power-intensive prompt and Keep running after screen off
 
<a id="Nokia"></a> 
   
 ## Nokia
 
 Nokia on Android O and P kills any background process including sleep tracking (or any other sport tracking) after 20 minutes if the screen is off. Also when killed all alarms are stopped which renders for example any alarm clock apps useless.
 
 What need to be done:

- Go to Phone settings > Apps > See all apps.
- Tap on the right top corner menu > Show system.
- Find Power saver app in the list, select it and Force close. It will remain stopped until the next restart.
- From now on, background apps should work normally and use the standard Android battery optimizations.

Still 3rd party alarm clocks or any task scheduling of foreground tasks at a particular time won’t work. We do not have any solution for this at the moment UPDATE: in our preliminary tests it seems that force stopping or uninstalling the Power saver app also fixes alarms and starting of foreground services.

#### Nokia 1 (Android Go)

Uninstall the com.evenwell.emm package via the following adb commands:

`adb shell`
`pm uninstall --user 0 com.evenwell.emm`

#### Other Nokia models

Uninstall the com.evenwell.powersaving.g3 package via the following adb commands:

`adb shell`
`pm uninstall --user 0 com.evenwell.powersaving.g3`

<a id="Oneplus"></a>    
   
 ## Oneplus
Devices with OxygenOS on board are the most problematic, with its OS-sepcific cache cleaning and free RAM, including OS optimization. In addition, OxygenOS can interrupt the application's work if you do not use it for a while. To avoid these unwanted consequences, follow these steps: 
 
 - Go to Settings
 
 - Battery > Battery optimisation
 
 - Find the app you want to keep awake all the time
 
 - Tap on it and select "Don't optimize" option
 
 - Tap "Done" to save
 
 - Open recent apps menu (as showed on this screenshot):
 
 *On some OnePlus phones there is also a thing called App Auto-Launch which essentially prevents apps from working in the background. Please disable it for your app.*
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/onepluslock.png" width="300">

- Lock AdGuard application:

<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/oneplusdots.png" width="300">

One more thing to try:
 
 - Phone settings 
 - Battery > Battery optimization and switch to the All apps list (Top menu) > Your app > Don’t optimize

<a id="Google"></a>

## Android stock devices Pixel/Nexus/Essential

Android stock OS normally does not conflict with applications working in the background, but if you are facing any issues you will need to switch on the "Always on VPN" mode.

 - Go to Settings - Network and Internet
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/stocknetwork.png" width="300">

 - Tap on "VPN" and choose AdGuard
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/stockvpn.png" width="300">
 
 - Set up "Always on VPN" mode
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/stockadguard.png" width="300">
