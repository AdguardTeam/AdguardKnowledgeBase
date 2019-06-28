---
title: How to collect HAR file
published: true
taxonomy:
    category:
        - docs
---

HAR is short for "HTTP Archive", which is a file format for logging of a web browser's interaction with a site.


* [Google Chrome](#Chrome)
* [Firefox](#Firefox)
* [Edge/Internet Explorer](#Explorer)


<a id="Chrome"></a>
## Google Chrome

You can enable HTTP session recording in the Network tab in the Developer Tools section of Chrome.

Select “Developer Tools” in the menu:

 **Menu - Advanced Tools - Developer Tools, or press Ctrl + Shift + C on the keyboard**

Click on the Network tab.
Find the round button in the upper left corner of the tab. It should be red. If it is gray, click it to start recording.
Tick the "Preserve Log" checkbox to enable logging.
To clear unnecessary data, click on the crossed out circle icon ("Clear" button next to the red recording button).
Reproduce the error.
Save the network log into a HAR file by right-clicking on any entry in the log and selecting "Save all as HAR with content

<a id="Firefox"></a>
## Firefox

Launch the Firefox Developer Tools in the "Network" mode (open the menu in the upper right corner and select "Development - Network" or press Ctrl + Shift + Q on the keyboard).
Reproduce the error.
Right-click on any entry and select "Save All As HAR" to export data into a HAR file.

<a id="Explorer"></a>
## Edge/Internet Explorer

In Edge you can create HAR files without additional tools. For detailed instructions, see the [Microsoft website](https://docs.microsoft.com/microsoft-edge/devtools-guide/network).

Press the F12 key to open the developer tools, and go to the "Network" tab.
Reproduce the error.
Save data in HAR format (CTRL + S).

In Internet Explorer you need to use [HttpWatch](https://www.httpwatch.com/) application.

Download and install HttpWatch.
Enable recording in HttpWatch before reproducing an error.
Reproduce the issue.
Stop HttpWatch recording after the error is reproduced.
Save the data in HAR format.





