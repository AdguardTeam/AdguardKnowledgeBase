---
title: 'Как отправить файл дампа'
taxonomy:
   category:
       - docs
visible: true
---
Для диагностики проблем и ошибок, с которыми пользователи могут столкнуться при использовании AdGuard, службе поддержки может понадобиться файл дампа. Данный файл позволяет разработчикам увидеть процессы, которые выполнялись в приложении за определенный период времени. Ниже вы можете ознакомиться с инструкцией о том, как создать файл дампа на вашем ПК.

1. Нажмите **Ctrl + Shift + Esc**. 
2. В открытом окне **Диспетчер задач** в верхней строке меню выберите **Подробности**.
 
<img src="https://cdn.adguard.com/public/Adguard/kb/Windows_dump/details_ru.png" style="border: 1px solid #efefef; max-width: 550px; padding: 2px;">

3. Щелкните правой кнопкой мыши на процесс, для которого вы хотите создать файл дампа (например, Adguard.exe).
4. В меню выберите **Создать файл дампа**.
5. Файл успешно создан!
 
<img src="https://cdn.adguard.com/public/Adguard/kb/Windows_dump/create_dump_file_ru.png" style="border: 1px solid #efefef; max-width: 700px; padding: 2px;">

Откройте папку с файлом. Созданный файл дампа (`.DMP`) имеет то же название, что и процесс, который вы выбрали в пункте 3. Файл довольно большой, поэтому сожмите его в архив.

> Обратите внимание, у AdGuard есть два запущенных процесса (`Adguard.exe` и `AdguardSvc.exe`). Вам нужно создать файл дампа отдельно для каждого из них.
 
<img src="https://cdn.adguard.com/public/Adguard/kb/Windows_dump/processes_ru.png" style="border: 1px solid #efefef; max-width: 550px; padding: 2px;">

Когда вы отправляете файлы дампа в службу поддержки, пожалуйста, отправьте их вместе с логами, чтобы мы могли решить проблему как можно быстрее. [Здесь](https://kb.adguard.com/ru/windows/solving-problems/adguard-logs) вы можете ознакомиться с инструкцией по сбору логов AdGuard.