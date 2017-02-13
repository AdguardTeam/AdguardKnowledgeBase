---
title: 'How to get logcat log'
visible: true
---

For troubleshooting problems with crashes a regular log is almost always not enough. In such cases to identify the origin of the problem we need the system log. Below is the instruction how to collect and get it.

**Part #1: prepare the device**

1. Switch device to the developer mode. To do this: go to "Settings" -> "About" -> tap on Build Number 7 times.

2. Go to "Developer Options"

3. Enable "USB debugging"

4. If your device runs Android 5.0 or later, increase "Logger buffer sizes" to 4M per log buffer

4M should be enough for storing the logs we need until you're able to do the second part (getting log from the device);

**Important:** you need to reproduce the problem after you've done with the first part!


**Part #2: get the log**

1. Connect your device to PC with USB cable.

2. Download and install "Minimal ADB":

<http://forum.xda-developers.com/showthread.php?t=2317790>

Direct download link:

<https://www.androidfilehost.com/?fid=24052804347803384>

3. Run this command in the console (it will be opened after install):

>adb logcat -v threadtime -d > C:\logcat.txt

Send this log to us by contacting support or by any other way.

**Alternative way for ROOT users:**

1. Download and run [CatLog](https://play.google.com/store/apps/details?id=com.nolanlawson.logcat).

2. Choose "Record" in the menu. Choose a name for a log file or just press OK. Now you can press Home button, CatLog will continue recording the log in background.

3. Reproduce the issue.

4. Open CatLog press "Stop record" in the menu.

5. Send this log to our Support Team.