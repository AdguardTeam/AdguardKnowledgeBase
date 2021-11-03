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

#### MIUI 12.5

To let your app run successfully in the background, configure settings as follows:

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/xiaomi4en.jpg" width="300">

Go to Settings > Apps > Manage apps > AdGuard. 

- Set Autostart to "On"
- Set Battery saver to "No restrictions"

<img src="https://cdn.adguard.com/public/Adguard/kb/android/miui_en1.png" width="300">

Select the built-in Security app. Then tap the gear icon in the upper right corner to open "Special Settings". 

<img src="https://cdn.adguard.com/public/Adguard/kb/android/miui_en2.png" width="300">

Select "Boost speed".

<img src="https://cdn.adguard.com/public/Adguard/kb/android/miui_en3.png" width="300">

Then tap the "Locked apps" line. 

<img src="https://cdn.adguard.com/public/Adguard/kb/android/miui_en4.png" width="300">

Now toggle the switch opposite the AdGuard app. That’s all! You’ve successfully pinned the AdGuard app. 

#### MIUI 12

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/xiaomi4en.jpg" width="300">

Go to Settings > Apps > Manage apps > AdGuard. 

- Set Autostart to “On”
- Set Battery saver to “No restrictions”

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/xiaomi5en.jpg" width="300">

Now launch the active apps manager by swiping up from the bottom of the screen and look for the AdGuard app. 

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/xiaomi6en.jpg" width="300">

Tap and hold on it until a special menu pops up. Select a lock icon.

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/xiaomi7en.jpg" width="300">

The lock icon should appear above the app window.

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/xiaomi8en.jpg" width="300">


#### MIUI 10-11

To let your app run successfully in the background, configure settings as follows:

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/xiaomi1en.png" width="400" />

- *Settings > Battery & performance* > switch-off *Battery saver* function


<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/xiaomi2en.png" width="400" />

- Then open *App battery saver* settings > *AdGuard* > *No restrictions*

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/xiaomi3en.png" width="400" />


#### Power management

Please enable:

- *Settings > Advanced Settings > Battery manager > set *Power plan* to Performance*
- *Device Settings > Advanced Settings > Battery Manager > Protected apps* – your app needs to be Protected
- *Device Settings > Apps > your app > Battery > Power-intensive prompt* and *Keep running after screen off*
- *Settings > Additional Settings > Battery & Performance > Manage apps’ battery usage* and here:

1. Switch Power Saving Modes to Off
2. Choose the following options: *Saving Power in The Background > Choose apps > Select your app > Background Settings > No restrictions*

#### App battery saver

*Security > Battery > App Battery Saver > AdGuard > No restriction*

#### App pinning

To set up AdGuard's background work for Xiaomi devices you should pay attention to Battery and Permissions.

- Tap on the *Recent tasks* button and swipe AdGuard down to make options *visible* (as shown on the screenshot):

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


#### Galaxy S9 / S10

Battery optimization is **turned on by default**. At some unclear moments (maybe on app update, OS update?), the settings also do revert back to the defaults, forcing you to turn them off again and again.

#### Sleeping apps

Sleeping apps menu is the sniper’s nest for Samsung’s app killing policies. Make sure to follow the instructions very carefully to prevent the apps from being killed.

Checklist:

- Disable **Put unused apps to sleep**
- Disable **Auto-disable unused apps**
- Remove your app from the list of sleeping apps
- Disable background restrictions for your app

1. Start **Device care** from phone settings

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/samsung1en.png" width="400" />

2. Tap **Battery**

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/samsung2en.png" width="400" />


3. Tap the **3-dot menu** > **Settings**

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/samsung3en.png" width="400" />

4. Disable all toggles (except Notifications)
5. Tap **Sleeping apps**

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/samsung45en.png" width="400" />

6. **Wake up** all the apps using the trashcan icon

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/samsung6en.png" width="400" />

> **Note**: Make sure that Put unused apps to sleep and Auto-disable unused apps is disabled. Otherwise Samsung will put your apps back to sleep after a few days (3 by default) even if you have woken them up manually!

#### Old Samsung devices

For early Samsung devices, there is no huge need for setting up the background work, but if in your case the application is getting closed or disappears from the recent tasks after a while, do the following:

 - Tap on the *Recent tasks* button, tap on the *Additional settings* icon. It should look like this:
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/samsungoptions.png" width="300">

 - Tap on *Lock Apps*:
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/samsunglockapps.png" width="300">
 
  - Tap on the lock icon 
 
 <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/samsunglock.png" width="300">
 
 <a id="Huawei"></a>
 
 ## Huawei
 

