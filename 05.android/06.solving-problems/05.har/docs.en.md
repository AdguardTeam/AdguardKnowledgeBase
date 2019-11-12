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

The HAR (HTTP ARchive) format is a JSON-formatted archive file for logging of a web browser's interaction with a site. The specifications of HAR format defines an archival data for HTTP transactions that used by a browser to export detailed information about web pages it loads. More detailed description of HAR file format and its specification you can find at [softwareishard.com](www.softwareishard.com/blog/har-12-spec) website.
<a id="howtoget"></a>
## How to get HAR files?

Sometimes we need to analyze it to block specific ads that are difficult to reproduce for some reason.

1. Open AdGuard and go to "Settings".

2. Choose "Advanced" in the menu.

3. Choose "Low Level Settings"

4. Activate "pref.har.capture" (you will have to restart the protection).

5. Now reproduce the problem - open the app, perform the necessary actions to make the ad appear.

6. Now turn "pref.har.capture" off again.

7. Go to app cache folder and find the .har files. They are usually located in

  **/storage/emulated/Android/data/com.adguard.android/cache/har**

   or, depending on device,

  **/sdcard/Android/com.adguard.android/cache/har**

  **/sdcard/data/Android/com.adguard.android/cache/har**

  **/sdcard/Android/data/com.adguard.android/cache/har**

Please send file that you've got as a result, to the AdGuard [support service](support@adguard.com) (support@adguard.com).
>Note: It is advisable to specify the HelpDesk order number or the GitHub request number.
