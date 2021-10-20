---
title: 'Проблемы с запуском на macOS'
taxonomy:
    category:
        - docs
visible: true
---
## Проблемы с запуском на операционных системах macOS 11 и выше

Если у вас возникли проблемы при запуске AdGuard для Mac на операционных системах Big Sur и Monterey, воспользуйтесь этой инструкцией:

1. Перезагрузите Mac и войдите в [режим восстановления](https://support.apple.com/ru-ru/HT201255#:~:text=%D0%A3%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%B2%D0%B0%D0%B9%D1%82%D0%B5%20%D0%BA%D0%BB%D0%B0%D0%B2%D0%B8%D1%88%D0%B8%20%D0%BD%D0%B0%D0%B6%D0%B0%D1%82%D1%8B%D0%BC%D0%B8%2C%20%D0%BF%D0%BE%D0%BA%D0%B0%20%D0%BD%D0%B5,%2DOption%2DCommand%2DR.).
2. Отключите SIP (запустите Терминал из меню Утилиты и введите `csrutil disable`.
3. Перезагрузите Mac.
4. Закройте приложение AdGuard, откройте Терминал и введите `systemextensionsctl reset`.
5. Перезагрузите Mac и войдите в режим восстановления.
6. Включите SIP (запустите Terminal из меню Utilities и введите `csrutil enable`).
7. Запустите приложение AdGuard и включите защиту.

## Проблемы с запуском на операционных системах macOS 10

Если у вас возникли проблемы при запуске AdGuard для Mac на операционных системах Sierra, Mojave и Catalina, воспользуйтесь этой инструкцией:

1. Откройте терминал и введите команду `ls -@lOae /private/var/db/KernelExtensionManagement`.
2. Убедитесь, что флаг `restricted отсутствует` (как на скриншоте). 

<img src="https://cdn.adguard.com/public/Adguard/kb/MAC/restricted-flag.png" width="600" />

3. Перезагрузите ваш Mac в режиме восстановления.   
4. Откройте Утилиты -> Терминал.
5. Введите `csrutil disable`. 
6. Введите пароль администратора.
7. Перезагрузите ваш Mac.
8. Откройте Терминал и введите команду `sudo chflags restricted /private/var/db/KernelExtensionManagement`.
9. Перезагрузите ваш Mac в режиме восстановления.
10. Откройте Утилиты -> Терминал -> Введите `csrutil enable` -> Введите пароль администратора ->
Перезагрузите ваш mac.
11. Включите защиту AdGuard.