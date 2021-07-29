---
title: 'Battery and traffic consumption issues'
taxonomy:
    category:
        - docs
visible: true
---

Algunas veces se podrá dar cuenta que, de acuerdo con las estadísticas de Android, AdGuard consume mucho tráfico y/o batería.

Ambos problemas son las dos caras de la misma moneda. Ya que en el proceso de filtrado todo el tráfico móvil pasa a través de AdGuard, Android decide que es AdGuard el que consume todo. Realmente, por supuesto, esto no es verdadero.

Las estadísticas de consumo de batería y de tráfico mostradas en el dispositivo **no representan os hechos**. El asunto es que, Android le atribuye todo el tráfico de WiFi y Móvil a AdGuard, que de hecho fue consumido por otras aplicaciones. Debido a esto, AdGuard la proporción real de tráfico y batería consumidas incrementen, y la proporción de otras aplicaciones, por el contrario, disminuye.

### Pantalla de estadísticas de uso de batería propia

Para mitigar este concepto erróneo, hemos añadido una nueva pantalla llamada 'Uso de la Batería'. Puede acceder a ellas presionando en el ícono de la batería en la esquina superior derecha de la pantalla principal.

<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/batterystats.png" width="300">

Dentro encontrará un gráfico que muestra la batería consumida por AdGuard en las últimas 24 horas, con una opción para conseguir detalles hora a hora al presionar en los puntos en el gráfico. Además de eso, hay un desglose numérico de los datos relevantes y una pequeña explicación técnica.

### Ejemplo real

En las capturas de pantalla de abajo puede ver las estadísticas de consumo de batería por una noche y la mañana siguiente.

<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/battery_1.png" width="300">
<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/battery_2.png" width="300">
<img src="https://cdn.adguard.com/public/Adguard/kb/PicturesEN/battery_3.png" width="300">

De estas capturas de pantalla puede ver que:

1. AdGuard, como se espera, está en la cima de la tabla. Esto es típico para teléfonos inteligentes (y no ha todas las tabletas sin 4G, ya que WiFi es mucho menos 'costoso' en términos de consumo de batería).

2. Preste atención al número de paquetes Móviles y de Wi-Fi enviados. Los cuales son atribuidos a AdGuard (paquete Móviles enviados и paquetes Wi-Fi enviados) en la captura de pantalla #2.

3. En la captura de pantalla #3 hay estadísticas para uno de los consumidores reales de tráfico, Yandex.Browser. No se le ha atribuido casi ningún tráfico, cuando en realidad 70% del tráfico total fue consumido por este.

### ¿Cuántos recursos de la batería consume AdGuard realmente?

Primero, vamos a explicar un poco de teoría y enlaces con los datos necesarios.

1. Android deriva el consumo de tráfico juzgando sobre el llamado Perfil de Potencia, el cual es dado por cada fabricante: <https://source.android.com/devices/tech/power/values.html>

2. La parte principal del Perfil de Potencia es un conjunto de valores en mAh, los cuales definen el consumo de la batería para cada componente del dispositivo: <https://source.android.com/devices/tech/power/values.html>

Por ejemplo, de la tabla de arriba:

_wifi.active=_ 31mA de consumo adicional en mAh causado por el intercambio de datos a través de WiFi.

_radio.active=_ 100-300mA de consumo adicional en mAh causado por el intercambio de datos a través de la red Móvil.

_cpu.active=_ 100-200mA de consumo adicional en mAh causado por el trabajo de la CPU.

3. AdGuard por si mismo casi no consume tráfico, así que para evaluar el consumo de los recursos de la batería, eliminemos 'Paquetes Móviles/Wi-Fi' y quedémonos con la 'CPU'. 

Fórmula para calcular el consumo:

>"Tiempo de CPU (ms)" X "cpu.active" / (60 * 60 * 1000) = "USO DE LA ENERGÍA mAh"

Vamos a poner números reales en esta fórmula.

Tomemos _total de CPU_ de la segunda captura de pantalla y convirtámoslo en milisegundos: 506000

Un coeficiente _cpu.active_ para 2GHz será aproximadamente igual a 225mA.

Resultado final.

>506000 * 225 / (60 * 60 * 1000) = 31,625mAh

### Conclusión

El consumo real es **mucho menos** que el que se muestra en las estadísticas de AdGuard. En vez de 220mAh debería estar alrededor de 31-40mAh. Por otra parte, el consume del navegador no debería ser 66mAh, sino ~200mAh.
