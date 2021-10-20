---
title: 'Launch issues on macOS'
taxonomy:
    category:
        - docs
visible: true
---
## Launch issues on macOS 11 and higher

If you have problems launching AdGuard for Mac on Big Sur and Monterey operating systems, please use these instructions:

1. Reboot Mac and enter [recovery mode](https://support.apple.com/en-us/HT201255).
2. Disable SIP (Launch Terminal from the Utilities menu and type `csrutil disable`).
3. Reboot Mac.
4. Close the AdGuard app and open Terminal and type `systemextensionsctl reset`.
5. Reboot Mac and enter recovery mode.
6. Enable SIP (Launch Terminal from the Utilities menu and type `csrutil enable`).
6. Launch the AdGuard app and enable protection.

## Launch issues on macOS 10

If you have problems launching AdGuard for Mac on Sierra, Mojave и Catalina, please use these instructions:

1. Open `Terminal` and enter command `ls -@lOae /private/var/db/KernelExtensionManagement`.
2. Check that `restricted` the flag is missing (like on the screenshot).

<img src="https://cdn.adguard.com/public/Adguard/kb/MAC/restricted-flag.png" width="600" />

3. Reboot your mac in recovery mode.
4. Open Utilities -> Terminal.
5. Enter `csrutil disable`.
6. Enter administrator password.
7. Reboot your Mac.
8. Open `Terminal` and enter command `sudo chflags restricted /private/var/db/KernelExtensionManagement`.
9. Reboot your mac in recovery mode.
10. Open Utilities -> Terminal -> Enter `csrutil enable` -> Enter administrator password -> Reboot your Mac.
11. Enable AdGuard protection.