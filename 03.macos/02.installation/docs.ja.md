---
title: ‘インストール/アンインストール’
taxonomy:
    category:
        - docs
---
* [動作環境](#system-requirements)
* [インストール方法](#installation)
* [アンインストール方法](#uninstall)
	* [アドバンスド・アンインストール](#uninstall-advanced)

<a id="system-requirements"></a>
## 動作環境

**OSバージョン:** macOS 10.12 (64 bit) 以上

**RAM:** 2 GB以上

**対応ブラウザ:** Safari, Google Chrome, Opera, Yandex.Browser, Mozilla Firefox, およびその他のmacOSと互換性のあるブラウザ

**空きディスク容量:** 120 MB

<a id="installation"></a>
## AdGuard for Macのインストール方法

AdGuard for Macをインストールするには、ブラウザで [adguard.com](http://adguard.com) を開き、「**ダウンロード**」ボタンを押してください。

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ja/mac-1.png" width="600" />

「**AdguardInstaller.dmg**」がダウンロード完了したら、クリックします。（Finderから開くこともできます。）

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ja/mac-2.png" width="600" />

表示されたインストールアプリでAdGuardアイコンをダブルクリックしてください。

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ja/mac-3.png" width="300" />

AdGuard初インストールの際に、OSからの警告が表示されますので、「**開く**」を押してください。

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ja/mac-4.png" width="400" />

次に、「**インストール**」を押してください。

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ja/mac-5.png" width="300" />

インストーラが必要なファイルをダウンロード完了するのをお待ちください。

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ja/mac-6.png" width="500" />

AdGuardアプリを使用するにはmacOS管理者アカウントのパスワードが必要になります。パスワードを入力して「**OK**」を押してください。

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ja/mac-7.png" width="300" />

次に、自分に合わせて設定を簡単にカスタマイズできるチュートリアル画面表示されます。「はじめる」を押して微調整を開始するか、「スキップ」を押して今はスキップすることができます。

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ja/mac-8.jpg" width="600" />

これで、お使いのMacへのAdGuardインストールは完了です！

<a id="uninstall"></a>
## アンインストール

### レギュラー
まず、Finderを開いてください。

![](https://cdn.adguard.com/public/Adguard/En/Articles/howtodelete/finder.png)

「アプリケーション」→「AdGuard」アイコンを右クリック→「こみ箱に入れる」

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ja/mac-9.jpg" width="600" />

レギュラーアンインストール完了です。

<a id="uninstall-advanced"></a>
### アドバンスド

**※この手順は、技術的なことが分かる場合、またはAdGuardサポートに「アドバンスドアンインストール」を推奨された場合にのみ使用してください。また、先に「レギュラーアンインストール」の手順をすべて行ってください。**

その後、以下の手順を行ってください。

* 以下のAdGuardファイルを削除してください:
    * /Library/Application Support/AdGuard Software/com.adguard.mac.adguard (folder)
    * *~/Library/Application Support/com.adguard.mac.adguard* (folder)
    * *~/Library/Preferences/com.adguard.mac.adguard.plist* (file)
    * *~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac* (folder)
    * /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist (file)
    * /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist (file)
    * /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log (file)
    * /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log (file)

**これらを削除するには**、Terminalアプリを開き、以下のコマンドを入力して実行してください:

`sudo rm -R "/Library/Application Support/AdGuard Software/com.adguard.mac.adguard"`
`rm -R "$HOME/Library/Application Support/com.adguard.mac.adguard"`
`rm $HOME/Library/Preferences/com.adguard.mac.adguard.plist`
`rm -R "$HOME/Library/Group Containers/TC3Q7MAJXF.com.adguard.mac"`
`find "$HOME/Library/Application Support" -name "com.adguard.browser_extension_host.nm.json" -delete`
`sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist`
`sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist`
`sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log`
`sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log`

* 「アクティビティモニタ」アプリを起動する
* 検索ツールを使用して「**cfprefsd**」プロセスを見つける

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/en/uninstall/2.png" width="600" />

* ユーザーで実行されているプロセス（ルートで実行されているものではないほう）を停止します。そうするにはプロセスをクリックして、左上の「X」をクリックしてください。表示されたダイアログで確認してください。 

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/en/uninstall/3.png" width="400" />

AdGuardアドバンスドアンインストール完了です。
