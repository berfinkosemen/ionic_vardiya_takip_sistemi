# ionic vardiya takip sistemi

<h3>Berfin Kösemen 170201058</h3>

   Vardiya takip sistemi, vardiyalı veya nöbet tutulan işlerde çalışan insanlar için geliştirilmiştir. Bu uygulama ile hangi çalışanın hangi saatller aralığında çalıştığını görüntülebileceğiz. Böylelikle vardiyası bitmiş dinlenmekte, uykuda olan çalışanları istemeden rahatsız etme olasılığımızı ortadan kaldırmış oluyoruz. Çalışanların ne zaman ulaşılabilir olduklarına erişebileceğiz.

  Proje çalıştırıldığında karşımıza projenin adının yazılı olduğu bir sayfa gelicek bu sayfadan ileri gidilmesi ile de projenin amacına genel olarak anlatan, kayıt ol ve giriş butonlarının bulunduğu bir sayfa açılacak. Bu geçişli sayfa slide komponentinin kullnaılması ile gerçekleştirilmiştir. Kayıt ol ve giriş butonları ile navigosyon kullnarak sayfa geçişi gerçekleştirilmiştir.

![](https://github.com/berfinkosemen/ionic_vardiya_takip_sistemi/blob/main/1.gif)

   Kayıt ol butonuna basılması ile kullanıcıdan bilgiler alınır koşulların incelenmesi sonucunda veri tabanına api aracılığı ile kayıt edilir. Kullanıcıdan bilgiler alınırken date time pickers komponentleride kullanılmıştır. Kayıt edinilen kullanıcı
giriş sayfasına iletilir.

![](https://github.com/berfinkosemen/ionic_vardiya_takip_sistemi/blob/main/20210120_192616.gif)

   Giriş yap butonuna basılması ile kullanıcıdan e mail ve şifre alınması, bu bilgilerin doğruluğu ile ansayfaya geçiş gerçekleştirilir.

![](https://github.com/berfinkosemen/ionic_vardiya_takip_sistemi/blob/main/20210120_214928.gif)

   Anasayfa girişte storage kullanılarak kullanıcının ismine ulaşılır ve hoşgeldin.... şeklinde gösterilir. Anasayfada beş farklı 
buton bulunmaktadır. Bu butonlar aracılığıyla projede gerçekleştirilen özelliklerin sayfalarına iletim sağlanır. Ayrıca sayfada logout 
butonuda bulunur.

![](https://github.com/berfinkosemen/ionic_vardiya_takip_sistemi/blob/main/20210120_215030.gif)

   İlk butona, yani bilgilerimi güncelle butonuna tıklanması ile kullanıcı uyelik bilgilerini yenileyebilir. Kullanıcıdan çeşitli komponenetler kullanılarak alınan bilgiler
servisler aracılığı ile update edilir.

  ![](https://github.com/berfinkosemen/ionic_vardiya_takip_sistemi/blob/main/20210120_215121.gif)
  
   İkinci buton, yani vardiya saatlerinin girlimesi butonu aracılığı ile ise progmamın asıl amacı olan vardiya bilgilerinin gün ile birlikte alınması işlemi gerçekleştirilir. 
Alınan variler servis aracılığı ile sisteme kaydedilir.
 
  ![](https://github.com/berfinkosemen/ionic_vardiya_takip_sistemi/blob/main/20210120_215146.gif)
  
  Üçüncü buton yani çalışanları listeleme butonu ile ise iş arkadaşlarımız listelenir. Ardından arama çubuğu ile text filter kullnarak yazılan harflere göre kullanıcılar arasında arama gerçekleştirilir. Tıkladığımız arkadaşımızın vardiya bilgilerine ulaşırız. Bu adımda pipe kullanımı gerçekleştirdim.
 
 ![](https://github.com/berfinkosemen/ionic_vardiya_takip_sistemi/blob/main/20210120_215220.gif)
 
 Dördüncü butonumuz ile bir yapılacak görevler listesi oluşturulur. Veriler servisler aracılığı ile veri tabanına aktarılır.
 
 ![](https://github.com/berfinkosemen/ionic_vardiya_takip_sistemi/blob/main/20210120_215319.gif)
 
 Son buton olan görevlerin listelenmesi butonu ile, bir önceki adımda yapılan listenin verileri veri tabanından çekilerek ve kullannıcının yeni girdileri ile de görevlerin adım adım takip edilebilmesi gerçekleştirilir. Bu adımda pipe kullanımı gerçekleştirdim.
 
 ![](https://github.com/berfinkosemen/ionic_vardiya_takip_sistemi/blob/main/20210120_215403.gif)
 
 
 <h3>Nasıl Çalıştırılıcak</h3>
 Projeyi ionic serve yada ionic serve-l ile çalıştırabilirsiniz.
 
 
 
