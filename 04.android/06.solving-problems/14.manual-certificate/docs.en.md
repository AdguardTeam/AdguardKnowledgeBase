---
title: 'Manual certificate installation on devices with Android 11'
taxonomy:
    category:
        - docs
visible: true
---

To be able to filter HTTPS traffic (which is extremely important as most ads use HTTPS), AdGuard needs to install a certificate into your device's user storage. On older versions of Android OS this was done automatically during the onboarding process or later via AdGuard settings, and it only required a couple of taps. Unfortunately, on Android 11 automatic certificate installation is no longer available. Now a manual installation is required.

<img src="https://cdn.adguard.com/public/Adguard/Blog/Android/3-5/cert-en.gif" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">

To manually install AdGuard certificate:

1) Go to the app's main screen and tap on *HTTPS filtering* (it will be highlighted in red if AdGuard certificate is not installed yet)

2) Enable the switch at the top

3) A new screen will appear, tap twice on the *Next* button and then on *Save it now* when prompted to download an AdGuard certificate

4) After the certificate is downloaded, you will see a new screen. Tap on the *Open security settings* button there

5) This will bring up system settings. Scroll down to *Advanced*, open it and then tap on *Encryption & credentials*

6) Tap on *Install certificate* and then on *CA certificate*

7) A warning message will appear. Read through it and tap *Install anyway* to proceed

8) Select the recently downloaded AdGuard certificate. A *CA certificate installed* toast message should show up

9) The AdGuard certificate is successfully installed and HTTPS filtering is working now!

>If you update from Android 10 to Android 11, there's a chance that already installed certificate will still be accepted. Otherwise, the *HTTPS filtering* string on the main screen will be red and you'll need to go through the same process of reinstalling a certificate manually.