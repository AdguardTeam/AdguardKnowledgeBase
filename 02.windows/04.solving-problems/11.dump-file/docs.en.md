---
title: 'How to create a dump file'
taxonomy:
    category:
        - docs
visible: true
---
To diagnose the reasons for certain problems that users might encounter while using AdGuard, the support team might need the dump file. The dump file helps developers to see the processes that were executed in the application over a given period of time. Below you can check on the instructions of how to collect the dump file on your PC.
 
1. Press **Ctrl + Shift + Esc** and click on **Task Manager**
2. In the upper menu bar select **Details**

<img src="https://cdn.adguard.com/public/Adguard/kb/Windows_dump/details_en.png" style="border: 1px solid #efefef; max-width: 550px; padding: 2px;">
 
3. Right-click on the process that you want to create the dump file for (For example, `Adguard.exe`)
4. In the drop-down menu click on **Create dump file**
5. The file was created successfully!

<img src="https://cdn.adguard.com/public/Adguard/kb/Windows_dump/create_dump_file_en.png" style="border: 1px solid #efefef; max-width: 700px; padding: 2px;">
 
After you’ve created the dump file, please open the file location. The created dump file (`.DMP`) has the same name as the name of the process you chose in the previous steps. The file is quite large, so please compress it into an archive.
 
> Please note, AdGuard has two running processes (`Adguard.exe` and `AdguardSvc.exe`). So you need to create the dump file separately for each process.

<img src="https://cdn.adguard.com/public/Adguard/kb/Windows_dump/processes_en.png" style="border: 1px solid #efefef; max-width: 550px; padding: 2px;">
 
When you send the dump files to the support team, please also send them together with the logs, so we can solve the problem. [Here](https://kb.adguard.com/en/windows/solving-problems/adguard-logs) you can check the instructions on how to collect the log file.
