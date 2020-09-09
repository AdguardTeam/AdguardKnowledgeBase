---
title: 如何收集HAR文件
published: true
taxonomy:
    category:
        - docs
---

## 创建HAR文件

HAR文件可帮助我们的技术支持团队解决复杂问题。要创建这些文件，我们建议使用Chrome或Firefox。但是，IE 11，Edge和Safari也提供.har文件生成和导出功能。

[Google Chrome](＃chrome)

[Edge](＃edge)

[Firefox](＃firefox)

[Internet Explorer 11](＃ie11)

[Safari](＃safari)

[为Windows压缩HAR文件](＃harwindows)

[为Mac压缩HAR文件](＃harmac)

## <a id="chrome"></a> Chrome

要在Chrome中创建HAR文件：

1.转到发生问题的URL。暂时不要重现该问题。

2.打开***开发人员工具***：

- 从菜单中：***菜单>更多工具>开发人员工具***。
- 键盘：***Ctrl + Shift + C***，或***Ctrl + Alt + I***，或***⌥+⌘+ I(对于Mac***)。

3.单击***网络选项卡***。

4.找到网络选项卡左上方的圆形按钮，并确认它处于红色录制模式。如果是灰色，请单击以变为红色以开始录制。

5.使用***清除***按钮(记录按钮旁边带有圆圈的圆圈按钮)清除所有先前的活动。

6.选择网络选项卡上的保留日志复选框。

7.重现造成问题的步骤。

8.通过右键单击网格并选择***另存为具有内容的HAR***，将会话另存为.har文件。

9.转至AdGuard支持(support@adguard.com)，并详细说明问题。支持屏幕截图也可能会有所帮助。


## <a id="edge"></a>Edge

要在Edge中创建HAR文件：

1.在遇到问题的网页上，按***F12***键打开***开发人员工具***。

2.选择***网络***选项卡。

3.刷新网页以进行HTTP通信，然后等待一分钟。

4.单击***Disk***图标或按住***CTRL + S***以保存HAR文件。

5.使用 ***另存为…*** 完成保存

6.转至AdGuard支持(support@adguard.com)，并详细说明问题。支持屏幕截图也可能会有所帮助。

## <a id="firefox"></a> Firefox

要在Firefox中创建HAR文件：

1.转到发生问题的URL。暂时不要重现该问题。

2.在***网络***模式下打开开发人员工具：
- 从菜单：***菜单> Web Developer>网络***。
- 键盘：***Ctrl + Shift + C***或**⌥+⌘+ E(Mac)**。

3.注意网络选项卡左上方的播放/暂停按钮。
- 按钮应处于播放模式。

4.如果当前在网格中显示任何信息，请单击***播放/暂停按钮旁边的删除垃圾箱***按钮进行清除。

5.选中网络选项卡上的***持久日志***复选框。

6.重现造成问题的步骤。

7.通过右键单击网格并选择***将所有另存为HAR***，将会话另存为.har文件。

8.转至AdGuard支持(support@adguard.com)，并详细说明问题。支持屏幕截图也可能会有所帮助。

## <a id="ie11"></a> Internet Explorer 11

要在Internet Explorer 11中创建HAR文件：

1.转到发生问题的URL。暂时不要重现该问题。

2.在***网络***模式下打开开发人员工具：
- 从工具齿轮菜单中：***开发人员工具***> ***网络标签***。
- 键盘：***F12>网络***标签

3.请注意网络选项卡左上方的开始分析会话***播放***按钮和停止分析***停止***按钮。
- 录制时播放按钮将为灰色，停止按钮将为红色。置于***播放***模式。

4.使用网络选项卡上的清除会话按钮清除显示在下部网格中的所有会话信息。将鼠标悬停在图标上可以查看名称。
- ***清除会话***按钮是一个三行图标，上面带有一个x。

5.重现造成问题的步骤。

6.单击网络选项卡上的保存磁盘按钮(导出为HAR)将会话另存为.har文件。

7.转至AdGuard支持(support@adguard.com)，并详细说明问题。支持屏幕截图也可能会有所帮助。

## <a id="safari"></a> Safari

要在Safari中创建HAR文件：

1.检查屏幕顶部的Safari菜单栏是否有***Develop***菜单。选中在菜单栏中***显示开发菜单***底部底部的复选框。
- 如果看不见，请转到***Safari>首选项>高级***将其打开。

2.转到发生问题的URL。暂时不要重现该问题。

3.在Web Inspector中打开***Network***选项卡：
- 从菜单：***开发>显示Web检查器>网络***。
- 键盘：***⌥+⌘+ I>网络***

4.选中网络选项卡右侧的保留日志复选框。

5.单击网络选项卡最右侧的删除垃圾箱图标，清除当前的网络项目。

6.重现造成问题的步骤。

7.单击保留日志旁边的导出图标，将会话另存为.har文件。

8.转至AdGuard支持(support@adguard.com)，并详细说明问题。支持屏幕截图也可能会有所帮助。


## <a id="harmac"></a>为Mac压缩HAR文件

要为Mac压缩HAR文件：

1.找到要压缩的HAR文件。

2.右键单击HAR文件。

3.从快捷菜单中选择***压缩***。

4.压缩文件的名称将为原始HAR文件的名称，扩展名为 ***.zip***。

## <a id="harwindows"></a>为Windows压缩HAR文件

要为Windows压缩HAR文件：

1.找到要压缩的HAR文件。

2.右键单击HAR文件。

3.选择***发送至***。

4.选择***压缩***(ziped)文件夹。

5.在相同位置创建一个具有相同名称的新压缩文件夹。