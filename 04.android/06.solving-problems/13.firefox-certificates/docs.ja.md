---
title: 'Firefoxブラウザへのセキュリティ証明書の手動インストール'
published: true
taxonomy:
    category:
        - docs
---

Firefoxのバージョンによって、AdGuardが[HTTPS フィルタリング](https://kb.adguard.com/en/general/https-filtering)を実行するために必要なアプローチが異なります。
セキュリティ証明書をブラウザ自体に直接インストールすることができない場合（主に**79.0**以降のFirefoxバージョンで発生し、今後のバージョンでMozillaに対応してもらいたい状況です）、下の「**対策①**」をお試しください。それも効かなければ、手間かかりますがFIrefox全バージョンに対応するはずの「**対策②**」をお試しください。

### 端末上でインストール済み証明書へのアクセスを有効にする対策

#### 対策①（「ユーザー」ストアにある証明書用）

Firefox (およびそれをベースにしたブラウザ) がユーザ証明書を信頼できるようにするには、ブラウザ自体の隠されたオプションを切り替える必要があります。

1.  **Firefox**を起動します。
2.  アドレスバーに **about:config** と入力してページに移動
3.  検索フィールドに **root** と入力します。
4.  "security.enterprise_roots.enabled" オプションを見つけて、トグルして **true** にします。


#### 対策②（「システム」ストアにある証明書用）

1. ADBをインストトールして設定します（方法：[Windows編](https://expnote.com/how-to-install-android-debug-bridge/)、[Mac編](https://child-programmer.com/m-adb/)） 
> Windowsの場合、**Samsung**端末をご利用であれば[このユティリティ](https://developer.samsung.com/mobile/android-usb-driver.html)をインストールする必要がある場合があります。
2. **開発者モード**をアクティブにし、**USBデバッグ**を有効にします。

- 端末で**設定**アプリを開きます。
- **システム**セクションに移動し（設定メニューの最後の項目）、サブアイテム**端末について**を見つけます。
- 「**ビルド番号**」の行を7回タップします。その後、「**開発者になりました！**」のような通知が表示されます（必要に応じて、デバイスのロック解除コードを入力してください）。
- **設定**→**システム**→**詳細設定**→**開発者向けオプション**→下にスクロールして「**USBデバッグ**」を開く（もしくはオンにする）→警告を注意深く読んでいただいた後、[**USBデバッグを許可する**]ウィンドウでデバッグが有効になっていることを確認します。

※端末によってメニュー項目の名称が多少違ったりする場合がございます。

3. [Firefox](https://www.mozilla.org/en-US/firefox/release)ブラウザをインストール (リリース版)
4. Open the **AdGuard設定** → **ネットワーク** → **HTTPSフィルタリング** → **Firefox**に証明書をインストール → **旧バージョン用にインストール**
5. `adb shell su` と `cd data/data/...` を使って `data/data/org.mozilla.firefox/files/mozilla` フォルダを開き、`xxxxxxx.default` という名前のフォルダを参照して名前を覚えておいてください。
6. 例のフォルダの中には、2つのファイルが必要になります。
- `cert9.db`
- `key4.db` 
7. これらのファイルを、セキュリティ証明書の問題が発生したブラウザのフォルダに移動します:
- `data/data/org.mozilla.<browser_name>/files/mozilla/yyyy.default`.
8. 完全なコマンドは以下のようになります:
- `adb shell su`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`

システムから「**アクセスは拒否されました**」のような通知を受けた場合は、まず例のファイルを許可不要のディレクトリに移動します。その後、Firefoxブラウザ内の必要なフォルダに移動してください。
完全なコマンドは以下のようになります:
- `adb shell su`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download `
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download `
- `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
- `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

※ `adb shell su` が効かない場合は、先に `adb shell` を試し、その後に `su` という順番でお試しください。
