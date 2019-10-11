---
title: 'How to get HAR files'
taxonomy:
    category:
        - docs
visible: true
---

## Creating a HAR File

HAR files help our technical support teams troubleshoot complex issues. To create these files, we recommend using Chrome or Firefox. However, IE 11, Edge, and Safari also provide .har file generation and export capability.

## Chrome

<details><summary> </summary>
To create a HAR file in Chrome:

1. Go to the URL where the issue occurs. Do not reproduce the issue yet.
2. Open ***Developer Tools***:

- From menu: ***Menu > More Tools > Developer Tools***.
- Keyboard: ***Ctrl+Shift+C***, or, ***Ctrl+Alt+I***, ***or ⌥+⌘+I for Mac***.
3. Click on the ***Network tab***.
4. Locate the round button at the top left of the Network tab and confirm it is in red recording mode. If it's grey, click to turn red to start recording.
5. Use the ***clear*** button (the circle button with a line through it next to the record button) to clear all previous activity.
6. Select the ***Preserve log*** check box on the Network tab.
7. Reproduce the steps that create the issue.
8. Save session as a .har file by right clicking on the grid and selecting ***Save as HAR with content***.
9. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.
</details>

## Edge

<details><summary> </summary>
To create a HAR file in Edge:

1. From the webpage experiencing the issue, press the ***F12*** key to open ***Developer Tools***.
2. Select the ***Network*** tab.
3. Refresh the webpage to engage HTTP communications, and wait for one minute.
4. Click the ***Disk*** icon or press and hold ***CTRL+S*** to save a HAR file.
5. Complete saving by using ***Save As…***
6. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.
</details>

## Firefox

<details><summary> </summary>
To create a HAR file in Firefox:

1. Go to the URL where the issue occurs. Do not reproduce the issue yet.
2. Open Developer Tools in ***Network*** mode:
- From menu: ***Menu > Web Developer > Network***.
- Keyboard: ***Ctrl+Shift+C***, or, **⌥+⌘+E (Mac)**.
3. Note the ***play/pause*** button at the top left of the Network tab.
- Button should be in play mode.
4. If any information is currently displayed in the grid, clear by clicking the ***delete trash can*** button next to the play/pause button.
5. Select the ***Persist Logs*** check box on the Network tab.
6. Reproduce the steps that create the issue.
7. Save session as a .har file by right clicking on the grid and selecting ***Save all as HAR***.
8. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.
</details>

## Internet Explorer 11
<details><summary> </summary>
To create a HAR file in Internet Explorer 11:

1. Go to the URL where the issue occurs. Do not reproduce the issue yet.
2. Open Developer Tools in ***Network*** mode:
- From Tools cog wheel menu: ***Developer Tools*** > ***Network tab***.
- Keyboard: ***F12 > Network*** tab
3. Note the start profiling session ***Play*** button and stop profiling ***Stop*** button at top left of Network tab.
- Play button will be gray when recording and Stop button will be red. Put in ***Play*** mode.
4. Clear any session info appearing in the lower grid using the ***Clear session*** button on Network tab. Hover over icons to see names.
- ***Clear session*** button is a three line icon with an x on it.
5. Reproduce the steps that create the issue.
6. Save session as a .har file by clicking on the ***Save disk*** button (Export as HAR) on Network tab.
7. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.
</details>

## Safari
<details><summary> </summary>
To create a HAR file in Safari:

1. Check the Safari menu bar at the top of the screen for a ***Develop*** menu. Check the checkbox at the bottom next to ***Show Develop menu in menu bar***.
- If not visible, turn it on by going to ***Safari > Preferences > Advanced***.
2. Go to the URL where the issue occurs. Do not reproduce the issue yet.
3. Open ***Network*** tab in Web Inspector:
- From menu: ***Develop > Show Web Inspector > Network***.
- Keyboard: ***⌥+⌘+I > Network***
4. Check ***Preserve Log*** checkbox on right side of the Network tabs.
5. Clear current Network items by clicking the ***delete Trash*** icon at the far right of Network tabs.
6. Reproduce the steps that create the issue.
7. Save session as a .har file by clicking the ***Export*** icon next to ***Preserve Log***.
8. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.
</details>

## Compressing a HAR file on Mac
<details><summary> </summary>
To compress a HAR file for Mac:

1. Locate the HAR file that you want to compress.
2. Right click on the HAR file.
3. Choose ***Compress*** from the shortcut menu.
4. A compressed file will have the name of the original HAR file with a ***.zip*** extension.
</details>

## Compressing a HAR file for Windows
<details><summary> </summary>
To compress a HAR file for Windows:

1. Locate the HAR file that you want to compress.
2. Right-click on the HAR file.
3. Choose ***Send to***.
4. Select ***Compressed*** (zipped) folder.
5. A new zipped folder with the same name is created in the same location.
</details>

<a id="howtoanalyze"></a>
## How to analyze HAR files?

To analyze HAR files we recommend to use the following tools:

1. HAR analyzer tool: [http://gitgrimbo.github.io/harviewer/master/](http://gitgrimbo.github.io/harviewer/master/)

2. Fiddler: [http://www.telerik.com/fiddler](http://www.telerik.com/fiddler)
