---
title: 'How to protect AdGuard from being disabled by the system'
published: true
taxonomy:
    category:
        - docs
---

In some cases, apps won't stay in the background ("alive" or in a sleep mode) due to Android OS optimization function, or so called "battery save mode" — this function can kill background applications. It may be inconvenient to relaunch them each time they are getting closed. To avoid the background app termination you need to follow these steps which we described separately for each manufacturer (version) of Android OS. Note that instructions for different manufacturers are mostly very similar.

**List of manufacturers with different versions of Android OS:**

* [Asus](#Asus)

* [Xiaomi](#Xiaomi)

* [Samsung](#Samsung)

* [Huawei](#Huawei)

* [Meizu](#Meizu)

* [Nokia](#Nokia)

* [Oppo](#Oppo)

* [Oneplus](#Oneplus)

* [Sony](#Sony)

* [Wiko](#Wiko)

* [Android stock devices Pixel/Nexus/Essential](#Google)

<a id="Asus"></a>

## Asus

Information on Asus devices is still far from being exhaustive so there may be more issues than listed here. We're going to update this part of the article when we know more.

Go to Settings - Power Manager - Mobile Manager - Settings - Battery-saving options - Auto-start nanager - AdGuard - uncheck.

<a id="Xiaomi"></a>

## Xiaomi

To set up AdGuard's background work for Xiaomi devices you should pay attention to Battery and Permissions.

- Tap on the *Recent tasks* button and swipe AdGuard down to make options *visible* (as presented on the screenshot):

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

 - Tap on the *Recent tasks* button, tap on the *Additional settings* icon. It should look like this:
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/samsungoptions.png" width="300">

 - Tap on *Lock Apps*:
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/samsunglockapps.png" width="300">
 
  - Tap on the lock icon 
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/samsunglock.png" width="300">
 
 <a id="Huawei"></a>
 
 ## Huawei
 
Huawei devices are the easiest to set up, it is enough to perform two simple steps to lock the application in the background so it won't be terminated by battery saving or background killer process.
 
  - Tap on the *Recent tasks* button:
  
  <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/huaweirecentapps.jpg" width="300">
  
  - Tap on the lock icon:
  
   <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/huaweilock.jpg" width="300">
   
Besides, to set up the background work of your app more effectively, you should open device settings and do the following:
   
- Go to *Advanced Settings* > then open *Battery Manager* > Set *Power plan* to "Performance";
- Then choose *Protected apps* in the *Battery Manager* and check if your app is Protected;
- Go to *Apps* in the main settings and click on AdGuard there > choose *Battery* > enable *Power-intensive prompt* and *Keep running after screen is off*;
- Then in the *Apps* section open *Settings* (at the bottom) > *Special access* > choose *Ignore battery optimization* > press *Allowed* > *All apps* > find AdGuard on the list and set it to *Deny*

And here are some specific settings for different Huawei devices:

#### Huawei P9 Plus:

Open device settings > *Apps* > *Settings* > *Special access* > choose *Ignore battery optimization* > select *Allow* for your app.

#### Huawei P20, Huawei Honor 9 Lite and Huawei Mate 9 Pro:

Open device settings > *Battery* > *App launch* > then set your app to *Manage manually* and make sure everything is turned on.
  
   
<a id="Meizu"></a> 
   
 ## Meizu
 
Meizu has almost the same approach to the background process limitations as Huawei and Xiaomi. So you can avoid disabling the background work of AdGuard and any other app by adjusting the following settings:

- Go to *Advanced Settings* > then open *Battery Manager* > set *Power plan* to "Performance";
- Then choose *Protected apps* in the *Battery Manager* and check if your app is Protected;
- Go to *Apps* section and click on AdGuard there > choose *Battery* > enable *Power-intensive prompt* and *Keep running after screen is off*;
 
<a id="Nokia"></a> 
   
 ## Nokia
 
Nokia on Android O and P disables any background process after 20 minutes if the screen is off.
 
Here is what you need to do in order to prevent killing the background process of your app:

- Go to device settings > open *Apps* > choose *See all apps*;
- Then tap on the right top corner menu > choose *Show system*;
- Find *Power saver* in the app list, select it and tap on *Force stop*. It will remain stopped until the next restart.

From now on, background apps are supposed to work smoothly and use the standard Android battery optimizations.

**There is an alternative solution for background work optimization which is more appropriate for advanced users. You will find the instructions below.**

#### Nokia 1 (Android Go) 

- Uninstall the com.evenwell.emm package via the following adb commands:

`adb shell`
`pm uninstall --user 0 com.evenwell.emm`

#### Other Nokia models 

- Uninstall the com.evenwell.powersaving.g3 package via the following adb commands:

`adb shell`
`pm uninstall --user 0 com.evenwell.powersaving.g3`

<a id="Oppo"></a> 

## Oppo

Sometimes background services are being killed (including accessibility services, which then need re-enabling) every time you turn the screen off. So far, a workaround for this is:

Go to “Security Centre” - tap on "Privacy Permissions" - "Startup manager" and allow AdGuard app to run in background.

Other solutions: 

* Pin your app to the recent apps screen
* Enable your app in the app list inside the security app’s “startup manager” and “floating app list” (com.coloros.safecenter / com.coloros.safecenter.permission.Permission)
* Turn off battery optimizations

<a id="Oneplus"></a>  

 ## Oneplus

Devices with OxygenOS on board are the most problematic, with its OS-sepcific cache cleaning and free RAM, including OS optimization. In addition, OxygenOS can interrupt the application's work if you do not use it for a while. To avoid these unwanted consequences, follow these steps: 
 
 - Go to Settings
 
 - Battery - Battery optimization
 
 - Find the app you want to keep awake all the time
 
 - Tap on it and select "Don't optimize" option
 
 - Tap "Done" to save
 
 - Open recent apps menu (as showed on this screenshot):
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/onepluslock.png" width="300">

- Lock AdGuard application:

<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/oneplusdots.png" width="300">

> On some OnePlus phones there is also a thing called App Auto-Launch and Deep Optimisation which essentially prevents apps from working in the background. Please disable it for your app.

And here is one more thing to try:
 
 - Open device settings > *Battery* > *Battery optimization* > switch to the *All apps* list (top menu) > choose your app > activate *Don’t optimize*
 
 - Open device settings > *Battery* > *Battery Optimisation* > three dots > *Advanced Optimisation* > Disable Deep Optimisation

<a id="Sony"></a>

## Sony

Sony was the first mobile OS developer to introduce non-standard background process optimization and opened Pandora’s box. It is called Stamina mode and it instantly breaks all background processes and all alarms if enabled.

**Solution:**

Go to Settings - Battery - Three dots in the top right corner - Battery optimisation - Apps - **AdGuard** - uncheck

<a id="Wiko"></a>

## Wiko

Wiko devices are definitely problematic in terms of non-standard background process optimizations and adjustments to the settings that need to be done to make apps work properly.

**Solution:**

- Go to Phone Assistant - Battery - turn off *Eco Mode*
- Go back and go to *Manual mode*
- Tap on the Gear icon on top right - Background apps whitelist > Select *AdGuard*

<a id="Google"></a>

## Android stock devices Pixel/Nexus/Essential

Android stock OS normally does not conflict with applications working in the background, but if you are facing any issues you will need to switch on the "Always on VPN" mode.

 - Go to Settings - Network and Internet
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/stocknetwork.png" width="300">

 - Tap on "VPN" and choose AdGuard
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/stockvpn.png" width="300">
 
 - Set up "Always on VPN" mode
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/stockadguard.png" width="300">
