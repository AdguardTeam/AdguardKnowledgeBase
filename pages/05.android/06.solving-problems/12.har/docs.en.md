---
title: 'How to get HAR files'
taxonomy:
    category:
        - docs
visible: true
---

HAR files contains information about all filtered HTTP requests.

Sometimes we need to analyze it to block specific ads that are difficult to reproduce for some reason.

1. Open Adguard and go to "Settings".

2. Choose "Advanced" in the menu.

3. Choose "Low Level Settings"

4. Activate "pref.har.capture" (you will have to restart the protection).

5. Now reproduce the problem - open the app, use it, find ads in it, then turn off "pref.har.capture".

6. Go to app cache folder and find the .har files. They are usually located in

  ** /storage/emulated/Android/data/com.adguard.android/cache/har**

   or, depending on device,

  **  /sdcard/Android/com.adguard.android/cache/har**

  **   /sdcard/data/Android/com.adguard.android/cache/har**

  **  /sdcard/Android/data/com.adguard.android/cache/har **

