---
title: '使用的流量与电池消耗的问题'
taxonomy:
    category:
        - docs
visible: true
---

有时用户会注意到，根据安卓内置统计，AdGuard 会消耗不少流量和/或电量。
这两种问题反映的是一枚硬币的正反两面。在过滤过程中，所有流量都会经过 AdGuard，因此安卓会误认为 AdGuard 正在使用流量。 当然，事实上这并不是这样的。
设备上的流量和电池使用量的统计显示的不是实际情况。其他应用程序所使用的 WiFi 和移动流量，安卓将其都归于 AdGuard。因此，从总消耗来看， AdGuard 电池和流量的使用量增高，相反，其他应用程序的使用量却降低。

### 电池使用情况

以减轻大家对该问题的误解，我们设计了新屏幕称为“电池使用率”。您可以在设置中点击“电池”图标以查看。

<img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Zh/1.png" width="300">

这里可以查看最近24小时内 AdGuard 电池的使用量。点击图标上的绿线可以按每一个小时查看关于流量使用的更详细信息。除此之外，还有相关数据的信息以及简短技术说明。

### 举个例子

在以下的截图上您可以看到夜间和早间电池使用量的统计：

<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/battery_1.png" width="300">
<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/battery_2.png" width="300">
<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/battery_3.png" width="300">

在以上的截图中可以发现:

1. AdGuard 不出乎意料地出现在图标的顶部。这对于手机来说是很正常的（而与不支持 4G 的平板电脑不同，因为使用 WiFi 对电池的消耗要小得多）。

2. 请注意截图二，发送移动和 WiFi 包的数量，都归于 AdGuard 使用的流量 (“Mobile data sent”)。

3. 截图三是真实消耗流量的软件，Yandex.Music。它几乎没有被分类到任何流量中，而实际上它消耗了总流量的17％。

### AdGuard 真实电池消耗是多少？

首先，我们从理论角度看该问题并附上必要数据的链接。

1. 安卓使用自带的Power Profile来计算流量使用量。https://source.android.com/devices/tech/power/values.html 

2. Power Profile的主要部分是一组以mAh为单位的值，这些值定义设备每个组件的电池消耗：https://source.android.com/devices/tech/power/values.html

比如说，从链接的表格中我们可以看到：

_wifi.active=_ = 31m 是指 WiFi 数据交换导致的额外消耗（使用的单位：毫安）

_radio.active=_ 100-300mA 是指经过移动交换数据导致的额外消耗 （使用的单位：毫安）

_cpu.active=_ 100-200mA 是指中央处理器（CPU） 运行导致的额外消耗 （使用的单位：毫安）

3. AdGuard 几乎没有消耗任何流量，因此，我们来去除“移动/WiFi包”以评价电池消耗，而把重心放在“CPU”（中央处理器）上。

以下是计算消耗量的公式：

>"CPU TIME (ms)" X "cpu.active" / (60 60 1000) = "POWER USE mAh"

我们将实数写入公式中。

来将第二张截图上的 CPU total 转换为毫秒：506000

2GHz 的 cpu.active 系数大约等于225mA

最后结果

>506000 * 225 / (60 * 60 * 1000) = 31,625mAh

### 结论

事实上的消耗量比安卓统计上的消耗量小很多倍。消耗量为31-40mAh，而非220mAh。从另一方面来看的话，浏览器流量使用量为~200mAh，而不是66mAh。

