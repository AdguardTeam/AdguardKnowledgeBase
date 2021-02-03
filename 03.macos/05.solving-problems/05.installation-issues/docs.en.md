---
title: 'Installation problems solving'
taxonomy:
    category:
        - docs
---

## The installation failed error at macOS Catalina

During an installation you can face this like error: 

<img src="https://cdn.adguard.com/public/Adguard/kb/MAC/macerrorscreenEN.png" width="600" />

Use this instruction to solve the problem:

1) Restart your Mac
2) As your Mac restarts, press and hold down the Command(⌘) + R keys immediately upon hearing the startup chime. Hold the keys until the Apple logo appears to get the computer in Recovery mode.
3) From the top bar select *Utilities* > *Terminal*, and execute this command *csrutil disable*
4) Restar the Mac and log into Administrator's profile
5) Open a Finder window and select from the top bar *Go* > *Go to Folder* and type *~/private/*
6) Create a folder named *tmp* and type your password
7) Launch AdGuard installation

As the installation is done, restart your Mac back to the Recovery mode using the instruction above and execute *csrutil enable* command in Terminal to enable a system protection.