#### App Launch on some EMUI 8, 9 and 10 devices (Huawei P20, Huawei P20 Lite, Huawei Mate 10…)

- *Phone settings* > *Battery* > *App launch* and then set your app to “Manage manually” and make sure everything is turned on.

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/huawei1en.png" width="400" />

1. *Phone settings > Battery > App launch*. This feature may or may not be available for all devices or labeled differently.

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/huawei2en.png" width="400" />

2. 2. Turn off “Manage all automatically"

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/huawei3en.png" width="400" />


3. Make sure to **ENABLE** all toggles.

Also for reliable background processes you may need to uninstall PowerGenie as detailed below.


#### EMUI 9+ devices

> Note: On some phones with EMUI 9+ (Android P+) Huawei introduced a new task killer app called PowerGenie which forces to quit all apps not whitelisted by Huawei and does not give users any configuration options. See below how to uninstall it.

Huawei is extremely inventive in breaking apps on their devices. In addition to all the non-standard power management measures described below, they introduced a new task killer app build right into EMUI 9 on Android Pie.

It is called **PowerGenie** and it kills all apps that are not on its whitelist. You cannot add custom apps on their pre-defined whitelist. This means there is no other way to fix proper app functionality on Huawei than uninstalling PowerGenie.

Unfortunately, this is a system app that can only be fully uninstalled using ADB (Android Debug Bridge) Source: [XDA](https://forum.xda-developers.com/mate-20-pro/themes/remove-powergenie-to-allow-background-t3890409).

**You need to**:

1) [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

2) Connect your phone with a data cable;

3) Enable Developer options;

4) Enable USB debugging within Developer options on your phone;

5) Run the following commands on your computer:
   
`adb shell pm uninstall --user 0 com.huawei.powergenie`

We did not yet have this confirmed but it is possible you can alternatively just disable PowerGenie in *Phone settings* > *Apps*. This setting would need to be re-applied every time you reboot your device.

> Please still follow the steps below - Huawei phones usually have multiple powersaving mechanisms.
Also, you may not have PowerGenie on your phone, but your apps may still get killed by another mechanism.

#### EMUI 6+ devices (and some EMUI 5 devices):

- *Phone settings* > *Advanced Settings* > *Battery manager* > *Power plan* set to *Performance*;
- *Phone Settings* > *Advanced Settings* > *Battery Manager* > *Protected apps* – set your app as *Protected*;
- *Phone Settings* > *Apps* > *Your app* > *Battery* > *Power-intensive prompt* `[uncheck]` and *Keep running after screen off* `[check]`;
- *Phone settings* > *Apps* > *Advanced (At the bottom)* > *Ignore optimisations* > Press Allowed > *All apps* > Find your app on the list and set to *Allow*.

#### Huawei P9 Plus:

Open device settings > *Apps* > *Settings* > *Special access* > choose *Ignore battery optimization* > select *Allow* for your app.

#### Huawei P20, Huawei Honor 9 Lite and Huawei Mate 9 Pro:

Open device settings > *Battery* > *App launch* > then set your app to *Manage manually* and make sure everything is turned on.
  
#### Huawei P20, Huawei P20 Lite, Huawei Mate 10:

*Phone settings* > *Battery* > *App launch* and then set your app to “Manage manually” and make sure everything is turned on. Also for reliable background processes you may need to uninstall PowerGenie as described above.

#### Early Huawei 

Old Huawei devices are the easiest to set up, it is enough to perform two simple steps to lock the application in the background so it won't be terminated by battery saving or background killer process.
 
  - Tap on the *Recent tasks* button:
  
  <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/huaweirecentapps.jpg" width="300">
  
  - Tap on the lock icon:
  
   <img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/android/huaweilock.jpg" width="300">
   
Besides, to set up the background work of your app more effectively, you should open device settings and do the following:
   
- Go to *Advanced Settings* > then open *Battery Manager* > Set *Power plan* to "Performance";
- Then choose *Protected apps* in the *Battery Manager* and check if your app is Protected;
- Go to *Apps* in the main settings and click on AdGuard there > choose *Battery* > enable *Power-intensive prompt* and *Keep running after screen is off*;
- Then in the *Apps* section open *Settings* (at the bottom) > *Special access* > choose *Ignore battery optimization* > press *Allowed* > *All apps* > find AdGuard on the list and set it to *Deny*.


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
