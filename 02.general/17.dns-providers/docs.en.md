---
title: 'Known DNS Providers'
taxonomy:
    category:
        - docs
visible: true
---


AdGuard users can configure any DNS server to be used instead of the system default provided by the router or ISP. In this article you will find a list of popular DNS providers.

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

[AdGuard DNS](https://adguard.com/adguard-dns/overview.html) is an alternative solution for ad blocking, privacy protection, and parental control. It provides the number of necessary protection features against online ads, trackers, and phishing, no matter what platform and device you use.

#### Default

These servers provide blocking ads, tracking and phishing

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `176.103.130.130` and `176.103.130.131`             | <a href="sdns://AAAAAAAAAAAAHzE3Ni4xMDMuMTMwLjEzMCYxNzYuMTAzLjEzMC4xMzE">Add to AdGuard</a> |
| DNS, IPv6      | `2a00:5a60::ad1:0ff` and `2a00:5a60::ad2:0ff`            | <a href="sdns://AAAAAAAAAAAAKVsyYTAwOjVhNjA6OmFkMTowZmZdJlsyYTAwOjVhNjA6OmFkMjowZmZd">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt.default.ns1.adguard.com` IP: `176.103.130.130:5443`| <a href="sdns://AQIAAAAAAAAAFDE3Ni4xMDMuMTMwLjEzMDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20">Add to AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt.default.ns2.adguard.com` IP: `[2a00:5a60::ad2:0ff]:5443`| <a href="sdns://AQIAAAAAAAAAGVsyYTAwOjVhNjA6OmFkMjowZmZdOjU0NDMggdAC02pMpQxHO3R5ZQ_hLgKzIcthOFYqII5APf3FXpQiMi5kbnNjcnlwdC5kZWZhdWx0Lm5zMi5hZGd1YXJkLmNvbQ">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://dns.adguard.com/dns-query` | <a href="sdns://AgcAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |

#### Family Protection 

These servers provide the Default features + Blocking adult websites + Safe search

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `176.103.130.132` and `176.103.130.134`            | <a href="sdns://AAAAAAAAAAAAHzE3Ni4xMDMuMTMwLjEzMiYxNzYuMTAzLjEzMC4xMzQ">Add to AdGuard</a> |
| DNS, IPv6      | `2a00:5a60::bad1:0ff` and `2a00:5a60::bad2:0ff`              | <a href="sdns://AAAAAAAAAAAAK1syYTAwOjVhNjA6OmJhZDE6MGZmXSZbMmEwMDo1YTYwOjpiYWQyOjBmZl0">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt.family.ns1.adguard.com` IP: `176.103.130.132:5443`| <a href="sdns://AQIAAAAAAAAAFDE3Ni4xMDMuMTMwLjEzMjo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ">Add to AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt.family.ns2.adguard.com` IP: `[2a00:5a60::bad2:0ff]:5443`| <a href="sdns://AQIAAAAAAAAAGlsyYTAwOjVhNjA6OmJhZDI6MGZmXTo1NDQzIIwhF6nrwVfW-2QFbwrbwRxdg2c0c8RuJY2bL1fU7jUfITIuZG5zY3J5cHQuZmFtaWx5Lm5zMi5hZGd1YXJkLmNvbQ">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://dns-family.adguard.com/dns-query` | <a href="sdns://AgcAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMgAWZG5zLWZhbWlseS5hZGd1YXJkLmNvbQovZG5zLXF1ZXJ5">Add to AdGuard</a> |

<a name="yandex-dns"></a>

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) is a free recursive DNS service. Yandex.DNS' servers are located in Russia, CIS countries, and Western Europe. Users' requests are processed by the nearest data center which provides high connection speeds.

#### Basic

In "Basic" mode, there is no traffic filtering

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `77.88.8.8` and `77.88.8.1`                | <a href="sdns://AAAAAAAAAAAAEzc3Ljg4LjguOCY3Ny44OC44LjE">Add to AdGuard</a>  |
| DNS, IPv6      | `2a02:6b8::feed:0ff` and `2a02:6b8:0:1::feed:0ff` | <a href="sdns://AAAAAAAAAAAALVsyYTAyOjZiODo6ZmVlZDowZmZdJlsyYTAyOjZiODowOjE6OmZlZWQ6MGZmXQ">Add to AdGuard</a> |
| DNSCrypt, IPv4     | Provider: `2.dnscrypt-cert.browser.yandex.net` IP: `77.88.8.78:15353`| <a href="sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA">Add to AdGuard</a> |

