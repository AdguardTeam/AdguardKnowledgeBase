---
title: '"Olası Güvenlik Sorunu" hatası'
taxonomy:
    category:
        - docs
visible: true
---

<img src="https://i.imgur.com/FfiYeKL.png" style="border: 1px solid #efefef; padding: 2px; max-width: 700px;" />

Önümüzdeki "Olası Güvenlik Sorunu" hatasına en çok Mozilla Firefox, Pale Moon, Waterfox ve benzeri Firefox tabanlı tarayıcılarda rastlanır.

Sürüm 68'den başlayarak, belirli kurallar altında Firefox normalde sistem deposundaki sertifikalara güvenir. Ancak, bazen kontrolümüz dışındaki nedenlerden dolayı "Olası Güvenlik Sorunu" ve "Bağlantınız Güvenli Değil" hatasına yol açıyor.. Düzeltmek için AdGuard sertifikasını indirmeniz ve Firefox'un yerel sertifika deposuna elle yüklemeniz gerekir. Bunu yapmak için aşağıdaki adımları uygulayın:

>Bu yönergeler Firefox tarayıcısı içindir. Diğer Firefox tabanlı tarayıcılarda düğmelerin ve menü öğelerinin adları ve yerleri farklı olabilir.

1) AdGuard'ı çalıştırın.

2) [http://local.adguard.org/cert](http://local.adguard.org/cert) adresine gidin ve yeşil *İndir* butonuna tıklayın. Tarayıcınız **cert.cer** dosyasını indirmeye başlayacaktır.

>İndirme sayfasını, AdGuard uygulaması aracılığıyla *Ayarlar - Ağ - HTTPS Filtreleme* bölümündeki bağlantıya tıklayarak da açabilirsiniz.

<img src="https://i.imgur.com/RahghRe.png" style="border: 1px solid #efefef; padding: 2px; max-width: 500px;" />

3) Tarayıcınızı açın ve ardından *Ayarlar*'ı açın.

4) *Gizlilik ve Güvenlik* sekmesine gidin.

5) *Sertifikalar* bölümüne gidin ve *Sertifikaları Göster* butonuna tıklayın.

<img src="https://i.imgur.com/r2ZQyAO.png" style="border: 1px solid #efefef; padding: 2px; max-width: 700px;" />

6) *Makamlar* sekmesine tıklayın.

7) *İçe aktar...* butonuna tıklayın.

<img src="https://i.imgur.com/RAccPQc.png" style="border: 1px solid #efefef; padding: 2px; max-width: 500px;" />

8) İndirdiğimiz **cert.cer** dosyasını bulun ve *Aç* diyin.

9) *Tamam* 'a tıklayın.

AdGuard sertifikasını başarıyla yüklediniz. Tarayıcıyı yeniden başlatın ve hata ortadan kalkmış olmalıdır.
