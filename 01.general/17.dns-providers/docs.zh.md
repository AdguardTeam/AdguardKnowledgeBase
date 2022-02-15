---
title: 'Known DNS Providers'
taxonomy:
    category:
        - docs
visible: true
---


AdGuard 用户可以配置任何要使用的 DNS 服务器，而不是路由器或 ISP 提供的系统默认值。  在本文中，您将找到流行的 DNS 提供商列表。

* [AdGuard DNS](#adguard-dns)
* [Yandex DNS](#yandex-dns)
* [CleanBrowsing](#cleanbrowsing)
* [Comodo Secure DNS](#comodo-secure-dns)
* [Neustar UltraDNS](#neustar-dns)
* [Cisco OpenDNS](#cisco-opendns)
* [Google DNS](#google-dns)
* [Cloudflare DNS](#cloudflare-dns)
* [Quad9 DNS](#quad9)
* [Verisign Public DNS](#verisign-public-dns)
* [SWITCH DNS](#switch.ch-dns)
* [Dyn DNS](#dyn-dns)
* [DNS.WATCH](#dnswatch-dns)
* [SkyDNS RU](#sky-dns)
* [Comss.ru DNS](#comss-ru-dns)
* [Safe DNS](#safe-dns)
* [CIRA Shield DNS](#cira.ca-dns)
* [OpenNIC DNS](#opennic-dns)
* [BlahDNS](#blahdns.ger-dns)
* [Snopyta DNS](#snopyta-dns)
* [DNS for Family](#dns-for-family)
* [CZ.NIC ODVR](#cz-nic)
* [阿里 DNS](#ali-dns) 
* [CFIEC Public DNS](#cfiec-dns)
* [Nawala Childprotection DNS](#nawala-childprotection-dns)
<!--* [DNSCEPAT.ID](#dnscepat.id)-->
* [360 Secure DNS](#360-dns)
* [IIJ.JP DNS](#iij-dns)
* [DNSPod](#dnspod-dns)
* [114DNS](#114-dns)
* [Quad101](#quad101)
* [OneDNS](#onedns) 
* [Privacy-First DNS](#privacy-first-dns)
* [FreeDNS](#free-dns)
* [Freenom World](#freenom-world)
* [OSZX DNS](#oszx-dns)
* [Applied Privacy DNS](#applied-privacy-dns)
* [Strongarm DNS](#strongarm-dns)
* [SafeSurfer DNS](#safesurfer-dns)
* [DecloudUs DNS](#decloudus-dns)
* [Lelux DNS](#lelux-dns)
* [Captnemo DNS](#captnemo-dns)
* [DNS.SB](#dns-sb)
* [DNS Forge](#dns-forge)
* [Fondation Restena DNS](#restena-dns)
* [fvz DNS](#fvz-dns)
* [FFMUC DNS](#ffmuc.net-dns)
* [Digitale Gesellschaft DNS](#digitale-gesellschaft-dns)
* [LibreDNS](#libre-dns)
* [ibksturm DNS](#ibksturm-dns)
* [DNS Privacy](#dnsprivacy.org-dns)
* [AhaDNS](#ahadns)
* [Seby DNS](#seby-dns)
* [puntCAT DNS](#puntcat-dns)
* [DNSlify DNS](#dnslify-dns)
* [NextDNS](#nextdns)
* [RethinkDNS](#rethinkdns)
* [ControlD DNS](#controld)
* [Mullvad](#mullvad)
* [Small personal resolvers](#small-resolvers)
    * [Arapurayil](#arapurayil)
    * [Dandelion Sprout's Official DNS Server](#dandelion-sprouts-official-dns-server)

<a name="adguard-dns"></a>

### AdGuard DNS

[AdGuard DNS](https://adguard.com/adguard-dns/overview.html) 是广告拦截、隐私保护和家长控制的替代解决方案。  无论您使用何种平台和设备，它都能提供多种必要的保护功能，以抵御在线广告、跟踪器和网络钓鱼。

#### 默认

这些服务器提供拦截广告、跟踪和网络钓鱼的功能

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `94.140.14.14` and `94.140.15.15`             | <a href="sdns://AAcAAAAAAAAADDk0LjE0MC4xNC4xNA">添加到AdGuard</a> |
| DNS, IPv6      | `2a10:50c0::ad1:ff` and `2a10:50c0::ad2:ff`            | <a href="sdns://AAcAAAAAAAAAE1syYTEwOjUwYzA6OmFkMTpmZl0">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt.default.ns1.adguard.com` IP: `176.103.130.130:5443`| <a href="sdns://AQIAAAAAAAAAFDE3Ni4xMDMuMTMwLjEzMDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20">添加到AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt.default.ns2.adguard.com` IP: `[2a00:5a60::ad2:0ff]:5443`| <a href="sdns://AQIAAAAAAAAAGVsyYTAwOjVhNjA6OmFkMjowZmZdOjU0NDMggdAC02pMpQxHO3R5ZQ_hLgKzIcthOFYqII5APf3FXpQiMi5kbnNjcnlwdC5kZWZhdWx0Lm5zMi5hZGd1YXJkLmNvbQ">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://dns.adguard.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dns.adguard.com` | <a href="sdns://AwMAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29t">添加到AdGuard</a> |

#### 家庭保护

这些服务器提供默认功能 + 阻止成人网站 + 安全搜索

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `94.140.14.15` and `94.140.15.16`            | <a href="sdns://AAcAAAAAAAAADDk0LjE0MC4xNC4xNQ">添加到AdGuard</a> |
| DNS, IPv6      | `2a10:50c0::bad1:ff` and `2a10:50c0::bad2:ff`              | <a href="sdns://AAcAAAAAAAAAFFsyYTEwOjUwYzA6OmJhZDE6ZmZd">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt.family.ns1.adguard.com` IP: `176.103.130.132:5443`| <a href="sdns://AQIAAAAAAAAAFDE3Ni4xMDMuMTMwLjEzMjo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ">添加到AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt.family.ns2.adguard.com` IP: `[2a00:5a60::bad2:0ff]:5443`| <a href="sdns://AQIAAAAAAAAAGlsyYTAwOjVhNjA6OmJhZDI6MGZmXTo1NDQzIIwhF6nrwVfW-2QFbwrbwRxdg2c0c8RuJY2bL1fU7jUfITIuZG5zY3J5cHQuZmFtaWx5Lm5zMi5hZGd1YXJkLmNvbQ">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://dns-family.adguard.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAWZG5zLWZhbWlseS5hZGd1YXJkLmNvbQovZG5zLXF1ZXJ5">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dns-family.adguard.com` | <a href="sdns://AwMAAAAAAAAAAAAWZG5zLWZhbWlseS5hZGd1YXJkLmNvbQ">添加到AdGuard</a> |

#### 非过滤DNS

这些服务器提供安全可靠的连接，但它们不会像“默认”和“家庭保护”服务器那样过滤任何内容。

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `94.140.14.140` and `94.140.14.141`             | <a href="sdns://AAcAAAAAAAAADTk0LjE0MC4xNC4xNDA">添加到AdGuard</a> |
| DNS, IPv6      | `2a10:50c0::1:ff` and `2a10:50c0::2:ff`            | <a href="sdns://AAcAAAAAAAAAEVsyYTEwOjUwYzA6OjE6ZmZd">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`| <a href="sdns://AQMAAAAAAAAAEjk0LjE0MC4xNC4xNDA6NTQ0MyC16ETWuDo-PhJo62gfvqcN48X6aNvWiBQdvy7AZrLa-iUyLmRuc2NyeXB0LnVuZmlsdGVyZWQubnMxLmFkZ3VhcmQuY29t">添加到AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt.default.ns2.adguard.com` IP: `[2a00:5a60::01:ff]:5443`| <a href="sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://dns-unfiltered.adguard.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAaZG5zLXVuZmlsdGVyZWQuYWRndWFyZC5jb20KL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dns-unfiltered.adguard.com` | <a href="sdns://AwAAAAAAAAAAAAAaZG5zLXVuZmlsdGVyZWQuYWRndWFyZC5jb20">添加到AdGuard</a> |

<a name="yandex-dns"></a>

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) 是一项免费的 DNS 服务。  Yandex DNS 的服务器位于俄罗斯、独联体国家和西欧。  用户的请求由最近的提供高连接速度的数据中心处理。

#### 基础

在“基本”模式下，没有过滤

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `77.88.8.8` and `77.88.8.1`                | <a href="sdns://AAAAAAAAAAAACTc3Ljg4LjguOA">添加到AdGuard</a>  |
| DNS, IPv6      | `2a02:6b8::feed:0ff` and `2a02:6b8:0:1::feed:0ff` | <a href="sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDowZmZd">添加到AdGuard</a> |
| DNSCrypt, IPv4     | 供应商: `2.dnscrypt-cert.browser.yandex.net` IP: `77.88.8.78:15353`| <a href="sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA">添加到AdGuard</a> |

#### 安全

在“安全”模式下，提供对受感染和欺诈站点的保护

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `77.88.8.88` and `77.88.8.2`                | <a href="sdns://AAAAAAAAAAAACjc3Ljg4LjguODg">添加到AdGuard</a> |
| DNS, IPv6      | `2a02:6b8::feed:bad` and `2a02:6b8:0:1::feed:bad`                 | <a href="sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDpiYWRd">添加到AdGuard</a>|

#### 家庭
在“家庭”模式下，提供免受感染、欺诈和成人网站的保护

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `77.88.8.3` and `77.88.8.7`                | <a href="sdns://AAAAAAAAAAAACTc3Ljg4LjguMw">添加到AdGuard</a>|
| DNS, IPv6      | `2a02:6b8::feed:a11` and `2a02:6b8:0:1::feed:a11`                 | <a href="sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDphMTFd">添加到AdGuard</a>|

<a name="cleanbrowsing"></a>

### CleanBrowsing

[Cleanbrowsing](https://cleanbrowsing.org/) 是一种 DNS 服务，可提供可定制的过滤。  此服务提供了一种安全的方式来浏览网页，而没有不适当的内容。


#### 家庭过滤

阻止访问所有成人、色情和露骨站点，包括代理和 VPN 域以及混合内容站点


| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.228.168.168` and `185.228.169.168 `             | <a href="sdns://AAAAAAAAAAAADzE4NS4yMjguMTY4LjE2OA">添加到AdGuard</a>|
| DNS, IPv6      | `2a0d:2a00:1::` and `2a0d:2a00:2::`            | <a href="sdns://AAAAAAAAAAAAD1syYTBkOjJhMDA6MTo6XQ">添加到AdGuard</a>|
| DNSCrypt, IPv4 | Provider: `cleanbrowsing.org` IP: `185.228.168.168:8443`| <a href="sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn">添加到AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443`| <a href="sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/` | <a href="sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEy9kb2gvZmFtaWx5LWZpbHRlci8">添加到AdGuard</a> |
| DNS-over-TLS | `tls://family-filter-dns.cleanbrowsing.org` | <a href="sdns://AwAAAAAAAAAAAAAjZmFtaWx5LWZpbHRlci1kbnMuY2xlYW5icm93c2luZy5vcmc">添加到AdGuard</a> |

#### Adult Filter

Less restrictive than the Family filter, it only blocks access to adult content and malicious and phishing domains

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.228.168.10` and `185.228.169.11`             | <a href="sdns://AAAAAAAAAAAADjE4NS4yMjguMTY4LjEw">添加到AdGuard</a> |
| DNS, IPv6      | `2a0d:2a00:1::1` and `2a0d:2a00:2::1`                 | <a href="sdns://AAAAAAAAAAAAEFsyYTBkOjJhMDA6MTo6MV0">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `cleanbrowsing.org` IP: `185.228.168.10:8443`| <a href="sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc">添加到AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443`| <a href="sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/` | <a href="sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEi9kb2gvYWR1bHQtZmlsdGVyLw">添加到AdGuard</a> |
| DNS-over-TLS | `tls://adult-filter-dns.cleanbrowsing.org` | <a href="sdns://AwMAAAAAAAAAAAAiYWR1bHQtZmlsdGVyLWRucy5jbGVhbmJyb3dzaW5nLm9yZw">添加到AdGuard</a> |

#### Security Filter

Blocks phishing, spam and malicious domains

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.228.168.9` and `185.228.169.9`                | <a href="sdns://AAAAAAAAAAAADTE4NS4yMjguMTY4Ljk">添加到AdGuard</a> |
| DNS, IPv6      | `2a0d:2a00:1::2` and `2a0d:2a00:2::2`               | <a href="sdns://AAAAAAAAAAAAEFsyYTBkOjJhMDA6MTo6Ml0">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | <a href="sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnFS9kb2gvc2VjdXJpdHktZmlsdGVyLw">添加到AdGuard</a> |
| DNS-over-TLS | `tls://security-filter-dns.cleanbrowsing.org` | <a href="sdns://AwMAAAAAAAAAAAAlc2VjdXJpdHktZmlsdGVyLWRucy5jbGVhbmJyb3dzaW5nLm9yZw">添加到AdGuard</a> |

<a name="comodo-secure-dns"></a>

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) is a domain name resolution service that resolves your DNS requests through worldwide network of DNS servers. Removes excessive ads and protects from phishing and spyware.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `8.26.56.26` and `8.20.247.20`                     | <a href="sdns://AAAAAAAAAAAACjguMjYuNTYuMjY">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2`   | <a href="sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ">添加到AdGuard</a> |

<a name="neustar-dns"></a>

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) is a free cloud-based recursive DNS service that delivers fast and reliable access to sites and online applications with built-in security and threat intelligence.

#### Reliability & Performance 1

These servers provide reliable and fast DNS lookups without blocking any specific categories

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.1` and `156.154.71.1`                  | <a href="sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMQ">添加到AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::1` and `2610:a1:1019::1`            | <a href="sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjFd">添加到AdGuard</a> |

#### Reliability & Performance 2*

These servers provide reliable and fast DNS lookups without blocking any specific categories and also prevent redirecting NXDomain (Non-existent Domain) responses to a landing page

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.5` and `156.154.71.5`                        | <a href="sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuNQ">添加到AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::5` and `2610:a1:1019::5`            | <a href="sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjVd">添加到AdGuard</a> |

#### Threat Protection

These servers provide protection against malicious domains and also include "Reliability & Performance" features

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.2` and `156.154.71.2`                    | <a href="sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMg">添加到AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::2` and `2610:a1:1019::2`            | <a href="sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjJd">添加到AdGuard</a> |

#### Family Secure

These servers provide blocking access to mature content and also include "Reliability & Performance" + "Threat Protection" features

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.3` and `156.154.71.3`                  | <a href="sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMw">添加到AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::3` and `2610:a1:1019::3`            | <a href="sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjNd">添加到AdGuard</a> |

#### Business Secure

These servers provide blocking unwanted and time-wasting content and also include "Reliability & Performance" + "Threat Protection" + "Family Secure" features

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.4` and `156.154.71.4`                  | <a href="sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuNA">添加到AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::4` and `2610:a1:1019::4`            | <a href="sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjRd">添加到AdGuard</a> |

<a name="cisco-opendns"></a>

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) is a service which extends the DNS by incorporating features such as content filtering and phishing protection with a zero downtime. 

#### Standard

DNS servers with custom filtering that protects your device from malware

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `208.67.222.222` and `208.67.220.220`          | <a href="sdns://AAAAAAAAAAAADjIwOC42Ny4yMjIuMjIy">添加到AdGuard</a> |
| DNS, IPv6      | `2620:119:35::35` and `2620:119:53::53`              | <a href="sdns://AAAAAAAAAAAAEVsyNjIwOjExOTozNTo6MzVd">添加到AdGuard</a> |
| DNSCrypt, IPv4 |  Provider: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220`| <a href="sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ">添加到AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]`| <a href="sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://doh.opendns.com/dns-query` | <a href="sdns://AgUAAAAAAAAAAAAPZG9oLm9wZW5kbnMuY29tCi9kbnMtcXVlcnk">添加到AdGuard</a> |

#### FamilyShield

OpenDNS servers that provide adult content blocking

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `208.67.222.123` and `208.67.220.123`             | <a href="sdns://AAAAAAAAAAAADjIwOC42Ny4yMjIuMTIz">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123`| <a href="sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://doh.familyshield.opendns.com/dns-query` | <a href="sdns://AgUAAAAAAAAAAAAcZG9oLmZhbWlseXNoaWVsZC5vcGVuZG5zLmNvbQovZG5zLXF1ZXJ5">添加到AdGuard</a> |

<a name="google-dns"></a>

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) is a free, global DNS resolution service that you can use as an alternative to your current DNS provider.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `8.8.8.8` and `8.8.4.4`           | <a href="sdns://AAAAAAAAAAAABzguOC44Ljg">添加到AdGuard</a> |
| DNS, IPv6      | `2001:4860:4860::8888` and `2001:4860:4860::8844`            | <a href="sdns://AAAAAAAAAAAAFlsyMDAxOjQ4NjA6NDg2MDo6ODg4OF0">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://dns.google/dns-query` | <a href="sdns://AgUAAAAAAAAAACAe9iTP_15r07rd8_3b_epWVGfjdymdx-5mdRZvMAzBuQpkbnMuZ29vZ2xlCi9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dns.google` | <a href="sdns://AwAAAAAAAAAAAAAKZG5zLmdvb2dsZQ">添加到AdGuard</a> |

<a name="cloudflare-dns"></a>

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) is a free and fast DNS service which functions as a recursive name server providing domain name resolution for any host on the Internet.

#### Standard

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `1.1.1.1` and `1.0.0.1`           | <a href="sdns://AAAAAAAAAAAABzEuMS4xLjE">添加到AdGuard</a> |
| DNS, IPv6      | `2606:4700:4700::1111` and `2606:4700:4700::1001`            | <a href="sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExMV0">添加到AdGuard</a> |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query` | <a href="sdns://AgcAAAAAAAAABzEuMC4wLjGgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query` | <a href="sdns://AgcAAAAAAAAAGVsyNjA2OjQ3MDA6NDcwMDo6MTExMV06NTOgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNS-over-TLS | `tls://1dot1dot1dot1.cloudflare-dns.com` | <a href="sdns://AwcAAAAAAAAAAAAgMWRvdDFkb3QxZG90MS5jbG91ZGZsYXJlLWRucy5jb20">添加到AdGuard</a> |

#### Malware blocking only

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `1.1.1.2` and `1.0.0.2`           | <a href="sdns://AAAAAAAAAAAABzEuMS4xLjI">添加到AdGuard</a> |
| DNS, IPv6      | `2606:4700:4700::1112` and `2606:4700:4700::1002`            | <a href="sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExMl0">添加到AdGuard</a> |
| DNS-over-HTTPS| `https://security.cloudflare-dns.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAbc2VjdXJpdHkuY2xvdWRmbGFyZS1kbnMuY29tCi9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNS-over-TLS | `tls://security.cloudflare-dns.com` | <a href="sdns://AwcAAAAAAAAAAAAbc2VjdXJpdHkuY2xvdWRmbGFyZS1kbnMuY29t">添加到AdGuard</a> |

#### Malware and adult content blocking

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `1.1.1.3` and `1.0.0.3`           | <a href="sdns://AAAAAAAAAAAABzEuMS4xLjM">添加到AdGuard</a> |
| DNS, IPv6      | `2606:4700:4700::1113` and `2606:4700:4700::1003`            | <a href="sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExM10">添加到AdGuard</a> |
| DNS-over-HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAZZmFtaWx5LmNsb3VkZmxhcmUtZG5zLmNvbQovZG5zLXF1ZXJ5">添加到AdGuard</a> |
| DNS-over-TLS | `tls://family.cloudflare-dns.com` | <a href="sdns://AwcAAAAAAAAAAAAZZmFtaWx5LmNsb3VkZmxhcmUtZG5zLmNvbQ">添加到AdGuard</a> |

<a name="quad9"></a>

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) is a free, recursive, anycast DNS platform that provides high-performance, privacy, and security protection from phishing and spyware. Quad9 servers don't provide a censoring component.

#### Standard

Regular DNS servers which provide protection from phishing and spyware. It include blocklist, DNSSEC validation, and other security features.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `9.9.9.9` and `149.112.112.112`                                          | <a href="sdns://AAAAAAAAAAAABzkuOS45Ljk">添加到AdGuard</a> |
| DNS, IPv6      | `2620:fe::fe` IP: `2620:fe::fe:9`| <a href="sdns://AAAAAAAAAAAADVsyNjIwOmZlOjpmZV0">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`| <a href="sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0">添加到AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe]:8443`  | <a href="sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://dns.quad9.net/dns-query`  | <a href="sdns://AgEAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldAovZG5zLXF1ZXJ5">添加到AdGuard</a> |
| DNS-over-TLS   | `tls://dns.quad9.net`              | <a href="sdns://AwAAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldA">添加到AdGuard</a> |

#### Unsecured

Unsecured DNS servers provide no security blocklist, no DNSSEC, No EDNS client-Subnet

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `9.9.9.10` and `149.112.112.10`     | <a href="sdns://AAAAAAAAAAAACDkuOS45LjEw">添加到AdGuard</a> |
| DNS, IPv6      | `2620:fe::10` IP: `2620:fe::fe:10`  | <a href="sdns://AAAAAAAAAAAADVsyNjIwOmZlOjoxMF0">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`  | <a href="sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA">添加到AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:10]:8443`  | <a href="sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://dns10.quad9.net/dns-query`  | <a href="sdns://AgEAAAAAAAAAAAAPZG5zMTAucXVhZDkubmV0Ci9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNS-over-TLS   | `tls://dns10.quad9.net`      | <a href="sdns://AwAAAAAAAAAAAAAPZG5zMTAucXVhZDkubmV0">添加到AdGuard</a> |

#### [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) support

EDNS Client-Subnet is a method that includes components of end-user IP 地址 data in requests that are sent to authoritative DNS servers. It provides security blocklist, DNSSEC, EDNS Client-Subnet.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `9.9.9.11` and `149.112.112.11`     | <a href="sdns://AAAAAAAAAAAACDkuOS45LjEx">添加到AdGuard</a> |
| DNS, IPv6      | `2620:fe::11` IP: `2620:fe::fe:11`  | <a href="sdns://AAAAAAAAAAAADVsyNjIwOmZlOjoxMV0">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`  | <a href="sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA">添加到AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443`  | <a href="sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://dns11.quad9.net/dns-query`   | <a href="sdns://AgEAAAAAAAAAAAAPZG5zMTEucXVhZDkubmV0Ci9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNS-over-TLS   | `tls://dns11.quad9.net`       | <a href="sdns://AwAAAAAAAAAAAAAPZG5zMTEucXVhZDkubmV0">添加到AdGuard</a> |

<a name="verisign-public-dns"></a>

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) is a free DNS service that offers improved DNS stability and security over other alternatives. Verisign respects users' privacy: it doesn't sell public DNS data to third parties and redirect users' queries to serve them any ads.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `64.6.64.6` or `64.6.65.6`                         | <a href="sdns://AAAAAAAAAAAACTY0LjYuNjQuNg">添加到AdGuard</a> |
| DNS, IPv6      | `2620:74:1b::1:1` or `2620:74:1c::2:2`             | <a href="sdns://AAAAAAAAAAAAEVsyNjIwOjc0OjFiOjoxOjFd">添加到AdGuard</a> |

<a name="switch.ch-dns"></a>

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) is a swiss public DNS service provided by [switch.ch](https://www.switch.ch/)  

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4 | Provider: `dns.switch.ch` IP: `130.59.31.248` | <a href="sdns://AAAAAAAAAAAADTEzMC41OS4zMS4yNDg">添加到AdGuard</a> |
| DNS, IPv6 | Provider: `dns.switch.ch` IPv6: `2001:620:0:ff::2`| <a href="sdns://AAAAAAAAAAAAElsyMDAxOjYyMDowOmZmOjoyXQ">添加到AdGuard</a>  |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query` | <a href="sdns://AgcAAAAAAAAAAAANZG5zLnN3aXRjaC5jaAovZG5zLXF1ZXJ5">添加到AdGuard</a> |
| DNS-over-TLS | Hostname: `tls://dns.switch.ch` IP: `130.59.31.248`  and IPv6: `2001:620:0:ff::2` | <a href="sdns://AwAAAAAAAAAAAAANZG5zLnN3aXRjaC5jaA">添加到AdGuard</a>  |

<a name="dyn-dns"></a>

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) is a free alternative DNS service by Dyn

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `216.146.35.35` and `216.146.36.36`                | <a href="sdns://AAAAAAAAAAAADTIxNi4xNDYuMzUuMzU">添加到AdGuard</a> |

<a name="dnswatch-dns"></a>

### DNS.WATCH

[DNS.WATCH](https://dns.watch/) is a fast and free server without logging with a privacy protection feature.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `84.200.69.80` and `84.200.70.40`                  | <a href="sdns://AAAAAAAAAAAADDg0LjIwMC42OS44MA">添加到AdGuard</a> |
| DNS, IPv6      | `2001:1608:10:25::1c04:b12f` and `2001:1608:10:25::9249:d69b`            | <a href="sdns://AAAAAAAAAAAAHFsyMDAxOjE2MDg6MTA6MjU6OjFjMDQ6YjEyZl0">添加到AdGuard</a> |

<a name="sky-dns"></a>

### SkyDNS RU

[SkyDNS](https://www.skydns.ru/en/) solutions for content filtering and internet security.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `193.58.251.251`                  | <a href="sdns://AAAAAAAAAAAADjE5My41OC4yNTEuMjUx">添加到AdGuard</a> |

<a name="comss.ru"></a>

### Comss.ru DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) is a fast and secure DNS servers with protection against ads, tracking and phishing.

#### West DNS Server (Main)

| DNS协议       | 地址                             |                |
|----------------|-------------------------------------|----------------|
| DNS, IPv4 | `92.38.152.163` and `93.115.24.204` | <a href="sdns://AAAAAAAAAAAADTkyLjM4LjE1Mi4xNjM">添加到AdGuard</a> |
| DNS, IPv6 | `2a03:90c0:56::1a5` and `2a02:7b40:5eb0:e95d::1` | <a href="sdns://AAAAAAAAAAAAE1syYTAzOjkwYzA6NTY6OjFhNV0">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dns.comss.one` IP: `94.176.233.93:443`  | <a href="sdns://AQMAAAAAAAAAETk0LjE3Ni4yMzMuOTM6NDQzIBVpyAOGbSSr5yLPYOsmU-FiMj2_q0BAdu6WiMTPzpMTHTIuZG5zY3J5cHQtY2VydC5kbnMuY29tc3Mub25l">添加到AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.dns.comss.one` IP: `[2a02:7b40:5eb0:e95d::1]:443` | <a href="sdns://AQMAAAAAAAAAHFsyYTAyOjdiNDA6NWViMDplOTVkOjoxXTo0NDMgFWnIA4ZtJKvnIs9g6yZT4WIyPb-rQEB27paIxM_OkxMdMi5kbnNjcnlwdC1jZXJ0LmRucy5jb21zcy5vbmU">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://dns.comss.one/dns-query` | <a href="sdns://AgAAAAAAAAAAAAANZG5zLmNvbXNzLm9uZQovZG5zLXF1ZXJ5">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dns.comss.one` | <a href="sdns://AwAAAAAAAAAAAAANZG5zLmNvbXNzLm9uZQ">添加到AdGuard</a> |

#### East DNS Server (Siberia and Far East)

| DNS协议       | 地址                             |                |
|----------------|-------------------------------------|----------------|
| DNS, IPv4 | `92.223.109.31` and `91.230.211.67` | <a href="sdns://AAAAAAAAAAAADTkyLjIyMy4xMDkuMzE">添加到AdGuard</a> |
| DNS, IPv6 | `2a03:90c0:b5::1a` and `2a04:2fc0:39::47` | <a href="sdns://AAAAAAAAAAAAElsyYTAzOjkwYzA6YjU6OjFhXQ">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://dns.east.comss.one/dns-query` | <a href="sdns://AgAAAAAAAAAAAAASZG5zLmVhc3QuY29tc3Mub25lCi9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dns.east.comss.one` | <a href="sdns://AwAAAAAAAAAAAAASZG5zLmVhc3QuY29tc3Mub25l">添加到AdGuard</a> |

<a name="safe-dns"></a>

### Safe DNS

[Safe DNS](https://www.safedns.com/) is a global anycast network which consists of servers located throughout the world — both Americas, Europe, Africa, Australia, and the Far East to ensure a fast and reliable DNS resolving from any point worldwide.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `195.46.39.39` and `195.46.39.40`                  | <a href="sdns://AAAAAAAAAAAADDE5NS40Ni4zOS4zOQ">添加到AdGuard</a> |

<a name="cira.ca-dns"></a>

### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) protects against theft of personal and financial data. Keep viruses, ransomware, and other malware out of your home.

#### Private

In "Private" mode, DNS resolution only

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `149.112.121.10` and `149.112.122.10`                | <a href="sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjEw">添加到AdGuard</a>  |
| DNS, IPv6      | `2620:10A:80BB::10` and `2620:10A:80BC::10` | <a href="sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjoxMF0">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://private.canadianshield.cira.ca/dns-query` | <a href="sdns://AgEAAAAAAAAAAAAecHJpdmF0ZS5jYW5hZGlhbnNoaWVsZC5jaXJhLmNhCi9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNS-over-TLS - Private | Hostname: `tls://private.canadianshield.cira.ca` IP: `149.112.121.10`  and IPv6: `2620:10A:80BB::10` | <a href="sdns://AwAAAAAAAAAAAAAecHJpdmF0ZS5jYW5hZGlhbnNoaWVsZC5jaXJhLmNh">添加到AdGuard</a>  |

#### Protected

In "Protected" mode, malware and phishing protection

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `149.112.121.20` and `149.112.122.20`                | <a href="sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjIw">添加到AdGuard</a> |
| DNS, IPv6      | `2620:10A:80BB::20` and `2620:10A:80BC::20`                 | <a href="sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjoyMF0">添加到AdGuard</a>|
| DNS-over-HTTPS | `https://protected.canadianshield.cira.ca/dns-query` | <a href="sdns://AgEAAAAAAAAAAAAgcHJvdGVjdGVkLmNhbmFkaWFuc2hpZWxkLmNpcmEuY2EKL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS - Protected | Hostname: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.20`  and IPv6: `2620:10A:80BB::20` | <a href="sdns://AwAAAAAAAAAAAAAgcHJvdGVjdGVkLmNhbmFkaWFuc2hpZWxkLmNpcmEuY2E">添加到AdGuard</a>  |

#### Family

In "Family" mode, Protected + blocking adult content

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `149.112.121.30` and `149.112.122.30`                | <a href="sdns://AAAAAAAAAAAADjE0OS4xMTIuMTIxLjMw">添加到AdGuard</a>|
| DNS, IPv6      | `2620:10A:80BB::30` and `2620:10A:80BC::30`                 | <a href="sdns://AAAAAAAAAAAAE1syNjIwOjEwQTo4MEJCOjozMF0">添加到AdGuard</a>|
| DNS-over-HTTPS | `https://family.canadianshield.cira.ca/dns-query` | <a href="sdns://AgEAAAAAAAAAAAAdZmFtaWx5LmNhbmFkaWFuc2hpZWxkLmNpcmEuY2EKL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS - Family | Hostname: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.30`  and IPv6: `2620:10A:80BB::30` | <a href="sdns://AwAAAAAAAAAAAAAdZmFtaWx5LmNhbmFkaWFuc2hpZWxkLmNpcmEuY2E">添加到AdGuard</a>  |

<a name="opennic-dns"></a>

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) is a free alternative DNS service by OpenNIC Project

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.121.177.177` and `169.239.202.202`            | <a href="sdns://AAAAAAAAAAAADzE4NS4xMjEuMTc3LjE3Nw">添加到AdGuard</a> |
| DNS, IPv6      | `2a05:dfc7:5::53` and `2a05:dfc7:5353::53`         | <a href="sdns://AAAAAAAAAAAAEVsyYTA1OmRmYzc6NTo6NTNd">添加到AdGuard</a> |

<a name="blahdns.ger-dns"></a>

### BlahDNS

[BlahDNS](https://blahdns.com/) A small hobby DNS project. No logs, Ethereum Name Service, DNSSEC ready & Filtered ads, trackers, malwares

#### Finland DNS Server

| DNS协议       | 地址                             |                |
|----------------|-------------------------------------|----------------|
| DNS-over-TLS, IPv4 | Hostname: `tls://dot-fi.blahdns.com`  IP: `95.216.212.177` | <a href="sdns://AwAAAAAAAAAAAAAYdGxzOi8vZG90LWZpLmJsYWhkbnMuY29t">添加到AdGuard</a> |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh-fi.blahdns.com/dns-query` IP: `95.216.212.177` | <a href="sdns://AgMAAAAAAAAAAAASZG9oLWZpLmJsYWhkbnMuY29tCi9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.blahdns.com` IP: `95.216.212.177:8443`| <a href="sdns://AQMAAAAAAAAAEzk1LjIxNi4yMTIuMTc3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t">添加到AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f9:c010:43ce::1:8443`| <a href="sdns://AQMAAAAAAAAAHFsyYTAxOjRmOTpjMDEwOjQzY2U6OjFdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t">添加到AdGuard</a> |

#### Japan DNS Server

| DNS协议       | 地址                             |                |
|----------------|-------------------------------------|----------------|
| DNS-over-TLS, IPv4 | Hostname: `tls://dot-jp.blahdns.com`  IP: `139.162.112.47` | <a href="sdns://AwMAAAAAAAAAAAASZG90LWpwLmJsYWhkbnMuY29t">添加到AdGuard</a> |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh-jp.blahdns.com/dns-query` | <a href="sdns://AgMAAAAAAAAAAAASZG9oLWpwLmJsYWhkbnMuY29tCi9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.blahdns.com` IP: `139.162.112.47:8443`| <a href="sdns://AQMAAAAAAAAAEzEzOS4xNjIuMTEyLjQ3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t">添加到AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.blahdns.com` IP: `[2400:8902::f03c:92ff:fe27:344b]:8443`| <a href="sdns://AQMAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTI3OjM0NGJdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t">添加到AdGuard</a> |

#### Germany DNS Server

| DNS协议       | 地址                             |                |
|----------------|-------------------------------------|----------------|
| DNS-over-TLS, IPv4 | Hostname: `tls://dot-de.blahdns.com`  IP: `159.69.198.101` | <a href="sdns://AwAAAAAAAAAAAAASZG90LWRlLmJsYWhkbnMuY29t">添加到AdGuard</a> |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh-de.blahdns.com/dns-query` IP: `159.69.198.101`  | <a href="sdns://AgMAAAAAAAAADjE1OS42OS4xOTguMTAxABJkb2gtZGUuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.blahdns.com` IP: `159.69.198.101:8443` | <a href="sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t">添加到AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f8:1c1c:6b4b::1:8443`| <a href="sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t">添加到AdGuard</a> |

<a name="snopyta-dns"></a>

### Snopyta DNS

[Snopyta DNS](https://snopyta.org/) is a privacy friendly DNS service run by Noah Seefried.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-HTTPS | `https://fi.doh.dns.snopyta.org/dns-query` IP: `95.216.24.230` and IPv6: `2a01:4f9:2a:1919::9301` | <a href="sdns://AgcAAAAAAAAAAAAWZmkuZG9oLmRucy5zbm9weXRhLm9yZwovZG5zLXF1ZXJ5">添加到AdGuard</a> |
| DNS-over-TLS | `tls://fi.dot.dns.snopyta.org` IP: `95.216.24.230` and IPv6: `2a01:4f9:2a:1919::9301` | <a href="sdns://AwMAAAAAAAAAAAAWZmkuZG90LmRucy5zbm9weXRhLm9yZw">添加到AdGuard</a> |

<a name="dns-for-family"></a>

### DNS for Family

[DNS for Family](https://dnsforfamily.com/) aims to block websites which are considered as adult related. It helps to children and everyone for safely surf internet without worrying about get followed to harmful websites.


| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-HTTPS     | `https://dns-doh.dnsforfamily.com/dns-query`             | <a href="sdns://AgcAAAAAAAAAAAAgaHR0cHM6Ly9kbnMtZG9oLmRuc2ZvcmZhbWlseS5jb20KL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS     | `tls://dns-dot.dnsforfamily.com`             | <a href="sdns://AwcAAAAAAAAAAAAYZG5zLWRvdC5kbnNmb3JmYW1pbHkuY29t">添加到AdGuard</a> |
| DNS, IPv4      | `94.130.180.225` and `78.47.64.161`             | <a href="sdns://AAAAAAAAAAAADjk0LjEzMC4xODAuMjI1">添加到AdGuard</a> |
| DNS, IPv6      | `2a01:4f8:1c0c:40db::1` and `2a01:4f8:1c17:4df8::1`            | <a href="sdns://AAAAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFd">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `dnsforfamily.com` IP: `94.130.180.225`| <a href="sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20">添加到AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `dnsforfamily.com` IP: `[2a01:4f8:1c0c:40db::1]`| <a href="sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20">添加到AdGuard</a> |

<a name="cz-nic"></a>

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) CZ.NIC ODVR are Open DNSSEC Validating Resolvers. CZ.NIC neither collect any personal data nor gather information on pages where devices sends personal data.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `193.17.47.1` and `185.43.135.1`             | <a href="sdns://AAAAAAAAAAAACzE5My4xNy40Ny4x">添加到AdGuard</a> |
| DNS, IPv6      | `2001:148f:ffff::1` and `2001:148f:fffe::1`            | <a href="sdns://AAAAAAAAAAAAE1syMDAxOjE0OGY6ZmZmZjo6MV0">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://odvr.nic.cz/doh` | <a href="sdns://AgcAAAAAAAAAAAALb2R2ci5uaWMuY3oEL2RvaA">添加到AdGuard</a> |
| DNS-over-TLS | `tls://odvr.nic.cz` | <a href="sdns://AwAAAAAAAAAAAAALb2R2ci5uaWMuY3o">添加到AdGuard</a> |

<a name="ali-dns"></a>

### Ali DNS

[Ali DNS](https://alidns.com/) is a free recursive DNS service that committed to providing fast, stable and secure DNS resolution for the majority of Internet users. It include AliGuard facility to protect users from various attacks and threats.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `223.5.5.5` and `223.6.6.6`             | <a href="sdns://AAAAAAAAAAAACTIyMy41LjUuNQ">添加到AdGuard</a> |
| DNS, IPv6      | `2400:3200::1` and `2400:3200:baba::1`            | <a href="sdns://AAAAAAAAAAAADlsyNDAwOjMyMDA6OjFd">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAOZG5zLmFsaWRucy5jb20KL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dns.alidns.com` | <a href="sdns://AwAAAAAAAAAAAAAOZG5zLmFsaWRucy5jb20">添加到AdGuard</a> |

<a name="cfiec-dns"></a>

### CFIEC Public DNS

IPv6-based anycast DNS service with strong security capabilities and protection from spyware, malicious websites. It support DNS64 to provide domain name resolution only for IPv6 users.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv6      | `240C::6666` and `240C::6644`            | <a href="sdns://AAAAAAAAAAAADFsyNDBDOjo2NjY2XQ">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://dns.cfiec.net/dns-query` | <a href="sdns://AgcAAAAAAAAAAAANZG5zLmNmaWVjLm5ldAovZG5zLXF1ZXJ5">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dns.cfiec.net` | <a href="sdns://AwAAAAAAAAAAAAATdGxzOi8vZG5zLmNmaWVjLm5ldA">添加到AdGuard</a> |

<a name="nawala-childprotection-dns"></a>

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) is an anycast Internet filtering system that protects children from inappropriate websites and abusive contents.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `180.131.144.144` and `180.131.145.145`             | <a href="sdns://AAAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NA">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144`  | <a href="sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk">添加到AdGuard</a> |

<a name="dnscepat.id"></a>

### DNSCEPAT

[DNSCEPAT](https://dnscepat.id/) DNS is built for Security, Privacy and Fast Connectivity for you.

#### Asia DNS Server

| DNS协议       | 地址                             |                |
|----------------|-------------------------------------|----------------|
| DNS-over-TLS | Hostname: `tls://asia.dnscepat.id` | <a href="sdns://AwcAAAAAAAAAAAAQYXNpYS5kbnNjZXBhdC5pZA">添加到AdGuard</a> |
| DNS IPv4 | IP: `172.105.216.54` | <a href="sdns://AAcAAAAAAAAADjE3Mi4xMDUuMjE2LjU0">添加到AdGuard</a> |
| DNS IPv6 | IP: `2400:8902::f03c:92ff:fe09:48cc` | <a href="sdns://AAcAAAAAAAAAIFsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTA5OjQ4Y2Nd">添加到AdGuard</a> |
| DNS-over-HTTPS | Hostname: `https://asia.dnscepat.id/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAQYXNpYS5kbnNjZXBhdC5pZAovZG5zLXF1ZXJ5">添加到AdGuard</a> |

#### Eropa DNS Server

| DNS协议       | 地址                             |                |
|----------------|-------------------------------------|----------------|
| DNS-over-TLS | Hostname: `tls://eropa.dnscepat.id` | <a href="sdns://AwcAAAAAAAAAAAARZXJvcGEuZG5zY2VwYXQuaWQ">添加到AdGuard</a> |
| DNS IPv4 | IP: `5.2.75.231` | <a href="sdns://AAcAAAAAAAAACjUuMi43NS4yMzE">添加到AdGuard</a> |
| DNS IPv6 | IP: `2a04:52c0:101:98d::` | <a href="sdns://AAcAAAAAAAAAFVsyYTA0OjUyYzA6MTAxOjk4ZDo6XQ">添加到AdGuard</a> |
| DNS-over-HTTPS | Hostname: `https://eropa.dnscepat.id/dns-query` | <a href="sdns://AgcAAAAAAAAAAAARZXJvcGEuZG5zY2VwYXQuaWQKL2Rucy1xdWVyeQ">添加到AdGuard</a> |


<a name="360-dns"></a>

### 360 Secure DNS

**360 Secure DNS** is a industry-leading recursive DNS service with advanced network security threats protection.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `101.226.4.6` and `218.30.118.6`             | <a href="sdns://AAAAAAAAAAAACzEwMS4yMjYuNC42">添加到AdGuard</a> |
| DNS, IPv4      | `123.125.81.6` and `140.207.198.6`            | <a href="sdns://AAAAAAAAAAAADDEyMy4xMjUuODEuNg">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://doh.360.cn/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAKZG9oLjM2MC5jbgovZG5zLXF1ZXJ5">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dot.360.cn` | <a href="sdns://AwAAAAAAAAAAAAAKZG90LjM2MC5jbg">添加到AdGuard</a> |

<a name="iij-dns"></a>

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) is a public DNS service operated by internet initiative japan. It also block child abuse contents.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-HTTPS | `https://public.dns.iij.jp/dns-query` | <a href="sdns://AgcAAAAAAAAAAAARcHVibGljLmRucy5paWouanAKL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS | `tls://public.dns.iij.jp` | <a href="sdns://AwAAAAAAAAAAAAARcHVibGljLmRucy5paWouanA">添加到AdGuard</a> |

<a name="dnspod-dns"></a>

### DNSPod Public DNS+

[DNSPod Public DNS+](https://www.dnspod.com/) is a privacy friendly DNS provider with years of experience in domain name resolution services development, it aims to provide users more rapid, accurate and stable recursive resolution service. 

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `119.29.29.29` and `119.28.28.28`    | <a href="sdns://AAAAAAAAAAAADDExOS4yOS4yOS4yOQ">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://doh.pub/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAHZG9oLnB1YgovZG5zLXF1ZXJ5">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://dns.pub/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAHZG5zLnB1YgovZG5zLXF1ZXJ5">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dot.pub` | <a href="sdns://AwcAAAAAAAAAAAAHZG90LnB1Yg">添加到AdGuard</a> |

<a name="114-dns"></a>

### 114DNS

**114DNS** is a professional and high-reliability DNS service.

#### Normal

Block ads and annoying websites

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `114.114.114.114` and `114.114.115.115`             | <a href="sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExNA">添加到AdGuard</a> |

#### Safe

Block phishing, malcious and other unsafe websites

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `114.114.114.119` and `114.114.115.119`             | <a href="sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExOQ">添加到AdGuard</a> |

#### Family

These servers block adult websites and inappropriate contents.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `114.114.114.110` and `114.114.115.110`             | <a href="sdns://AAAAAAAAAAAADzExNC4xMTQuMTE0LjExMA">添加到AdGuard</a> |

<a name="quad101"></a>

### Quad101

[Quad101](https://101.101.101.101) is a free alternative DNS service without logging by TWNIC (Taiwan Network Information Center)

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `101.101.101.101` and `101.102.103.104`            | <a href="sdns://AAAAAAAAAAAADzEwMS4xMDEuMTAxLjEwMQ">添加到AdGuard</a> |
| DNS, IPv6      | `2001:de4::101` and `2001:de4::102`                | <a href="sdns://AAAAAAAAAAAAD1syMDAxOmRlNDo6MTAxXQ">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://dns.twnic.tw/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAMZG5zLnR3bmljLnR3Ci9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNS-over-TLS | `tls://101.101.101.101` | <a href="sdns://AwAAAAAAAAAAAAAPMTAxLjEwMS4xMDEuMTAx">添加到AdGuard</a> |

<a name="one-dns"></a>

### OneDNS

**OneDNS** is a secure, fast, free niche DNS service with malicious domains blocking facility.

#### Pure Edition

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `117.50.10.10` and `52.80.52.52`             | <a href="sdns://AAAAAAAAAAAADDExNy41MC4xMC4xMA">添加到AdGuard</a> |

#### Block Edition

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `117.50.11.11` and `52.80.66.66`             | <a href="sdns://AAAAAAAAAAAADDExNy41MC4xMS4xMQ">添加到AdGuard</a> |

<a name="privacy-first-dns"></a>

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) block over 140K ads, ad-tracking, malware and phishing domains!. No Logging, No ECS, DNSSEC Validation, Free!

#### Singapore DNS Server

| DNS协议       | 地址                             | Location      |                |
|----------------|-------------------------------------|---------------|----------------|
| DNS, IPv4      | `174.138.21.128` | <a href="sdns://AAAAAAAAAAAADjE3NC4xMzguMjEuMTI4">添加到AdGuard</a> |       
| DNS, IPv6      | `2400:6180:0:d0::5f6e:4001`   | <a href="sdns://AAAAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXQ">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dns.tiar.app` IP: `174.138.21.128`| <a href="sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA">添加到AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.dns.tiar.app` IP: `[2400:6180:0:d0::5f6e:4001]`| <a href="sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://doh.tiarap.org/dns-query` (cached via third-party) | <a href="sdns://AgcAAAAAAAAAAAAOZG9oLnRpYXJhcC5vcmcKL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://doh.tiar.app/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAMZG9oLnRpYXIuYXBwCi9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNS-over-Quic | `quic://doh.tiar.app` | <a href="sdns://BAMAAAAAAAAAEjE3NC4xMzguMjkuMTc1Ojc4NAAMZG9oLnRpYXIuYXBw">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dot.tiar.app` | <a href="sdns://AwMAAAAAAAAAAAAMZG90LnRpYXIuYXBw">添加到AdGuard</a> |

#### Japan DNS Server

| DNS协议       | 地址                             |                |
|----------------|-------------------------------------|----------------|
| DNS, IPv4      | `172.104.93.80` | <a href="sdns://AAAAAAAAAAAADTE3Mi4xMDQuOTMuODA">添加到AdGuard</a> |       
| DNS, IPv6      | `2400:8902::f03c:91ff:feda:c514`   | <a href="sdns://AAAAAAAAAAAAIFsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRd">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.jp.tiar.app` IP: `172.104.93.80`| <a href="sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA">添加到AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.jp.tiar.app` IP: `[2400:8902::f03c:91ff:feda:c514]`| <a href="sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://jp.tiarap.org/dns-query` | <a href="sdns://AgcAAAAAAAAAAAANanAudGlhcmFwLm9yZwovZG5zLXF1ZXJ5">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://jp.tiar.app/dns-query` | <a href="sdns://AgcAAAAAAAAADTE3Mi4xMDQuOTMuODAgPhoaD2xT8-l6SS1XCEtbmAcFnuBXqxUFh2_YP9o9uDgLanAudGlhci5hcHAKL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS | `tls://jp.tiar.app` | <a href="sdns://AwAAAAAAAAAAAAALanAudGlhci5hcHA">添加到AdGuard</a> |

<a name="free-dns"></a>

### FreeDNS

[FreeDNS](https://freedns.zone/) is an open, free and public DNS Service provided by [Virtexxa cloud services](https://virtexxa.com/). No DNS redirects, No logging.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `172.104.237.57` and `172.104.49.100`             | <a href="sdns://AAAAAAAAAAAADjE3Mi4xMDQuMjM3LjU3">添加到AdGuard</a> |
| DNS, IPv4      | `37.235.1.174` and `37.235.1.177`             | <a href="sdns://AAAAAAAAAAAADDM3LjIzNS4xLjE3NA">添加到AdGuard</a> |

<a name="freenom-world"></a>

### Freenom World

[Freenom World](https://freenom.world/en/index.html) is a free anonymous DNS resolver by Freenom World

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `80.80.80.80` and `80.80.81.81`                    | <a href="sdns://AAAAAAAAAAAACzgwLjgwLjgwLjgw">添加到AdGuard</a> |

<a name="oszx-dns"></a>

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) is a small Ad-Blocking DNS hobby project.

#### OSZX server

These servers provide blocking ads, keeps no logs and DNSSEC enabled

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `51.38.83.141`             | <a href="sdns://AAAAAAAAAAAADDUxLjM4LjgzLjE0MQ">添加到AdGuard</a> |
| DNS, IPv6      | `2001:41d0:801:2000::d64`            | <a href="sdns://AAAAAAAAAAAAGVsyMDAxOjQxZDA6ODAxOjIwMDA6OmQ2NF0">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`| <a href="sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv">添加到AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353`| <a href="sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query` | <a href="sdns://AgcAAAAAAAAAAAALZG5zLm9zenguY28KL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dns.oszx.co` | <a href="sdns://AwAAAAAAAAAAAAALZG5zLm9zenguY28">添加到AdGuard</a> |

#### PumpleX server

These servers provide no blocking ads, keeps no logs and DNSSEC enabled

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `51.38.82.198`             | <a href="sdns://AAAAAAAAAAAADDUxLjM4LjgyLjE5OA">添加到AdGuard</a> |
| DNS, IPv6      | `2001:41d0:801:2000::1b28`            | <a href="sdns://AAAAAAAAAAAAGlsyMDAxOjQxZDA6ODAxOjIwMDA6OjFiMjhd">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.pumplex.com` IP: `51.38.82.198:5353`| <a href="sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ">添加到AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.pumplex.com` IP: `[2001:41d0:801:2000::1b28]:5353`| <a href="sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://dns.pumplex.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLnB1bXBsZXguY29tCi9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dns.pumplex.com` | <a href="sdns://AwAAAAAAAAAAAAAPZG5zLnB1bXBsZXguY29t">添加到AdGuard</a> |

<a name="applied-privacy-dns"></a>

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) operate DNS privacy services to help protect DNS traffic and to help diversify the DNS resolver landscape offering modern DNS协议s.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-HTTPS | `https://doh.applied-privacy.net/query` | <a href="sdns://AgAAAAAAAAAAAAAXZG9oLmFwcGxpZWQtcHJpdmFjeS5uZXQGL3F1ZXJ5">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dot1.applied-privacy.net` | <a href="sdns://AwAAAAAAAAAAAAAYZG90MS5hcHBsaWVkLXByaXZhY3kubmV0">添加到AdGuard</a> |

<a name="strongarm-dns"></a>

### Strongarm DNS

[Strongarm DNS](https://strongarm.io) is a DNS service by Strongarm that prevents people from interacting with malicious content

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `54.174.40.213` and `52.3.100.184`                 | <a href="sdns://AAAAAAAAAAAADTU0LjE3NC40MC4yMTM">添加到AdGuard</a> |

<a name="safesurfer-dns"></a>

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/) is a DNS service by SafeSurfer that protects your device from harmful and adult contents.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `104.155.237.225` and `104.197.28.121`             | <a href="sdns://AAAAAAAAAAAADzEwNC4xNTUuMjM3LjIyNQ">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121`| <a href="sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56">添加到AdGuard</a> |

<a name="decloudus-dns"></a>

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) A secure, private, open source DNS resolver with no logs, malware protection, ad blocking. Degoogle and Ungoogle your phone, tablet, and computer.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.DeCloudUs-test` IP: `176.9.199.158:8443`| <a href="sdns://AQMAAAAAAAAAEjE3Ni45LjE5OS4xNTg6ODQ0MyD73Ye9XeCsS7TdFu9fRP7s5k-0aL91yygulGVmeOAKLh4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q">添加到AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:151:11b0::3]:8443`| <a href="sdns://AQMAAAAAAAAAG1syYTAxOjRmODoxNTE6MTFiMDo6M106ODQ0MyD73Ye9XeCsS7TdFu9fRP7s5k-0aL91yygulGVmeOAKLh4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://dns.decloudus.com/dns-query` | <a href="sdns://AgAAAAAAAAAAAAARZG5zLmRlY2xvdWR1cy5jb20KL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dns.decloudus.com` | <a href="sdns://AwAAAAAAAAAAAAARZG5zLmRlY2xvdWR1cy5jb20">添加到AdGuard</a> |

<a name="lelux-dns"></a>

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) is run by Elias Ojala. Finland.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-HTTPS | `https://resolver-eu.lelux.fi/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAUcmVzb2x2ZXItZXUubGVsdXguZmkKL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS | `tls://resolver-eu.lelux.fi` | <a href="sdns://AwAAAAAAAAAAAAAUcmVzb2x2ZXItZXUubGVsdXguZmk">添加到AdGuard</a> |

<a name="captnemo-dns"></a>

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) is a server running out of a Digital Ocean droplet in BLR1 region. Maintained by Abhay Rana aka Nemo. 

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434`    | <a href="sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4">添加到AdGuard</a> |

<a name="dns-sb"></a>

### DNS.SB

[DNS.SB](https://dns.sb/) provide free DNS service with no Logging, DNSSEC enabled.


| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.222.222.222` and `45.11.45.11`             | <a href="sdns://AAAAAAAAAAAADzE4NS4yMjIuMjIyLjIyMg">添加到AdGuard</a> |
| DNS, IPv6      | `2a09::` and `2a11::`            | <a href="sdns://AAAAAAAAAAAACFsyYTA5Ojpd">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAKZG9oLmRucy5zYgovZG5zLXF1ZXJ5">添加到AdGuard</a> |
| DNS-over-TLS | `tls://185.222.222.222` | <a href="sdns://AwAAAAAAAAAAAAAPMTg1LjIyMi4yMjIuMjIy">添加到AdGuard</a> |

<a name="dns-forge"></a>

### DNS Forge

[DNS Forge](https://dnsforge.de/) is a redundant DNS resolver with an ad-blocker and no logging provided by [adminforge](https://adminforge.de/).

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `176.9.93.198` and `176.9.1.117`             | <a href="sdns://AAAAAAAAAAAADDE3Ni45LjkzLjE5OA">添加到AdGuard</a> |
| DNS, IPv6      | `2a01:4f8:151:34aa::198` and `2a01:4f8:141:316d::117`            | <a href="sdns://AAAAAAAAAAAAGFsyYTAxOjRmODoxNTE6MzRhYTo6MTk4XQ">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://dnsforge.de/dns-query` | <a href="sdns://AgcAAAAAAAAAAAALZG5zZm9yZ2UuZGUKL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dnsforge.de` | <a href="sdns://AwAAAAAAAAAAAAALZG5zZm9yZ2UuZGU">添加到AdGuard</a> |

<a name="restena-dns"></a>

### Fondation Restena DNS

[Restena DNS](https://www.restena.lu/en/service/public-dns-resolver) servers provided by [Restena Foundation](https://www.restena.lu/)

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-HTTPS | `https://kaitain.restena.lu/dns-query` IP: `158.64.1.29` and IPv6: `2001:a18:1::29` | <a href="sdns://AgcAAAAAAAAAAAASa2FpdGFpbi5yZXN0ZW5hLmx1Ci9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNS-over-TLS| `tls://kaitain.restena.lu` IP: `158.64.1.29` and IPv6: `2001:a18:1::29` | <a href="sdns://AwAAAAAAAAAAAAASa2FpdGFpbi5yZXN0ZW5hLmx1">添加到AdGuard</a>  |

<a name="fvz-dns"></a>

### fvz DNS

[fvz DNS](http://meo.ws/) is a Fusl's public primary OpenNIC Tier2 Anycast DNS Resolver

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353`   | <a href="sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353`| <a href="sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz">添加到AdGuard</a> |

<a name="ffmuc.net-dns"></a>

### FFMUC DNS

[FFMUC](https://ffmuc.net/) free DNS servers provided by Freifunk München

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-TLS, IPv4 | Hostname: `tls://dot.ffmuc.net` | <a href="sdns://AwAAAAAAAAAAAAANZG90LmZmbXVjLm5ldA">添加到AdGuard</a> |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh.ffmuc.net/dns-query` | <a href="sdns://AgcAAAAAAAAAAAANZG9oLmZmbXVjLm5ldAovZG5zLXF1ZXJ5">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.ffmuc.net` IP: `5.1.66.255:8443` | <a href="sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0">添加到AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.ffmuc.net` IP: `[2001:678:e68:f000::]:8443` | <a href="sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ">添加到AdGuard</a> |

<a name="digitale-gesellschaft"></a>

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) is a public resolver operated by the Digital Society. Hosted in Zurich, Switzerland

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP: `185.95.218.42` and IPv6: `2a05:fc84::42` | <a href="sdns://AgcAAAAAAAAAAAAcZG5zLmRpZ2l0YWxlLWdlc2VsbHNjaGFmdC5jaAovZG5zLXF1ZXJ5">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dns.digitale-gesellschaft.ch` IP: `185.95.218.43` and IPv6: `2a05:fc84::43` | <a href="sdns://AwAAAAAAAAAAAAAcZG5zLmRpZ2l0YWxlLWdlc2VsbHNjaGFmdC5jaA">添加到AdGuard</a> |

<a name="libre-dns"></a>

### LibreDNS

[LibreDNS](https://libredns.gr/) is a public encrypted DNS service run by [LibreOps](https://libreops.cc/).

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `88.198.92.222`            | <a href="sdns://AAAAAAAAAAAADTg4LjE5OC45Mi4yMjI">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://doh.libredns.gr/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG9oLmxpYnJlZG5zLmdyCi9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://doh.libredns.gr/ads` | <a href="sdns://AgcAAAAAAAAAAAAPZG9oLmxpYnJlZG5zLmdyBC9hZHM">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dot.libredns.gr` IP: `116.202.176.26` | <a href="sdns://AwAAAAAAAAAAAAAPZG90LmxpYnJlZG5zLmdy">添加到AdGuard</a> |

<a name="ibksturm-dns"></a>

### ibksturm DNS

[ibksturm DNS](https://ibksturm.synology.me/) testing servers provided by ibksturm. OPENNIC, DNSSEC, No Filter, No Logging

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-TLS, IPv4 | Hostname: `tls://ibksturm.synology.me` IP: `83.77.85.7` | <a href="sdns://AwAAAAAAAAAAAAAUaWJrc3R1cm0uc3lub2xvZ3kubWU">添加到AdGuard</a> |
| DNS-over-HTTPS, IPv4 | Hostname: `https://ibksturm.synology.me/dns-query` IP: `178.82.102.190` | <a href="sdns://AgcAAAAAAAAAACA-GhoPbFPz6XpJLVcIS1uYBwWe4FerFQWHb9g_2j24OBRpYmtzdHVybS5zeW5vbG9neS5tZQovZG5zLXF1ZXJ5">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.ibksturm` IP: `83.77.85.7:8443` | <a href="sdns://AQcAAAAAAAAADzgzLjc3Ljg1Ljc6ODQ0MyDBz1dQALBbwmxiH17PmqJWCs6_AH6-yzp_9LIN4LQ57hgyLmRuc2NyeXB0LWNlcnQuaWJrc3R1cm0">添加到AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.ibksturm` IP: `[2a02:1205:5055:de60:b26e:bfff:fe1d:e19b]:8443` | <a href="sdns://AQcAAAAAAAAALlsyYTAyOjEyMDU6NTA1NTpkZTYwOmIyNmU6YmZmZjpmZTFkOmUxOWJdOjg0NDMgwc9XUACwW8JsYh9ez5qiVgrOvwB-vss6f_SyDeC0Oe4YMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt">添加到AdGuard</a> |

<a name="dnsprivacy.org-dns"></a>

### DNS Privacy

A collaborative open project to promote, implement and deploy [DNS Privacy](https://dnsprivacy.org/).

DNS servers run by the [Stubby developers](https://getdnsapi.net/)

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-TLS | Hostname: `tls://getdnsapi.net` IP: `185.49.141.37` and IPv6: `2a04:b900:0:100::37` | <a href="sdns://AwAAAAAAAAAAAAANZ2V0ZG5zYXBpLm5ldA">添加到AdGuard</a>  |
| DNS-over-TLS | Provider: `Surfnet` Hostname `tls://dnsovertls.sinodun.com` IP: `145.100.185.15` and IPv6: `2001:610:1:40ba:145:100:185:15` | <a href="sdns://AwAAAAAAAAAAAAAWZG5zb3ZlcnRscy5zaW5vZHVuLmNvbQ">添加到AdGuard</a>  |
| DNS-over-TLS | Provider: `Surfnet` Hostname `tls://dnsovertls1.sinodun.com` IP: `145.100.185.16` and IPv6: `2001:610:1:40ba:145:100:185:16` | <a href="sdns://AwAAAAAAAAAAAAAXZG5zb3ZlcnRsczEuc2lub2R1bi5jb20">添加到AdGuard</a>  |

Other DNS servers with 'no logging' policy

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-TLS | Provider: `UncensoredDNS` Hostname `tls://unicast.censurfridns.dk` IP: `89.233.43.71 ` and IPv6: `2a01:3a0:53:53::0` | <a href="sdns://AwAAAAAAAAAAAAAXdW5pY2FzdC5jZW5zdXJmcmlkbnMuZGs">添加到AdGuard</a>  |
| DNS-over-TLS | Provider: `UncensoredDNS` Hostname `tls://anycast.censurfridns.dk` IP: `91.239.100.100` and IPv6: `2001:67c:28a4::` | <a href="sdns://AwcAAAAAAAAAAAAXYW55Y2FzdC5jZW5zdXJmcmlkbnMuZGs">添加到AdGuard</a>  |
| DNS-over-TLS | Provider: `dkg` Hostname `tls://dns.cmrg.net` IP: `199.58.81.218`and IPv6: `2001:470:1c:76d::53` | <a href="sdns://AwAAAAAAAAAAAAAMZG5zLmNtcmcubmV0">添加到AdGuard</a>  |
| DNS-over-TLS, IPv4 | Hostname: `tls://dns.larsdebruin.net` IP: `51.15.70.167` | <a href="sdns://AwAAAAAAAAAAAAATZG5zLmxhcnNkZWJydWluLm5ldA">添加到AdGuard</a> |
| DNS-over-TLS | Hostname `tls://dns-tls.bitwiseshift.net` IP: `81.187.221.24` and IPv6: `2001:8b0:24:24::24` | <a href="sdns://AwAAAAAAAAAAAAAYZG5zLXRscy5iaXR3aXNlc2hpZnQubmV0">添加到AdGuard</a>  |
| DNS-over-TLS | Hostname `tls://ns1.dnsprivacy.at` IP: `94.130.110.185` and IPv6: `2a01:4f8:c0c:3c03::2` | <a href="sdns://AwAAAAAAAAAAAAARbnMxLmRuc3ByaXZhY3kuYXQ">添加到AdGuard</a>  |
| DNS-over-TLS | Hostname `tls://ns2.dnsprivacy.at` IP: `94.130.110.178` and IPv6: `2a01:4f8:c0c:3bfc::2` | <a href="sdns://AwAAAAAAAAAAAAARbnMyLmRuc3ByaXZhY3kuYXQ">添加到AdGuard</a>  |
| DNS-over-TLS, IPv4 | Hostname: `tls://dns.bitgeek.in ` IP: `139.59.51.46` | <a href="sdns://AwAAAAAAAAAAAAAOZG5zLmJpdGdlZWsuaW4">添加到AdGuard</a> |
| DNS-over-TLS | Hostname `tls://dns.neutopia.org` IP: `89.234.186.112` and IPv6: `2a00:5884:8209::2` | <a href="sdns://AwAAAAAAAAAAAAAQZG5zLm5ldXRvcGlhLm9yZw">添加到AdGuard</a>  |
| DNS-over-TLS | Provider: `Go6Lab` Hostname `tls://privacydns.go6lab.si` IPv6: `2001:67c:27e4::35` | <a href="sdns://AwAAAAAAAAAAAAAUcHJpdmFjeWRucy5nbzZsYWIuc2k">添加到AdGuard</a>  |
| DNS-over-TLS | Hostname: `tls://dot.securedns.eu` IP: `146.185.167.43` and IPv6: `2a03:b0c0:0:1010::e9a:3001` | <a href="sdns://AwcAAAAAAAAAAAAQZG90LnNlY3VyZWRucy5ldQ">添加到AdGuard</a>  |

DNS servers with minimal logging/limitations. These servers use some logging, self-signed certs or no support for strict mode.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-TLS | Provider: `NIC Chile` Hostname `dnsotls.lab.nic.cl` IP: `200.1.123.46` and IPv6: `2001:1398:1:0:200:1:123:46` | <a href="sdns://AwcAAAAAAAAAAAASZG5zb3Rscy5sYWIubmljLmNs">添加到AdGuard</a>  |
| DNS-over-TLS | Provider: `OARC` Hostname `tls-dns-u.odvr.dns-oarc.net` IP: `184.105.193.78` and IPv6: `2620:ff:c000:0:1::64:25` | <a href="sdns://AwcAAAAAAAAAAAAbdGxzLWRucy11Lm9kdnIuZG5zLW9hcmMubmV0">添加到AdGuard</a>  |

<a name="ahadns"></a>

### AhaDNS

[AhaDNS](https://ahadns.com/) A zero logging and ad blocking DNS service provided by Fredrik Pettersson.

#### Netherlands

| DNS协议       | 地址                             |                |
|----------------|-------------------------------------|----------------|
| DNS, IPv4      | `5.2.75.75` | <a href="sdns://AAcAAAAAAAAACTUuMi43NS43NQ">添加到AdGuard</a> |
| DNS, IPv6      | `2a04:52c0:101:75::75` | <a href="sdns://AAAAAAAAAAAAFlsyYTA0OjUyYzA6MTAxOjc1Ojo3NV0">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://doh.nl.ahadns.net/dns-query` | <a href="sdns://AgAAAAAAAAAAAAARZG9oLm5sLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dot.nl.ahadns.net` | <a href="sdns://AwAAAAAAAAAAAAARZG90Lm5sLmFoYWRucy5uZXQ">添加到AdGuard</a> |

#### India

| DNS协议       | 地址                             |                |
|----------------|-------------------------------------|----------------|
| DNS, IPv4      | `45.79.120.233` | <a href="sdns://AAAAAAAAAAAADTQ1Ljc5LjEyMC4yMzM">添加到AdGuard</a> |
| DNS, IPv6      | `2400:8904:e001:43::43` | <a href="sdns://AAAAAAAAAAAAF1syNDAwOjg5MDQ6ZTAwMTo0Mzo6NDNd">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://doh.in.ahadns.net/dns-query` | <a href="sdns://AgAAAAAAAAAAAAARZG9oLmluLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dot.in.ahadns.net` | <a href="sdns://AwAAAAAAAAAAAAARZG90LmluLmFoYWRucy5uZXQ">添加到AdGuard</a> |

#### Los Angeles

| DNS协议       | 地址                             |                |
|----------------|-------------------------------------|----------------|
| DNS, IPv4      | `45.67.219.208` | <a href="sdns://AAAAAAAAAAAADTQ1LjY3LjIxOS4yMDg">添加到AdGuard</a> |
| DNS, IPv6      | `2a04:bdc7:100:70::70` | <a href="sdns://AAAAAAAAAAAAFlsyYTA0OmJkYzc6MTAwOjcwOjo3MF0">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://doh.la.ahadns.net/dns-query` | <a href="sdns://AgAAAAAAAAAAAAARZG9oLmxhLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dot.la.ahadns.net` | <a href="sdns://AwAAAAAAAAAAAAARZG90LmxhLmFoYWRucy5uZXQ">添加到AdGuard</a> |

#### New York

| DNS协议       | 地址                             |                |
|----------------|-------------------------------------|----------------|
| DNS, IPv4      | `185.213.26.187` | <a href="sdns://AAAAAAAAAAAADjE4NS4yMTMuMjYuMTg3">添加到AdGuard</a> |
| DNS, IPv6      | `2a0d:5600:33:3::3` | <a href="sdns://AAAAAAAAAAAAE1syYTBkOjU2MDA6MzM6Mzo6M10">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://doh.ny.ahadns.net/dns-query` | <a href="sdns://AgAAAAAAAAAAAAARZG9oLm55LmFoYWRucy5uZXQKL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dot.ny.ahadns.net` | <a href="sdns://AwAAAAAAAAAAAAARZG90Lm55LmFoYWRucy5uZXQ">添加到AdGuard</a> |

#### Poland

| DNS协议       | 地址                             |                |
|----------------|-------------------------------------|----------------|
| DNS-over-HTTPS | `https://doh.pl.ahadns.net/dns-query` | <a href="sdns://AgAAAAAAAAAAAAARZG9oLnBsLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dot.pl.ahadns.net` | <a href="sdns://AwAAAAAAAAAAAAARZG90LnBsLmFoYWRucy5uZXQ">添加到AdGuard</a> |

#### Italy

| DNS协议       | 地址                             |                |
|----------------|-------------------------------------|----------------|
| DNS-over-HTTPS | `https://doh.it.ahadns.net/dns-query` | <a href="sdns://AgAAAAAAAAAAAAARZG9oLml0LmFoYWRucy5uZXQKL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dot.it.ahadns.net` | <a href="sdns://AwAAAAAAAAAAAAARZG90Lml0LmFoYWRucy5uZXQ">添加到AdGuard</a> |

#### Spain

| DNS协议       | 地址                             |                |
|----------------|-------------------------------------|----------------|
| DNS-over-HTTPS | `https://doh.es.ahadns.net/dns-query` | <a href="sdns://AgAAAAAAAAAAAAARZG9oLmVzLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dot.es.ahadns.net` | <a href="sdns://AwAAAAAAAAAAAAARZG90LmVzLmFoYWRucy5uZXQ">添加到AdGuard</a> |

#### Norway

| DNS协议       | 地址                             |                |
|----------------|-------------------------------------|----------------|
| DNS-over-HTTPS | `https://doh.no.ahadns.net/dns-query` | <a href="sdns://AgAAAAAAAAAAAAARZG9oLm5vLmFoYWRucy5uZXQKL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dot.no.ahadns.net` | <a href="sdns://AwAAAAAAAAAAAAARZG90Lm5vLmFoYWRucy5uZXQ">添加到AdGuard</a> |

#### Chicago

| DNS协议       | 地址                             |                |
|----------------|-------------------------------------|----------------|
| DNS-over-HTTPS | `https://doh.chi.ahadns.net/dns-query` | <a href="sdns://AgAAAAAAAAAAAAASZG9oLmNoaS5haGFkbnMubmV0Ci9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dot.chi.ahadns.net` | <a href="sdns://AwAAAAAAAAAAAAASZG90LmNoaS5haGFkbnMubmV0">添加到AdGuard</a> |

#### Australia

| DNS协议       | 地址                             |                |
|----------------|-------------------------------------|----------------|
| DNS-over-HTTPS | `https://doh.au.ahadns.net/dns-query` | <a href="sdns://AgAAAAAAAAAAAAARZG9oLmF1LmFoYWRucy5uZXQKL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dot.au.ahadns.net` | <a href="sdns://AwAAAAAAAAAAAAARZG90LmF1LmFoYWRucy5uZXQ">添加到AdGuard</a> |

<a name="seby-dns"></a>

### Seby DNS

[Seby DNS](https://dns.seby.io/) is a privacy focused DNS service provided by Sebastian Schmidt. No Logging, DNSSEC validation.

#### DNS Server 1

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `45.76.113.31`             | <a href="sdns://AAAAAAAAAAAADDQ1Ljc2LjExMy4zMQ">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31`| <a href="sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dot.seby.io` | <a href="sdns://AwAAAAAAAAAAAAARdGxzOi8vZG90LnNlYnkuaW8">添加到AdGuard</a> |

#### DNS Server 2

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `45.76.113.31` `139.99.222.72`             | <a href="sdns://AAAAAAAAAAAADTEzOS45OS4yMjIuNzI">添加到AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dns.seby.io` IP: `139.99.222.72`| <a href="sdns://AQcAAAAAAAAADTEzOS45OS4yMjIuNzIgCwVoTw0L4dgal5LC1FbZUtHtLR_rVuV6rVnxO95e4GUbMi5kbnNjcnlwdC1jZXJ0LmRucy5zZWJ5Lmlv">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://doh-2.seby.io/dns-query` | <a href="sdns://AgcAAAAAAAAAAAANZG9oLTIuc2VieS5pbwovZG5zLXF1ZXJ5">添加到AdGuard</a> |
| DNS-over-TLS | `tls://dot.seby.io` | <a href="sdns://AwAAAAAAAAAAAAARdGxzOi8vZG90LnNlYnkuaW8">添加到AdGuard</a> |

<a name="puntcat-dns"></a>

### puntCAT DNS

[puntCAT](http://www.servidordenoms.cat/) is physically located near Barcelona, Spain. puntCAT offers a public DNS service, free, secure, close and that respects your privacy.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `109.69.8.51`             | <a href="sdns://AAAAAAAAAAAACzEwOS42OS44LjUx">添加到AdGuard</a> |
| DNS, IPv6      | `2a00:1508:0:4::9`            | <a href="sdns://AAAAAAAAAAAAElsyYTAwOjE1MDg6MDo0Ojo5XQ">添加到AdGuard</a> |

<a name="dnslify-dns"></a>

### DNSlify DNS

[DNSlify DNS](https://www.dnslify.com/services/) operate public DNS resolvers to speed up requests, increase redundancy. The service provide by [Peerix](https://www.peerix.net/)

#### Default

These servers provide DNS resolution without traffic filtering.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.235.81.1` and `185.235.81.2`             | <a href="sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuMQ">添加到AdGuard</a> |
| DNS, IPv6      | `2a0d:4d00:81::1` and `2a0d:4d00:81::2`            | <a href="sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjFd">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://doh.dnslify.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG9oLmRuc2xpZnkuY29tCi9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNS-over-TLS | `tls://doh.dnslify.com` | <a href="sdns://AwAAAAAAAAAAAAAPZG9oLmRuc2xpZnkuY29t">添加到AdGuard</a> |

#### Safe

Safe mode guard against infected, fraudulent or bot sites.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.235.81.3` and `185.235.81.4`             | <a href="sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuMw">添加到AdGuard</a> |
| DNS, IPv6      | `2a0d:4d00:81::3` and `2a0d:4d00:81::4`            | <a href="sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjNd">添加到AdGuard</a> |

#### Family

Family mode provide family oriented filtering offering the protection of "Safe" resolvers + blocking adult sites.

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.235.81.5` and `185.235.81.6`             | <a href="sdns://AAAAAAAAAAAADDE4NS4yMzUuODEuNQ">添加到AdGuard</a> |
| DNS, IPv6      | `2a0d:4d00:81::5` and `2a0d:4d00:81::6`            | <a href="sdns://AAAAAAAAAAAAEVsyYTBkOjRkMDA6ODE6OjVd">添加到AdGuard</a> |

<a name="nextdns"></a>

### NextDNS

[NextDNS](https://nextdns.io/) provides publicly accessible unfiltered resolvers with no logging in addition to its freemium configurable filtering resolvers with optional logging.

#### Unfiltered

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
|DNS-over-HTTPS|`dns.nextdns.io`|<a href="sdns://AgcAAAAAAAAAAAAOZG5zLm5leHRkbnMuaW8A">添加到AdGuard</a>|
|DNS-over-TLS|`tls://dns.nextdns.io`|<a href="sdns://AwcAAAAAAAAAAAAOZG5zLm5leHRkbnMuaW8">添加到AdGuard</a>|

<a name="rethinkdns"></a>

### RethinkDNS

[RethinkDNS](https://www.bravedns.com/configure) provides DNS-over-HTTPS service running as Cloudflare Worker with configurable blocklists.

#### Unfiltered

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
|DNS-over-HTTPS|`https://basic.bravedns.com/`|<a href="sdns://AgcAAAAAAAAAAAASYmFzaWMuYnJhdmVkbnMuY29tAA">添加到AdGuard</a>|

<a name="controld"></a>

### ControlD DNS

[ControlD](https://controld.com/) is a customizable DNS service that can be used to block unwanted categories of sites (like ads or porn), popular online services like Facebook or TikTok,  or any domain of your choice.

#### Unfiltered

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `76.76.2.0`             | <a href="sdns://AAcAAAAAAAAACTc2Ljc2LjIuMA">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://freedns.controld.com/p0`          | <a href="sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDAAAAA">添加到AdGuard</a> |
| DNS-over-TLS   | `tls://p0.freedns.controld.com`           | <a href="sdns://AwcAAAAAAAAAF3AwLmZyZWVkbnMuY29udHJvbGQuY29tAAA">添加到AdGuard</a> |

#### Block malware

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `76.76.2.1`             | <a href="sdns://AAcAAAAAAAAACTc2Ljc2LjIuMQ">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://freedns.controld.com/p1`          | <a href="sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDEAAAA">添加到AdGuard</a> |
| DNS-over-TLS   | `tls://p1.freedns.controld.com`           | <a href="sdns://AwcAAAAAAAAAF3AxLmZyZWVkbnMuY29udHJvbGQuY29tAAA">添加到AdGuard</a> |

##### Block malware + ads

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `76.76.2.2`             | <a href="sdns://AAcAAAAAAAAACTc2Ljc2LjIuMg">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://freedns.controld.com/p2`          | <a href="sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDIAAAA">添加到AdGuard</a> |
| DNS-over-TLS   | `tls://p2.freedns.controld.com`           | <a href="sdns://AwcAAAAAAAAAF3AyLmZyZWVkbnMuY29udHJvbGQuY29tAAA">添加到AdGuard</a> |

##### Block malware + ads + social

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `76.76.2.3`             | <a href="sdns://AAcAAAAAAAAACTc2Ljc2LjIuMw">添加到AdGuard</a> |
| DNS-over-HTTPS | `https://freedns.controld.com/p3`          | <a href="sdns://AgcAAAAAAAAAH2h0dHBzOi8vZnJlZWRucy5jb250cm9sZC5jb20vcDMAAAA">添加到AdGuard</a> |
| DNS-over-TLS   | `tls://p3.freedns.controld.com`           | <a href="sdns://AwcAAAAAAAAAF3AzLmZyZWVkbnMuY29udHJvbGQuY29tAAA">添加到AdGuard</a> |

<a name="mullvad"></a>

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) provides publicly accessible DNS with QNAME minimization, endpoints located in Australia, Germany, Singapore, Sweden, United Kingdom and United States (New York and Los Angeles).

#### Non-filtering

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-HTTPS | `https://doh.mullvad.net/dns-query`          | <a href="sdns://AgcAAAAAAAAAAAAPZG9oLm11bGx2YWQubmV0Ci9kbnMtcXVlcnk">添加到AdGuard</a> |
| DNS-over-TLS   | `tls://doh.mullvad.net`           | <a href="sdns://AwcAAAAAAAAAAAAPZG9oLm11bGx2YWQubmV0">添加到AdGuard</a> |

#### Ad blocking

| DNS协议       | 地址                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-HTTPS | `https://adblock.doh.mullvad.net/dns-query`          | <a href="sdns://AgcAAAAAAAAAAAAXYWRibG9jay5kb2gubXVsbHZhZC5uZXQKL2Rucy1xdWVyeQ">添加到AdGuard</a> |
| DNS-over-TLS   | `tls://adblock.doh.mullvad.net`           | <a href="sdns://AwcAAAAAAAAAAAAXYWRibG9jay5kb2gubXVsbHZhZC5uZXQ">添加到AdGuard</a> |


<a name="small-resolvers"></a>

### Small personal resolvers

In this section we list small, mostly personal DNS resolvers. They often have only one or very few servers and worse uptime than 'big' providers. We won't be able to proper monitor their availability. **Use them at your own risk!**

<a name="arapurayil"></a>

#### Arapurayil

[Arapurayil](https://dns.arapurayil.com) is a personal DNS service hosted in Mumbai, India.

无登录 |  过滤广告、跟踪器、网络钓鱼等 |  DNSSEC |  QNAME 最小化 |  没有 EDNS 客户端子网。

| DNS协议       | 地址                    |                                                        |
|----------------|------------------------------------------------------------------|------------------|
| DNSCrypt, IPv4 | Host: `2.dnscrypt-cert.dns.arapurayil.com` IP: `3.7.156.128` | <a href="sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ">添加到AdGuard</a> |
| DNS-over-HTTPS | Host: `https://dns.arapurayil.com/dns-query`                 | <a href="sdns://AgMAAAAAAAAAAAASZG5zLmFyYXB1cmF5aWwuY29tCi9kbnMtcXVlcnk">添加到AdGuard</a>  |   

<a name="dandelion-sprouts-official-dns-server"></a>

#### Dandelion Sprout's Official DNS Server

[Dandelion Sprout 的官方 DNS 服务器](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server) 是托管在挪威特隆赫姆的个人 DNS 服务，使用 AdGuard Home 搭建。

由于更先进的语法，比 AdGuard DNS 阻止更多的广告和恶意软件，但在跟踪器上更容易，并阻止另类小报和大多数图像板。  日志记录用于改进其使用的过滤器列表（例如，通过取消阻止不应该被阻止的站点），并确定服务器系统更新的最少坏时间。  有关其他重要信息，请参阅上面的链接。

| DNS协议       | 地址                    |                                                        |
|----------------|------------------------------------------------------------------|------------------|
| DNS-over-HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | <a href="sdns://AgEAAAAAAAAAAAAhZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbToyNTAxCi9kbnMtcXVlcnk">添加到AdGuard</a>
| DNS-over-TLS   | `tls://dandelionsprout.asuscomm.com:853` | <a href="sdns://AwEAAAAAAAAAAAAgZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbTo4NTM">添加到AdGuard</a>
| DNS-over-QUIC  | `quic://dandelionsprout.asuscomm.com:48582` | <a href="sdns://BAEAAAAAAAAAAAAiZGFuZGVsaW9uc3Byb3V0LmFzdXNjb21tLmNvbTo0ODU4Mg">添加到AdGuard</a>
| DNS, IPv4      | Varies; see link above. |
| DNS, IPv6      | Varies; see link above. |
| DNSCrypt, IPv4 | Varies; see link above. |