#### Safe

In "Safe" mode, protection from infected and fraudulent sites is provided

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `77.88.8.88` and `77.88.8.2`                | <a href="sdns://AAAAAAAAAAAAFDc3Ljg4LjguODgmNzcuODguOC4y">Add to AdGuard</a> |
| DNS, IPv6      | `2a02:6b8::feed:bad` and `2a02:6b8:0:1::feed:bad`                 | <a href="sdns://AAAAAAAAAAAALVsyYTAyOjZiODo6ZmVlZDpiYWRdJlsyYTAyOjZiODowOjE6OmZlZWQ6YmFkXQ">Add to AdGuard</a>|

#### Family

In "Family" mode, protection from infected, fraudulent and adult sites is provided 

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `77.88.8.3` and `77.88.8.7`                | <a href="sdns://AAAAAAAAAAAAEzc3Ljg4LjguMyY3Ny44OC44Ljc">Add to AdGuard</a>|
| DNS, IPv6      | `2a02:6b8::feed:a11` and `2a02:6b8:0:1::feed:a11`                 | <a href="sdns://AAAAAAAAAAAALVsyYTAyOjZiODo6ZmVlZDphMTFdJlsyYTAyOjZiODowOjE6OmZlZWQ6YTExXQ">Add to AdGuard</a>|

<a name="cleanbrowsing"></a>

### CleanBrowsing

