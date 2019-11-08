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

### Capture a bug report from the Android Emulator

From the Android Emulator, you can use the File a bug feature in the extended controls:

1. Click **More** in the emulator panel.
2. In the **Extended controls window**, select **Bug report** on the left.
>This opens a screen where you can see the bug report details such as the screenshot, the AVD configuration info, and the bug report log. You can also type a message with reproduction steps to save with the report.
3. Wait for the bug report to finish collecting, and then click **Save Report**.

### Capture a bug report using adb
If you have just one device connected, you can get a bugreport using [_adb_](https://developer.android.com/studio/command-line/adb.html) as follows:

>$ adb bugreport E:\Reports\MyBugReports

If you do not specify a path for the bugreport, it is saved to the local directory.
If you have multiple devices connected, you must specify the device with the **-s** option. Run the following **adb** commands to get the device serial number and generate the bug report.

**$ adb devices**

**List of devices attached**

**emulator-5554      device**

**8XV7N15C31003476 device**

**$ adb -s 8XV7N15C31003476 bugreport**

### Inspect the bug report ZIP file

By default the ZIP file is called **bugreport-BUILD_ID-DATE.zip** and it it may contain multiple files, but the most important file is **bugreport-BUILD_ID-DATE.txt.** This is the bug report and it contains diagnostic output for system services _(dumpsys)_, error logs _(dumpstate)_, and system message logs _(logcat)_. The system messages include stack traces when the device throws an error, and messages written from all apps with the [Log](https://developer.android.com/reference/android/util/Log.html) class.

The ZIP file contains a **version.txt** metadata file that contains the Android release letter, and when systrace is enabled, the ZIP file also contains a **systrace.txt** file. The [Systrace tool](https://developer.android.com/studio/profile/systrace-commandline.html) helps analyze the performance of your application by capturing and displaying execution times of your application processes and other Android system processes.

The **dumpstate** tool copies files from the device’s filesystem into the ZIP file under the **FS** folder so you can reference them. For example, a **/dirA/dirB/fileC** file in the device would generate an **FS/dirA/dirB/fileC** entry in the ZIP file.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png" width="301" />

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

5. Send this log to our Support Team.
