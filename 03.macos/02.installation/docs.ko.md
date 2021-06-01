---
title: '설치 방법/ 제거 방법'
taxonomy:
    category:
        - docs
---
* [시스템 요구 사항](#system-requirements)
* [설치 방법](#installation)
* [제거 방법](#uninstall)
	* [고급 제거 방법](#uninstall-advanced)

<a id="system-requirements"></a>
## 시스템 요구 사항

**운영 체제 버전:** macOS 10.12 (64 비트) 이상

**RAM:** 2 GB 이상

**브라우저:** Safari, Google Chrome, Opera, Yandex.Browser, Mozilla Firefox 및 기타 macOS 호환 브라우저

**디스크 여유 공간:** 120 Mbytes


<a id="installation"></a>
## 설치 방법

컴퓨터에 Mac용 AdGuard를 설치하려면 브라우저를 열고 주소 표시 줄에 _adguard.com_ 을 입력한 후 열리는 페이지에서 **다운로드**를 누릅니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ko/installation-1-ko.png" width="600" />

_AdguardInstaller.dmg_ 가 다운로드될 때까지 기다렸다가 Dock 패널에 다운로드된 파일 목록에서 해당 아이콘을 두 번 클릭합니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ko/installation-2-ko.png" width="600" />

바탕 화면에 AdGuard 아이콘이 표시될 것입니다. 설치 앱을 열려면 아이콘을 클릭합니다. 다음 열린 설치 창에서 AdGuard 아이콘을 두 번 클릭합니다.

AdGuard가 처음 시작되면 운영 체제에서 이 프로그램이 인터넷에서 다운로드되었음을 경고합니다. **열기**를 클릭합니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ko/installation-3-ko.png" width="400" />


다음에 **Install**를 클릭합니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ko/installation-4-ko.png" width="400" />


설치 프로그램이 필요한 파일을 다운로드할 때까지 기다립니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ko/installation-5-ko.png" width="500" />


프로그램을 사용하시려면 macOS 계정의 관리자 암호가 필요합니다. 대화 상자에 암호를 입력하고 **확인**를 누릅니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ko/installation-6-ko.png" width="500" />

프로그램을 설정하려면 **시스템 환경 설정 열기**를 클릭합니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ko/installation-7-ko.png" width="500" />

다음에 자물쇠 아이콘을 클릭하고 **App Store 및 확인된 개발자**를 선택합니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ko/installation-8-ko.png?" width="400" />

AdGuard가 프록시 구성을 추가하도록 허용할지 여부를 확인하는 창이 표시됩니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ko/installation-9-ko.png" width="400" />

이제 사용자의 필요에 맞게 보호를 설정할 수 있습니다.  프로그램 기능의 단계별 설정을 조정하려면 **네 알겠습니다**을 클릭합니다. 이 단계를 건너 뛰려면 **아니요 하지않겠습니다**를 누릅니다.
 
<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Win/ko/mac.png" width="600" />

맥북에 AdGuard가 설치되었습니다!

<a id="uninstall"></a>
## 제거 방법

### 일반 제거 방법
Finder 앱을 엽니다.

![](https://cdn.adguard.com/public/Adguard/En/Articles/howtodelete/finder.png)


'응용 프로그램' 섹션으로 이동하여 AdGuard를 우클릭하고 **휴지통으로 이동**을 선택합니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ko/installation-10-ko.png" width="600" />

<a id="uninstall-advanced"></a>
### 고급 제거 방법

고객 지원 팀에서 특별히 '고급 제거'를 권장하거나 고급 제거에 익숙한 경우에만 이 지침을 사용하십시오. 먼저 '일반 제거' 지침의 모든 단계를 수행한 후 다음 단계를 수행합니다.

* 다음과 같은 AdGuard 파일을 삭제합니다.
    * */Library/Application Support/com.adguard.mac.adguard* (폴더)
    * *~/Library/Application Support/com.adguard.mac.adguard* (폴더)
    * *~/Library/Preferences/com.adguard.mac.adguard.plist* (파일)

* 이 파일을 삭제하시려면 터미널 앱을 열고 다음 명령을 입력하고 실행하십시오.

`sudo rm -R "/Library/Application Support/com.adguard.mac.adguard"`
`rm -R "~/Library/Application Support/com.adguard.mac.adguard"`
`rm ~/Library/Preferences/com.adguard.mac.adguard.plist`

* '활동 모니터' 앱을 실행합니다.
* 검색 도구를 사용하여 **cfprefsd** 프로세스를 찾습니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ko/installation-11-ko.png" width="600" />


* 사용자로 실행중인 프로세스를 중지합니다 (루트에서 실행되는 프로세스 제외). 프로세스를 중지하려면 프로세스를 클릭한 후 왼쪽 상단의 X를 클릭합니다. 대화 창에서 **종료**를 합니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ko/installation-12-ko.png" width="400" />

이제 AdGuard가 맥북에서 제거되었습니다.

