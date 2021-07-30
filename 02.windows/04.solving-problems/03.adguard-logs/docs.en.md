---
title: 'How to find AdGuard logs'
taxonomy:
    category:
        - docs
visible: true
---

For analysis and diagnostic of different problems support service might need AdGuard log files. These files contain records about all errors occurred with the software recently. Below is the brief instruction describing the way to get the log files and send them to support service.

1. Open the AdGuard settings. Go to the General Settings section, scroll down to the end of the screen and select **Debug** Logging Level.

<img src="https://cdn.adguard.com/Adguard/kb/newscreenshots/En/eng_logs_1.png" style="border: 1px solid #efefef; max-width: 650px; padding: 2px;">

2. Reproduce the issue. 
- We strongly advise to specify the time when you reproduced the issue: it will help our support team to solve the problem.

3. Export the recorded logs using the **Export Log** button.

<img src="https://cdn.adguard.com/Adguard/kb/newscreenshots/En/eng_logs_2.png" style="border: 1px solid #efefef; max-width: 650px; padding: 2px;">

- Save the archive to any folder.

4. **Important**: set the logging level back to **Standard**. **Debug** logging level will slow down the application.

5. Send the archive to the AdGuard [support service](mailto:support@adguard.com) (support@adguard.com), describe the problem and don't forget to mention the time when you reproduced the issue.

**Note**: sometimes support team members may ask you to send *trace* logs. Then you will need to do the following:

1. Stop AdGuard. Please don't leave the service running.

<img src="https://cdn.adguard.com/Adguard/kb/newscreenshots/En/eng_logs_3.png" style="border: 1px solid #efefef; max-width: 650px; padding: 2px;">
<img src="https://cdn.adguard.com/Adguard/kb/newscreenshots/En/eng_logs_4.png" style="border: 1px solid #efefef; max-width: 650px; padding: 2px;">
2. Open the console (type 'cmd' in the start panel).

3. Run the app with the command `C:\"Program Files (x86)"\Adguard\Adguard.exe /trace` if you are using 64-bit Windows, and C:\"Program Files"\Adguard\Adguard.exe /trace in case if you use 32-bit one.

4. Select **Debug** logging level.

<img src="https://cdn.adguard.com/Adguard/kb/newscreenshots/En/eng_logs_5.png" style="border: 1px solid #efefef; max-width: 650px; padding: 2px;">

Don't worry if the log file is large. We need to know as much detail as possible to fix your problem.