[Cleanbrowsing](https://cleanbrowsing.org/) is a DNS service which provides customizable filtering. This service offers a safe way to browse the web without inappropriate content.

#### Family Filter

Blocks access to all adult, pornographic and explicit sites, including proxy & VPN domains and mixed content sites

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.228.168.168` and `185.228.169.168 `             | <a href="sdns://AAAAAAAAAAAAHzE4NS4yMjguMTY4LjE2OCYxODUuMjI4LjE2OS4xNjg">Add to AdGuard</a>|
| DNS, IPv6      | `2a0d:2a00:1::1` and `2a0d:2a00:2::1`            | <a href="sdns://AAAAAAAAAAAAIVsyYTBkOjJhMDA6MTo6MV0mWzJhMGQ6MmEwMDoyOjoxXQ">Add to AdGuard</a>|
| DNSCrypt, IPv4 | Provider: `cleanbrowsing.org` IP: `185.228.168.168:8443`| <a href="sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn">Add to AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443`| <a href="sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/` | <a href="sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEy9kb2gvZmFtaWx5LWZpbHRlci8">Add to AdGuard</a> |

#### Adult Filter

Less restrictive than the Family filter, it only blocks access to adult content and malicious and phishing domains

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.228.168.10` and `185.228.169.10`             | <a href="sdns://AAAAAAAAAAAAHDE4NS4yMjguMTY4LjEwJjg1LjIyOC4xNjkuMTE">Add to AdGuard</a> |
| DNS, IPv6      | `2a0d:2a00:1::` and `2a0d:2a00:2::`                 | <a href="sdns://AAAAAAAAAAAAH1syYTBkOjJhMDA6MTo6XSZbMmEwZDoyYTAwOjI6Ol0">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `cleanbrowsing.org` IP: `185.228.168.10:8443`| <a href="sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmcc">Add to AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443`| <a href="sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/` | <a href="sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEi9kb2gvYWR1bHQtZmlsdGVyLw">Add to AdGuard</a> |

#### Security Filter

Blocks phishing, spam and malicious domains

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.228.168.9` and `185.228.169.9`                | <a href="sdns://AAAAAAAAAAAAGzE4NS4yMjguMTY4LjkmMTg1LjIyOC4xNjkuOQ">Add to AdGuard</a> |
| DNS, IPv6      | `2a0d:2a00:1::2` and `2a0d:2a00:2::2`               | <a href="sdns://AAAAAAAAAAAAIVsyYTBkOjJhMDA6MTo6Ml0mWzJhMGQ6MmEwMDoyOjoyXQ">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | <a href="sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnFS9kb2gvc2VjdXJpdHktZmlsdGVyLw">Add to AdGuard</a> |

<a name="neustar-recursive-dns"></a>

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) is a free cloud-based recursive DNS service that delivers fast and reliable access to sites and online applications with built-in security and threat intelligence.

#### Reliability & Performance 1

These servers provide reliable and fast DNS lookups without blocking any specific categories

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.1` and `156.154.71.1`                  | <a href="sdns://AAAAAAAAAAAAGTE1Ni4xNTQuNzAuMSYxNTYuMTU0LjcxLjE">Add to AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::1` and `2610:a1:1019::1`            | <a href="sdns://AAAAAAAAAAAAI1syNjEwOmExOjEwMTg6OjFdJlsyNjEwOmExOjEwMTk6OjFd">Add to AdGuard</a> |

#### Reliability & Performance 2*

These servers provide reliable and fast DNS lookups without blocking any specific categories and also prevent redirecting NXDomain (Non-existent Domain) responses to a landing page

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.5` and `156.154.71.5`                        | <a href="sdns://AAAAAAAAAAAAGTE1Ni4xNTQuNzAuNSYxNTYuMTU0LjcxLjU">Add to AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::5` and `2610:a1:1019::5`            | <a href="sdns://AAAAAAAAAAAAI1syNjEwOmExOjEwMTg6OjVdJlsyNjEwOmExOjEwMTk6OjVd">Add to AdGuard</a> |

#### Threat Protection

These servers provide protection against malicious domains and also include "Reliability & Performance" features

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.2` and `156.154.71.2`                    | <a href="sdns://AAAAAAAAAAAAGTE1Ni4xNTQuNzAuMiYxNTYuMTU0LjcxLjI">Add to AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::2` and `2610:a1:1019::2`            | <a href="sdns://AAAAAAAAAAAAI1syNjEwOmExOjEwMTg6OjJdJlsyNjEwOmExOjEwMTk6OjJd">Add to AdGuard</a> |

#### Family Secure

These servers provide blocking access to mature content and also include "Reliability & Performance" + "Threat Protection" features

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.3` and `156.154.71.3`                  | <a href="sdns://AAAAAAAAAAAAGTE1Ni4xNTQuNzAuMyYxNTYuMTU0LjcxLjM">Add to AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::3` and `2610:a1:1019::3`            | <a href="sdns://AAAAAAAAAAAAI1syNjEwOmExOjEwMTg6OjNdJlsyNjEwOmExOjEwMTk6OjNd">Add to AdGuard</a> |

#### Business Secure

These servers provide blocking unwanted and time-wasting content and also include "Reliability & Performance" + "Threat Protection" + "Family Secure" features

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.4` and `156.154.71.4`                  | <a href="sdns://AAAAAAAAAAAAGTE1Ni4xNTQuNzAuNCYxNTYuMTU0LjcxLjQ">Add to AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::4` and `2610:a1:1019::4`            | <a href="sdns://AAAAAAAAAAAAI1syNjEwOmExOjEwMTg6OjRdJlsyNjEwOmExOjEwMTk6OjRd">Add to AdGuard</a> |

<a name="cisco-opendns"></a>

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) is a service which extends the DNS by incorporating features such as content filtering and phishing protection with a zero downtime. 

#### Standard

DNS servers with custom filtering that protects your device from malware

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `208.67.222.222` and `208.67.220.220`          | <a href="sdns://AAAAAAAAAAAAHTIwOC42Ny4yMjIuMjIyJjIwOC42Ny4yMjAuMjIw">Add to AdGuard</a> |
| DNS, IPv6      | `2620:119:35::35` and `2620:119:53::53`              | <a href="sdns://AAAAAAAAAAAAI1syNjIwOjExOTozNTo6MzVdJlsyNjIwOjExOTo1Mzo6NTNd">Add to AdGuard</a> |
| DNSCrypt, IPv4 |  Provider: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220`| <a href="sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ">Add to AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]`| <a href="sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20">Add to AdGuard</a> |

#### FamilyShield

OpenDNS servers that provide adult content blocking

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `208.67.222.123` and `208.67.220.123`             | <a href="sdns://AAAAAAAAAAAAHTIwOC42Ny4yMjIuMTIzJjIwOC42Ny4yMjAuMTIz">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123`| <a href="sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ">Add to AdGuard</a> |

