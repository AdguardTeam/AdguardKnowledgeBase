---
title: 'Популярные DNS-провайдеры'
taxonomy:
    category:
        - docs
visible: true
---


Пользователи AdGuard могут настроить любой DNS-сервер вместо системного, предоставляемого маршрутизатором или интернет-провайдером. На этой странице вы можете ознакомиться со списком наиболее популярных DNS-провайдеров.

* [AdGuard DNS](#adguard-dns)
* [Yandex DNS](#yandex-dns)
* [CleanBrowsing](#cleanbrowsing)
* [Neustar Recursive DNS](#neustar-recursive-dns)
* [Cisco OpenDNS](#cisco-opendns)
* [Google DNS](#google-dns)
* [Cloudflare DNS](#cloudflare-dns)
* [Quad9 DNS](#quad9)
* [Verisign Public DNS](#verisign-public-dns)
* [DNS.WATCH](#dnswatch-dns)
* [Comodo Secure DNS](#comodo-secure-dns)
* [Dyn DNS](#dyn-dns)
* [OpenNIC DNS](#opennic-dns)
* [Quad101](#quad101)
* [Freenom World](#freenom-world)
* [Fortinet Secure](#fortinet-secure)
* [Safe DNS](#safe-dns)
* [Strongarm DNS](#strongarm-dns)
* [SafeSurfer DNS](#safesurfer-dns)
* [Captnemo DNS](#captnemo-dns)
* [fvz DNS](#fvz-dns)
* [Nawala Childprotection DNS](#nawala-childprotection-dns)

<a name="adguard-dns"></a>

### AdGuard DNS

[AdGuard DNS](https://adguard.com/adguard-dns/overview.html) — это альтернативный способ заблокировать рекламу, защитить личные данные и оградить детей от материалов для взрослых. AdGuard DNS прост в использовании и включает в себя необходимый набор функций по защите от рекламы, трекинга и фишинга, независимо от платформы.

#### По умолчанию

Серверы, работающие в режиме "По умолчанию", блокируют рекламу, трекинг и фишинг

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `176.103.130.130` and `176.103.130.131`             | <a href="sdns://AAAAAAAAAAAAHzE3Ni4xMDMuMTMwLjEzMCYxNzYuMTAzLjEzMC4xMzE">Добавить в AdGuard</a> |
| DNS, IPv6      | `2a00:5a60::ad1:0ff` and `2a00:5a60::ad2:0ff`            | <a href="sdns://AAAAAAAAAAAAKVsyYTAwOjVhNjA6OmFkMTowZmZdJlsyYTAwOjVhNjA6OmFkMjowZmZd">Добавить в AdGuard</a> |
| DNSCrypt, IPv4 | Имя провайдера: `2.dnscrypt.default.ns1.adguard.com` IP: `176.103.130.130:5443`| <a href="sdns://AQIAAAAAAAAAFDE3Ni4xMDMuMTMwLjEzMDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20">Добавить в AdGuard</a> |
| DNSCrypt, IPv6 |  Имя провайдера: `2.dnscrypt.default.ns2.adguard.com` IP: `[2a00:5a60::ad2:0ff]:5443`| <a href="sdns://AQIAAAAAAAAAGVsyYTAwOjVhNjA6OmFkMjowZmZdOjU0NDMggdAC02pMpQxHO3R5ZQ_hLgKzIcthOFYqII5APf3FXpQiMi5kbnNjcnlwdC5kZWZhdWx0Lm5zMi5hZGd1YXJkLmNvbQ">Добавить в AdGuard</a> |
| DNS-over-HTTPS | `https://dns.adguard.com/dns-query` | <a href="sdns://AgcAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Добавить в AdGuard</a> |

#### Семейный

Включает в себя функции режима "По умолчанию", а также блокировку контента для взрослых и безопасный поиск

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `176.103.130.132` and `176.103.130.134`            | <a href="sdns://AAAAAAAAAAAAHzE3Ni4xMDMuMTMwLjEzMiYxNzYuMTAzLjEzMC4xMzQ">Добавить в AdGuard</a> |
| DNS, IPv6      | `2a00:5a60::bad1:0ff` and `2a00:5a60::bad2:0ff`              | <a href="sdns://AAAAAAAAAAAAK1syYTAwOjVhNjA6OmJhZDE6MGZmXSZbMmEwMDo1YTYwOjpiYWQyOjBmZl0">Добавить в AdGuard</a> |
| DNSCrypt, IPv4 | Имя провайдера: `2.dnscrypt.family.ns1.adguard.com` IP: `176.103.130.132:5443`| <a href="sdns://AQIAAAAAAAAAFDE3Ni4xMDMuMTMwLjEzMjo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ">Добавить в AdGuard</a> |
| DNSCrypt, IPv6 | Имя провайдера: `2.dnscrypt.family.ns2.adguard.com` IP: `[2a00:5a60::bad2:0ff]:5443`| <a href="sdns://AQIAAAAAAAAAGlsyYTAwOjVhNjA6OmJhZDI6MGZmXTo1NDQzIIwhF6nrwVfW-2QFbwrbwRxdg2c0c8RuJY2bL1fU7jUfITIuZG5zY3J5cHQuZmFtaWx5Lm5zMi5hZGd1YXJkLmNvbQ">Добавить в AdGuard</a> |
| DNS-over-HTTPS | `https://dns-family.adguard.com/dns-query` | <a href="sdns://AgcAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMgAWZG5zLWZhbWlseS5hZGd1YXJkLmNvbQovZG5zLXF1ZXJ5">Добавить в AdGuard</a> |

<a name="yandex-dns"></a>

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) — это бесплатная рекурсивная служба DNS. Серверы Yandex.DNS расположены в России, странах СНГ и Западной Европы. Пользовательские запросы обрабатываются ближайшим дата-центром, что обеспечивает высокую скорость соединения.

#### Базовый

В "Базовом" режиме трафик не фильтруется

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `77.88.8.8` and `77.88.8.1`                | <a href="sdns://AAAAAAAAAAAAEzc3Ljg4LjguOCY3Ny44OC44LjE">Добавить в AdGuard</a>  |
| DNS, IPv6      | `2a02:6b8::feed:0ff` and `2a02:6b8:0:1::feed:0ff` | <a href="sdns://AAAAAAAAAAAALVsyYTAyOjZiODo6ZmVlZDowZmZdJlsyYTAyOjZiODowOjE6OmZlZWQ6MGZmXQ">Добавить в AdGuard</a> |
| DNSCrypt, IPv4     | Имя провайдера: `2.dnscrypt-cert.browser.yandex.net` IP: `77.88.8.78:15353`| <a href="sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA">Добавить в AdGuard</a> |

#### Безопасный

В "Безопасном" режиме обеспечивается защита от вредоносных и мошеннических сайтов

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `77.88.8.88` and `77.88.8.2`                | <a href="sdns://AAAAAAAAAAAAFDc3Ljg4LjguODgmNzcuODguOC4y">Добавить в AdGuard</a> |
| DNS, IPv6      | `2a02:6b8::feed:bad` and `2a02:6b8:0:1::feed:bad`                 | <a href="sdns://AAAAAAAAAAAALVsyYTAyOjZiODo6ZmVlZDpiYWRdJlsyYTAyOjZiODowOjE6OmZlZWQ6YmFkXQ">Добавить в AdGuard</a>|

#### Семейный

В "Семейном" режиме обеспечивается защита от вредоносных и мошеннических сайтов, а также сайтов с контентом для взрослых

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `77.88.8.3` and `77.88.8.7`                | <a href="sdns://AAAAAAAAAAAAEzc3Ljg4LjguMyY3Ny44OC44Ljc">Добавить в AdGuard</a>|
| DNS, IPv6      | `2a02:6b8::feed:a11` and `2a02:6b8:0:1::feed:a11`                 | <a href="sdns://AAAAAAAAAAAALVsyYTAyOjZiODo6ZmVlZDphMTFdJlsyYTAyOjZiODowOjE6OmZlZWQ6YTExXQ">Добавить в AdGuard</a>|

<a name="cleanbrowsing"></a>

### CleanBrowsing

[Cleanbrowsing](https://cleanbrowsing.org/) — служба DNS, обеспечивающая настраиваемую фильтрацию и, как следствие, безопасный просмотр веб-страниц без нежелательного контента.

#### Семейный фильтр

Блокирует доступ к контенту для взрослых, прокси и VPN, фишинговым и вредоносным доменам, а также обеспечивает безопасный поиск в Google, Bing и на YouTube

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.228.168.168` and `185.228.169.168 `             | <a href="sdns://AAAAAAAAAAAAHzE4NS4yMjguMTY4LjE2OCYxODUuMjI4LjE2OS4xNjg">Добавить в AdGuard</a>|
| DNS, IPv6      | `2a0d:2a00:1::1` and `2a0d:2a00:2::1`            | <a href="sdns://AAAAAAAAAAAAIVsyYTBkOjJhMDA6MTo6MV0mWzJhMGQ6MmEwMDoyOjoxXQ">Добавить в AdGuard</a>|
| DNSCrypt, IPv4 | Имя провайдера: `cleanbrowsing.org` IP: `185.228.168.168:8443`| <a href="sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn">Добавить в AdGuard</a> |
| DNSCrypt, IPv6 | Имя провайдера: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443`| <a href="sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn">Добавить в AdGuard</a> |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/` | <a href="sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEy9kb2gvZmFtaWx5LWZpbHRlci8">Добавить в AdGuard</a> |

#### Фильтр контента для взрослых

Менее ограничивающий, чем семейный фильтр: блокирует доступ только к контенту для взрослых и вредоносным, а также фишинговым доменам

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.228.168.10` and `185.228.169.10`             | <a href="sdns://AAAAAAAAAAAAHDE4NS4yMjguMTY4LjEwJjg1LjIyOC4xNjkuMTE">Добавить в AdGuard</a> |
| DNS, IPv6      | `2a0d:2a00:1::` and `2a0d:2a00:2::`                 | <a href="sdns://AAAAAAAAAAAAH1syYTBkOjJhMDA6MTo6XSZbMmEwZDoyYTAwOjI6Ol0">Добавить в AdGuard</a> |
| DNSCrypt, IPv4 | Имя провайдера: `cleanbrowsing.org` IP: `185.228.168.10:8443`| <a href="sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmcc">Добавить в AdGuard</a> |
| DNSCrypt, IPv6 | Имя провайдера: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443`| <a href="sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw">Добавить в AdGuard</a> |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/` | <a href="sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEi9kb2gvYWR1bHQtZmlsdGVyLw">Добавить в AdGuard</a> |

#### Безопасный фильтр

Блокирует фишинг, спам и вредоносные домены

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.228.168.9` and `185.228.169.9`                | <a href="sdns://AAAAAAAAAAAAGzE4NS4yMjguMTY4LjkmMTg1LjIyOC4xNjkuOQ">Добавить в AdGuard</a> |
| DNS, IPv6      | `2a0d:2a00:1::2` and `2a0d:2a00:2::2`               | <a href="sdns://AAAAAAAAAAAAIVsyYTBkOjJhMDA6MTo6Ml0mWzJhMGQ6MmEwMDoyOjoyXQ">Добавить в AdGuard</a> |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | <a href="sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnFS9kb2gvc2VjdXJpdHktZmlsdGVyLw">Добавить в AdGuard</a> |

<a name="neustar-recursive-dns"></a>

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) — это бесплатная облачная рекурсивная служба DNS, которая обеспечивает быстрый и надежный доступ к сайтам и онлайн-приложениям со встроенной системой безопасности и анализа угроз.

#### Надежность и Производительность 1

Данные серверы предоставляют надежный и быстрый поиск DNS без блокировки каких-либо категорий

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.1` and `156.154.71.1`                  | <a href="sdns://AAAAAAAAAAAAGTE1Ni4xNTQuNzAuMSYxNTYuMTU0LjcxLjE">Добавить в AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::1` and `2610:a1:1019::1`            | <a href="sdns://AAAAAAAAAAAAI1syNjEwOmExOjEwMTg6OjFdJlsyNjEwOmExOjEwMTk6OjFd">Добавить в AdGuard</a> |

#### Надежность и Производительность 2

Данные серверы предоставляют надежный и быстрый поиск DNS без блокировки каких-либо категорий, а также предотвращают перенаправление ответов NXDomain (несуществующего домена) на лэндинговые страницы

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.5` and `156.154.71.5`                        | <a href="sdns://AAAAAAAAAAAAGTE1Ni4xNTQuNzAuNSYxNTYuMTU0LjcxLjU">Добавить в AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::5` and `2610:a1:1019::5`            | <a href="sdns://AAAAAAAAAAAAI1syNjEwOmExOjEwMTg6OjVdJlsyNjEwOmExOjEwMTk6OjVd">Добавить в AdGuard</a> |

#### Защита от угроз

Данные серверы предоставляют защиту от вредоносных доменов, а также включают в себя функции режима "Надежность и Производительность"

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.2` and `156.154.71.2`                     | <a href="sdns://AAAAAAAAAAAAGTE1Ni4xNTQuNzAuMiYxNTYuMTU0LjcxLjI">Добавить в AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::2` and `2610:a1:1019::2`            | <a href="sdns://AAAAAAAAAAAAI1syNjEwOmExOjEwMTg6OjJdJlsyNjEwOmExOjEwMTk6OjJd">Добавить в AdGuard</a> |

#### Семейный DNS 

Данные серверы запрещают доступ к контенту для взрослых, а также включают в себя функции режимов: "Надежность и Производительность" и "Защита от угроз"

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.3` and `156.154.71.3`                  | <a href="sdns://AAAAAAAAAAAAGTE1Ni4xNTQuNzAuMyYxNTYuMTU0LjcxLjM">Добавить в AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::3` and `2610:a1:1019::3`            | <a href="sdns://AAAAAAAAAAAAI1syNjEwOmExOjEwMTg6OjNdJlsyNjEwOmExOjEwMTk6OjNd">Добавить в AdGuard</a> |

#### DNS для бизнеса 

Данные серверы блокируют нежелательный и отвлекающий внимание контент, обеспечивая производительность сотрудников, а также включают в себя функции режимов: "Надежность и Производительность", "Защита от угроз" и "Семейный DNS"

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.4` and `156.154.71.4`                  | <a href="sdns://AAAAAAAAAAAAGTE1Ni4xNTQuNzAuNCYxNTYuMTU0LjcxLjQ">Добавить в AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::4` and `2610:a1:1019::4`            | <a href="sdns://AAAAAAAAAAAAI1syNjEwOmExOjEwMTg6OjRdJlsyNjEwOmExOjEwMTk6OjRd">Добавить в AdGuard</a> |

<a name="cisco-opendns"></a>

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) — это DNS служба, которая расширяет возможности DNS за счет включения таких функций, как фильтрация контента и защита от фишинга.  

#### Стандартный

DNS-серверы с фильтрацией, защищающей ваше устройство от вредоносного контента

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `208.67.222.222` and `208.67.220.220`          | <a href="sdns://AAAAAAAAAAAAHTIwOC42Ny4yMjIuMjIyJjIwOC42Ny4yMjAuMjIw">Добавить в AdGuard</a> |
| DNS, IPv6      | `2620:119:35::35` and `2620:119:53::53`              | <a href="sdns://AAAAAAAAAAAAI1syNjIwOjExOTozNTo6MzVdJlsyNjIwOjExOTo1Mzo6NTNd">Добавить в AdGuard</a> |
| DNSCrypt, IPv4 |  Имя провайдера: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220`| <a href="sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ">Добавить в AdGuard</a> |
| DNSCrypt, IPv6 |  Имя провайдера: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]`| <a href="sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20">Добавить в AdGuard</a> |

#### FamilyShield

OpenDNS серверы с функцией блокировки контента для взрослых

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `208.67.222.123` and `208.67.220.123`             | <a href="sdns://AAAAAAAAAAAAHTIwOC42Ny4yMjIuMTIzJjIwOC42Ny4yMjAuMTIz">Добавить в AdGuard</a> |
| DNSCrypt, IPv4 | Имя провайдера: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123`| <a href="sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ">Добавить в AdGuard</a> |

<a name="google-dns"></a>

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) — бесплатная глобальная служба DNS, которую вы можете использовать в качестве альтернативы вашему текущему DNS-провайдеру.

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `8.8.8.8` and `8.8.4.4`           | <a href="sdns://AAAAAAAAAAAADzguOC44LjgmOC44LjQuNA">Добавить в AdGuard</a> |
| DNS, IPv6      | `2001:4860:4860::8888` and `2001:4860:4860::8844`            | <a href="sdns://AAAAAAAAAAAALVsyMDAxOjQ4NjA6NDg2MDo6ODg4OF0mWzIwMDE6NDg2MDo0ODYwOjo4ODQ0XQ">Добавить в AdGuard</a> |
| DNS-over-HTTPS | `https://dns.google.com/resolve?` | <a href="sdns://AgUAAAAAAAAAACAe9iTP_15r07rd8_3b_epWVGfjdymdx-5mdRZvMAzBuQ5kbnMuZ29vZ2xlLmNvbQ0vZXhwZXJpbWVudGFs">Добавить в AdGuard</a> |

<a name="cloudflare-dns"></a>

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) — это бесплатная и быстрая служба DNS, которая функционирует как рекурсивный сервер DNS, обеспечивающий поиск доменных имен для любого хоста в Интернете

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `1.1.1.1` and `1.0.0.1`           | <a href="sdns://AAAAAAAAAAAADzEuMS4xLjEmMS4wLjAuMQ">Добавить в AdGuard</a> |
| DNS, IPv6      | `2606:4700:4700::1111` and `2606:4700:4700::1001`            | <a href="sdns://AAAAAAAAAAAALFsyNjA2OjQ3MDA6NDcwMDo6MTExMV0mWzYwNjo0NzAwOjQ3MDA6OjEwMDFd">Добавить в AdGuard</a> |
| DNS-over-HTTPS, IPv4 | `dns.cloudflare.com/dns-query` | <a href="sdns://AgcAAAAAAAAABzEuMC4wLjGgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk">Добавить в AdGuard</a> |
| DNS-over-HTTPS, IPv6 | `dns.cloudflare.com/dns-query` | <a href="sdns://AgcAAAAAAAAAGVsyNjA2OjQ3MDA6NDcwMDo6MTExMV06NTOgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk">Добавить в AdGuard</a> |

<a name="quad9"></a>

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) — это бесплатная рекурсивная служба DNS, которая обеспечивает высокую производительность, конфиденциальность и защиту от фишинга и шпионских программ. Серверы Quad9 не предоставляют цензурный компонент.

#### Стандартный

Обычный DNS-сервер, который обеспечивает защиту от фишинга и шпионских программ

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `9.9.9.9` and `149.112.112.112`                                          | <a href="sdns://AAAAAAAAAAAAFzkuOS45LjkmMTQ5LjExMi4xMTIuMTEy">Добавить в AdGuard</a> |

#### Зашифрованный DNSSec/без логгирования/фильтр 

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Имя провайдера: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`| <a href="sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0">Добавить в AdGuard</a> |
| DNSCrypt, IPv4 | Имя провайдера: `2.dnscrypt-cert.quad9.net` IP: `149.112.112.9:8443`| <a href="sdns://AQMAAAAAAAAAEjE0OS4xMTIuMTEyLjk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0">Добавить в AdGuard</a> |
| DNSCrypt, IPv6 |  Имя провайдера: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::9]:8443`| <a href="sdns://AQMAAAAAAAAAEVsyNjIwOmZlOjo5XTo4NDQzIGfIR7jIdYzRICRVQ751Z0bfNN8dhMALjEcDaN-CHYY-GTIuZG5zY3J5cHQtY2VydC5xdWFkOS5uZXQ">Добавить в AdGuard</a> |
| DNSCrypt, IPv6 |  Имя провайдера: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:9]:8443`| <a href="sdns://AQMAAAAAAAAAFFsyNjIwOmZlOjpmZTo5XTo4NDQzIGfIR7jIdYzRICRVQ751Z0bfNN8dhMALjEcDaN-CHYY-GTIuZG5zY3J5cHQtY2VydC5xdWFkOS5uZXQ">Добавить в AdGuard</a> |
| DNS-over-HTTPS, IPv4 | `dns9.quad9.net:443/dns-query`| <a href="sdns://AgMAAAAAAAAABzkuOS45LjmAABJkbnM5LnF1YWQ5Lm5ldDo0NDMKL2Rucy1xdWVyeQ">Добавить в AdGuard</a> |
| DNS-over-HTTPS, IPv4 | `dns9.quad9.net:443/dns-query`| <a href="sdns://AgMAAAAAAAAADTE0OS4xMTIuMTEyLjmAABJkbnM5LnF1YWQ5Lm5ldDo0NDMKL2Rucy1xdWVyeQ">Добавить в AdGuard</a> |
| DNS-over-HTTPS, IPv6 | `dns9.quad9.net:443/dns-query`| <a href="sdns://AgMAAAAAAAAADFsyNjIwOmZlOjo5XYAAEmRuczkucXVhZDkubmV0OjQ0MwovZG5zLXF1ZXJ5">Добавить в AdGuard</a> |
| DNS-over-HTTPS, IPv6 | `dns9.quad9.net:443/dns-query`| <a href="sdns://AgMAAAAAAAAAD1syNjIwOmZlOjpmZTo5XYAAEmRuczkucXVhZDkubmV0OjQ0MwovZG5zLXF1ZXJ5">Добавить в AdGuard</a> |

#### Зашифрованный no-DNSSec/без логгирования/фильтр 

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Имя провайдера: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`| <a href="sdns://AQYAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA">Добавить в AdGuard</a> |
| DNSCrypt, IPv4 | Имя провайдера: `2.dnscrypt-cert.quad9.net` IP: `149.112.112.10:8443`| <a href="sdns://AQYAAAAAAAAAEzE0OS4xMTIuMTEyLjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA">Добавить в AdGuard</a> |
| DNSCrypt, IPv6 | Имя провайдера: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::9]:8443`| <a href="sdns://AQMAAAAAAAAAEVsyNjIwOmZlOjo5XTo4NDQzIGfIR7jIdYzRICRVQ751Z0bfNN8dhMALjEcDaN-CHYY-GTIuZG5zY3J5cHQtY2VydC5xdWFkOS5uZXQ">Добавить в AdGuard</a> |
| DNSCrypt, IPv6 | Имя провайдера: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:9]:8443`| <a href="sdns://AQMAAAAAAAAAFFsyNjIwOmZlOjpmZTo5XTo4NDQzIGfIR7jIdYzRICRVQ751Z0bfNN8dhMALjEcDaN-CHYY-GTIuZG5zY3J5cHQtY2VydC5xdWFkOS5uZXQ">Добавить в AdGuard</a> |
| DNS-over-HTTPS, IPv4 | `dns9.quad9.net:443/dns-query`| <a href="sdns://AgYAAAAAAAAACDkuOS45LjEwgAASZG5zOS5xdWFkOS5uZXQ6NDQzCi9kbnMtcXVlcnk">Добавить в AdGuard</a> |
| DNS-over-HTTPS, IPv4 | `dns9.quad9.net:443/dns-query`| <a href="sdns://AgYAAAAAAAAADjE0OS4xMTIuMTEyLjEwgAASZG5zOS5xdWFkOS5uZXQ6NDQzCi9kbnMtcXVlcnk">Добавить в AdGuard</a> |
| DNS-over-HTTPS, IPv6 | `dns9.quad9.net:443/dns-query`| <a href="sdns://AgYAAAAAAAAADVsyNjIwOmZlOjoxMF2AABJkbnM5LnF1YWQ5Lm5ldDo0NDMKL2Rucy1xdWVyeQ">Добавить в AdGuard</a> |
| DNS-over-HTTPS, IPv6 | `dns9.quad9.net:443/dns-query`| <a href="sdns://AgYAAAAAAAAAEFsyNjIwOmZlOjpmZToxMF2AABJkbnM5LnF1YWQ5Lm5ldDo0NDMKL2Rucy1xdWVyeQ">Добавить в AdGuard</a> |

<a name="verisign-public-dns"></a>

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) — это бесплатная служба DNS, которая предлагает большую безопасность и стабильность. Verisign заботится о конфиденциальности пользователей и не продает данные DNS сторонним ресурсам.

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `64.6.64.6` or `64.6.65.6`                         | <a href="sdns://AAAAAAAAAAAAEzY0LjYuNjQuNiY2NC42LjY1LjY">Добавить в AdGuard</a> |
| DNS, IPv6      | `2620:74:1b::1:1` or `2620:74:1c::2:2`             | <a href="sdns://AAAAAAAAAAAAI1syNjIwOjc0OjFiOjoxOjFdJlsyNjIwOjc0OjFjOjoyOjJd">Добавить в AdGuard</a> |

<a name="dnswatch-dns"></a>

### DNS.WATCH

[DNS.WATCH](https://dns.watch/) — это быстрая и бесплатная служба DNS с функцией защиты конфиденциальности.

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `84.200.69.80` and `84.200.70.40`                  | <a href="sdns://AAAAAAAAAAAAGTg0LjIwMC42OS44MCY4NC4yMDAuNzAuNDA">Добавить в AdGuard</a> |
| DNS, IPv6      | `2001:1608:10:25::1c04:b12f` and `2001:1608:10:25::9249:d69b`            | <a href="sdns://AAAAAAAAAAAAOVsyMDAxOjE2MDg6MTA6MjU6OjFjMDQ6YjEyZl0mWzIwMDE6MTYwODoxMDoyNTo6OTI0OTpkNjliXQ">Добавить в AdGuard</a> |

<a name="comodo-secure-dns"></a>

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) — это служба DNS, которая обрабатывает ваши DNS-запросы через всемирную сеть DNS-серверов. Удаляет рекламу и защищает от фишинговых и вредоносных программ.

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `8.26.56.26` and `8.20.247.20`                     | <a href="sdns://AAAAAAAAAAAAFjguMjYuNTYuMjYmOC4yMC4yNDcuMjA">Добавить в AdGuard</a> |
| DNSCrypt, IPv4 | Имя провайдера: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2`   | <a href="sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ">Добавить в AdGuard</a> |

<a name="dyn-dns"></a>

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) — бесплатный альтернативный DNS-сервер от Dyn.

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `216.146.35.35` and `216.146.35.36`                | <a href="sdns://AAAAAAAAAAAAGzIxNi4xNDYuMzUuMzUmMjE2LjE0Ni4zNi4zNg">Добавить в AdGuard</a> |

<a name="opennic-dns"></a>

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) — бесплатный альтернативный DNS-сервер от OpenNIC Project.

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.121.177.177` and `169.239.202.202`            | <a href="sdns://AAAAAAAAAAAAHzE4NS4xMjEuMTc3LjE3NyYxNjkuMjM5LjIwMi4yMDI">Добавить в AdGuard</a> |
| DNS, IPv6      | `2a05:dfc7:5::53` and `2a05:dfc7:5353::53`         | <a href="sdns://AAAAAAAAAAAAJlsyYTA1OmRmYzc6NTo6NTNdJlsyYTA1OmRmYzc6NTM1Mzo6NTNd">Добавить в AdGuard</a> |

<a name="quad101"></a>

### Quad101

[Quad101](https://101.101.101.101) — бесплатная альтернативная служба DNS без регистрации от TWNIC (Тайваньский сетевой информационный центр).

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `101.101.101.101` and `101.102.103.104`            | <a href="sdns://AAAAAAAAAAAAHzEwMS4xMDEuMTAxLjEwMSYxMDEuMTAyLjEwMy4xMDQ">Добавить в AdGuard</a> |
| DNS, IPv6      | `2001:de4::101` and `2001:de4::102`                | <a href="sdns://AAAAAAAAAAAAH1syMDAxOmRlNDo6MTAxXSZbMjAwMTpkZTQ6OjEwMl0">Добавить в AdGuard</a> |

<a name="freenom-world"></a>

### Freenom World

[Freenom World](https://freenom.world/en/index.htm) — бесплатный анонимный DNS-сервер  от Freenom World.

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `80.80.80.80` and `80.80.81.81`                    | <a href="sdns://AAAAAAAAAAAAFzgwLjgwLjgwLjgwJjgwLjgwLjgwLjgx">Добавить в AdGuard</a> |

<a name="fortinet-secure"></a>

### Fortinet Secure

[Fortinet Secure](https://cookbook.fortinet.com/dns-web-filtering/) — бесплатный альтернативный DNS-сервер от FortiGuard.

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `208.91.112.220` and `80.85.69.54`                 | <a href="sdns://AAAAAAAAAAAAGjIwOC45MS4xMTIuMjIwJjgwLjg1LjY5LjU0">Добавить в AdGuard</a> |

<a name="safe-dns"></a>

### Safe DNS

[Safe DNS](https://www.safedns.com/) — это глобальная сеть, состоящая из серверов, расположенных по всему миру — в Северной и Южной Америке, Европе, Африке, Австралии и на Дальнем Востоке — и обеспечивающая быструю и надежную обработку DNS-запросов из любой точки мира.

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `195.46.39.39` and `195.46.39.40`                  | <a href="sdns://AAAAAAAAAAAAGTE5NS40Ni4zOS4zOSYxOTUuNDYuMzkuNDA">Добавить в AdGuard</a> |

<a name="strongarm-dns"></a>

### Strongarm DNS

[Strongarm DNS](https://strongarm.io) — DNS-сервер от Strongarm, который предотвращает взаимодействие пользователей с вредоносным контентом.

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `54.174.40.213` and `52.3.100.184`                 | <a href="sdns://AAAAAAAAAAAAGjU0LjE3NC40MC4yMTMmNTIuMy4xMDAuMTg0">Добавить в AdGuard</a> |

<a name="safesurfer-dns"></a>

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/) — DNS-сервер от SafeSurfer, который защищает ваше устройство от вредоносного контента.

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `104.155.237.225` and `104.197.28.121`             | <a href="sdns://AAAAAAAAAAAAHjEwNC4xNTUuMjM3LjIyNSYxMDQuMTk3LjI4LjEyMQ">Добавить в AdGuard</a> |

<a name="captnemo-dns"></a>

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) — сервер Abhay Rana aka Nemo, запущенный на Digital Ocean droplet в регионе BLR1.

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Имя провайдера: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434`    | <a href="sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4">Добавить в AdGuard</a> |

<a name="fvz-dns"></a>

### fvz DNS

[fvz DNS](http://meo.ws/) — общедоступный OpenNIC Tier2 Anycast DNS сервер

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Имя провайдера: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353`   | <a href="sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz">Добавить в AdGuard</a> |
| DNSCrypt, IPv4 | Имя провайдера: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353`| <a href="sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz">Добавить в AdGuard</a> |

<a name="nawala-childprotection-dns"></a>

### Nawala Childprotection DNS

[Nawala Childprotection](http://nawala.id/) — это система интернет-фильтрации, которая защищает детей от веб-сайтов недопустимого и оскорбительного содержания.

| Протокол       | Адрес                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Имя провайдера: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144`  | <a href="sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk">Добавить в AdGuard</a> |
