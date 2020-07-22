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
* [Fortinet Secure](#fortinet-secure)
* [SkyDNS RU](#sky-dns) 
* [Safe DNS](#safe-dns)
* [CIRA Shield DNS](#cira.ca-dns)
* [OpenNIC DNS](#opennic-dns)
* [BlahDNS](#blahdns.ger-dns)
* [Snopyta DNS](#snopyta-dns)
* [DNS for Family](#dns-for-family)
* [CZ.NIC ODVR](#cz-nic)
* [Ali DNS](#ali-dns) 
* [CFIEC Public DNS](#cfiec-dns)
* [Nawala Childprotection DNS](#nawala-childprotection-dns)
* [360 Secure DNS](#360-dns)
* [IIJ.JP DNS](#iij-dns)
* [DNSPod](#dnspod-dns) /////
* [114DNS](#114-dns) A
* [Quad101](#quad101)
* [OneDNS](#114-dns) A
* [FreeDNS](#free-dns)
* [Freenom World](#freenom-world)
* [OSZX DNS](#oszx-dns)
* [Privacy-First DNS](#privacy-first-dns)
* [Applied Privacy DNS](#applied-privacy-dns)
* [Strongarm DNS](#strongarm-dns)
* [SafeSurfer DNS](#safesurfer-dns)
* [DecloudUs DNS](#decloudus-dns)
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
* [PI-DNS](#pi-dns)
* [Seby DNS](#seby-dns)
* [Evilvibes DNS](#evilvibes-dns)
* [puntCAT DNS](#puntcat-dns)
* [DNSlify DNS](#dnslify-dns)

<a name="adguard-dns"></a>

### AdGuard DNS

[AdGuard DNS](https://adguard.com/adguard-dns/overview.html) is an alternative solution for ad blocking, privacy protection, and parental control. It provides the number of necessary protection features against online ads, trackers, and phishing, no matter what platform and device you use.

#### Default

These servers provide blocking ads, tracking and phishing

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `176.103.130.130` and `176.103.130.131`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2a00:5a60::ad1:0ff` and `2a00:5a60::ad2:0ff`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt.default.ns1.adguard.com` IP: `176.103.130.130:5443`| <a href="sdns://AQIAAAAAAAAAFDE3Ni4xMDMuMTMwLjEzMDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20">Add to AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt.default.ns2.adguard.com` IP: `[2a00:5a60::ad2:0ff]:5443`| <a href="sdns://AQIAAAAAAAAAGVsyYTAwOjVhNjA6OmFkMjowZmZdOjU0NDMggdAC02pMpQxHO3R5ZQ_hLgKzIcthOFYqII5APf3FXpQiMi5kbnNjcnlwdC5kZWZhdWx0Lm5zMi5hZGd1YXJkLmNvbQ">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://dns.adguard.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dns.adguard.com` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

#### Family Protection 

These servers provide the Default features + Blocking adult websites + Safe search

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `176.103.130.132` and `176.103.130.134`            | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMg">Add to AdGuard</a> |
| DNS, IPv6      | `2a00:5a60::bad1:0ff` and `2a00:5a60::bad2:0ff`              | <a href="sdns://AAAAAAAAAAAAFVsyYTAwOjVhNjA6OmJhZDE6MGZmXQ">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt.family.ns1.adguard.com` IP: `176.103.130.132:5443`| <a href="sdns://AQIAAAAAAAAAFDE3Ni4xMDMuMTMwLjEzMjo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ">Add to AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt.family.ns2.adguard.com` IP: `[2a00:5a60::bad2:0ff]:5443`| <a href="sdns://AQIAAAAAAAAAGlsyYTAwOjVhNjA6OmJhZDI6MGZmXTo1NDQzIIwhF6nrwVfW-2QFbwrbwRxdg2c0c8RuJY2bL1fU7jUfITIuZG5zY3J5cHQuZmFtaWx5Lm5zMi5hZGd1YXJkLmNvbQ">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://dns-family.adguard.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAWZG5zLWZhbWlseS5hZGd1YXJkLmNvbQovZG5zLXF1ZXJ5">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dns-family.adguard.com` | <a href="sdns://AwAAAAAAAAAAAAAcdGxzOi8vZG5zLWZhbWlseS5hZGd1YXJkLmNvbQ">Add to AdGuard</a> |

#### Non-filtering

These servers provide a secure and reliable connection, but they don't filter anything like the "Default" and "Family protection" servers.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `176.103.130.136` and `176.103.130.137`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzNg">Add to AdGuard</a> |
| DNS, IPv6      | `2a00:5a60::01:ff` and `2a00:5a60::02:ff`            | <a href="sdns://AAAAAAAAAAAAElsyYTAwOjVhNjA6OjAxOmZmXQ">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt.default.ns1.adguard.com` IP: `176.103.130.136:5443`| <a href="sdns://AQIAAAAAAAAAFDE3Ni4xMDMuMTMwLjEzNjo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20">Add to AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt.default.ns2.adguard.com` IP: `[2a00:5a60::01:ff]:5443`| <a href="sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://dns-unfiltered.adguard.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAaZG5zLXVuZmlsdGVyZWQuYWRndWFyZC5jb20KL2Rucy1xdWVyeQ">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dns-unfiltered.adguard.com` | <a href="sdns://AwAAAAAAAAAAAAAgdGxzOi8vZG5zLXVuZmlsdGVyZWQuYWRndWFyZC5jb20">Add to AdGuard</a> |

<a name="yandex-dns"></a>

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) is a free recursive DNS service. Yandex.DNS' servers are located in Russia, CIS countries, and Western Europe. Users' requests are processed by the nearest data center which provides high connection speeds.

#### Basic

In "Basic" mode, there is no traffic filtering

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `77.88.8.8` and `77.88.8.1`                | <a href="sdns://AAAAAAAAAAAACTc3Ljg4LjguOA">Add to AdGuard</a>  |
| DNS, IPv6      | `2a02:6b8::feed:0ff` and `2a02:6b8:0:1::feed:0ff` | <a href="sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDowZmZd">Add to AdGuard</a> |
| DNSCrypt, IPv4     | Provider: `2.dnscrypt-cert.browser.yandex.net` IP: `77.88.8.78:15353`| <a href="sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA">Add to AdGuard</a> |

#### Safe

In "Safe" mode, protection from infected and fraudulent sites is provided

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `77.88.8.88` and `77.88.8.2`                | <a href="sdns://AAAAAAAAAAAACjc3Ljg4LjguODg">Add to AdGuard</a> |
| DNS, IPv6      | `2a02:6b8::feed:bad` and `2a02:6b8:0:1::feed:bad`                 | <a href="sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDpiYWRd">Add to AdGuard</a>|

#### Family

In "Family" mode, protection from infected, fraudulent and adult sites is provided 

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `77.88.8.3` and `77.88.8.7`                | <a href="sdns://AAAAAAAAAAAACTc3Ljg4LjguMw">Add to AdGuard</a>|
| DNS, IPv6      | `2a02:6b8::feed:a11` and `2a02:6b8:0:1::feed:a11`                 | <a href="sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDphMTFd">Add to AdGuard</a>|

<a name="cleanbrowsing"></a>

### CleanBrowsing

[Cleanbrowsing](https://cleanbrowsing.org/) is a DNS service which provides customizable filtering. This service offers a safe way to browse the web without inappropriate content.

#### Family Filter

Blocks access to all adult, pornographic and explicit sites, including proxy & VPN domains and mixed content sites

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.228.168.168` and `185.228.169.168 `             | <a href="sdns://AAAAAAAAAAAADzE4NS4yMjguMTY4LjE2OA">Add to AdGuard</a>|
| DNS, IPv6      | `2a0d:2a00:1::` and `2a0d:2a00:2::`            | <a href="sdns://AAAAAAAAAAAAEFsyYTBkOjJhMDA6MTo6MV0">Add to AdGuard</a>|
| DNSCrypt, IPv4 | Provider: `cleanbrowsing.org` IP: `185.228.168.168:8443`| <a href="sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn">Add to AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443`| <a href="sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/` | <a href="sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEy9kb2gvZmFtaWx5LWZpbHRlci8">Add to AdGuard</a> |
| DNS-over-TLS | `tls://family-filter-dns.cleanbrowsing.org` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

#### Adult Filter

Less restrictive than the Family filter, it only blocks access to adult content and malicious and phishing domains

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.228.168.10` and `185.228.169.11`             | <a href="sdns://AAAAAAAAAAAADzE4NS4yMjguMTY4LjE2OA">Add to AdGuard</a> |
| DNS, IPv6      | `2a0d:2a00:1::1` and `2a0d:2a00:2::1`                 | <a href="sdns://AAAAAAAAAAAAD1syYTBkOjJhMDA6MTo6XQ">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `cleanbrowsing.org` IP: `185.228.168.10:8443`| <a href="sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmcc">Add to AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443`| <a href="sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/` | <a href="sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEi9kb2gvYWR1bHQtZmlsdGVyLw">Add to AdGuard</a> |
| DNS-over-TLS | `tls://adult-filter-dns.cleanbrowsing.org` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

#### Security Filter

Blocks phishing, spam and malicious domains

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.228.168.9` and `185.228.169.9`                | <a href="sdns://AAAAAAAAAAAADTE4NS4yMjguMTY4Ljk">Add to AdGuard</a> |
| DNS, IPv6      | `2a0d:2a00:1::2` and `2a0d:2a00:2::2`               | <a href="sdns://AAAAAAAAAAAAEFsyYTBkOjJhMDA6MTo6Ml0">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | <a href="sdns://AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnFS9kb2gvc2VjdXJpdHktZmlsdGVyLw">Add to AdGuard</a> |
| DNS-over-TLS | `tls://security-filter-dns.cleanbrowsing.org` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

<a name="comodo-secure-dns"></a>

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) is a domain name resolution service that resolves your DNS requests through worldwide network of DNS servers. Removes excessive ads and protects from phishing and spyware.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `8.26.56.26` and `8.20.247.20`                     | <a href="sdns://AAAAAAAAAAAACjguMjYuNTYuMjY">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2`   | <a href="sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ">Add to AdGuard</a> |

<a name="neustar-dns"></a>

### Neustar UltraDNS

[Neustar UltraDNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) is a free cloud-based recursive DNS service that delivers fast and reliable access to sites and online applications with built-in security and threat intelligence.

#### Reliability & Performance 1

These servers provide reliable and fast DNS lookups without blocking any specific categories

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.1` and `156.154.71.1`                  | <a href="sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMQ">Add to AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::1` and `2610:a1:1019::1`            | <a href="sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjFd">Add to AdGuard</a> |

#### Reliability & Performance 2*

These servers provide reliable and fast DNS lookups without blocking any specific categories and also prevent redirecting NXDomain (Non-existent Domain) responses to a landing page

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.5` and `156.154.71.5`                        | <a href="sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuNQ">Add to AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::5` and `2610:a1:1019::5`            | <a href="sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjVd">Add to AdGuard</a> |

#### Threat Protection

These servers provide protection against malicious domains and also include "Reliability & Performance" features

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.2` and `156.154.71.2`                    | <a href="sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMg">Add to AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::2` and `2610:a1:1019::2`            | <a href="sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjJd">Add to AdGuard</a> |

#### Family Secure

These servers provide blocking access to mature content and also include "Reliability & Performance" + "Threat Protection" features

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.3` and `156.154.71.3`                  | <a href="sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuMw">Add to AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::3` and `2610:a1:1019::3`            | <a href="sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjNd">Add to AdGuard</a> |

#### Business Secure

These servers provide blocking unwanted and time-wasting content and also include "Reliability & Performance" + "Threat Protection" + "Family Secure" features

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.4` and `156.154.71.4`                  | <a href="sdns://AAAAAAAAAAAADDE1Ni4xNTQuNzAuNA">Add to AdGuard</a> |
| DNS, IPv6      | `2610:a1:1018::4` and `2610:a1:1019::4`            | <a href="sdns://AAAAAAAAAAAAEVsyNjEwOmExOjEwMTg6OjRd">Add to AdGuard</a> |

<a name="cisco-opendns"></a>

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) is a service which extends the DNS by incorporating features such as content filtering and phishing protection with a zero downtime. 

#### Standard

DNS servers with custom filtering that protects your device from malware

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `208.67.222.222` and `208.67.220.220`          | <a href="sdns://AAAAAAAAAAAADjIwOC42Ny4yMjIuMjIy">Add to AdGuard</a> |
| DNS, IPv6      | `2620:119:35::35` and `2620:119:53::53`              | <a href="sdns://AAAAAAAAAAAAEVsyNjIwOjExOTozNTo6MzVd">Add to AdGuard</a> |
| DNSCrypt, IPv4 |  Provider: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220`| <a href="sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ">Add to AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]`| <a href="sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.opendns.com/dns-query` | <a href="sdns://AgUAAAAAAAAAAAAPZG9oLm9wZW5kbnMuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |

#### FamilyShield

OpenDNS servers that provide adult content blocking

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `208.67.222.123` and `208.67.220.123`             | <a href="sdns://AAAAAAAAAAAADjIwOC42Ny4yMjIuMTIz">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123`| <a href="sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.familyshield.opendns.com/dns-query` | <a href="sdns://AgUAAAAAAAAAAAAcZG9oLmZhbWlseXNoaWVsZC5vcGVuZG5zLmNvbQovZG5zLXF1ZXJ5">Add to AdGuard</a> |

<a name="google-dns"></a>

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) is a free, global DNS resolution service that you can use as an alternative to your current DNS provider.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `8.8.8.8` and `8.8.4.4`           | <a href="sdns://AAAAAAAAAAAABzguOC44Ljg">Add to AdGuard</a> |
| DNS, IPv6      | `2001:4860:4860::8888` and `2001:4860:4860::8844`            | <a href="sdns://AAAAAAAAAAAAFlsyMDAxOjQ4NjA6NDg2MDo6ODg4OF0">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://dns.google/dns-query` | <a href="sdns://AgUAAAAAAAAAACAe9iTP_15r07rd8_3b_epWVGfjdymdx-5mdRZvMAzBuQpkbnMuZ29vZ2xlCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dns.google` | <a href="sdns://AwAAAAAAAAAAAAANdGxzOi8vOC44LjguOA">Add to AdGuard</a> |

<a name="cloudflare-dns"></a>

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) is a free and fast DNS service which functions as a recursive name server providing domain name resolution for any host on the Internet.

#### Standard

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `1.1.1.1` and `1.0.0.1`           | <a href="sdns://AAAAAAAAAAAABzEuMS4xLjE">Add to AdGuard</a> |
| DNS, IPv6      | `2606:4700:4700::1111` and `2606:4700:4700::1001`            | <a href="sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExMV0">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query` | <a href="sdns://AgcAAAAAAAAABzEuMC4wLjGgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query` | <a href="sdns://AgcAAAAAAAAAGVsyNjA2OjQ3MDA6NDcwMDo6MTExMV06NTOgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://1.1.1.1` | <a href="sdns://AwAAAAAAAAAAAAANdGxzOi8vMS4xLjEuMQ">Add to AdGuard</a> |

#### Malware blocking only

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `1.1.1.2` and `1.0.0.2`           | <a href="sdns://AAAAAAAAAAAABzEuMS4xLjI">Add to AdGuard</a> |
| DNS, IPv6      | `2606:4700:4700::1112` and `2606:4700:4700::1002`            | <a href="sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExMl0">Add to AdGuard</a> |
| DNS-over-HTTPS| `https://security.cloudflare-dns.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAbc2VjdXJpdHkuY2xvdWRmbGFyZS1kbnMuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |

#### Malware and adult content blocking

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `1.1.1.3` and `1.0.0.3`           | <a href="sdns://AAAAAAAAAAAABzEuMS4xLjM">Add to AdGuard</a> |
| DNS, IPv6      | `2606:4700:4700::1113` and `2606:4700:4700::1003`            | <a href="sdns://AAAAAAAAAAAAFlsyNjA2OjQ3MDA6NDcwMDo6MTExM10">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAZZmFtaWx5LmNsb3VkZmxhcmUtZG5zLmNvbQovZG5zLXF1ZXJ5">Add to AdGuard</a> |

<a name="quad9"></a>

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) is a free, recursive, anycast DNS platform that provides high-performance, privacy, and security protection from phishing and spyware. Quad9 servers don't provide a censoring component.

#### Standard

Regular DNS servers which provide protection from phishing and spyware. It include blocklist, DNSSEC validation, and other security features.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `9.9.9.9` and `149.112.112.112`                                          | <a href="sdns://AAAAAAAAAAAABzkuOS45Ljk">Add to AdGuard</a> |
| DNS, IPv6      | `2620:fe::fe` IP: `2620:fe::fe:9`| <a href="sdns://AAAAAAAAAAAADVsyNjIwOmZlOjpmZV0">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`| <a href="sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0">Add to AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe]:8443`| <a href="sdns://AQMAAAAAAAAAEVsyNjIwOmZlOjo5XTo4NDQzIGfIR7jIdYzRICRVQ751Z0bfNN8dhMALjEcDaN-CHYY-GTIuZG5zY3J5cHQtY2VydC5xdWFkOS5uZXQ">Add to AdGuard</a> |
| DNS-over-HTTPS | `dns.quad9.net/dns-query`| <a href="sdns://AgEAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldAovZG5zLXF1ZXJ5">Add to AdGuard</a> |
| DNS-over-TLS   | `tls://9.9.9.9`                                           | <a href="sdns://AwAAAAAAAAAAAAANdGxzOi8vOS45LjkuOQ">Add to AdGuard</a> |

#### Standard 2

Regular DNS servers which provide protection from phishing and spyware. It include blocklist, DNSSEC validation.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `9.9.9.9` and `149.112.112.9`                                          | <a href="sdns://AAAAAAAAAAAABzkuOS45Ljk">Add to AdGuard</a> |
| DNS, IPv6      | `2620:fe::9` IP: `2620:fe::fe:9`| <a href="sdns://AAAAAAAAAAAADVsyNjIwOmZlOjpmZV0">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `149.112.112.9:8443`| <a href="sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0">Add to AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::9]:8443`| <a href="sdns://AQMAAAAAAAAAEVsyNjIwOmZlOjo5XTo4NDQzIGfIR7jIdYzRICRVQ751Z0bfNN8dhMALjEcDaN-CHYY-GTIuZG5zY3J5cHQtY2VydC5xdWFkOS5uZXQ">Add to AdGuard</a> |
| DNS-over-HTTPS | `dns9.quad9.net/dns-query`| <a href="sdns://AgEAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldAovZG5zLXF1ZXJ5">Add to AdGuard</a> |
| DNS-over-TLS   | `tls://149.112.112.9`                                           | <a href="sdns://AwAAAAAAAAAAAAANdGxzOi8vOS45LjkuOQ">Add to AdGuard</a> |

#### Unsecured

Unsecured DNS servers provide no security blocklist, no DNSSEC, No EDNS client-Subnet

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `9.9.9.10` and `149.112.112.10`                                          | <a href="sdns://AAAAAAAAAAAABzkuOS45Ljk">Add to AdGuard</a> |
| DNS, IPv6      | `2620:fe::10` IP: `2620:fe::fe:10`| <a href="sdns://AAAAAAAAAAAADVsyNjIwOmZlOjpmZV0">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`| <a href="sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0">Add to AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:10]:8443`| <a href="sdns://AQMAAAAAAAAAEVsyNjIwOmZlOjo5XTo4NDQzIGfIR7jIdYzRICRVQ751Z0bfNN8dhMALjEcDaN-CHYY-GTIuZG5zY3J5cHQtY2VydC5xdWFkOS5uZXQ">Add to AdGuard</a> |
| DNS-over-HTTPS | `dns10.quad9.net/dns-query`| <a href="sdns://AgEAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldAovZG5zLXF1ZXJ5">Add to AdGuard</a> |
| DNS-over-TLS   | `tls://dns10.quad9.net`                                           | <a href="sdns://AwAAAAAAAAAAAAANdGxzOi8vOS45LjkuOQ">Add to AdGuard</a> |

#### [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) support

EDNS Client-Subnet is a method that includes components of end-user IP address data in requests that are sent to authoritative DNS servers. It provide security blocklist, DNSSEC, EDNS Client-Subnet.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `9.9.9.11` and `149.112.112.11`                                          | <a href="sdns://AAAAAAAAAAAABzkuOS45Ljk">Add to AdGuard</a> |
| DNS, IPv6      | `2620:fe::11` IP: `2620:fe::fe:11`| <a href="sdns://AAAAAAAAAAAADVsyNjIwOmZlOjpmZV0">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`| <a href="sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0">Add to AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443`| <a href="sdns://AQMAAAAAAAAAEVsyNjIwOmZlOjo5XTo4NDQzIGfIR7jIdYzRICRVQ751Z0bfNN8dhMALjEcDaN-CHYY-GTIuZG5zY3J5cHQtY2VydC5xdWFkOS5uZXQ">Add to AdGuard</a> |
| DNS-over-HTTPS | `dns11.quad9.net/dns-query`| <a href="sdns://AgEAAAAAAAAAAAANZG5zLnF1YWQ5Lm5ldAovZG5zLXF1ZXJ5">Add to AdGuard</a> |
| DNS-over-TLS   | `tls://dns11.quad9.net`                                           | <a href="sdns://AwAAAAAAAAAAAAANdGxzOi8vOS45LjkuOQ">Add to AdGuard</a> |

<a name="verisign-public-dns"></a>

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) is a free DNS service that offers improved DNS stability and security over other alternatives. Verisign respects users' privacy: it doesn't sell public DNS data to third parties and redirect users' queries to serve them any ads.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `64.6.64.6` or `64.6.65.6`                         | <a href="sdns://AAAAAAAAAAAACTY0LjYuNjQuNg">Add to AdGuard</a> |
| DNS, IPv6      | `2620:74:1b::1:1` or `2620:74:1c::2:2`             | <a href="sdns://AAAAAAAAAAAAEVsyNjIwOjc0OjFiOjoxOjFd">Add to AdGuard</a> |

<a name="switch.ch-dns"></a>

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) is a swiss public DNS service provided by [switch.ch](https://www.switch.ch/)  

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `130.59.31.248` and `130.59.31.251`                | <a href="sdns://AAAAAAAAAAAADTEzMC41OS4zMS4yNDg">Add to AdGuard</a>  |
| DNS, IPv6      | `2001:620:0:ff::2` and `2001:620:0:ff::3` | <a href="sdns://AAAAAAAAAAAAETIwMDE6NjIwOjA6ZmY6OjJd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://dns.switch.ch/dns-query` | <a href="sdns://AgcAAAAAAAAAAAANZG5zLnN3aXRjaC5jaAovZG5zLXF1ZXJ5">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dns.switch.ch` | <a href="sdns://AwAAAAAAAAAAAAATdGxzOi8vZG5zLnN3aXRjaC5jaA">Add to AdGuard</a> |

<a name="dyn-dns"></a>

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) is a free alternative DNS service by Dyn

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `216.146.35.35` and `216.146.35.36`                | <a href="sdns://AAAAAAAAAAAADTIxNi4xNDYuMzUuMzU">Add to AdGuard</a> |

<a name="dnswatch-dns"></a>

### DNS.WATCH

[DNS.WATCH](https://dns.watch/) is a fast and free server without logging with a privacy protection feature.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `84.200.69.80` and `84.200.70.40`                  | <a href="sdns://AAAAAAAAAAAADDg0LjIwMC42OS44MA">Add to AdGuard</a> |
| DNS, IPv6      | `2001:1608:10:25::1c04:b12f` and `2001:1608:10:25::9249:d69b`            | <a href="sdns://AAAAAAAAAAAAHFsyMDAxOjE2MDg6MTA6MjU6OjFjMDQ6YjEyZl0">Add to AdGuard</a> |

<a name="fortinet-secure"></a>

### Fortinet Secure

[Fortinet Secure](https://cookbook.fortinet.com/dns-web-filtering/) is a free alternative DNS service by FortiGuard

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `208.91.112.220` and `80.85.69.54`                 | <a href="sdns://AAAAAAAAAAAADjIwOC45MS4xMTIuMjIw">Add to AdGuard</a> |

<a name="sky-dns"></a>

### SkyDNS RU

[SkyDNS](https://www.skydns.ru/en/) solutions for content filtering and internet security.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `193.58.251.251`                  | <a href="sdns://AAAAAAAAAAAADDg0LjIwMC42OS44MA">Add to AdGuard</a> |

<a name="safe-dns"></a>

### Safe DNS

[Safe DNS](https://www.safedns.com/) is a global anycast network which consists of servers located throughout the world — both Americas, Europe, Africa, Australia, and the Far East to ensure a fast and reliable DNS resolving from any point worldwide.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `195.46.39.39` and `195.46.39.40`                  | <a href="sdns://AAAAAAAAAAAADDE5NS40Ni4zOS4zOQ">Add to AdGuard</a> |

<a name="cira.ca-dns"></a>

### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) protect against theft of personal and financial data. Keep viruses, ransomware, and other malware out of your home.

#### Private

In "Private" mode, DNS resolution only

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `149.112.121.10` and `149.112.122.10`                | <a href="sdns://AAAAAAAAAAAACTc3Ljg4LjguOA">Add to AdGuard</a>  |
| DNS, IPv6      | `2620:10A:80BB::10` and `2620:10A:80BC::10` | <a href="sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://private.canadianshield.cira.ca/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://private.canadianshield.cira.ca.com` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

#### Protected

In "Protected" mode, malware and phishing protection

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `149.112.121.20` and `149.112.122.20`                | <a href="sdns://AAAAAAAAAAAACjc3Ljg4LjguODg">Add to AdGuard</a> |
| DNS, IPv6      | `2620:10A:80BB::20` and `2620:10A:80BC::20`                 | <a href="sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDpiYWRd">Add to AdGuard</a>|
| DNS-over-HTTPS | `https://protected.canadianshield.cira.ca/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://protected.canadianshield.cira.ca.com` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

#### Family

In "Family" mode, Protected + blocking adult content

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `149.112.121.30` and `149.112.122.30`                | <a href="sdns://AAAAAAAAAAAACTc3Ljg4LjguMw">Add to AdGuard</a>|
| DNS, IPv6      | `2620:10A:80BB::30` and `2620:10A:80BC::30`                 | <a href="sdns://AAAAAAAAAAAAFFsyYTAyOjZiODo6ZmVlZDphMTFd">Add to AdGuard</a>|
| DNS-over-HTTPS | `https://family.canadianshield.cira.ca/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://family.canadianshield.cira.ca.com` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

<a name="opennic-dns"></a>

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) is a free alternative DNS service by OpenNIC Project

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.121.177.177` and `169.239.202.202`            | <a href="sdns://AAAAAAAAAAAADzE4NS4xMjEuMTc3LjE3Nw">Add to AdGuard</a> |
| DNS, IPv6      | `2a05:dfc7:5::53` and `2a05:dfc7:5353::53`         | <a href="sdns://AAAAAAAAAAAAEVsyYTA1OmRmYzc6NTo6NTNd">Add to AdGuard</a> |

<a name="blahdns.ger-dns"></a>

### BlahDNS

[BlahDNS](https://blahdns.com/) A small hobby DNS project. No logs, Ethereum Name Service, DNSSEC ready & Filtered ads, trackers, malwares

| Protocol       | Address                             | Location      |                |
|----------------|-------------------------------------|---------------|----------------|
| DNS-over-TLS, IPv4 | Hostname: `dot-fi.blahdns.com`  IP: `95.216.212.177` | `Finland` | <a href="sdns://AwAAAAAAAAAAAAAYdGxzOi8vZG90LWRlLmJsYWhkbnMuY29t">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh-fi.blahdns.com/dns-query` IP: `95.216.212.177` | `Finland` | <a href="sdns://AgMAAAAAAAAADjE1OS42OS4xOTguMTAxABJkb2gtZGUuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv6 | Hostname: `https://doh-fi.blahdns.com/dns-query` IP: `2a01:4f9:c010:43ce::1` | `Finland` | <a href="sdns://AgMAAAAAAAAAF1syYTAxOjRmODoxYzFjOjZiNGI6OjFdABJkb2gtZGUuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.blahdns.com` IP: `95.216.212.177:8443`| `Finland` | <a href="sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t">Add to AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f9:c010:43ce::1:8443`| `Finland` | <a href="sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t">Add to AdGuard</a> |

| Protocol       | Address                             | Location      |                |
|----------------|-------------------------------------|---------------|----------------|
| DNS-over-TLS, IPv4 | Hostname: `dot-jp.blahdns.com`  IP: `45.32.55.94` | `Japan` | <a href="sdns://AwAAAAAAAAAAAAAYdGxzOi8vZG90LWpwLmJsYWhkbnMuY29t">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh-jp.blahdns.com/dns-query` IP: `45.32.55.94` | `Japan` | <a href="sdns://AgMAAAAAAAAACzQ1LjMyLjU1Ljk0ABJkb2gtanAuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv6 | Hostname: `https://doh-jp.blahdns.com/dns-query` IP: `2001:19f0:7001:3259:5400:02ff:fe71:0bc9` | `Japan` | <a href="sdns://AgMAAAAAAAAAKVsyMDAxOjE5ZjA6NzAwMTozMjU5OjU0MDA6MDJmZjpmZTcxOjBiYzldABJkb2gtanAuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.blahdns.com` IP: `45.32.55.94:8443`| `Japan` | <a href="sdns://AQMAAAAAAAAAEDQ1LjMyLjU1Ljk0Ojg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t">Add to AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.blahdns.com` IP: `2001:19f0:7001:3259:5400:02ff:fe71:0bc9:8443`| `Japan` | <a href="sdns://AQMAAAAAAAAALlsyMDAxOjE5ZjA6NzAwMTozMjU5OjU0MDA6MDJmZjpmZTcxOjBiYzldOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t">Add to AdGuard</a> |

| Protocol       | Address                             | Location      |                |
|----------------|-------------------------------------|---------------|----------------|
| DNS-over-TLS, IPv4 | Hostname: `dot-de.blahdns.com`  IP: `159.69.198.101` | `Germany` | <a href="sdns://AwAAAAAAAAAAAAAYdGxzOi8vZG90LWRlLmJsYWhkbnMuY29t">Add to AdGuard</a> |
| DNS-over-TLS, IPv6 | Hostname: `dot-de.blahdns.com`  IP: `2a01:4f8:1c1c:6b4b::1` | `Germany` | <a href="sdns://AwAAAAAAAAAAAAAYdGxzOi8vZG90LWRlLmJsYWhkbnMuY29t">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh-de.blahdns.com/dns-query` IP: `159.69.198.101` | `Germany` | <a href="sdns://AgMAAAAAAAAADjE1OS42OS4xOTguMTAxABJkb2gtZGUuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv6 | Hostname: `https://doh-de.blahdns.com/dns-query` IP: `2a01:4f8:1c1c:6b4b::1` | `Germany` | <a href="sdns://AgMAAAAAAAAAF1syYTAxOjRmODoxYzFjOjZiNGI6OjFdABJkb2gtZGUuYmxhaGRucy5jb20KL2Rucy1xdWVyeQ">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.blahdns.com` IP: `159.69.198.101:8443`| `Germany` | <a href="sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t">Add to AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f8:1c1c:6b4b::1:8443`| `Germany` | <a href="sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t">Add to AdGuard</a> |

<a name="snopyta-dns"></a>

### Snopyta DNS

[Snopyta DNS](https://snopyta.org/) is a privacy friendly DNS service run by Noah Seefried.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `95.216.24.230`            | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2a01:4f9:2a:1919::9301`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://fi.doh.dns.snopyta.org/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://fi.dot.dns.snopyta.org` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

<a name="dns-for-family"></a>

### DNS for Family

[DNS for Family](https://dnsforfamily.com/) aims to block websites which are considered as adult related. It helps to children and everyone for safely surf internet without worrying about get followed to harmful websites..


| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `94.130.180.225` and `78.47.64.161`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2a01:4f8:1c0c:40db::1` and `2a01:4f8:1c17:4df8::1`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `dnsforfamily.com` IP: `94.130.180.225`| <a href="sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20">Add to AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `dnsforfamily.com` IP: `[2a01:4f8:1c0c:40db::1]`| <a href="sdns://sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20">Add to AdGuard</a> |

<a name="cz-nic"></a>

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) CZ.NIC ODVR are Open DNSSEC Validating Resolvers. CZ.NIC neither collect any personal data nor gather information on pages where devices sends personal data.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `193.17.47.1` and `185.43.135.1`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2001:148f:ffff::1` and `2001:148f:fffe::1`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://odvr.nic.cz/doh` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://odvr.nic.cz` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

<a name="ali-dns"></a>

### [Ali DNS](#ali-dns)

Ali DNS is a free recursive DNS service that committed to providing fast, stable and secure DNS resolution for the majority of Internet users. It include AliGuard facility to protect users from various attacks and threats.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `223.5.5.5` and `223.6.6.6`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2400:3200::1` and `2400:3200:baba::1`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dns.alidns.com` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

<a name="cfiec-dns"></a>

### [CFIEC Public DNS](#cfiec-dns)

IPv6-based anycast DNS service with strong security capabilities and protection from spyware, malicious websites. It support DNS64 to provide domain name resolution only for IPv6 users.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv6      | `240C::6666` and `240C::6644`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://dns.cfiec.net/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dns.cfiec.net` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

<a name="nawala-childprotection-dns"></a>

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) is an anycast Internet filtering system that protects children from inappropriate websites and abusive contents.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|

| DNS, IPv4      | `180.131.144.144` and `180.131.145.145`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144`  | <a href="sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk">Add to AdGuard</a> |

<a name="360-dns"></a>

### 360 Secure DNS

360 Secure DNS is a industry-leading recursiveDNS service with .

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `176.103.130.130` and `176.103.130.131`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2a00:5a60::ad1:0ff` and `2a00:5a60::ad2:0ff`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt.default.ns1.adguard.com` IP: `176.103.130.130:5443`| <a href="sdns://AQIAAAAAAAAAFDE3Ni4xMDMuMTMwLjEzMDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20">Add to AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt.default.ns2.adguard.com` IP: `[2a00:5a60::ad2:0ff]:5443`| <a href="sdns://AQIAAAAAAAAAGVsyYTAwOjVhNjA6OmFkMjowZmZdOjU0NDMggdAC02pMpQxHO3R5ZQ_hLgKzIcthOFYqII5APf3FXpQiMi5kbnNjcnlwdC5kZWZhdWx0Lm5zMi5hZGd1YXJkLmNvbQ">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://dns.adguard.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dns.adguard.com` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

<a name="iij-dns"></a>

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) is a free DNS service operated by internet initiative japan. It also block child abuse contents.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-HTTPS | `https://public.dns.iij.jp/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://public.dns.iij.jp` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

<a name="114-dns"></a>

### 114DNS

114DNS is a professional third-party high-reliability DNS service.

#### Normal

Block ads and annoying websites

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `114.114.114.114` and `114.114.115.115`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |

#### Safe

Block phishing, malcious and other unsafe websites

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `114.114.114.119` and `114.114.115.119`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |

#### Family

These servers block adult websites and inappropriate contents.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `114.114.114.110` and `114.114.115.110`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |

<a name="quad101"></a>

### Quad101

[Quad101](https://101.101.101.101) is a free alternative DNS service without logging by TWNIC (Taiwan Network Information Center)

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `101.101.101.101` and `101.102.103.104`            | <a href="sdns://AAAAAAAAAAAADzEwMS4xMDEuMTAxLjEwMQ">Add to AdGuard</a> |
| DNS, IPv6      | `2001:de4::101` and `2001:de4::102`                | <a href="sdns://AAAAAAAAAAAAD1syMDAxOmRlNDo6MTAxXQ">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://dns.twnic.tw/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAMZG5zLnR3bmljLnR3Ci9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://101.101.101.101` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vMTAxLjEwMS4xMDEuMTAx">Add to AdGuard</a> |

<a name="one-dns"></a>

### OneDNS

OneDNS is a secure, fast, free niche DNS service with malicious domains blocking facility.

#### Pure Edition

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `117.50.10.10` and `52.80.52.52`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |

#### Block Edition

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `117.50.11.11` and `52.80.66.66`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |

<a name="free-dns"></a>

### FreeDNS

[FreeDNS](https://freedns.zone/) is an open, free and public DNS Service provided by [Virtexxa cloud services](https://virtexxa.com/). No DNS redirects, No logging.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `172.104.237.57` and `172.104.49.100`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv4      | `37.235.1.174` and `37.235.1.177`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |

<a name="freenom-world"></a>

### Freenom World

[Freenom World](https://freenom.world/en/index.htm) is a free anonymous DNS resolver by Freenom World

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `80.80.80.80` and `80.80.81.81`                    | <a href="sdns://AAAAAAAAAAAACzgwLjgwLjgwLjgw">Add to AdGuard</a> |

<a name="oszx-dns"></a>

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) is a small Ad-Blocking DNS hobby project.

#### OSZX server

These servers provide blocking ads, keeps no logs and DNSSEC enabled

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `51.38.83.141`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2001:41d0:801:2000::d64`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`| <a href="sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv">Add to AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353`| <a href="sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://dns.oszx.co/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dns.oszx.co` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

#### PumpleX server

These servers provide no blocking ads, keeps no logs and DNSSEC enabled

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `51.38.82.198`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2001:41d0:801:2000::1b28`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.pumplex.com` IP: `51.38.82.198:5353`| <a href="sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ">Add to AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.pumplex.com` IP: `[2001:41d0:801:2000::1b28]:5353`| <a href="sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://dns.pumplex.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://ddns.pumplex.com` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

<a name="privacy-first-dns"></a>

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) block over 140K ads, ad-tracking, malware and phising domains!. No Logging, No ECS, DNSSEC Validation, Free!

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `174.138.21.128`             | <a href="sdns://AAAAAAAAAAAADjE3NC4xMzguMjEuMTI4">Add to AdGuard</a> |
| DNS, IPv6      | `2400:6180:0:d0::5f6e:4001`            | <a href="sdns://AAAAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXQ">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dns.tiar.app` IP: `174.138.21.128`| <a href="sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA">Add to AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.dns.tiar.app` IP: `[2400:6180:0:d0::5f6e:4001]`| <a href="sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.tiarap.org/dns-query` </br> (cached via third-party) | <a href="sdns://AgcAAAAAAAAAAAAOZG9oLnRpYXJhcC5vcmcKL2Rucy1xdWVyeQ">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.tiar.app/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAMZG9oLnRpYXIuYXBwCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dot.tiar.app` | <a href="sdns://AwAAAAAAAAAAAAASdGxzOi8vZG90LnRpYXIuYXBw">Add to AdGuard</a> |

<a name="applied-privacy-dns"></a>

### Applied Privacy DNS

[Applied Privacy DNS](https://applied-privacy.net/) operate DNS privacy services to help protect DNS traffic and to help diversify the DNS resolver landscape offering modern protocols.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `94.130.106.88`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2a01:4f8:c0c:83ed::1`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.applied-privacy.net/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dot1.applied-privacy.net` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

<a name="strongarm-dns"></a>

### Strongarm DNS

[Strongarm DNS](https://strongarm.io) is a DNS service by Strongarm that prevents people from interacting with malicious content

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `54.174.40.213` and `52.3.100.184`                 | <a href="sdns://AAAAAAAAAAAADTU0LjE3NC40MC4yMTM">Add to AdGuard</a> |

<a name="safesurfer-dns"></a>

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/) is a DNS service by SafeSurfer that protects your device from harmful and adult contents.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `104.155.237.225` and `104.197.28.121`             | <a href="dns://AAAAAAAAAAAADjA0LjE1NS4yMzcuMjI1">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121`| <a href="sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56">Add to AdGuard</a> |

<a name="decloudus-dns"></a>

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) A secure, private, open source DNS resolver with no logs, malware protection, ad blocking. Degoogle and Ungoogle your phone, tablet, and computer.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `176.9.199.158`              | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2a01:4f8:151:11b0::3`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.DeCloudUs-test` IP: `176.9.199.158:8443`| <a href="sdns://AQMAAAAAAAAAEjE3Ni45LjE5OS4xNTg6ODQ0MyD73Ye9XeCsS7TdFu9fRP7s5k-0aL91yygulGVmeOAKLh4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q">Add to AdGuard</a> |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:151:11b0::3]:8443`| <a href="sdns://AQMAAAAAAAAAG1syYTAxOjRmODoxNTE6MTFiMDo6M106ODQ0MyD73Ye9XeCsS7TdFu9fRP7s5k-0aL91yygulGVmeOAKLh4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://dns.decloudus.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dns.decloudus.com` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

<a name="captnemo-dns"></a>

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) is a server running out of a Digital Ocean droplet in BLR1 region. Maintained by Abhay Rana aka Nemo. 

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434`    | <a href="sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4">Add to AdGuard</a> |

<a name="dns-sb"></a>

### DNS.SB

[DNS.SB](https://dns.sb/) provide free DNS service with no Logging, DNSSEC enabled.


| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.222.222.222` and `185.184.222.222`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2a09::` and `2a09::1`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.dns.sb/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://185.222.222.222` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

<a name="dns-forge"></a>

### DNS Forge

[DNS Forge](https://dnsforge.de/) is a redundant DNS resolver with an ad-blocker and no logging provided by [adminforge](https://adminforge.de/).

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `176.9.93.198` and `176.9.1.117`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2a01:4f8:151:34aa::198` and `2a01:4f8:141:316d::117`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://dnsforge.de/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dnsforge.de` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

<a name="restena-dns"></a>

### Fondation Restena DNS

[Restena DNS](https://www.restena.lu/en/service/public-dns-resolver) servers provided by [Restena Foundation](https://www.restena.lu/)

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `158.64.1.29`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2001:a18:1::29`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://kaitain.restena.lu/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://kaitain.restena.lu` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

<a name="fvz-dns"></a>

### fvz DNS

[fvz DNS](http://meo.ws/) is a Fusl's public primary OpenNIC Tier2 Anycast DNS Resolver

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353`   | <a href="sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353`| <a href="sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz">Add to AdGuard</a> |

<a name="ffmuc.net-dns"></a>

### FFMUC DNS

[FFMUC](https://ffmuc.net/) free DNS servers provided by Freifunk München

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-TLS, IPv4 | Hostname: `dot.ffmuc.net` IP: `195.30.94.28` | <a href="sdns://AwAAAAAAAAAAAAATdGxzOi8vZG90LmZmbXVjLm5ldA">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv4 | Hostname: `https://doh.ffmuc.net/dns-query` IP: `195.30.94.28` | <a href="sdns://AgcAAAAAAAAADDE5NS4zMC45NC4yOAANZG9oLmZmbXVjLm5ldAovZG5zLXF1ZXJ5">Add to AdGuard</a> |

<a name="digitale-gesellschaft"></a>

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) is a public resolver operated by the Digital Society. Hosted in Zurich, Switzerland

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.95.218.42` and `185.95.218.43`          | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2a05:fc84::42` and `2a05:fc84::43`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dns.digitale-gesellschaft.ch` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

<a name="libre-dns"></a>

### LibreDNS

[LibreDNS](https://libredns.gr/) is a public encrypted DNS service run by [LibreOps](https://libreops.cc/).

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `116.202.176.26`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.libredns.gr/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.libredns.gr/ads` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dot.libredns.gr.com` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

<a name="ibksturm-dns"></a>

### ibksturm DNS

[ibksturm DNS](https:/ibksturm.synology.me/) testing servers provided by ibksturm. OPENNIC, DNSSEC, No Filter, No Logging

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-TLS, IPv4 | Hostname: `ibksturm.synology.me` IP: `83.77.85.7` | <a href="sdns://AwAAAAAAAAAAAAAadGxzOi8vaWJrc3R1cm0uc3lub2xvZ3kubWU">Add to AdGuard</a> |
| DNS-over-HTTPS, IPv4 | Hostname: `https://ibksturm.synology.me/dns-query` IP: `178.82.102.190` | <a href="sdns://AgcAAAAAAAAAACA-GhoPbFPz6XpJLVcIS1uYBwWe4FerFQWHb9g_2j24OBRpYmtzdHVybS5zeW5vbG9neS5tZQovZG5zLXF1ZXJ5">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.ibksturm` IP: `83.77.85.7:8443` | <a href="sdns://AQcAAAAAAAAADzgzLjc3Ljg1Ljc6ODQ0MyDBz1dQALBbwmxiH17PmqJWCs6_AH6-yzp_9LIN4LQ57hgyLmRuc2NyeXB0LWNlcnQuaWJrc3R1cm0">Add to AdGuard</a> |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.ibksturm` IP: `[2a02:1205:5055:de60:b26e:bfff:fe1d:e19b]:8443` | <a href="sdns://AQcAAAAAAAAALlsyYTAyOjEyMDU6NTA1NTpkZTYwOmIyNmU6YmZmZjpmZTFkOmUxOWJdOjg0NDMgwc9XUACwW8JsYh9ez5qiVgrOvwB-vss6f_SyDeC0Oe4YMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt">Add to AdGuard</a> |
| Anonymized DNS IPv4 | IP: `85.5.93.230:8443` | <a href="sdns://gRA4NS41LjkzLjIzMDo4NDQz">Add to AdGuard</a> |
| Anonymized DNS IPv6 | IP: `[2a02:1205:5055:de60:b26e:bfff:fe1d:e19b]:8443` | <a href="sdns://gS5bMmEwMjoxMjA1OjUwNTU6ZGU2MDpiMjZlOmJmZmY6ZmUxZDplMTliXTo4NDQz">Add to AdGuard</a> |

<a name="dnsprivacy.org-dns"></a>

### DNS Privacy

A collaborative open project to promote, implement and deploy [DNS Privacy](https://dnsprivacy.org/).

DNS servers run by the [Stubby developers](https://getdnsapi.net/)

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-TLS | Provider: `Surfnet` Hostname `dnsovertls.sinodun.com` IP: `145.100.185.15` and IPv6: `2001:610:1:40ba:145:100:185:15` | <a href="sdns://AwAAAAAAAAAAAAAcdGxzOi8vZG5zb3ZlcnRscy5zaW5vZHVuLmNvbQ">Add to AdGuard</a>  |
| DNS-over-TLS | Provider: `Surfnet` Hostname `dnsovertls1.sinodun.com` IP: `145.100.185.16` and IPv6: `2001:610:1:40ba:145:100:185:16` | <a href="sdns://AwAAAAAAAAAAAAAddGxzOi8vZG5zb3ZlcnRsczEuc2lub2R1bi5jb20">Add to AdGuard</a>  |
| DNS-over-TLS | Hostname: `getdnsapi.net` IP: `185.49.141.37` and IPv6: `2a04:b900:0:100::37` | <a href="sdns://AwAAAAAAAAAAAAATdGxzOi8vZ2V0ZG5zYXBpLm5ldA">Add to AdGuard</a>  |

Other DNS servers with 'no logging' policy

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-TLS | Hostname: `dot.securedns.eu` IP: `146.185.167.43` and IPv6: `2a03:b0c0:0:1010::e9a:3001` | <a href="sdns://AwAAAAAAAAAAAAAWdGxzOi8vZG90LnNlY3VyZWRucy5ldQ">Add to AdGuard</a>  |
| DNS-over-TLS | Hostname `ns1.dnsprivacy.at` IP: `94.130.110.185` and IPv6: `2a01:4f8:c0c:3c03::2` | <a href="sdns://AwAAAAAAAAAAAAAXdGxzOi8vbnMxLmRuc3ByaXZhY3kuYXQ">Add to AdGuard</a>  |
| DNS-over-TLS | Hostname `ns2.dnsprivacy.at` IP: `94.130.110.178` and IPv6: `2a01:4f8:c0c:3bfc::2` | <a href="sdns://AwAAAAAAAAAAAAAXdGxzOi8vbnMyLmRuc3ByaXZhY3kuYXQ">Add to AdGuard</a>  |
| DNS-over-TLS | Provider: `dkg` Hostname `dns.cmrg.net` IP: `199.58.81.218`and IPv6: `2001:470:1c:76d::53` | <a href="sdns://AwAAAAAAAAAAAAASdGxzOi8vZG5zLmNtcmcubmV0t">Add to AdGuard</a>  |
| DNS-over-TLS | Provider: `UncensoredDNS` Hostname `unicast.censurfridns.dk` IP: `89.233.43.71 ` and IPv6: `2a01:3a0:53:53::0` | <a href="sdns://AwAAAAAAAAAAAAAddGxzOi8vdW5pY2FzdC5jZW5zdXJmcmlkbnMuZGs">Add to AdGuard</a>  |
| DNS-over-TLS | Provider: `UncensoredDNS` Hostname `anycast.censurfridns.dk` IP: `91.239.100.100` and IPv6: `2001:67c:28a4::` | <a href="sdns://AwAAAAAAAAAAAAAddGxzOi8vYW55Y2FzdC5jZW5zdXJmcmlkbnMuZGs">Add to AdGuard</a>  |
| DNS-over-TLS | Provider: `Go6Lab` Hostname `privacydns.go6lab.si` IPv6: `2001:67c:27e4::35` | <a href="sdns://AwAAAAAAAAAAAAAadGxzOi8vcHJpdmFjeWRucy5nbzZsYWIuc2k">Add to AdGuard</a>  |
| DNS-over-TLS, IPv4 | Hostname: `dns.larsdebruin.net` IP: `51.15.70.167` | <a href="sdns://AwAAAAAAAAAAAAAZdGxzOi8vZG5zLmxhcnNkZWJydWluLm5ldA">Add to AdGuard</a> |
| DNS-over-TLS | Hostname `dns-tls.bitwiseshift.net` IP: `81.187.221.24` and IPv6: `2001:8b0:24:24::24` | <a href="sdns://AwAAAAAAAAAAAAAedGxzOi8vZG5zLXRscy5iaXR3aXNlc2hpZnQubmV0">Add to AdGuard</a>  |
| DNS-over-TLS, IPv4 | Hostname: `dns.bitgeek.in ` IP: `139.59.51.46` | <a href="sdns://AwAAAAAAAAAAAAAUdGxzOi8vZG5zLmJpdGdlZWsuaW4">Add to AdGuard</a> |
| DNS-over-TLS | Hostname `dns.neutopia.org` IP: `89.234.186.112` and IPv6: `2a00:5884:8209::2` | <a href="sdns://AwAAAAAAAAAAAAAWdGxzOi8vZG5zLm5ldXRvcGlhLm9yZw">Add to AdGuard</a>  |
| DNS-over-TLS | Provider: `Surfnet` Hostname `dnsovertls2.sinodun.com` IP: `145.100.185.17`and IPv6: `2001:610:1:40ba:145:100:185:17` | <a href="sdns://AwAAAAAAAAAAAAAddGxzOi8vZG5zb3ZlcnRsczIuc2lub2R1bi5jb20">Add to AdGuard</a>  |
| DNS-over-TLS | Provider: `Surfnet` Hostname `dnsovertls3.sinodun.com` IP: `145.100.185.18`and IPv6: `2001:610:1:40ba:145:100:185:18` | <a href="sdns://AwAAAAAAAAAAAAAddGxzOi8vZG5zb3ZlcnRsczMuc2lub2R1bi5jb20">Add to AdGuard</a>  |

DNS servers with minimal logging/limitations. These servers use some logging, self-signed certs or no support for strict mode.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-TLS | Provider: `NIC Chile` Hostname `dnsotls.lab.nic.cl` IP: `200.1.123.46` and IPv6: `2001:1398:1:0:200:1:123:46` | <a href="sdns://AwAAAAAAAAAAAAAYdGxzOi8vZG5zb3Rscy5sYWIubmljLmNs">Add to AdGuard</a>  |
| DNS-over-TLS | Provider: `OARC` Hostname `tls-dns-u.odvr.dns-oarc.net` IP: `184.105.193.78` and IPv6: `2620:ff:c000:0:1::64:25` | <a href="sdns://AwAAAAAAAAAAAAAhdGxzOi8vdGxzLWRucy11Lm9kdnIuZG5zLW9hcmMubmV0">Add to AdGuard</a>  |

<a name="pi-dns"></a>

### PI-DNS

[PI-DNS](https://pi-dns.com/) A zero logging and ad blocking DNS service provided by Fredrik Pettersson.

| Protocol       | Address                             | Location      |                |
|----------------|-------------------------------------|---------------|----------------|
| DNS, IPv4      | `88.198.91.187` | `Central Europe` | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2a01:4f8:1c0c:8233::1`  | `Central Europe` | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.centraleu.pi-dns.com/dns-query`  | `Central Europe`| <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dot.centraleu.pi-dns.com` | `Central Europe` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

| Protocol       | Address                             | Location      |                |
|----------------|-------------------------------------|---------------|----------------|
| DNS, IPv4      | `95.216.181.228` | `North Europe` | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2a01:4f9:c01f:4::abcd`  | `North Europe` | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.northeu.pi-dns.com/dns-query`  | `North Europe`| <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dot.northeu.pi-dns.com` | `North Europe` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

| Protocol       | Address                             | Location      |                |
|----------------|-------------------------------------|---------------|----------------|
| DNS, IPv4      | `45.67.219.208` | `West USA` | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2a04:bdc7:100:70::abcd`  | `West USA` | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.westus.pi-dns.com/dns-query`  | `West USA`| <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dot.westus.pi-dns.com` | `West USA` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

| Protocol       | Address                             | Location      |                |
|----------------|-------------------------------------|---------------|----------------|
| DNS, IPv4      | `185.213.26.187` | `East USA` | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2a0d:5600:33:3::abcd`  | `East USA` | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.eastus.pi-dns.com/dns-query`  | `East USA`| <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dot.eastus.pi-dns.com` | `East USA` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

| Protocol       | Address                             | Location      |                |
|----------------|-------------------------------------|---------------|----------------|
| DNS, IPv4      | `45.63.30.163` | `East Australia` | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2001:19f0:5801:b7c::1`  | `East Australia` | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.eastau.pi-dns.com/dns-query`  | `East Australia`| <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dot.eastau.pi-dns.com` | `East Australia` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

| Protocol       | Address                             | Location      |                |
|----------------|-------------------------------------|---------------|----------------|
| DNS, IPv4      | `66.42.33.135` | `East Asia` | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2001:19f0:7001:225d::1`  | `East Asia` | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.eastas.pi-dns.com/dns-query`  | `East Asia`| <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dot.eastas.pi-dns.com` | `East Asia` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |


PI-DNS currently provide a DoH endpoint delivered through Cloudflare’s CDN. This can be used if you don’t want to specify any specific server to connect to. Make sure you understand Cloudflare’s privacy policy before using this endpoint.

Endpoint: `https://doh.pi-dns.com/dns-query`
(Only this endpoint (doh.pi-dns.com) goes through Cloudflare).

<a name="seby-dns"></a>

### Seby DNS

[Seby DNS](https://dns.seby.io/) is a privacy focused DNS service provided by Sebastian Schmidt. No Logging, DNSSEC validation.

#### DNS Server 1

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `45.76.113.31`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31`| <a href="sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dot.seby.io` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

#### DNS Server 2

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `45.76.113.31` `139.99.222.72`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dns.seby.io` IP: `139.99.222.72`| <a href="sdns://AQcAAAAAAAAADTEzOS45OS4yMjIuNzIgCwVoTw0L4dgal5LC1FbZUtHtLR_rVuV6rVnxO95e4GUbMi5kbnNjcnlwdC1jZXJ0LmRucy5zZWJ5Lmlv">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh-2.seby.io/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://dot.seby.io` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

<a name="evilvibes-dns"></a>

### Evilvibes DNS

[Evilvibes](https://github.com/evilvibes/dnscrypt_stamps) is a non-logging, uncensored DNS resolver provided by [evilvibes.com](evilvibes.com)

| Protocol       | Address                             | Location      |                |
|----------------|-------------------------------------|---------------|----------------|
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.evilvibes.com` IP: `23.111.74.205` | `Vancouver, Canada` | <a href="sdns://AQcAAAAAAAAADTIzLjExMS43NC4yMDUg_0RyX8kcAcMdtRk5SAX5RKs3yiLLS6kdJlnsUpVbnOEdMi5kbnNjcnlwdC1jZXJ0LmV2aWx2aWJlcy5jb20">Add to AdGuard</a> |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.evilvibes.com` IP: `66.85.30.115` | `Toronto, Canada` | <a href="sdns://AQcAAAAAAAAADDY2Ljg1LjMwLjExNSDaDhJ4Dk4cHSiJstKoSd4DcSH8xm16_TSA1PBuamRNzB0yLmRuc2NyeXB0LWNlcnQuZXZpbHZpYmVzLmNvbQ">Add to AdGuard</a> |

<a name="puntcat-dns"></a>

### puntCAT DNS

[puntCAT](http://www.servidordenoms.cat/) is physically located near Barcelona, Spain. puntCAT offers a public DNS service, free, secure, close and that respects your privacy.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `109.69.8.51`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2a00:1508:0:4::9`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |

<a name="dnslify-dns"></a>

### DNSlify DNS

[DNSlify DNS](https://www.dnslify.com/services/) operate public DNS resolvers to speed up requests, increase redundancy. The service provide by [Peerix](https://www.peerix.net/)

#### Default

These servers provide DNS resoultion without traffic filtering.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.235.81.1` and `185.235.81.2`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2a0d:4d00:81::1` and `2a0d:4d00:81::2`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.dnslify.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://doh.dnslify.com` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

#### Safe

Safe mode guard against infected, fraudulent or bot sites.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.235.81.3` and `185.235.81.4`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2a0d:4d00:81::3` and `2a0d:4d00:81::4`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.dnslify.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://doh.dnslify.com` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |

#### Family

Family mode provide family oriented filtering offering the protection of "Safe" resolvers + blocking adult sites.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.235.81.5` and `185.235.81.6`             | <a href="sdns://AAAAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMA">Add to AdGuard</a> |
| DNS, IPv6      | `2a0d:4d00:81::5` and `2a0d:4d00:81::6`            | <a href="sdns://AAAAAAAAAAAAFFsyYTAwOjVhNjA6OmFkMTowZmZd">Add to AdGuard</a> |
| DNS-over-HTTPS | `https://doh.dnslify.com/dns-query` | <a href="sdns://AgcAAAAAAAAAAAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk">Add to AdGuard</a> |
| DNS-over-TLS | `tls://doh.dnslify.com` | <a href="sdns://AwAAAAAAAAAAAAAVdGxzOi8vZG5zLmFkZ3VhcmQuY29t">Add to AdGuard</a> |