<a name="google-dns"></a>

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) is a free, global DNS resolution service that you can use as an alternative to your current DNS provider.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `8.8.8.8` and `8.8.4.4`           | <a href="sdns://AAAAAAAAAAAADzguOC44LjgmOC44LjQuNA">Add to AdGuard</a> |
| DNS, IPv6      | `2001:4860:4860::8888` and `2001:4860:4860::8844`            | <a href="sdns://AAAAAAAAAAAALVsyMDAxOjQ4NjA6NDg2MDo6ODg4OF0mWzIwMDE6NDg2MDo0ODYwOjo4ODQ0XQ">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://dns.google.com/resolve?` | <a href="sdns://AgUAAAAAAAAAACAe9iTP_15r07rd8_3b_epWVGfjdymdx-5mdRZvMAzBuQ5kbnMuZ29vZ2xlLmNvbQ0vZXhwZXJpbWVudGFs">Add to AdGuard</a> |

<a name="cloudflare-dns"></a>

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) is a free and fast DNS service which functions as a recursive name server providing domain name resolution for any host on the Internet.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `1.1.1.1` and `1.0.0.1`           | <a href="sdns://AAAAAAAAAAAADzEuMS4xLjEmMS4wLjAuMQ">Add to AdGuard</a> |
| DNS, IPv6      | `2606:4700:4700::1111` and `2606:4700:4700::1001`            | <a href="sdns://AAAAAAAAAAAALFsyNjA2OjQ3MDA6NDcwMDo6MTExMV0mWzYwNjo0NzAwOjQ3MDA6OjEwMDFd">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv4 | `dns.cloudflare.com/dns-query` | <a href="sdns://AgcAAAAAAAAABzEuMC4wLjGgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv6 | `dns.cloudflare.com/dns-query` | <a href="sdns://AgcAAAAAAAAAGVsyNjA2OjQ3MDA6NDcwMDo6MTExMV06NTOgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |

<a name="quad9"></a>

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) is a free, recursive, anycast DNS platform that provides high-performance, privacy, and security protection from phishing and spyware. Quad9 servers don't provide a censoring component.

#### Standard

Regular DNS server which provides protection from phishing and spyware

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `9.9.9.9` and `149.112.112.112`                                          | <a href="sdns://AAAAAAAAAAAAFzkuOS45LjkmMTQ5LjExMi4xMTIuMTEy">Add to AdGuard</a> |

