---
title: HARファイルを収集する方法
published: false
taxonomy:
    category:
        - docs
---

## HARファイルの作成

HARファイルは、的に駆るサポートチームが複雑な問題をトラブルシューティングするのに役立ちます。コレらのファイルを作成するには、ChromeかFirefoxの使用をお勧めします。ただし、IE11、Edge、及びSafariは、.harファイルの生成およびエクスポート機能も提供されています。

[Google Chrome](#chrome)

[Edge](#edge)

[Firefox](#firefox)

[Internet Explorer 11](#ie11)

[Safari](#safari)

[Compressing an HAR file for Windows](#harwindows)

[Compressing an HAR file for Mac](#harmac)

## <a id="chrome"></a> Chrome

ChromeでHARファイルを作成する:

1. 問題が発生しているURLにアクセスする。まだ事象の再現はしないでください。

2. ***Developer Tools***を開きます:

- メニューから開く: ***メニュー > その他のツール > デベロッパーツール***.
- ショートカットキーから開く: ***Ctrl+Shift+C***, または ***Ctrl+Alt+I***, あるいは ***⌥+⌘+I for Mac***.

3. ***ネットワークタブ***をクリックします.

4. ネットワークタブの左上にある丸いボタンを確認し、赤い録音モードになっていることを確認します。灰色の場合は、クリックして赤に変更して録音を開始します。

5. ***消去***ボタン(記録ボタンの横に線が引かれた丸いボタン)を使用して、過去のアクティビティをクリアします。

6. ネットワークタブの ***ログを保持*** のチェックボックスをオンにします。

7. 起きた事象を再現します。

8. 右クリックして ***コンテンツと一緒にHARとして全て保存*** を選択して、セッションを.harファイルとして保存します。

9. 問題の詳しい説明とともに、AdGuardサポート(support@adguard.com)に送信します。スクリーンショットも添付しておくとサポートに役立ちます。


## <a id="edge"></a> Edge

To create an HAR file in Edge:

1. From the webpage experiencing the issue, press the ***F12*** key to open ***Developer Tools***.

2. Select the ***Network*** tab.

3. Refresh the webpage to engage HTTP communications, and wait for one minute.

4. Click the ***Disk*** icon or press and hold ***CTRL+S*** to save a HAR file.

5. Complete saving by using ***Save As…***

6. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.

## <a id="firefox"></a> Firefox

To create an HAR file in Firefox:

1. Go to the URL where the issue occurs. Do not reproduce the issue yet.

2. Open Developer Tools in ***Network*** mode:
- From menu: ***Menu > Web Developer > Network***.
- Keyboard: ***Ctrl+Shift+C***, or **⌥+⌘+E (Mac)**.

3. Note the ***play/pause*** button at the top left of the Network tab.
- Button should be in play mode.

4. If any information is currently displayed in the grid, clear by clicking the ***delete trash can*** button next to the play/pause button.

5. Select the ***Persist Logs*** check box on the Network tab.

6. Reproduce the steps that create the issue.

7. Save session as a .har file by right clicking on the grid and selecting ***Save all as HAR***.

8. Forward to AdGuard support (support@adguard.com) with detailed explanation of issue. Supporting screenshots can be helpful, as well.

## <a id="ie11"></a> Internet Explorer 11

To create an HAR file in Internet Explorer 11:

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

## <a id="safari"></a> Safari

To create an HAR file in Safari:

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


## <a id="harmac"></a> Compressing an HAR file for Mac

To compress an HAR file for Mac:

1. Locate the HAR file that you want to compress.

2. Right click on the HAR file.

3. Choose ***Compress*** from the shortcut menu.

4. A compressed file will have the name of the original HAR file with a ***.zip*** extension.

## <a id="harwindows"></a> Compressing an HAR file for Windows

To compress an HAR file for Windows:

1. Locate the HAR file that you want to compress.

2. Right-click on the HAR file.

3. Choose ***Send to***.

4. Select ***Compressed*** (zipped) folder.

5. A new zipped folder with the same name is created in the same location.
