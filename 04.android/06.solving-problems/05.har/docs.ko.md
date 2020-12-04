---
title: 'HAR 파일 수집 방법'
taxonomy:
    category:
        - docs
visible: true
---

* [HAR 파일이란 무엇인가요?](#whatare)

* [HAR 파일 수집 방법](#howtoget)

<a id="whatare"></a>
## HAR 파일이란 무엇인가요?

HAR (HTTP ARchive) 형식은 웹 브라우저와 사이트 간의 상호 작용을 로깅하기위한 JSON 형식의 아카이브 파일로, 브라우저가 불러오는 웹 페이지에 대한 자세한 정보를 내보내는 데 이용되는 HTTP 트랜잭션에 대한 보관 데이터를 정의합니다. HAR 파일 형식에 대한 자세한 내용은 softwareishard.com 에서 확인하실 수 있습니다.
<a id="howtoget"></a>
## HAR 파일 수집 방법

간혹 재생산하기 어려운 특정 광고를 차단하기 위해 HAR 파일 분석이 필요 합니다.

1. AdGuard를 열고 **설정**으로 이동합니다.

2. **고급**을 선택합니다.

3. **로우 레벨 설정**을 선택합니다.

4. **pref.har.capture** 활성화합니다 (보호를 다시 시작해 주세요).

5. 문제를 재현해 주세요. 앱을 열고 광고가 표시될 때까지 앱을 사용합니다.

6. **pref.har.capture** 비활성화합니다.

7. 앱 캐시 폴더에서 .har 파일을 찾아 보세요. 앱 캐시 폴더의 위치는 다음과 같습니다.

  **/storage/emulated/Android/data/com.adguard.android/cache/har**

  **/sdcard/Android/com.adguard.android/cache/har**

  **/sdcard/data/Android/com.adguard.android/cache/har**

  **/sdcard/Android/data/com.adguard.android/cache/har**

.har 파일을 AdGuard [지원팀](support@adguard.com)에 보냅니다. (메일 주소: support@adguard.com)

>참고: 메시지에 헬프 데스크 티켓 번호 또는 GitHub 문제 번호를 첨부 시 문제를 더 빠르게 처리할 수 있습니다.

<a id="howtoanalyze"></a>
## HAR 파일을 분석하는 방법은 무엇인가요?
다음은 HAR 파일을 분석하기 위한 몇 가지 소스입니다
* [HTTP 아카이브 뷰어 마스터]((https://gitgrimbo.github.io/harviewer/master/))는 HAR 분석기 도구로, HTTP 추적 도구로 생성 된 HTTP 아카이브 (HAR) 로그 파일을 시각화합니다.

* [Fiddler](https://www.telerik.com/fiddler)는 웹 디버깅 프록시로, 컴퓨터와 인터넷 간의 모든 HTTP(S) 트래픽을 캡처, 검사, 모니터링하고 모의 요청을 수행하고 네트워크 문제를 진단할 수 있습니다.
