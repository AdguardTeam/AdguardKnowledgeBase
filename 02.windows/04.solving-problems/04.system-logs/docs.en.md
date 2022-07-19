---
title: 'How to find Windows logs'
taxonomy:
    category:
        - docs
visible: true
---

For analysis and diagnostic of different problems connected with the work of AdGuard, support service might need Windows log files. Windows event logs contain records about all errors occurred with the software recently. Below is the brief instruction describing the way to get the log files and send them to support service. 

1. Press **Win+R**
2. In the window that appears type in `eventvwr` and click on **OK**:

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">

3. Event Viewer window appears as shown in the picture.

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png" style="border: 1px solid #efefef; max-width: 650px; padding: 2px;">

To save files that we need, do the following:

 2.1 Open **Application** (**Event Viewer (Local)** -> **Windows Logs** -> **Application**)

 2.2 Right-click on the **Application** and in drop-down menu select **Save All Events As...**

 2.3 Select a name and where to save, click **Save**. Select **Display information for the following languages**. You need to tick the box next to **English**. Click **OK**.

 2.4 Open **System** (**Event Viewer (Local** -> **Windows Logs** ->  **System** ).

 2.5 Right-click on **System** and in the drop-down menu, select **Save All Events As...**

 2.6 Choose a location, enter the name, click **Save**. Select **Display information for the following languages**. You need to tick the box next to **English**. Click **OK**. 

Please send two files that you've got as a result, to the AdGuard support service at support@adguard.com.