#### Encrypted DNSSec/no-log/filter

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`| <a href="sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `149.112.112.9:8443`| <a href="sdns://AQMAAAAAAAAAEjE0OS4xMTIuMTEyLjk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0">Add to AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::9]:8443`| <a href="sdns://AQMAAAAAAAAAEVsyNjIwOmZlOjo5XTo4NDQzIGfIR7jIdYzRICRVQ751Z0bfNN8dhMALjEcDaN-CHYY-GTIuZG5zY3J5cHQtY2VydC5xdWFkOS5uZXQ">Add to AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:9]:8443`| <a href="sdns://AQMAAAAAAAAAFFsyNjIwOmZlOjpmZTo5XTo4NDQzIGfIR7jIdYzRICRVQ751Z0bfNN8dhMALjEcDaN-CHYY-GTIuZG5zY3J5cHQtY2VydC5xdWFkOS5uZXQ">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv4 | `dns9.quad9.net:443/dns-query`| <a href="sdns://AgMAAAAAAAAABzkuOS45LjmAABJkbnM5LnF1YWQ5Lm5ldDo0NDMKL2Rucy1xdWVyeQ">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv4 | `dns9.quad9.net:443/dns-query`| <a href="sdns://AgMAAAAAAAAADTE0OS4xMTIuMTEyLjmAABJkbnM5LnF1YWQ5Lm5ldDo0NDMKL2Rucy1xdWVyeQ">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv6 | `dns9.quad9.net:443/dns-query`| <a href="sdns://AgMAAAAAAAAADFsyNjIwOmZlOjo5XYAAEmRuczkucXVhZDkubmV0OjQ0MwovZG5zLXF1ZXJ5">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv6 | `dns9.quad9.net:443/dns-query`| <a href="sdns://AgMAAAAAAAAAD1syNjIwOmZlOjpmZTo5XYAAEmRuczkucXVhZDkubmV0OjQ0MwovZG5zLXF1ZXJ5">Add to AdGuard</a> |

#### Encrypted no-DNSSec/no-log/no-filter

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`| <a href="sdns://AQYAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `149.112.112.10:8443`| <a href="sdns://AQYAAAAAAAAAEzE0OS4xMTIuMTEyLjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA">Add to AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::9]:8443`| <a href="sdns://AQMAAAAAAAAAEVsyNjIwOmZlOjo5XTo4NDQzIGfIR7jIdYzRICRVQ751Z0bfNN8dhMALjEcDaN-CHYY-GTIuZG5zY3J5cHQtY2VydC5xdWFkOS5uZXQ">Add to AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:9]:8443`| <a href="sdns://AQMAAAAAAAAAFFsyNjIwOmZlOjpmZTo5XTo4NDQzIGfIR7jIdYzRICRVQ751Z0bfNN8dhMALjEcDaN-CHYY-GTIuZG5zY3J5cHQtY2VydC5xdWFkOS5uZXQ">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv4 | `dns9.quad9.net:443/dns-query`| <a href="sdns://AgYAAAAAAAAACDkuOS45LjEwgAASZG5zOS5xdWFkOS5uZXQ6NDQzCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv4 | `dns9.quad9.net:443/dns-query`| <a href="sdns://AgYAAAAAAAAADjE0OS4xMTIuMTEyLjEwgAASZG5zOS5xdWFkOS5uZXQ6NDQzCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv6 | `dns9.quad9.net:443/dns-query`| <a href="sdns://AgYAAAAAAAAADVsyNjIwOmZlOjoxMF2AABJkbnM5LnF1YWQ5Lm5ldDo0NDMKL2Rucy1xdWVyeQ">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv6 | `dns9.quad9.net:443/dns-query`| <a href="sdns://AgYAAAAAAAAAEFsyNjIwOmZlOjpmZToxMF2AABJkbnM5LnF1YWQ5Lm5ldDo0NDMKL2Rucy1xdWVyeQ">Add to AdGuard</a> |

<a name="verisign-public-dns"></a>

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) is a free DNS service that offers improved DNS stability and security over other alternatives. Verisign respects users' privacy: it doesn't sell public DNS data to third parties and redirect users' queries to serve them any ads.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `64.6.64.6` or `64.6.65.6`                         | <a href="sdns://AAAAAAAAAAAAEzY0LjYuNjQuNiY2NC42LjY1LjY">Add to AdGuard</a> |
| DNS, IPv6      | `2620:74:1b::1:1` or `2620:74:1c::2:2`             | <a href="sdns://AAAAAAAAAAAAI1syNjIwOjc0OjFiOjoxOjFdJlsyNjIwOjc0OjFjOjoyOjJd">Add to AdGuard</a> |

<a name="dnswatch-dns"></a>

### DNS.WATCH

[DNS.WATCH](https://dns.watch/) is a fast and free server without logging with a privacy protection feature.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `84.200.69.80` and `84.200.70.40`                  | <a href="sdns://AAAAAAAAAAAAGTg0LjIwMC42OS44MCY4NC4yMDAuNzAuNDA">Add to AdGuard</a> |
| DNS, IPv6      | `2001:1608:10:25::1c04:b12f` and `2001:1608:10:25::9249:d69b`            | <a href="sdns://AAAAAAAAAAAAOVsyMDAxOjE2MDg6MTA6MjU6OjFjMDQ6YjEyZl0mWzIwMDE6MTYwODoxMDoyNTo6OTI0OTpkNjliXQ">Add to AdGuard</a> |

<a name="comodo-secure-dns"></a>

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) is a domain name resolution service that resolves your DNS requests through worldwide network of DNS servers. Removes excessive ads and protects from phishing and spyware.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `8.26.56.26` and `8.20.247.20`                     | <a href="sdns://AAAAAAAAAAAAFjguMjYuNTYuMjYmOC4yMC4yNDcuMjA">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2`   | <a href="sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ">Add to AdGuard</a> |

<a name="dyn-dns"></a>

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) is a free alternative DNS service by Dyn

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `216.146.35.35` and `216.146.35.36`                | <a href="sdns://AAAAAAAAAAAAGzIxNi4xNDYuMzUuMzUmMjE2LjE0Ni4zNi4zNg">Add to AdGuard</a> |

<a name="opennic-dns"></a>

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) is a free alternative DNS service by OpenNIC Project

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.121.177.177` and `169.239.202.202`            | <a href="sdns://AAAAAAAAAAAAHzE4NS4xMjEuMTc3LjE3NyYxNjkuMjM5LjIwMi4yMDI">Add to AdGuard</a> |
| DNS, IPv6      | `2a05:dfc7:5::53` and `2a05:dfc7:5353::53`         | <a href="sdns://AAAAAAAAAAAAJlsyYTA1OmRmYzc6NTo6NTNdJlsyYTA1OmRmYzc6NTM1Mzo6NTNd">Add to AdGuard</a> |

