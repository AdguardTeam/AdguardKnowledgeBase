---
title: 'Tasker app configuration'
taxonomy:
    category:
        - docs
visible: true
---

To configure automatic start (or stop) of Adguard for Android in Tasker app you have to do the following steps:

**1. Add Task(s)**

_to start protection:_

<table>
<tbody>
<tr>
<td>Send</td>
<td>Intent</td>
</tr>
<tr>
<td>Action:</td>
<td>android.intent.action.SEND</td>
</tr>
<tr>
<td>Cat:</td>
<td>None</td>
</tr>
<tr>
<td>Mime Type:</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Data:</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Extra:</td>
<td>ACTION:2</td>
</tr>
<tr>
<td>Extra:</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>package:</td>
<td>com.adguard.android</td>
</tr>
<tr>
<td>Class:</td>
<td>com.adguard.android.ServiceManager</td>
</tr>
<tr>
<td>Target:</td>
<td>Service</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p><em><span style="font-size: 12pt;">to stop protection:</span>&nbsp;</em></p>
<table>
<tbody>
<tr>
<td>Send</td>
<td>Intent</td>
</tr>
<tr>
<td>Action:</td>
<td>android.intent.action.SEND</td>
</tr>
<tr>
<td>Cat:</td>
<td>None</td>
</tr>
<tr>
<td>Mime Type:</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Data:</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>Extra:</td>
<td>ACTION:4</td>
</tr>
<tr>
<td>Extra:</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>package:</td>
<td>com.adguard.android</td>
</tr>
<tr>
<td>Class:</td>
<td>com.adguard.android.ServiceManager</td>
</tr>
<tr>
<td>Target:</td>
<td>Service</td>
</tr>
</tbody>
</table>

As a result, you will have two tasks ready to use:

![](tasks_EN.png?cropResize=400,600)

**Add profiles that will use these tasks**

For an example, you can configure autostart for _Adguard for Android_ upon switching to mobile networks and autostop upon connecting to Wi-Fi:

![](profiles_en.png?cropResize=400,600)

