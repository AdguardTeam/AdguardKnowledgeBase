---
title: 'Известные проблемы фильтрации HTTPS'
taxonomy:
    category:
        - docs
visible: true
---

> Статья обновлена 18 января 2021
> Ознакомление с этой статьей может потребовать от вас базовых знаний о шифровании, протоколе TLS и устройстве HTTPS.

Для начала, приведем диаграмму, которая показывает, как в целом устроена фильтрация HTTPS в AdGuard:

![What is HTTPS filtering](https://cdn.adguard.com/public/Adguard/Blog/https/what_is_https_filtering_ru.png)

AdGuard копирует свойства TLS-соединения, которые использует ваш браузер:

* AdGuard использует ту же самую версию TLS.
* AdGuard использует те же методы шифрования (ciphers), что и ваш браузер.

Так что если вы используете современный и безопасный браузер — это хорошо, ведь известные проблемы TLS в нем уже учтены, и он не будет пытаться использовать небезопасные методы шифрования.

**Как ведет себя AdGuard в случае, если есть сомнения в валидности сертификата?** 
В случае, если есть какие-то сомнения в валидности сертификата, AdGuard полностью прекращает фильтрацию соединений к этому домену, и отдает это на откуп браузеру.

### Известные недостатки

Фильтрация HTTPS в AdGuard имеет некоторые недостатки. Практически все мы планируем устранить в ближайших версиях AdGuard. 

Ниже перечислены все известные нам проблемы и сроки их устранения.

#### Проверка оригинального сертификата

Самым важным недостатком HTTPS фильтрации является то, что она "прячет" оригинальный сертификат вебсайта. Вы просто не можете увидеть реальный сертификат - вместо него вы видите тот, который был сгенерирован AdGuard.

Эта проблема уже решена в [Браузерном Помощнике](https://adguard.com/ru/adguard-assistant/overview.html). Это — браузерное расширение, помогающее управлять фильтрацией прямо из браузера и позволяющее, в том числе, просматривать исходные сертификаты веб-сайтов.

#### Certificate Transparency

Благодаря современной криптографии браузеры обычно могут легко обнаружить вредоносные сайты с поддельными сертификатами.
Однако этих механизмов недостаточно для обнаружения вредоносных сайтов, которые используют сертификаты, выданные по ошибке
или выданные скомпрометированным центром сертификации. Certificate Transparency призван устранить такие угрозы,
сделав процедуру выдачи SSL-сертификатов открытой и прозрачной для всех.

Продукты AdGuard, использующие [CoreLibs](https://github.com/AdguardTeam/CoreLibs/) начиная с версии **1.11**,
будут проводить политику, основанную на [Chrome Certificate Transparency Policy](https://googlechrome.github.io/CertificateTransparency/ct_policy.html).

### Замечания и пожелания?
Если вы хотите что-то добавить, указать нам на ошибки или несоответствия или задать вопрос, пишите пожалуйста на адрес `devteam at adguard.com`.