<a name="quad101"></a>

### Quad101

[Quad101](https://101.101.101.101) is a free alternative DNS service without logging by TWNIC (Taiwan Network Information Center)

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `101.101.101.101` and `101.102.103.104`            | <a href="sdns://AAAAAAAAAAAAHzEwMS4xMDEuMTAxLjEwMSYxMDEuMTAyLjEwMy4xMDQ">Add to AdGuard</a> |
| DNS, IPv6      | `2001:de4::101` and `2001:de4::102`                | <a href="sdns://AAAAAAAAAAAAH1syMDAxOmRlNDo6MTAxXSZbMjAwMTpkZTQ6OjEwMl0">Add to AdGuard</a> |

<a name="freenom-world"></a>

### Freenom World

[Freenom World](https://freenom.world/en/index.htm) is a free anonymous DNS resolver by Freenom World

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `80.80.80.80` and `80.80.81.81`                    | <a href="sdns://AAAAAAAAAAAAFzgwLjgwLjgwLjgwJjgwLjgwLjgwLjgx">Add to AdGuard</a> |

<a name="fortinet-secure"></a>

### Fortinet Secure

[Fortinet Secure](https://cookbook.fortinet.com/dns-web-filtering/) is a free alternative DNS service by FortiGuard

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `208.91.112.220` and `80.85.69.54`                 | <a href="sdns://AAAAAAAAAAAAGjIwOC45MS4xMTIuMjIwJjgwLjg1LjY5LjU0">Add to AdGuard</a> |

<a name="safe-dns"></a>

### Safe DNS

[Safe DNS](https://www.safedns.com/) is a global anycast network which consists of servers located throughout the world — both Americas, Europe, Africa, Australia, and the Far East to ensure a fast and reliable DNS resolving from any point worldwide.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `195.46.39.39` and `195.46.39.40`                  | <a href="sdns://AAAAAAAAAAAAGTE5NS40Ni4zOS4zOSYxOTUuNDYuMzkuNDA">Add to AdGuard</a> |

<a name="strongarm-dns"></a>

### Strongarm DNS

[Strongarm DNS](https://strongarm.io) is a DNS service by Strongarm that prevents people from interacting with malicious content

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `54.174.40.213` and `52.3.100.184`                 | <a href="sdns://AAAAAAAAAAAAGjU0LjE3NC40MC4yMTMmNTIuMy4xMDAuMTg0">Add to AdGuard</a> |

<a name="safesurfer-dns"></a>

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/) is a DNS service by SafeSurfer that protects your device from harmful content

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `104.155.237.225` and `104.197.28.121`             | <a href="sdns://AAAAAAAAAAAAHjEwNC4xNTUuMjM3LjIyNSYxMDQuMTk3LjI4LjEyMQ">Add to AdGuard</a> |

<a name="captnemo-dns"></a>

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) is a server running out of a Digital Ocean droplet in BLR1 region. Maintained by Abhay Rana aka Nemo. 

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434`    | <a href="sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4">Add to AdGuard</a> |

<a name="fvz-dns"></a>

### fvz DNS

[fvz DNS](http://meo.ws/) is a Fusl's public primary OpenNIC Tier2 Anycast DNS Resolver

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353`   | <a href="sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353`| <a href="sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz">Add to AdGuard</a> |

<a name="nawala-childprotection-dns"></a>

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) is an anycast Internet filtering system that protects children from inappropriate websites and abusive contents.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144`  | <a href="sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk">Add to AdGuard</a> |
