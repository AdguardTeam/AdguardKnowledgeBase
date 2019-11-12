---
title: 'How to get logcat log'
taxonomy:
    category:
        - docs
visible: true
---
# General Instruction
## **Capture and read bug reports**

A bug report contains device logs, stack traces, and other diagnostic information to help you find and fix bugs in your app. You can capture a bug report from your device by using either the **Take bug report** developer option on the device, the Android Emulator menu, or the *adb bugreport* command on your development machine.

To take a bug report, you must have [Developer options](https://developer.android.com/studio/run/device.html#developer-device-options) enabled on your device so you can access the **Take bug report** option.

### Capture a bug report from a device
To get a bug report directly from your device, do the following:

1) Be sure you have [Developer Options](https://developer.android.com/studio/run/device.html#developer-device-options) enabled.
2) In **Developer options**, tap **Take bug report**.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png" width="301" />

3) Select the type of bug report you want and tap **Report**.
>After a moment you get a notification that the bug report is ready (see figure 2).

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png" width="301" />

4. To share the bug report, tap the notification.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png" width="301" />

5. Send this log to our [Support Team](support@adguard.com)

>Note: It is advisable to specify the HelpDesk order number or the GitHub request number.



# Additional Instruction (for old Android versions)
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

1. Download and run [CatLog.](https://play.google.com/store/apps/details?id=com.nolanlawson.logcat&noprocess)

2. Choose "Record" in the menu. Choose a name for a log file or just press OK. Now you can press Home button, CatLog will continue recording the log in background.

3. Reproduce the issue.

4. Open CatLog press "Stop record" in the menu.

5. Send this log to our [Support Team](support@adguard.com)

>Note: It is advisable to specify the HelpDesk order number or the GitHub request number.