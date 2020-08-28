---
title: 'Logcat log 수집 방법'
taxonomy:
    category:
        - docs
visible: true
---
# 일반 지침

충돌 문제 해결 시 일반 로그 수집으로는 충분하지 않기 때문에 시스템 로그 수집이 필요합니다. 로그 수집 방법은 다음과 같습니다.

## 기기에서 버그 보고서 받기

기기에서 직접 버그 보고서를 받으려면 다음을 수행하십시오.

1) 기기가 개발자용으로 설정되어 있는지 확인합니다. 기기를 개발자용으로 설정하는 방법은 [https://developer.android.com/studio/run/device.html#developer-device-options](https://developer.android.com/studio/run/device.html#developer-device-options) 에서 확인할 수 있습니다.

2) **개발자 옵션**에서 **버그 신고**를 탭합니다.

<center><img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Ko/LogCat/kor1.png" width="301" /></center>
<center><i>개발자 옵션</i></center>
<br><br>

3) 버그 보고서의 유형을 선택하고 **신고**를 누릅니다.
>잠시 후 버그 보고서가 준비되었다는 알림이 표시됩니다.

<center><img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Ko/LogCat/kor2.png" width="301" /></center>
<center><i>버그 보고서가 준비된 상태</i></center>
<br><br>

4) 알림을 누릅니다

<center><img src="https://cdn.adguard.com/public/Adguard/kb/newscreenshots/Ko/LogCat/3.png" width="301" /></center>
<center><i>버그 신고 파일 구조</i></center>
<br><br>

5) 이 로그를 [지원팀](mailto:support@adguard.com)에 보냅니다. 

> 참고 : 메시지에 헬프 데스크 티켓 번호 또는 GitHub 문제 번호를 첨부하면 지원팀이 티켓을 더 빠르게 처리할 수 있습니다.

# 추가 지침 (Android 구 버전용)
구형 Android 기기에서는 버그를 자동으로 제보할 수 없습니다.

수동으로 수행해 주세요.

**#1단계: 기기 준비**

1. 기기를 개발자 모드로 전환하기 위해 설정-> 정보로 이동하고 빌드 번호 줄을 7 번 클릭합니다.

2. 개발자 옵션으로 이동합니다.

3. USB 디버깅을 활성화합니다.

4. 기기에 Android 5.0 이후 버전이 적용된 경우 Logger 버퍼 크기를 로그 버퍼 당 4M로 늘립니다.

2번(기기에서 로그 가져 오기)을 수행하기 위해 필요한 로그를 저장하는 데 4M면 충분합니다.

**중요**: 반드시 1번을 완료한 후 문제를 재현해 주십시오!

**#2단계: 로그 가져 오기**

1. USB 케이블로 기기를 PC에 연결합니다.

2. 최소 ADB를 다운로드하고 설치합니다.

<http://forum.xda-developers.com/showthread.php?t=2317790>

직접 다운로드 링크:

<https://www.androidfilehost.com/?fid=24052804347803384>

3. 콘솔에서 이 명령을 실행합니다 (설치 후 열림):

>adb logcat -v threadtime -d > C:\logcat.txt

지원팀에 문의하거나 다른 방법으로 이 로그를 보내주세요.

**ROOT 사용자를 위한 대체 방법**

1. [CatLog](https://play.google.com/store/apps/details?id=com.nolanlawson.logcat)를 다운로드하고 실행합니다.

2. 메뉴에서 "녹음"을 선택합니다. 로그 파일의 이름을 입력하거나 확인을 누릅니다. 이제 홈 버튼을 누르면 CatLog가 로그인 배경을 계속 기록합니다.

3. 문제를 재현합니다.

4. CatLog를 열고 메뉴에서 "기록 중지"를 누릅니다.

5. 이 로그를 지원팀에 보냅니다.

>참고 : 메시지에 헬프 데스크 티켓 번호 또는 GitHub 문제 번호를 첨부 시 지원팀이 문제를 더 빠르게 처리할 수 있습니다.
