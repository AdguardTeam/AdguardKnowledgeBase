---
title: 'Problems caused by using a Restricted Mode profile'
published: true
taxonomy:
    category:
        - docs
---


The owners of phones, tablets, or TVs running the Android 7+ operating system might face the problem caused by using **a profile with Restricted Mode**. If you have such a profile, **AdGuard**, like other applications that use VPN, gets restrictions on selective filtering of VPN traffic. As a result, AdGuard cannot launch protection in a **local VPN mode**. Also, one of the reasons for this situation may be using **Dual app/Dual messenger profile** on your device. Below are described the recommendations that you can apply when this problem occurs.

### Problem solution options

You have three ways to solve the issue:

#### Option 1

- #### Grant permissions to AdGuard using [ADB](https://developer.android.com/studio/command-line/adb) (*Android Debug Bridge*):

> Available on [AdGuard v3.5 Nighty 6](https://static.adguard.com/android/nightly/adguard-3.5.33.apk) and [above](agrd.io/android_nightly)

1. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) adb; 

> Activate **developer mode** and enable **USB debugging** if its necessary:
> - Open the **Settings** application on your phone;
> - Go to **System** section (last item in the settings menu). In this section find sub-item **About phone**;

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/developermode1en.png" width="600">

> - Click on the **Build number** line 7 times. After that, you will receive a notification that **You are now a developer** (If necessary, enter an unlock code for the device);

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/developermode2en.png" width="600">

> - Open **System Settings** > **Developer Options** > Scroll down and enable **USB debugging** > Confirm debugging is enabled in the window **Allow USB debbuging** after reading the warning carefully.

<img src="https://cdn.adguard.com/public/Adguard/screenshots/android/developermode3en.png" width="600">

2. Connect your device to a computer;
3. Open **the command line** (*Cmd.exe*)/**Terminal** (if you are using MAC OS);
4. Enter the command `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` and press **Enter**.

#### Option 2

- #### Remove a *restricted user account*;

#### Option 3

- #### Use AdGuard in *HTTP proxy mode* (*AdGuard Settings > Network > Filtering algorithm HTTP proxy*);

### LG and Samsung devices

Owners of **LG** or **Samsung** phones may also encounter a similar issue. It can be caused by using **Dual app/Dual messenger** function (which automatically creates a restricted profile).
To solve this issue, you need to disable this feature.

#### Samsung

- Open **Settings**;
- Press **Advanced**;
- Scroll down, and then press **Dual messenger**;
- Disable the **Dual messenger** for all applications;
- Lock the device for 5 minutes;
- Unlock the screen and try again to create the VPN profile.

#### LG

- Open **Settings**;
- Choose **General** tab;
- Scroll down, and then press **Dual app**;
- Remove all applications from the list;
- Reboot your device.