---
title: 'Установка и удаление'
taxonomy:
    category:
        - docs
---

* [Системные требования](#system-requirements)
* [Установка программы](#installation)
* [Удаление программы](#uninstall)
	* [Продвинутое удаление](#uninstall-advanced)

<a id="system-requirements"></a>
## Системные требования

**Версия операционной системы:** macOS 10.12 (64 bit) или более поздняя

**Объем оперативной памяти:**	от 2 Гб

**Браузеры:**	Safari, Google Chrome, Opera, Yandex.Browser, Mozilla Firefox, и любой другой браузер, совместимый с macOS

**Свободное пространство на диске:** 120 Мбайт

<a id="installation"></a>
## Установка программы

Для того, чтобы установить AdGuard для macOS на ваш компьютер, запустите браузер, наберите в адресной строке _adguard.com_ и на открывшейся веб-странице нажмите кнопку **_Скачать_**.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/1.png" width="600" />

Дождитесь окончания загрузки файла _AdguardInstaller.dmg_ и щёлкните мышью по его значку в списке загруженных объектов, который демонстрируется в панели dock. 

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/2.png" width="600" />

На Рабочем столе вашего компьютера отобразится значок AdGuard. Щёлкните по нему мышью, чтобы открыть окно программы установки. В окне программы установки дважды кликните мышью по значку AdGuard.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/3.png" width="300" />

При первом запуске AdGuard операционная система продемонстрирует на экране предупреждение о том, что данное приложение загружено из Интернета. Нажмите кнопку **_Открыть_**.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/4.png" width="400" />

Далее вам следует подтвердить установку, нажав **_Установить_**.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/5.png" width="300" />

Подождите, пока установщик загрузит необходимые файлы.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/6.png" width="500" />

Для использования программы вам потребуется ввести пароль администратора вашей учетной записи macOS. Введите его в открывшемся диалоговом окне и нажмите кнопку **_ОК_**.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/7.png" width="300" />

Далее вы увидите небольшую вступительную презентацию, где вы сможете настроить защиту под себя. Вы можете начать настройку сразу или пропустить её.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/installation-wizard-ru.png?" width="600" />

Вот и всё, AdGuard установлен! 

<a id="uninstall"></a>
## Удаление программы

#### Стандартное удаление 

Первым делом, откройте приложение «Finder», кликнув по соответствующей иконке:
![](https://cdn.adguard.com/public/Adguard/Ru/Articles/howtodelete/finder.png)

Перейдите в раздел *«Программы»*. Выберите в списке AdGuard, кликните по нему правой кнопкой мыши и выберите пункт *«Переместить в корзину»*.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/uninstall/1.png" width="600" />

AdGuard удалён с вашего Mac!

<a id="uninstall-advanced"></a>
#### Продвинутое удаление

**Используйте эту инструкцию только если вы точно знаете, что делаете, или если наша служба поддержки рекомендовала вам именно «продвинутое удаление». Прежде чем приступать, сначала выполните все шаги из инструкции по «стандартному удалению».** После её выполнения:


1. Удалите следующие файлы AdGuard:
    * /Library/Application Support/AdGuard Software/com.adguard.mac.adguard (папка)
    * ~/Library/Application Support/com.adguard.mac.adguard (папка)
    * ~/Library/Preferences/com.adguard.mac.adguard.plist (файл)
    * ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac (папка)
    * /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist (файл)
    * /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist (файл)
    * /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log (файл)
    * /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log (файл)

Для этого введите и выполните следующие команды через Terminal: 

`sudo rm -R "/Library/Application Support/AdGuard Software/com.adguard.mac.adguard"`
`rm -R "$HOME/Library/Application Support/com.adguard.mac.adguard"`
`rm $HOME/Library/Preferences/com.adguard.mac.adguard.plist`
`rm -R "$HOME/Library/Group Containers/TC3Q7MAJXF.com.adguard.mac"`
`find "$HOME/Library/Application Support" -name "com.adguard.browser_extension_host.nm.json" -delete`
`sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist`
`sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist`
`sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log`
`sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log`

2. Запустите приложение «Мониторинг системы».
3. Через поиск найдите процесс *’cfprefsd’*.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/uninstall/2.png" width="600" />

4. Остановите процесс, запущенный от имени пользователя. Для этого нажмите на него, а после нажмите на X в левом верхнем углу. Подтвердите завершение процесса.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/uninstall/3.png" width="400" />

AdGuard полностью удален с вашего Mac.
