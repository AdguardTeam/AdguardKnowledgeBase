---
title: 'How to avoid compatibility issues with FaceTime'
taxonomy:
    category:
        - docs
   
---

It turned out that Full-Tunnel mode might interfere not only with compatibility with other VPN applications, but also with FaceTime.

Some users have encountered the problem that FaceTime does not work on the device when the AdGuard app for iOS is in Full-Tunnel mode.

It is likely but not guaranteed that FaceTime will work when AdGuard is in Full-Tunnel mode without VPN icon because it is also incompatible with other VPN apps and unstable. 

**If you want to use FaceTime and make sure that video/audio calls don't stop working, use Split-Tunnel mode.**

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Ru/iOS/tunnel-mode.PNG?!" style="border: 1px solid #efefef; max-width: 300px; padding: 2px;">

To enable it, follow the instructions:
1. Go to AdGuard for iOS *Settings* > *General settings*.
2. Enable *Advanced mode* and go to the *Advanced settings* section that appears right after.
3. Open *Tunnel mode* and select *Split-Tunnel*.

Done! Now there should be no problems with FaceTime compatibility.
 