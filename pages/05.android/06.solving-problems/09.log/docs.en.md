---
title: 'Collecting a full log on Adguard for Android'
taxonomy:
    category:
        - docs
visible: true
---

Sometimes in order to understand a problem and fix it we need to collect "**log files**", or "**logs"**. Basically, it contains information about program and it's work. To collect those logs and send them to us you need to perform following steps:

1. Open Adguard and go to "Settings".

2. Choose "Advanced" in the left menu.

3. Set "Logging level" to "Record everything". It's desirable to close all background apps that don't concern the problem beforehand.

4. Reproduce the problem and set the logging level back to "Default". Notice the exact time when it happened.

5. Send us a message from program by choosing "Send Feedback" in the menu. Don't forget to check the "Send detailed system info" checkbox under the text field and to include the timestamp from the step 4 into the message. 

You can also download logs directly:

**/storage/emulated/Android/data/com.adguard.android/cache/log**

or, depending on device,

**/sdcard/Android/com.adguard.android/cache/log ** or

**/sdcard/data/Android/com.adguard.android/cache/log** or

**/sdcard/Android/data/com.adguard.android/**