## [WIP] DNS Providers

*(Yandex basic is used for testing Deep Links for Android app)*

AdGuard users can configure any DNS server to be used instead of the system default provided by the router or ISP. On this page we maintain a list of popular DNS providers.

* [Yandex DNS](#yandex-dns)
* [CleanBrowsing](#cleanbrowsing)
* [AdGuard DNS](#adguard-dns)
* [Google DNS](#google-dns)
* [Cloudflare DNS](#cloudflare-dns)
* [Cisco OpenDNS](#cisco-opendns)
* [Quad9 DNS](#dnswatch)
* [Verisign Public DNS](#verisign-public-dns)
* [DNS.WATCH](#dnswatch-dns)
* [Comodo Secure DNS](#comodo-secure-dns)
* [Dyn DNS](#dyn-dns)
* [OpenNIC DNS](#opennic-dns)
* [Quad101](#quad101)
* [Freenom World](#freenom-world)
* [Fortinet Secure](#fortinet-secure)
* [Safe DNS](#safe-dns)
* [Neustar Recursive DNS](#neustar-recursive-dns)
* [Strongarm DNS](#strongarm-dns)
* [SafeSurfer DNS](#safesurfer-dns)
* [Aaflo.me](#aaflome)
* [Captnemo DNS](#captnemo-dns)
* [fvz DNS](#fvz-dns)
* [Nawala Childprotection DNS](#nawala-childprotection-dns)

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) is a free, recursive DNS service. Yandex.DNS' servers are located in Russia, CIS countries, and Western Europe. Users' requests are processed by the nearest data center which provides high connection speeds.

#### Basic

In "Basic" mode, there is no traffic filtering.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `77.88.8.8` and `77.88.8.1`                | <a href="sdns://AAAAAAAAAAAAEzc3Ljg4LjguOCA3Ny44OC44LjEMeWFuZGV4LWJhc2lj">Add to AdGuard</a>  |
| DNS, IPv6      | `2a02:6b8::feed:0ff` and `2a02:6b8:0:1::feed:0ff` | <a href="sdns://sdns://AAAAAAAAAAAAKTJhMDI6NmI4OjpmZWVkOjBmZiAyYTAyOjZiODowOjE6OmZlZWQ6MGZmEXlhbmRleC1iYXNpYy1pcHY2">Add to AdGuard</a> |
| DNSCrypt, IPv4     | Provider: `2.dnscrypt-cert.browser.yandex.net` IP: `77.88.8.78:15353`| <a href="sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA">Add to AdGuard</a> |

#### Safe

In "Safe" mode, protection from infected and fraudulent sites is provided.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `77.88.8.88` and `77.88.8.2`                | [Add to AdGuard](https://kb.adguard.com/dns/yandex_safe/77.88.8.88_77.88.8.2) |
| DNS, IPv6      | `2a02:6b8::feed:bad` and `2a02:6b8:0:1::feed:bad`                 | [Add to AdGuard](https://kb.adguard.com/dns/yandex_safe_ipv6/2a02:6b8::feed:bad_2a02:6b8:0:1::feed:bad) |

#### Family

In "Family" mode, protection from infected, fraudulent and adult sites is provided.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `77.88.8.3` and `77.88.8.7`                | [Add to AdGuard](https://kb.adguard.com/dns/yandex_family/77.88.8.3_77.88.8.7) |
| DNS, IPv6      | `2a02:6b8::feed:a11` and `2a02:6b8:0:1::feed:a11`                 | [Add to AdGuard](https://kb.adguard.com/dns/yandex_family_ipv6/2a02:6b8::feed:a11_2a02:6b8:0:1::feed:a11) |

### CleanBrowsing

[Cleanbrowsing](https://cleanbrowsing.org/) is a DNS service providing customizeable filtering.

#### Family Filter

Blocks access to adult content, proxy and VPNs, phishing and malicious domains. It enforces Safe Search on Google, Bing and YouTube.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.228.168.168` and `185.228.169.168 `             | [Add to AdGuard](https://kb.adguard.com/dns/cleanbrowsing_family_filter/185.228.168.168_185.228.169.168) |
| DNS, IPv6      | `2a0d:2a00:1::1`            | [Add to AdGuard](https://kb.adguard.com/dns/cleanbrowsing_family_filter_ipv6/2a0d:2a00:1::1) |
| DNSCrypt, IPv4 | Provider: `cleanbrowsing.org` IP: `185.228.168.168:8443`| [Add to AdGuard](https://kb.adguard.com/sdns/cleanbrowsing_family_filter_dnscrypt/AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn) |
| DNSCrypt, IPv6 | Provider: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443`| [Add to AdGuard](https://kb.adguard.com/sdns/cleanbrowsing_family_filter_dnscrypt_ipv6/AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn) |
| DNS-over-HTTPS | Provider: `https://doh.cleanbrowsing.org/doh/family-filter/` | [Add to AdGuard](https://kb.adguard.com/sdns/cleanbrowsing_family_filter_doh/AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEy9kb2gvZmFtaWx5LWZpbHRlci8) |

#### Adult Filter

Less restrictive than the Family filter and only blocks access to adult content and malicious/phishing domains.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.228.168.10` and `185.228.169.10`             | [Add to AdGuard](https://kb.adguard.com/dns/cleanbrowsing_adult_filter/185.228.168.10_185.228.169.10) |
| DNS, IPv6      | `2a0d:2a00:1::` and `2a0d:2a00:2::*`                 | [Add to AdGuard](https://kb.adguard.com/dns/cleanbrowsing_adult_filter_ipv6/2a0d:2a00:1::_2a0d:2a00:2::*) |
| DNSCrypt, IPv4 | Provider: `cleanbrowsing.org` IP: `185.228.168.10:8443`| [Add to AdGuard](https://kb.adguard.com/sdns/cleanbrowsing_adult_filter_dnscrypt/AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmcc) |
| DNSCrypt, IPv6 | Provider: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443`| [Add to AdGuard](https://kb.adguard.com/sdns/cleanbrowsing_adult_filter_dnscrypt_ipv6/AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw) |
| DNS-over-HTTPS | Provider: `https://doh.cleanbrowsing.org/doh/adult-filter/` | [Add to AdGuard](https://kb.adguard.com/sdns/cleanbrowsing_adult_filter_doh/AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnEi9kb2gvYWR1bHQtZmlsdGVyLw) |

#### Security Filter

Blocks phishing, spam and malicious domains.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.228.168.9` and `185.228.169.9`                | [Add to AdGuard](https://kb.adguard.com/dns/cleanbrowsing_security_filter/185.228.168.9_185.228.169.9) |
| DNS, IPv6      | `2a0d:2a00:1::2`                | [Add to AdGuard](https://kb.adguard.com/dns/cleanbrowsing_security_filter_ipv6/2a0d:2a00:1::2) |
| DNS-over-HTTPS | Provider: `https://doh.cleanbrowsing.org/doh/security-filter/` | [Add to AdGuard](https://kb.adguard.com/sdns/cleanbrowsing_security_filter_doh/AgMAAAAAAAAAAAAVZG9oLmNsZWFuYnJvd3Npbmcub3JnFS9kb2gvc2VjdXJpdHktZmlsdGVyLw) |


### AdGuard DNS

[AdGuard DNS](https://adguard.com/adguard-dns/overview.html) Removes ads and protects your computer from malware

#### Default

Use these servers to block ads, tracking and phishing

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `176.103.130.130` and `176.103.130.131`             | [Add to AdGuard](https://kb.adguard.com/dns/adguard-dns/) |
| DNS, IPv6      | `2a00:5a60::ad1:0ff` and `2a00:5a60::ad2:0ff`            | [Add to AdGuard](https://kb.adguard.com/dns/adguard-dns-ipv6/) |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt.default.ns1.adguard.com` IP: `176.103.130.130:5443`| [Add to AdGuard](https://kb.adguard.com/sdns/adguard-dns/AQIAAAAAAAAAFDE3Ni4xMDMuMTMwLjEzMDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20) |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt.default.ns2.adguard.com` IP: `[2a00:5a60::ad2:0ff]:5443`| [Add to AdGuard](https://kb.adguard.com/sdns/adguard-dns-ipv6/AQIAAAAAAAAAGVsyYTAwOjVhNjA6OmFkMjowZmZdOjU0NDMggdAC02pMpQxHO3R5ZQ_hLgKzIcthOFYqII5APf3FXpQiMi5kbnNjcnlwdC5kZWZhdWx0Lm5zMi5hZGd1YXJkLmNvbQ) |
| DNS-over-HTTPS | Provider: `https://dns.adguard.com/dns-query`, IP: `176.103.130.130` | [Add to AdGuard](https://kb.adguard.com/sdns/adguard-doh/AgcAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMAAPZG5zLmFkZ3VhcmQuY29tCi9kbnMtcXVlcnk) |

#### Family Protection

Default + blocking adult websites + safe search

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `176.103.130.132` and `176.103.130.134`            | [Add to AdGuard](https://kb.adguard.com/dns/adguard-dns-family/) |
| DNS, IPv6      | `2a00:5a60::bad1:0ff` and `2a00:5a60::bad2:0ff`              | [Add to AdGuard](https://kb.adguard.com/dns/adguard-dns-family-ipv6/) |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt.family.ns1.adguard.com` IP: `176.103.130.132:5443`| [Add to AdGuard](https://kb.adguard.com/sdns/adguard-dns-family/AQIAAAAAAAAAFDE3Ni4xMDMuMTMwLjEzMjo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ) |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt.family.ns2.adguard.com` IP: `[2a00:5a60::bad2:0ff]:5443`| [Add to AdGuard](https://kb.adguard.com/sdns/adguard-dns-family/AQIAAAAAAAAAGlsyYTAwOjVhNjA6OmJhZDI6MGZmXTo1NDQzIIwhF6nrwVfW-2QFbwrbwRxdg2c0c8RuJY2bL1fU7jUfITIuZG5zY3J5cHQuZmFtaWx5Lm5zMi5hZGd1YXJkLmNvbQ) |
| DNS-over-HTTPS | Provider: `https://dns-family.adguard.com/dns-query`, IP: `176.103.130.132` | [Add to AdGuard](https://kb.adguard.com/sdns/adguard-family-doh/AgcAAAAAAAAADzE3Ni4xMDMuMTMwLjEzMgAWZG5zLWZhbWlseS5hZGd1YXJkLmNvbQovZG5zLXF1ZXJ5) |

### Google DNS

[Google DNS](https://www.cloudflare.com/dns/) A free, global DNS resolution service that you can use as an alternative to your current DNS provider.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `8.8.8.8` and `8.8.4.4`           | [Add to AdGuard](https://kb.adguard.com/dns/google-dns/8.8.8.8_8.8.4.4) |
| DNS, IPv6      | `2001:4860:4860::8888` and `2001:4860:4860::8844`            | [Add to AdGuard](https://kb.adguard.com/dns/google-dns-ipv6/2001:4860:4860::8888_2001:4860:4860::8844) |
| DNS-over-HTTPS | `https://dns.google.com/resolve?` | [Add to AdGuard](https://kb.adguard.com/sdns/google/AgUAAAAAAAAAACAe9iTP_15r07rd8_3b_epWVGfjdymdx-5mdRZvMAzBuQ5kbnMuZ29vZ2xlLmNvbQ0vZXhwZXJpbWVudGFs) |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) Free DNS service by Cloudflare

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `1.1.1.1` and `1.0.0.1`           | [Add to AdGuard](https://kb.adguard.com/dns/cloudflare-dns/1.1.1.1_1.0.0.1) |
| DNS, IPv6      | `2606:4700:4700::1111` and `606:4700:4700::1001`            | [Add to AdGuard](https://kb.adguard.com/dns/cloudflare-dns-ipv6/2606:4700:4700::1111_606:4700:4700::1001) |
| DNS-over-HTTPS, IPv4 | Provider: `dns.cloudflare.com/dns-query` IP: `1.0.0.1` | [Add to AdGuard](https://kb.adguard.com/sdns/cloudflare/AgcAAAAAAAAABzEuMC4wLjGgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk) |
| DNS-over-HTTPS, IPv6 | Provider: `dns.cloudflare.com//dns-query` IP: `[2606:4700:4700::1111]:53`| [Add to AdGuard](https://kb.adguard.com/sdns/cloudflare-ipv6/AgcAAAAAAAAAGVsyNjA2OjQ3MDA6NDcwMDo6MTExMV06NTOgENk8mGSlIfMGXMOlIlCcKvq7AVgcrZxtjon911-ep0cg63Ul-I8NlFj4GplQGb_TTLiczclX57DvMV8Q-JdjgRgSZG5zLmNsb3VkZmxhcmUuY29tCi9kbnMtcXVlcnk) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) // TODO - description

#### Standard

DNS server with custom filtering that protects your device from malware

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `208.67.222.222` and `208.67.220.220`          | [Add to AdGuard](https://kb.adguard.com/dns/open-dns/208.67.222.222_208.67.220.220) |
| DNS, IPv6      | `2620:119:35::35` and `2620:119:53::53`              | [Add to AdGuard](https://kb.adguard.com/dns/open-dns-ipv6/2620:119:35::35_2620:119:53::53) |
| DNSCrypt, IPv4 |  Provider: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220`| [Add to AdGuard](https://kb.adguard.com/sdns/cisco/AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ) |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]`| [Add to AdGuard](https://kb.adguard.com/sdns/cisco-ipv6/AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20) |

#### FamilyShield

OpenDNS server with adult content blocking

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `208.67.222.123` and `208.67.220.123`             | [Add to AdGuard](https://kb.adguard.com/dns/open-familyshield-dns/208.67.222.123_208.67.220.123) |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123`| [Add to AdGuard](https://kb.adguard.com/sdns/cisco-familyshield/AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ) |

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) Free alternative DNS service with protection from phishing and spyware

#### Standard

// TODO description ADD SCHEME TO SELECT PROVIDER

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `9.9.9.9`                                          | [Add to AdGuard](https://kb.adguard.com/dns/quad9-dns/9.9.9.9) |

#### dnssec/no-log/filter

// TODO description

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`| [Add to AdGuard](https://kb.adguard.com/sdns/AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `149.112.112.9:8443`| [Add to AdGuard](https://kb.adguard.com/sdns/AQMAAAAAAAAAEjE0OS4xMTIuMTEyLjk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0) |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::9]:8443`| [Add to AdGuard](https://kb.adguard.com/sdns/AQMAAAAAAAAAEVsyNjIwOmZlOjo5XTo4NDQzIGfIR7jIdYzRICRVQ751Z0bfNN8dhMALjEcDaN-CHYY-GTIuZG5zY3J5cHQtY2VydC5xdWFkOS5uZXQ) |
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:9]:8443`| [Add to AdGuard](https://kb.adguard.com/sdns/AQMAAAAAAAAAFFsyNjIwOmZlOjpmZTo5XTo4NDQzIGfIR7jIdYzRICRVQ751Z0bfNN8dhMALjEcDaN-CHYY-GTIuZG5zY3J5cHQtY2VydC5xdWFkOS5uZXQ) |
| DNS-over-HTTPS, IPv4 | `dns9.quad9.net:443/dns-query`, IP: `9.9.9.9`| [Add to AdGuard](https://kb.adguard.com/sdns/AgMAAAAAAAAABzkuOS45LjmAABJkbnM5LnF1YWQ5Lm5ldDo0NDMKL2Rucy1xdWVyeQ)|
| DNS-over-HTTPS, IPv4 | `dns9.quad9.net:443/dns-query`, IP: `149.112.112.9`| [Add to AdGuard](https://kb.adguard.com/sdns/AgMAAAAAAAAADTE0OS4xMTIuMTEyLjmAABJkbnM5LnF1YWQ5Lm5ldDo0NDMKL2Rucy1xdWVyeQ) |
| DNS-over-HTTPS, IPv6 | `dns9.quad9.net:443/dns-query`, IP: `[2620:fe::9]`| [Add to AdGuard](https://kb.adguard.com/sdns/AgMAAAAAAAAADFsyNjIwOmZlOjo5XYAAEmRuczkucXVhZDkubmV0OjQ0MwovZG5zLXF1ZXJ5) |
| DNS-over-HTTPS, IPv6 | `dns9.quad9.net:443/dns-query`, IP: `[2620:fe::fe:9]`| [Add to AdGuard](https://kb.adguard.com/sdns/AgMAAAAAAAAAD1syNjIwOmZlOjpmZTo5XYAAEmRuczkucXVhZDkubmV0OjQ0MwovZG5zLXF1ZXJ5) |

#### no-dnssec/no-log/no-filter

// TODO description

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`| [Add to AdGuard](https://kb.adguard.com/sdns/AQYAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA) |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.quad9.net` IP: `149.112.112.10:8443`| [Add to AdGuard](https://kb.adguard.com/sdns/AQYAAAAAAAAAEzE0OS4xMTIuMTEyLjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA) |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::9]:8443`| [Add to AdGuard](https://kb.adguard.com/sdns/AQMAAAAAAAAAEVsyNjIwOmZlOjo5XTo4NDQzIGfIR7jIdYzRICRVQ751Z0bfNN8dhMALjEcDaN-CHYY-GTIuZG5zY3J5cHQtY2VydC5xdWFkOS5uZXQ) |
| DNSCrypt, IPv6 | Provider: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:9]:8443`| [Add to AdGuard](https://kb.adguard.com/sdns/AQMAAAAAAAAAFFsyNjIwOmZlOjpmZTo5XTo4NDQzIGfIR7jIdYzRICRVQ751Z0bfNN8dhMALjEcDaN-CHYY-GTIuZG5zY3J5cHQtY2VydC5xdWFkOS5uZXQ) |
| DNS-over-HTTPS, IPv4 | `dns9.quad9.net:443/dns-query`, IP: `9.9.9.10`| [Add to AdGuard](https://kb.adguard.com/sdns/AgYAAAAAAAAACDkuOS45LjEwgAASZG5zOS5xdWFkOS5uZXQ6NDQzCi9kbnMtcXVlcnk)|
| DNS-over-HTTPS, IPv4 | `dns9.quad9.net:443/dns-query`, IP: `149.112.112.10`| [Add to AdGuard](https://kb.adguard.com/sdns/AgYAAAAAAAAADjE0OS4xMTIuMTEyLjEwgAASZG5zOS5xdWFkOS5uZXQ6NDQzCi9kbnMtcXVlcnk) |
| DNS-over-HTTPS, IPv6 | `dns9.quad9.net:443/dns-query`, IP: `[2620:fe::10]`| [Add to AdGuard](https://kb.adguard.com/sdns/AgYAAAAAAAAADVsyNjIwOmZlOjoxMF2AABJkbnM5LnF1YWQ5Lm5ldDo0NDMKL2Rucy1xdWVyeQ) |
| DNS-over-HTTPS, IPv6 | `dns9.quad9.net:443/dns-query`, IP: `[2620:fe::fe:10]`| [Add to AdGuard](https://kb.adguard.com/sdns/AgYAAAAAAAAAEFsyNjIwOmZlOjpmZToxMF2AABJkbnM5LnF1YWQ5Lm5ldDo0NDMKL2Rucy1xdWVyeQ) |

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) is a free DNS service that offers improved DNS stability and security over other alternatives. And, unlike many of the other DNS services out there, Verisign respects your privacy. We will not sell your public DNS data to third parties nor redirect your queries to serve you any ads.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `64.6.64.6` or `64.6.65.6`                         | [Add to AdGuard](https://kb.adguard.com/dns/verisign_dns/64.6.64.6_64.6.65.6) |
| DNS, IPv6      | `2620:74:1b::1:1` or `2620:74:1c::2:2`             | [Add to AdGuard](https://kb.adguard.com/dns/verisign_dns_ipv6/2620:74:1b::1:1_2620:74:1c::2:2) |

### DNS.WATCH

[DNS.WATCH](https://dns.watch/) Fast and free server without logging

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `84.200.69.80` and `84.200.70.40`                  | [Add to AdGuard](https://kb.adguard.com/dns/dnswatch/84.200.69.80_84.200.70.40) |
| DNS, IPv6      | `2001:1608:10:25::1c04:b12f` and `2001:1608:10:25::9249:d69b`            | [Add to AdGuard](https://kb.adguard.com/dns/dnswatch_ipv6/2001:1608:10:25::1c04:b12f_2001:1608:10:25::9249:d69b) |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) Removes excessive ads and protects from phishing and spyware

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `8.26.56.26` and `8.20.247.20`                     | [Add to AdGuard](https://kb.adguard.com/dns/comodo_dns/8.26.56.26_8.20.247.20) |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2`   | [Add to AdGuard](https://kb.adguard.com/sdns/comodo_dnscrypt/AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) Free alternative DNS service by Dyn

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `216.146.35.35` and `216.146.35.36`                | [Add to AdGuard](https://kb.adguard.com/dns/dyn_dns/216.146.35.35_216.146.35.36) |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) Free alternative DNS service by OpenNIC Project

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `185.121.177.177` and `169.239.202.202`            | [Add to AdGuard](https://kb.adguard.com/dns/opennic_dns/185.121.177.177_169.239.202.202) |
| DNS, IPv6      | `2a05:dfc7:5::53` and `2a05:dfc7:5353::53`         | [Add to AdGuard](https://kb.adguard.com/dns/opennic_dns_ipv6/2a05:dfc7:5::53_2a05:dfc7:5353::53) |

### Quad101

[Quad101](https://101.101.101.101) // TODO description by lancelot-moon

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `101.101.101.101` and `101.102.103.104`            | [Add to AdGuard](https://kb.adguard.com/dns/quad101/101.101.101.101_101.102.103.104) |
| DNS, IPv6      | `2001:de4::101` and `2001:de4::102`                | [Add to AdGuard](https://kb.adguard.com/dns/quad101_ipv6/2001:de4::101_2001:de4::102) |

### Freenom World

[Freenom World](www.freenom.world/en/index.htm) Free anonymous DNS resolver by Freenom World

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `80.80.80.80` and `80.80.81.81`                    | [Add to AdGuard](https://kb.adguard.com/dns/freenom_world/80.80.80.80_80.80.81.81) |

### Fortinet Secure

[Fortinet Secure](cookbook.fortinet.com/dns-web-filtering/) Free alternative DNS service by FortiGuard

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `208.91.112.220` and `80.85.69.54`                 | [Add to AdGuard](https://kb.adguard.com/dns/fortinet_secure/208.91.112.220_80.85.69.54) |

### Safe DNS

[Safe DNS](https://www.safedns.com/) DNS service by SafeDNS

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `195.46.39.39` and `195.46.39.40`                  | [Add to AdGuard](https://kb.adguard.com/dns/safe_dns/195.46.39.39_195.46.39.40) |

### Neustar Recursive DNS

[Neustar Recursive DNS](https://www.security.neustar/digital-performance/dns-services/recursive-dns) Free recursive DNS service by Neustar Security

#### Reliability & Performance 1

For users that want reliable and fast DNS lookups without blocking any specific categories.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.1` and `156.154.71.1`                  | [Add to AdGuard](https://kb.adguard.com/dns/neustar_reliability_1/156.154.70.1_156.154.71.1) |
| DNS, IPv6      | `2610:a1:1018::1` and `2610:a1:1019::1`            | [Add to AdGuard](https://kb.adguard.com/dns/neustar_reliability_1_ipv6/2610:a1:1018::1_2610:a1:1019::1) |

#### Reliability & Performance 2*

For users that want reliable and fast DNS lookups without blocking any specific categories.
*These IPs will not redirect NXDomain (Non-existent Domain) responses to a landing page.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `77.88.8.3` and `77.88.8.7`                        | [Add to AdGuard](https://kb.adguard.com/dns/neustar_reliability_2/77.88.8.3_77.88.8.7) |
| DNS, IPv6      | `2610:a1:1018::5` and `2610:a1:1019::5`            | [Add to AdGuard](https://kb.adguard.com/dns/neustar_reliability_2_ipv6/2610:a1:1018::5_2610:a1:1019::5) |

#### Threat Protection

For users who want protection against malicious domains for security purposes. Includes Reliability & Performance.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `56.154.70.2` and `56.154.71.2`                    | [Add to AdGuard](https://kb.adguard.com/dns/neustar_threat_protection/56.154.70.2_56.154.71.2) |
| DNS, IPv6      | `2610:a1:1018::2` and `2610:a1:1019::2`            | [Add to AdGuard](https://kb.adguard.com/dns/neustar_threat_protection_ipv6/2610:a1:1018::2_2610:a1:1019::2) |

#### Family Secure

For families that want to ensure children don’t have access to mature content. Includes Reliability & Performance + Threat Protection.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.3` and `156.154.71.3`                  | [Add to AdGuard](https://kb.adguard.com/dns/neustar_family_secure/156.154.70.3_156.154.71.3) |
| DNS, IPv6      | `2610:a1:1018::3` and `2610:a1:1019::3`            | [Add to AdGuard](https://kb.adguard.com/dns/neustar_family_secure_ipv6/2610:a1:1018::3_2610:a1:1019::3) |

#### Business Secure

For businesses that want to ensure employee productivity by blocking unwanted and time-wasting content. Includes Reliability & Performance + Threat Protection + Family Secure.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `156.154.70.4` and `156.154.71.4`                  | [Add to AdGuard](https://kb.adguard.com/dns/neustar_business_secure/156.154.70.4_156.154.71.4) |
| DNS, IPv6      | `2610:a1:1018::4` and `2610:a1:1019::4`            | [Add to AdGuard](https://kb.adguard.com/dns/neustar_business_secure_ipv6/2610:a1:1018::4_2610:a1:1019::4) |

### Strongarm DNS

[Strongarm DNS](https://strongarm.io) DNS service by Strongarm that prevents people from interacting with malicious content

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `54.174.40.213` and `52.3.100.184`                 | [Add to AdGuard](https://kb.adguard.com/dns/strongarm_dns/54.174.40.213_52.3.100.184) |

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/) DNS service by SafeSurfer that protects your device from harmful content

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `104.155.237.225` and `104.197.28.121`             | [Add to AdGuard](https://kb.adguard.com/dns/safesurfer_dns/104.155.237.225_104.197.28.121) |


### Aaflo.me

[Aaflo.me DNS](https://aaflo.me) DNS service by SafeSurfer that protects your device from harmful content

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-HTTPS, IPv4   | Provider: `dns-gcp.aaflalo.me/dns-query/` IP: `35.231.69.77`            | [Add to AdGuard](https://kb.adguard.com/sdns/aaflalo-me-gcp/AgMAAAAAAAAADDM1LjIzMS42OS43NyA-GhoPbFPz6XpJLVcIS1uYBwWe4FerFQWHb9g_2j24OBJkbnMtZ2NwLmFhZmxhbG8ubWUKL2Rucy1xdWVyeQ) |
| DNS-over-HTTPS, IPv4   | Provider: `dns.aaflalo.me/dns-query/` IP: `176.56.236.175`          | [Add to AdGuard](https://kb.adguard.com/sdns/aaflalo-me/AgMAAAAAAAAADjE3Ni41Ni4yMzYuMTc1ID4aGg9sU_PpekktVwhLW5gHBZ7gV6sVBYdv2D_aPbg4DmRucy5hYWZsYWxvLm1lCi9kbnMtcXVlcnk) |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) Server running out of a Digital Ocean droplet in BLR1 region. Maintained by Abhay Rana aka Nemo. If you are within India, this might be a nice DNS server to use.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434`    | [Add to AdGuard](https://kb.adguard.com/sdns/captnemo-in/AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### fvz DNS

[fvz DNS](http://dnsrec.meo.ws/) Fusl's public primary OpenNIC Tier2 Anycast DNS Resolver

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353`   | [Add to AdGuard](https://kb.adguard.com/sdns/fvz-anyone/AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353`| [Add to AdGuard](https://kb.adguard.com/sdns/fvz-anytwo/AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |


### Nawala Childprotection DNS

[nawala-childprotection](http://nawala.id/) Internet filtering system (anycast), protecting child from inappropriate websites and abusive contents.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144`  | [Add to AdGuard](https://kb.adguard.com/sdns/nawala-childprotection/AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk) |


