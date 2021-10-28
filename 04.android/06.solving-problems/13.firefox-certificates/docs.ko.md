---
title: 'Firefox 브라우저의 인증서 신뢰 문제'
published: true
taxonomy:
    category:
        - docs
---

AdGuard가 Firefox에서 [HTTPS 트래픽을 성공적으로 필터링](https://kb.adguard.com/ko/general/https-filtering)하기 위해서는 브라우저가 AdGuard의 인증서를 신뢰해야 합니다. Firefox 버전에 따라 브라우저가 인증서를 신뢰하도록 하는 방법은 다릅니다.


#### 방법 1

> 이 방법은 [Firefox Nightly](https://www.mozilla.org/firefox/channel/android/) 90.0a1 이상 버전에서만 사용될 수 있습니다. Firefox의 베타 및 일반 버전이 v90에 도달하면 이 방법을 해당 버전에도 적용할 수 있습니다.

Firefox Nightly가 AdGuard 인증서를 신뢰하도록 하려면 다음 단계를 따르십시오.

1. 브라우저를 실행합니다
2. **설정** > **Firefox Nightly 정보**로 이동합니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/Firefox_cert/ff_nightly_about_ko.jpg" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">

3. 화면 상단의 Firefox Nightly 로고를 빠르게 여러 번 누릅니다.

4. **설정** > **Secret Settings**으로 이동합니다.

<img src="https://cdn.adguard.com/public/Adguard/kb/Firefox_cert/ff_nightly_secret.jpg" style="border: 1px solid #efefef; max-width: 350px; padding: 2px;">

5. **Use third party CA certificates** 기능을 활성화합니다.

#### 방법 2

> 이 방법은 **루팅된** 기기에서만 사용할 수 있습니다.


1. Windows 플랫폼을 사용하는 경우, adb를 [설치하고 구성](https://www.xda-developers.com/install-adb-windows-macos-linux/)합니다.
삼성 기기를 사용하는 경우, [이 드라이버](https://developer.samsung.com/mobile/android-usb-driver.html)를 설치해야 합니다.


2. **개발자 모드** 및 **USB 디버깅**을 활성화합니다.
- 휴대폰에서 **설정**을 엽니다.
- **시스템** 섹션(설정 메뉴의 마지막 항목)으로 이동합니다. 이 섹션에서 **휴대전화 정보**를 찾습니다.
- **빌드 번호** 줄을 7번 클릭합니다. 그 후에 '**개발자 모드를 켰습니다**'라는 알림을 받게 됩니다. 필요한 경우 기기의 잠금 해제 코드를 입력하세요.

- **시스템 설정** > **개발자 옵션** > 아래로 스크롤하여 **USB 디버깅** 활성화 > 경고를 읽은 후 **USB 디버깅 허용** 창에서 디버깅이 활성화되었는지 확인합니다.

3. [Firefox](https://www.mozilla.org/en-US/firefox/releases/) 브라우저(정식 버전)를 설치합니다.

4. **AdGuard 설정** > **네트워크** > **HTTPS 필터링** 엽니다. 
**Firefox**에 인증서를 설치한 후 **이전 버전으로 설치**를 클릭합니다.


5. `adb shell su` 및 `cd data/data/...`를 사용하여 `data/data/org.mozilla.firefox/files/mozilla` 폴더를 엽니다. `xxxxxxx.default`라는 폴더를 찾아 이름을 기억하세요.


6. 지정된 폴더에는 두 개의 파일이 필요합니다.
- `cert9.db`
- `key4.db`

7. 이 파일을 보안 인증서 문제가 발생한 브라우저의 폴더로 이동해야 합니다.
- `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.

8. 전체 명령은 다음과 같이 보일 것 입니다.
- `adb shell su`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.


**권한 거부됨** 시스템 알림을 받은 경우 먼저 지정된 파일을 권한이 없는 디렉토리로 이동해야 합니다. 그런 다음 Firefox 브라우저에서 필요한 폴더로 이동하시면 됩니다.

전체 명령은 다음과 같아야 합니다.
- `adb shell su`.
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download `
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download `
- `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`. 
- `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`.

`adb shell su`가 작동하지 않으면 처음에 `adb shell`을 시도한 다음 `su`를 시도해 보세요.

