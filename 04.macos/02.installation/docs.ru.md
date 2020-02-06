---
title: 'Установка и удаление'
taxonomy:
    category:
        - docs
---

## Системные требования

**Версия операционной системы:** OS X 10.10 (64 bit) или более поздняя

**Объем оперативной памяти:**	от 2 Гб

**Браузеры:**	Safari, Google Chrome, Opera, Yandex.Browser, Mozilla Firefox, любой другой браузер, совместимый с macOS

**Свободное пространство на диске:** 120 Мбайт


## Установка программы

Для того, чтобы установить AdGuard для macOS на ваш компьютер, запустите браузер, наберите в адресной строке _adguard.com_ и на открывшейся веб-странице нажмите кнопку **_Скачать_**.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/1.png" width="600" />

Дождитесь окончания загрузки файла _AdguardInstaller.dmg_ и щелкните мышью на его значке в списке загруженных объектов, который демонстрируется в панели dock. 

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/2.png" width="600" />

На Рабочем столе вашего компьютера отобразится значок AdGuard. Щёлкните на нем мышью, чтобы открыть окно программы установки. В окне программы установки сделайте двойной клик мышью по значку AdGuard.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/3.png" width="300" />

При первом запуске AdGuard операционная система продемонстрирует на экране предупреждение о том, что данное приложение загружено из Интернета. Нажмите кнопку **_Открыть_**.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/4.png" width="400" />

Далее вам следует подтвердить установку, нажав **_Установить_**.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/5.png" width="300" />

Подождите, пока установщик загрузит необходимые файлы.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/6.png" width="500" />

Для использования программы вам потребуется ввести пароль администратора вашей учетной записи macOS. Введите его в открывшемся диалоговом окне и нажмите кнопку **_ОК_**.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/7.png" width="300" />

<a name="uninstall"></a>
## Удаление программы

#### Стандартное удаление 

Первым делом, откройте приложение «Finder», кликнув по соответствующей иконке:
![](https://cdn.adguard.com/public/Adguard/Ru/Articles/howtodelete/finder.png)

Перейдите в раздел *«Программы»*. Выберите в списке AdGuard, кликните по нему правой кнопкой мыши и выберите пункт *«Переместить в корзину»*.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/uninstall/1.png" width="600" />

#### Продвинутое удаление

Используйте эту инструкцию только после выполнения всех шагов из инструкции по «стандартному удалению». После её выполнения:

1. Удалите следующие файлы Адгарда:
    * */Library/Application Support/com.adguard.mac.adguard* (папка)
    * *~/Library/Application Support/com.adguard.mac.adguard* (папка)
    * *~/Library/Preferences/com.adguard.mac.adguard.plist* (файл)

Для этого введите и выполните следущие команды через Terminal: 

`sudo rm -R "/Library/Application Support/com.adguard.mac.adguard"`
`rm -R "/Users/admin/Library/Application Support/com.adguard.mac.adguard"`
`rm ~/Library/Preferences/com.adguard.mac.adguard.plist`

2. Запустите приложение «Мониторинг системы».
3. Через поиск найдите процесс *’cfprefsd’*.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/uninstall/2.png" width="600" />

4. Остановите процесс, запущенный от имени пользователя. Подтвердите завершение процесса.

<img src="https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/uninstall/3.png" width="400" />

AdGuard полностью удален с вашего компьютера.
