---
title: '  Low Level Settings guide'
taxonomy:
    category:
        - docs
visible: true
---

Inside AdGuard for Android 'Advanced settings' tab there is a 'Low Level Settings' button. Once you tap it, you will see a big list of various settings, many of which might be confusing to an average user.

**WARNING! ** Changing any of these settings without knowledge of what that particular setting does may lead to undesirable consequences! Ask our support for advice if you are in doubt about this or that setting.

Below we will try to describe what some of the most important and often-used low level settings are for.

**pref.net.exclusions**

If you tap this button, you will find a list, and each entry of this list is a package name of some application. The whole reason of this section is to whitelist any app on a level deeper than you would get using AdGuard Firewall. Traffic of apps from _pref.net.exclusions_ list will not even go through AdGuard, so it can't be modified in any way by definition.

To add an app to this list simply add a new entry with app's package name. For apps from Google Play it is really easy to determine the package name. Just open the apps page in GooglePlay and look at the address bar. The part after '**id=**' is exactly what you need to look for. For example, for YouTube app the whole link would be

**https://play.google.com/store/apps/details?id=com.google.android.youtube**

with **com.google.android.youtube** being the package name.

**HTTPS filtering preferences**

We united several settings under this category: _pref.https.apps.exclusions_, _pref.https.domains.blacklist_ and _pref.https.domains.whitelist_. They are essentially the same settings you can find in HTTPs filtering settings tab. You can find more information about them in our blog:

<https://blog.adguard.com/en/adguard-for-android-25-official/>

**pref.vpn.ipv6.bypass**

Nowadays, more and more often SMS and MMS are sent via network, and when they are, non-standard IPv6 network is often used. When we try to filter this traffic, it is not extremely unusual that we interfere with sending and even receiving MMS. If you suspect this is your case, we recommend checking the **pref.vpn.ipv6.bypass** checkbox or adding the app responsible for MMS managing to **pref.net.exclusions**.

**pref.samsungpay.autopause.enable**

This setting has been developed specifically for the South Korean users who often face the following problem — ***the "Samsung Pay" app doesn’t work on devices with running VPN** (which, in its turn, is being used by AdGuard).* 

If you want to learn about how this feature makes AdGuard compatible with Samsung Pay, please read this [article](https://kb.adguard.com/en/android/solving-problems/samsung-pay).


#### All available options:

  **pref.vpn.ipv4.force.default**
   
If true - AdGuard will force IPv4 default route.

  **pref.vpn.ipv4.force.complex**

  If true - AdGuard will force IPv4 complex route for LAN exclusion.
   
  **pref.vpn.ipv4.address**

IPv4 TUN interface address.

   **pref.vpn.ipv6.address**

IPv6 TUN interface address.

   **pref.vpn.ipv6.force**
   
If true - AdGuard will force IPv6 default route (if IPv6 is available).

   **pref.vpn.ipv4.bypass**
   
If true, VPN will be configured to bypass all the IPv4 traffic.

   **pref.vpn.ipv6.bypass**

If true, VPN will be configured to bypass all the IPv6 traffic.

   **pref.vpn.ipv6.disable**

If true - AdGuard will disable IPv6 routes forcibly.

   **pref.vpn.tun.mtu**
   
Maximum transmission unit (MTU) of the VPN interface.
 
   **pref.ipv4.routes.excluded**

List of IPv4 routes excluded from VPN and auto-proxy.
   
   **pref.ipv6.routes.excluded**
   
List of IPv6 routes excluded from VPN and auto-proxy.

   **pref.excluded.uids**

List of excluded packages uids.

  **pref.vpn.capture**

Enable VPN tun device logging.
  
  **pref.har.capture**

Enable HAR file capture.

  **pref.vpn.disable.pause**
   
Disable automatic VPN pause in case of network absence, tethering or power saving mode.

  **pref.vpn.disable.reconfigure**

Disables VPN automatic re-configuration.

  **pref.proxy.disable.reconfigure**

Disables VPN automatic re-configuration.

  **pref.proxy.block.ipv6**

Block all internet connections through IPv6.

  **pref.filtered.ports**

List of the redirect port.

  **pref.boot.startup.delay**

The initial protection startup delay (in seconds) after device boot up.

  **pref.enforce.paused.notification**

Enforce notification about paused protection even when notification icon is set to None.

  **pref.root.clear.youtube**
  
Adguard will clear Youtube app data every on boot.

  **pref.root.set.oom_adj**
   
Adguard will set minimum oom_score_adj for own process.

  **pref.enforce.https.filtering**
   
List of apps for which AdGuard enforces HTTPS filtering even if they target Android 7+.

  **pref.removed.html.log**

AdGuard will print information about removed HTML elements to the filtering log.
    
  **pref.samsungpay.autopause.enable**

Adguard will pause protection while Samsung Pay app is foreground.

  **pref.dns.bootstrap**
   
 Bootstrap DNS for DNSProxy DoH and DoT servers.
   
 **pref.dns.fallback**
   
Fallback DNS address.

 **pref.dns.blocking.type**
   
 Block type for DNS filtering.

 **pref.notify.on.unknown.ca**

 Show unknown CA notifications or not.
