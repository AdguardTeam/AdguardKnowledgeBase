---
title: 'Problems caused by using a Restricted Mode profile'
published: true
taxonomy:
    category:
        - docs
---


The owners of phones, tablets, or TVs running the Android 7+ operating system might face the problem caused by using **a profile with Restricted Mode**. If you have such a profile, **AdGuard**, like other applications that use VPN, gets restrictions on selective filtering of VPN traffic. As a result, AdGuard cannot launch protection in a **local VPN mode**. Also, one of the reasons for this situation may be using **Dual app/Dual messenger profile** on your device. Below are described the recommendations that you can apply when this problem occurs.

### Problem solution options

1. Remove a **restricted user account**;
2. Use AdGuard in **HTTP proxy mode** (*AdGuard Settings > Network > Filtering algorithm > HTTP proxy*);
3. Allow *AdGuard* interaction between users to selectively filter traffic via [adb](https://developer.android.com/studio/command-line/adb) (*Android Debug Bridge*):

- [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) adb; 
- Connect your device to a computer;
- Open **the command line** (*Cmd.exe*)/**Terminal** (if you are using MAC OS);
- Enter the command `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` and press **Enter**.

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