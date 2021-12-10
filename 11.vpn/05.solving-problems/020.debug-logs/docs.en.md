---
title: 'How to collect debug logs'
visible: false 
published: true
taxonomy:
    category:
        - docs
---

Debug logs are required whenever there's an atypical technical issue that calls for a close look from the developers. If you've run into such an issue and want to record relevant logs, or if you were asked by the support team to collect debug logs, here's what you need to do, depending on your OS.

## Android

1. Swipe away all background applications that are irrelevant to the problem. 

2. Open *AdGuard VPN settings > App settings > Advanced settings > Logging level* and select **Extended** logging level.

3. Reproduce the problem and mark the exact time when it happened.

4. Go back to *AdGuard VPN settings > Support* and tap **Export logs and system info**. On the opened screen confirm saving the archive to your local storage. 

5. Return to *AdGuard VPN settings > App settings > Advanced settings > Logging level* and select **Default** again.

6. Send us an email at support@adguard.com, attach the archive with logs, and mention the time when the problem was reproduced. **This is very important!** Without it, we might not be able to find the relevant information.

> Sometimes, the support team may ask you to record and send over the Extreme logs. The instruction would be the same, except for step 2, where you'd need to select **Extreme** instead of Extended. **Never switch to Extreme logging level unless you were told to by the support team!** This will lead to severe problems with app's performance if left enabled for long.
