---
title: 'iOS版AdGuardでSafari外の広告ブロックを設定する方法（システムワイドブロック）'
taxonomy:
    category:
        - docs
---

   * [システムワイドブロックについて](#system-wide)
   * [【方法①】AdGuard DNSサーバーを有効にする](#server)
   * [【方法②】DNSフィルタ/ホストファイルを追加する方法](#filters)

<a name="system-wide"></a>

iOSでのシステムワイドブロックとは、Safariブラウザ以外、つまり他のアプリやブラウザで、ネットワークレベルで広告やトラッカー（個人情報追跡ソフト）をブロックすることです。

ほとんどの広告ブロッカーはこれをできませんが、AdGuardはできます。ただし、少し設定が必要です。

この記事では、お使いのiOSデバイスでこの機能を設定する方法をご紹介します。

<img src="https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_ja.png" style="border: 1px solid #efefef; max-height: 700px; max-width: 650px; padding: 2px;">
<p align="center"><i>AdGuardがDNSフィルタリングを使って広告をブロックする流れ</i></p>
    
AdGuardを使ってシステムワイドブロックを行うには2つの方法があります。

方法①　AdGuard DNSを有効にする（**設定⚙**→**DNS通信を保護**→**DNSサーバー**→**AdGuard DNS**）

方法②　DNSフィルタを使う（例えば「AdGuard DNSフィルタ」）

両方とも効果は近いですが、DNSフィルタを有効にする**方法②**には、メリットがあります:
  
* DNSサーバーは任意のものにすることが可能（もしくは接続しない）
* DNSホワイトリストを使用可能
* 複数のDNSフィルタやホストファイルを同時に使える
    
<a name="server"></a>
  
### 【方法①】AdGuard DNSサーバーを有効にする
 
システムワイドブロックを可能にする機能はAdGuardアプリ内の「DNS通信を保護」です。
    
1. **設定**⚙→**DNS通信を保護**→スイッチを**オン**
2. **DNSサーバー**→**AdGuard DNS**

これでSafari外で広告（※DNSレベルでブロック可能な広告）をブロックするAdGuard DNSサーバー設定完了です。
    
<img src="https://cdn.adguard.com/public/Adguard/Blog/ios_dns_protection_ja.PNG" style="border: 1px solid #efefef; max-height: 700px; max-width: 350px; padding: 2px;">
    
<a name="filters"></a>  
### 【方法②】DNSフィルタ/ホストファイルを追加する方法
    
高度な設定モードは基本的に詳しいユーザー向けの設定を表示するモードですが、Safari以外のアプリで広告等をブロックするDNSフィルタを追加するには、オンにする必要があります。
    
1. AdGuard iOSアプリ→設定⚙→一般
2. 高度な設定モード→オン

そうすると、「詳細設定」という項目が現れます。
    
<div style="display:flex">
     <div style="flex:1;padding-right:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/Release_notes/iOS/v4.0/advanced_mode_ja.jpg" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">
     </div>
     <div style="flex:1;padding-left:5px;">
          <img src="https://cdn.adguard.com/public/Adguard/Blog/ios_advanced_settings_ja.PNG" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">
     </div>
</div>

> 注意：「詳細設定」タブにある設定をそのままオンにすることはお勧めできません（特に「ローレベル設定」）。中には、インターネット接続が切断されたり、プライバシーやセキュリティが損なわれたりするものもありますので、注意が必要です。

4. このリンクをコピーする: `https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt`
5. AdGuard設定 → DNS通信を保護 → DNSフィルタリング (「高度な設定」モードのオンが必須) → DNSフィルタ
6. 「フィルタを追加する」→フィルタのURL欄に「４.」のリンクを貼り付ける→次へ

<img src="https://cdn.adguard.com/public/Adguard/Blog/ios_adding_a_filter_ja.PNG" style="border: 1px solid #efefef; max-height: 700px; max-width: 350px; padding: 2px;">

完了です。36,000本以上のフィルタリングルールが有効になり、Safari外の広告もブロックされます（※DNSレベルでブロック可能なもの）。

**AdGuard DNSフィルタ**は、他の複数のフィルター（AdGuardのベースフィルター、SNSフィルター、追跡防止フィルター、モバイル広告フィルター、EasyList、EasyPrivacyなど）から構成されています。
DNSレベルの広告ブロックとの互換性を高めるために特別に簡素化されています。DNSフィルタリングについて詳しくは、[この記事](https://kb.adguard.com/ja/general/dns-filtering)をご参照ください。

> **同じように、他にお好みのDNSフィルタリストもURLで追加できます。リストを探しの場合は、例えば[こちら](https://filterlists.com)で確認することができます。**

> AdGuard DNSやAdGuard DNSファミリーサーバーを既に利用していて、特に問題が発生していない場合は、AdGuard DNSフィルタはそのサーバーに組み込まれているので追加しなくても結構です。

### DNS通信を保護するメリット

高度な設定モードを有効にし、「DNS通信を保護」を設定し、AdGuard DNSフィルタを追加することは、間違いなく価値があります。簡単に設定できて、全体的な保護レベルを新たなレベルへと導きます。AdGuardはトラフィックをローカルにフィルタリングし、好きなDNSサーバーを使用できるようになります。

**AdGuardのDNSフィルタ**には広告ドメインの幅広いリストが含まれており、これを有効にすると、Safariだけでなく、他のブラウザやサードパーティのアプリでも、あらゆる場所で広告ドメインがブロックされます。さらに、システムワイド保護により、Google、Facebook、その他のウェブ解析会社の悪名高い個人情報追跡からあなたを守ります。
