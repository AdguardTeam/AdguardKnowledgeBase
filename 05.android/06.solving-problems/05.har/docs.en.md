---
title: 'How to get HAR files'
taxonomy:
    category:
        - docs
visible: true
---

* [What are HAR files?](#whatare)

* [How to get HAR files?](#howtoget)

* [How to analyze HAR files?](#howtoanalyze)

<a id="whatare"></a>
## What are HAR files?

The HAR (HTTP ARchive) format is a JSON-formatted archive file for logging of a web browser's interaction with a site. The specifications of HAR format defines an archival data for HTTP transactions that used by a browser to export detailed information about web pages it loads. More detailed description of HAR file format and its specification you can find at softwareishard.com website [http://www.softwareishard.com/blog/har-12-spec/](http://www.softwareishard.com/blog/har-12-spec/).

<a id="howtoget"></a>
## How to get HAR files?

Sometimes we need to analyze it to block specific ads that are difficult to reproduce for some reason.

1. Open AdGuard and go to "Settings".

2. Choose "Advanced" in the menu.

3. Choose "Low Level Settings"

4. Activate "pref.har.capture" (you will have to restart the protection).

5. Now reproduce the problem - open the app, use it, find ads in it.

6. Now turn "pref.har.capture" off again.

7. Go to app cache folder and find the .har files. They are usually located in

  ** /storage/emulated/Android/data/com.adguard.android/cache/har**

   or, depending on device,

  **  /sdcard/Android/com.adguard.android/cache/har**

  **   /sdcard/data/Android/com.adguard.android/cache/har**

  **  /sdcard/Android/data/com.adguard.android/cache/har **

<a id="howtoanalyze"></a>
## How to analyze HAR files?

To analyze HAR files we recommend to use the following tools:

1. HAR analyzer tool: [http://gitgrimbo.github.io/harviewer/master/](http://gitgrimbo.github.io/harviewer/master/)

2. Fiddler: [http://www.telerik.com/fiddler](http://www.telerik.com/fiddler)
