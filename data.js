// data.js - YANSIMA MUTFAK TAM LİSTE (İLK 46 YEMEK)
const dishes = [
    { t: "Kuru Fasulye", s: "• Pirinç Pilavı<br>• Turşu<br>• Cacık", i: "2 kg kuru fasulye, 1.5 kg kuşbaşı et, 5 soğan, 6 domates, 4 yk salça, 1.5 sb sıvı yağ.", p: "Fasulyeleri süzün. Eti kavurun, soğan ve salçayı ekleyin. Fasulyeyi koyup 2-3 saat pişirin.", g: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800" },
    { t: "Etli Nohut", s: "• Bulgur Pilavı<br>• Gavurdağı Salatası<br>• Ayran", i: "2 kg nohut, 2 kg et, 6 soğan, 6 domates, 5 yk salça, 1 sb yağ.", p: "Eti kavurun, soğan, salça ve domatesi ekleyin. Nohutları ekleyip 2-2.5 saat pişirin.", g: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800" },
    { t: "Zeytinyağlı Enginar", s: "• Dereotlu Fava<br>• Yeşil Salata", i: "25 enginar, 5 limon suyu, 6 soğan, 6 havuç, 6 patates, 1.5 sb bezelye, 1.5 sb zeytinyağı.", p: "Soğanı kavurun, sebzeleri ekleyin. Enginarları dizip suyunu ve yağını koyun, yumuşayana kadar pişirin.", g: "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?w=800" },
    { t: "İskender Kebap", s: "• Yoğurt<br>• Közlenmiş Biber<br>• Şıra", i: "3.5 kg döner eti, 20 tırnak pide, 2 kg yoğurt, 700 gr tereyağı, 10 domates sosu.", p: "Pideleri doğrayın, üzerine döneri koyun. Sos ve kızgın tereyağı ile servis yapın.", g: "https://images.unsplash.com/photo-1633321702518-7feccafacdc1?w=800" },
    { t: "Tavuk Şiş", s: "• Lavaş<br>• Sumaklı Soğan<br>• Köz Patlıcan", i: "6 kg tavuk göğsü, 8 soğan, 8 biber, 1 sb zeytinyağı, yoğurt, kekik.", p: "Tavukları marine edin, şişe dizin. Izgarada veya fırında pişirin.", g: "https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?w=800" },
    { t: "Karnıyarık", s: "• Pirinç Pilavı<br>• Cacık", i: "25 patlıcan, 2 kg kıyma, 8 soğan, 8 domates, salça.", p: "Patlıcanları kızartın. Kıymalı harcı hazırlayıp doldurun ve fırınlayın.", g: "https://images.unsplash.com/photo-1590577976322-3d234ff38235?w=800" },
    { t: "Biber Dolması", s: "• Sarımsaklı Yoğurt<br>• Çoban Salata", i: "50 biber, 1.5 kg pirinç, 1.5 kg kıyma, 8 soğan, nane, dereotu.", p: "İç harcı hazırlayıp biberleri doldurun. Kısık ateşte pişirin.", g: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=800" },
    { t: "İzmir Köfte", s: "• Mevsim Salatası<br>• Piyaz", i: "2.5 kg kıyma, 3 kg patates, 5 soğan, salça, biber, domates.", p: "Köfte ve patatesleri kızartıp tepsiye dizin. Salçalı suyla fırınlayın.", g: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800" },
    { t: "Tas Kebabı", s: "• Patates Püresi<br>• Pilav", i: "3 kg et, 5 soğan, 4 diş sarımsak, salça, domates.", p: "Etleri mühürleyip soğanla kavurun. Su ekleyip yumuşayana kadar pişirin.", g: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800" },
    { t: "Hünkar Beğendi", s: "• Mercimek Çorbası<br>• Ayran", i: "3 kg et, 15 patlıcan, 1.5 lt süt, un, kaşar peyniri.", p: "Eti soteleyin. Köz patlıcanla beşamel sosu karıştırıp üzerine eti koyun.", g: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800" },
    { t: "Mantı", s: "• Patlıcan Kızartma<br>• Salata", i: "2 kg un, 1 kg kıyma, yoğurt, sarımsak, tereyağı.", p: "Hamuru açıp kapatın. Haşlayıp yoğurt ve sosla servis edin.", g: "https://images.unsplash.com/photo-1563805042-7684c849a135?w=800" },
    { t: "Lahmacun", s: "• Bol Yeşillik<br>• Ayran", i: "3 kg un, 2 kg yağlı kıyma, 1 kg soğan, domates, maydanoz.", p: "Harcı hamura yayın. Fırında yüksek ısıda pişirin.", g: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=800" },
    { t: "Zeytinyağlı Barbunya", s: "• Mısır Ekmeği<br>• Turp Salatası", i: "2.5 kg barbunya, 6 soğan, 6 havuç, zeytinyağı.", p: "Barbunyaları haşlayıp sebzelerle pişirin. Soğuk servis edin.", g: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800" },
    { t: "Taze Fasulye", s: "• Makarna<br>• Yoğurt", i: "5 kg fasulye, 6 soğan, 8 domates, zeytinyağı.", p: "Fasulyeleri soğan ve domatesle pişirin.", g: "https://images.unsplash.com/photo-1515471204-ad93e284e850?w=800" },
    { t: "Fırın Mücver", s: "• Domates Çorbası<br>• Peynir", i: "10 kabak, 8 yumurta, 3 sb un, peynir, dereotu.", p: "Karışımı tepsiye döküp 200 derecede pişirin.", g: "https://images.unsplash.com/photo-1604467732921-0c5a29f86ca6?w=800" },
    { t: "Patlıcan Musakka", s: "• Pirinç Pilavı<br>• Cacık", i: "3 kg patlıcan, 1.5 kg kıyma, soğan, salça, domates.", p: "Patlıcanları kızartın. Kıymalı sosla birleştirip fırınlayın.", g: "https://images.unsplash.com/photo-1563333333-3d234ff38235?w=800" },
    { t: "Orman Kebabı", s: "• Şehriyeli Pilav<br>• Turşu", i: "3 kg kuşbaşı et, 1 kg patates, 500 gr bezelye, 5 havuç.", p: "Et ve sebzeleri soteleyip fırın poşetinde veya tencerede pişirin.", g: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800" },
    { t: "Kadınbudu Köfte", s: "• Patates Püresi<br>• Piyaz", i: "2.5 kg kıyma, 2 sb pirinç, 6 yumurta, un.", p: "Pirinci haşlayın, kıymayla yoğurup önce una sonra yumurtaya bulayıp kızartın.", g: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800" },
    { t: "Zeytinyağlı Yaprak Sarma", s: "• Yoğurt<br>• Limon Dilimleri", i: "1 kg asma yaprağı, 1.5 kg pirinç, bol soğan, zeytinyağı, kuş üzümü.", p: "İç harcı hazırlayıp sarmaları sarın. Limonla pişirin.", g: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=800" },
    { t: "Tavuk Sote", s: "• Bulgur Pilavı<br>• Mevsim Salata", i: "5 kg tavuk göğsü, 1 kg mantar, 6 biber, 4 domates.", p: "Tavukları sebzelerle soteleyip pişirin.", g: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800" },
    { t: "Etli Bamya", s: "• Pirinç Pilavı<br>• Turşu", i: "3 kg bamya, 1.5 kg et, 5 limon, salça.", p: "Bamyaları temizleyip et ve limonla salçalı suda pişirin.", g: "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?w=800" },
    { t: "Domatesli Makarna", s: "• Yoğurt<br>• Köfte", i: "2 kg makarna, 1 kg domates, sarımsak, tereyağı.", p: "Makarnayı haşlayın, sarımsaklı domates sosuyla karıştırın.", g: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800" },
    { t: "Kıymalı Ispanak", s: "• Sarımsaklı Yoğurt<br>• Domatesli Pilav", i: "4 kg ıspanak, 1 kg kıyma, soğan, pirinç.", p: "Kıymayı kavurup ıspanakları ekleyin, az pirinçle pişirin.", g: "https://images.unsplash.com/photo-1515471204-ad93e284e850?w=800" },
    { t: "Kabak Tatlısı", s: "• Tahin<br>• Ceviz İçi", i: "5 kg bal kabağı, 2 kg şeker, karanfil.", p: "Kabakları şekerle bekletip kendi suyunda pişirin.", g: "https://images.unsplash.com/photo-1506084868730-342b1f8505b0?w=800" },
    { t: "Mercimek Çorbası", s: "• Kıtır Ekmek<br>• Limon", i: "1.5 kg kırmızı mercimek, soğan, havuç, patates.", p: "Sebzeleri haşlayıp blenderdan geçirin, üzerine yağ yakın.", g: "https://images.unsplash.com/photo-1547592115-859fb8f2b3be?w=800" },
    { t: "Sebzeli Graten", s: "• Izgara Tavuk<br>• Ayran", i: "2 kg karışık sebze, 1 lt süt, un, kaşar peyniri.", p: "Sebzeleri haşlayın, beşamel sos ve kaşarla fırınlayın.", g: "https://images.unsplash.com/photo-1604467732921-0c5a29f86ca6?w=800" },
    { t: "Ali Nazik", s: "• Pilav<br>• Közlenmiş Biber", i: "3 kg et, 15 patlıcan, süzme yoğurt, sarımsak.", p: "Köz patlıcanı yoğurtla karıştırın, üzerine kavrulmuş etleri ekleyin.", g: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800" },
    { t: "Türlü", s: "• Bulgur Pilavı<br>• Cacık", i: "2 kg karışık sebze, 1 kg et, soğan, salça.", p: "Tüm sebzeleri ve eti tencerede pişirin.", g: "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?w=800" },
    { t: "Kıymalı Bezelye", s: "• Pirinç Pilavı<br>• Salata", i: "3 kg bezelye, 1 kg kıyma, havuç, patates.", p: "Kıymayı kavurup sebzelerle beraber pişirin.", g: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800" },
    { t: "Şehriyeli Pirinç Pilavı", s: "• Tüm Yemekler İçin Uygundur", i: "2 kg pirinç, 2 sb tel şehriye, tereyağı, tavuk suyu.", p: "Şehriyeleri kavurun, pirinçle beraber pişirin.", g: "https://images.unsplash.com/photo-1512058560366-cd2427ff56f3?w=800" },
    { t: "Bulgur Pilavı", s: "• Etli Yemekler<br>• Ayran", i: "2 kg pilavlık bulgur, soğan, salça, domates.", p: "Soğan ve salçayı kavurup bulguru ekleyerek pişirin.", g: "https://images.unsplash.com/photo-1512058560366-cd2427ff56f3?w=800" },
    { t: "Domates Çorbası", s: "• Rendelenmiş Kaşar<br>• Kıtır Ekmek", i: "3 kg domates, 1 lt süt, un, tereyağı.", p: "Domatesleri közleyin veya rendeleyin, unlu meyane ile pişirin.", g: "https://images.unsplash.com/photo-1547592115-859fb8f2b3be?w=800" },
    { t: "Piyaz", s: "• Köfte<br>• Izgara Et", i: "2 kg kuru fasulye, soğan, maydanoz, tahin veya sirke.", p: "Fasulyeleri haşlayıp diğer malzemelerle karıştırın.", g: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800" },
    { t: "Yoğurtlu Semizotu", s: "• Mezeler<br>• Izgara Tavuk", i: "3 demet semizotu, 2 kg yoğurt, sarımsak, zeytinyağı.", p: "Semizotunu sarımsaklı yoğurtla karıştırın.", g: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800" },
    { t: "Köz Patlıcan Salatası", s: "• Kebaplar<br>• Et Yemekleri", i: "10 patlıcan, 5 biber, sarımsak, sirke.", p: "Sebzeleri közleyip doğrayın, sosla karıştırın.", g: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800" },
    { t: "Cacık", s: "• Kuru Fasulye<br>• Pilavlar", i: "3 kg yoğurt, 10 salatalık, nane, dereotu.", p: "Yoğurdu sulandırıp rendelenmiş salatalıkla karıştırın.", g: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800" },
    { t: "Revani", s: "• Dondurma<br>• Çay", i: "10 yumurta, 2 sb irmik, un, şerbet.", p: "Keki pişirip soğuk şerbeti dökün.", g: "https://images.unsplash.com/photo-1506084868730-342b1f8505b0?w=800" },
    { t: "Sütlaç", s: "• Fındık İçi<br>• Tarçın", i: "5 lt süt, 2 sb pirinç, 3 sb şeker, nişasta.", p: "Sütü şeker ve haşlanmış pirinçle pişirip fırınlayın.", g: "https://images.unsplash.com/photo-1506084868730-342b1f8505b0?w=800" },
    { t: "İrmik Helvası", s: "• Dondurma", i: "2 kg irmik, 1 kg tereyağı, şeker, süt.", p: "İrmiği tereyağında kavurup sütlü şerbetini ekleyin.", g: "https://images.unsplash.com/photo-1506084868730-342b1f8505b0?w=800" },
    { t: "Menemen", s: "• Beyaz Peynir<br>• Çay", i: "20 yumurta, 10 domates, 10 biber.", p: "Biber ve domatesi soteleyip yumurtaları ekleyin.", g: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=800" },
    { t: "Fırın Makarna", s: "• Mevsim Salata", i: "2 kg kalın makarna, peynir, süt, un.", p: "Makarnayı haşlayıp beşamel sosla fırınlayın.", g: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800" },
    { t: "Tavuklu Pilav", s: "• Turşu<br>• Ayran", i: "3 kg tavuk, 2 kg pirinç, karabiber.", p: "Tavukları haşlayıp didikleyin, pilavın üzerine koyun.", g: "https://images.unsplash.com/photo-1512058560366-cd2427ff56f3?w=800" },
    { t: "Zeytinyağlı Kızartmalar", s: "• Domates Sosu<br>• Yoğurt", i: "5 kg kabak/patlıcan, un, zeytinyağı.", p: "Sebzeleri unlayıp kızartın, sos ekleyin.", g: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800" },
    { t: "Patates Salatası", s: "• Çay Saati", i: "5 kg patates, taze soğan, maydanoz, limon.", p: "Haşlanmış patatesleri doğrayıp sosla karıştırın.", g: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800" },
    { t: "Mercimek Köftesi", s: "• Marul<br>• Turşu", i: "1 kg kırmızı mercimek, 1.5 kg ince bulgur, salça, soğan.", p: "Mercimeği haşlayıp bulgurla demlendirin, harcı yoğurun.", g: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800" },
    { t: "Et Sote", s: "• Pirinç Pilavı<br>• Mevsim Salata", i: "3 kg dana kuşbaşı, biber, domates, soğan.", p: "Etleri sebzelerle yüksek ateşte soteleyin.", g: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800" }
    { 
        t: "Dondurucuda İnegöl Köfte", 
        s: "• Salçalı Bulgur Pilavı<br>• Gavurdağı Salatası<br>• Acı Süs Biberi Turşusu", 
        i: "2.5 kg kıyma (dana-kuzu karışık), 3 soğan suyu, 3 yk karbonat, 3 yk tuz, dondurucudan çıkarılmış hazır köfteler.", 
        p: "Dondurucudan çıkan köfteleri çözdürmeden döküm tavada orta ateşte çevirerek pişirin. İçi sulu kalsın.", 
        g: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800" 
    },
    { 
        t: "Lokanta Usulü Tavuk Haşlama", 
        s: "• Şehriyeli Pirinç Pilavı<br>• Karışık Mevsim Salatası<br>• Sirkeli Sarımsaklı Sos", 
        i: "5 kg tavuk but (parçalanmış), 10 patates, 10 havuç, 15 arpacık soğan, limonlu unlu terbiye.", 
        p: "Tavukları mühürleyin, sebzeleri ekleyin. Suyla pişmeye yakın un, limon ve yumurta sarısı ile hazırlanan terbiyeyi ekleyin.", 
        g: "https://images.unsplash.com/photo-1547592115-859fb8f2b3be?w=800" 
    },
    { 
        t: "Lokanta Usulü Beyti Kebabı", 
        s: "• Sarımsaklı Süzme Yoğurt<br>• Közlenmiş Domates ve Biber<br>• Sumaklı Soğan Salatası", 
        i: "3 kg kıyma (kebaplık), hazır yufka, tereyağı, domates sosu, sarımsak.", 
        p: "Köfteleri pişirin, yufkaya sarıp dilimleyin. Üzerine domates sosu ve kızgın tereyağı gezdirip yoğurtla servis edin.", 
        g: "https://images.unsplash.com/photo-1633321702518-7feccafacdc1?w=800" 
    },
    { 
        t: "Güveçte Kuşbaşılı Et", 
        s: "• Sade Pirinç Pilavı<br>• Çoban Salata<br>• Ev Yapımı Ayran", 
        i: "3 kg dana kuşbaşı, 10 arpacık soğan, 10 diş sarımsak, 5 kapya biber, tereyağı.", 
        p: "Etleri sebzelerle birlikte güvece doldurun. Üzerine tereyağı koyup ağzını kapatın, fırında 2.5 saat ağır ağır pişirin.", 
        g: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800" 
    },
    { 
        t: "Tavuk Döner", 
        s: "• Patates Kızartması<br>• Lavaş Ekmeği<br>• İnce Kıyım Lahana Salatası", 
        i: "6 kg tavuk but (ince dilimlenmiş), yoğurt, salça, bol kekik ve pul biber marinasyonu.", 
        p: "Marine edilen tavukları sıkıca rulo yapıp dondurun. İncecik dilimleyip yüksek ateşte sacda veya tavada kızartın.", 
        g: "https://images.unsplash.com/photo-1524338198832-7a9c18bd313c?w=800" 
    },
    { 
        t: "Fırında Kuzu Kol", 
        s: "• İç Pilav (Ciğerli Kuş Üzümlü)<br>• Ezme Salatası<br>• Közlenmiş Patlıcan", 
        i: "2 adet kuzu kol (bütün), 10 diş sarımsak, taze biberiye, zeytinyağı, tane karabiber.", 
        p: "Kuzu kolu sarımsak ve biberiye ile mühürleyin. Yağlı kağıda sarıp fırında 160 derecede 4 saat lokum gibi pişirin.", 
        g: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=800" 
    },
    { 
        t: "Belen Tava", 
        s: "• Tırnak Pidesi<br>• Mevsim Salatası<br>• Acılı Şalgam Suyu", 
        i: "3 kg kuzu kuşbaşı, bol sarımsak, kapya biber, domates, kuyruk yağı, kekik.", 
        p: "Tüm malzemeyi bir tepside harmanlayın, üzerine tereyağı parçaları atıp fırında suyunu salıp çekene kadar pişirin.", 
        g: "https://images.unsplash.com/photo-1590577976322-3d234ff38235?w=800" 
    },
    { 
        t: "Köfteli Hünkar Beğendi", 
        s: "• Şehriye Çorbası<br>• Akdeniz Salatası<br>• Portakallı İrmik Helvası", 
        i: "2 kg köftelik kıyma, 15 patlıcan, süzme yoğurt, beşamel sos malzemeleri.", 
        p: "Patlıcanları közleyip beğendi yapın. Üzerine kızarmış lokum köfteleri domates sosuyla ekleyin.", 
        g: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800" 
    },
    { 
        t: "Sandal Köfte", 
        s: "• Mısırlı Pirinç Pilavı<br>• Mevsim Salatası<br>• Patates Püresi", 
        i: "2.5 kg kıyma, iç malzemesi için bezelye, havuç, mısır, üzerine kaşar peyniri.", 
        p: "Köftelere sandal şekli verip fırınlayın. İçine sebzeli harcı ve üzerine kaşarı koyup tekrar fırına verin.", 
        g: "https://images.unsplash.com/photo-1563805042-7684c849a135?w=800" 
    }
{ 
        t: "Lokanta Usulü İzmir Köfte", 
        s: "• Tereyağlı Şehriye Çorbası<br>• Mevsim Salatası<br>• Buz Gibi Cacık", 
        i: "2.5 kg kıyma, 3 kg patates, 10 adet yeşil biber, 6 domates, salçalı özel sos, galeta unu, bol maydanoz.", 
        p: "Köfteleri ve patatesleri hafifçe kızartın. Tepsiye bir köfte bir patates dizin. Üzerine salçalı, sarımsaklı suyu döküp fırında 30-40 dk pişirin.", 
        g: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800" 
    },
    { 
        t: "Lokanta Usulü Kavurma", 
        s: "• Sade Pirinç Pilavı<br>• Kuru Soğan Salatası (Sumaklı)<br>• Köpüklü Ayran", 
        i: "4 kg dana tranç veya kuzu but, 500 gr iç yağı veya kuyruk yağı, tuz, tane karabiber.", 
        p: "İç yağını eritip kıkırdakları alın. Etleri ekleyip yüksek ateşte mühürleyin. Kendi suyunda, kısık ateşte etler lokum gibi olana dek 2-3 saat pişirin.", 
        g: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800" 
    },
    { 
        t: "Hazır Yufka İle Soslu Börek", 
        s: "• Domatesli Şehriye Çorbası<br>• Zeytinli Akdeniz Salatası<br>• Tavşan Kanı Çay", 
        i: "15 adet hazır yufka, 1.5 kg lor veya beyaz peynir, sosu için: 1 lt süt, 3 yumurta, 1.5 sb sıvı yağ, 1 şişe soda.", 
        p: "Yufkaları soslayıp tepsiye dizin, arasına peyniri koyun. En üste kalan sosu döküp soda gezdirin. 180 derece fırında nar gibi kızarana kadar pişirin.", 
        g: "https://images.unsplash.com/photo-1608483129917-c70014b91501?w=800" 
    },
    { 
        t: "Patlıcanlı Gözleme", 
        s: "• Çoban Salata<br>• Karışık Turşu<br>• Ev Yapımı Ayran", 
        i: "20 adet hazır yufka veya el açması hamur, 3 kg patlıcan (közlenmiş veya sote), 1 kg soğan, salça, pul biber.", 
        p: "Patlıcanları soğan ve salça ile soteleyip soğutun. Yufkanın içine koyup kapatın. Sacda veya teflon tavada tereyağı sürerek pişirin.", 
        g: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=800" 
    },
    { 
        t: "Mayasız Gözleme", 
        s: "• Domates & Salatalık Söğüş<br>• Beyaz Peynir ve Zeytin<br>• Taze Demlenmiş Çay", 
        i: "3 kg un, su, tuz (iç harcı için peynirli veya patatesli isteğe bağlı).", 
        p: "Un, su ve tuzla yumuşak bir hamur yoğurup dinlendirin. Bezeleri ince açıp iç harcı ekleyin ve sacda pişirip yağlayın.", 
        g: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=800" 
    },
    { 
        t: "Şehriyeli Sulu Köfte", 
        s: "• Mevsim Salatası<br>• Karışık Turşu<br>• Vişne Kompostosu", 
        i: "2 kg kıyma, 2 sb pirinç veya ince bulgur, 5 patates, 3 havuç, 1.5 sb arpa şehriye, terbiyesi için limon ve yumurta sarısı.", 
        p: "Köfteleri yuvarlayıp unlayın. Kaynayan sebzeli suya şehriyeleri ve köfteleri ekleyin. Pişmeye yakın terbiyesini verip bir taşım kaynatın.", 
        g: "https://images.unsplash.com/photo-1547592115-859fb8f2b3be?w=800" 
    },
    { 
        t: "Fırında Köfte Patates", 
        s: "• Domatesli Şehriyeli Bulgur Pilavı<br>• Cacık<br>• Mevsim Salatası", 
        i: "2.5 kg kıyma, 4 kg patates, 10 adet sivri biber, 6 domates, salçalı su.", 
        p: "Köfteleri hazırlayıp patateslerle birlikte fırın tepsisine dizin. Üzerine salçalı ve kekikli su döküp 200 derecede pişirin.", 
        g: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800" 
    },
    { 
        t: "Soslu Köfte", 
        s: "• Sade Pirinç Pilavı<br>• Havuç Tarator<br>• Naneli Ayran", 
        i: "2.5 kg kıyma, bol sarımsaklı domates sosu, 1 kg kapya biber, kekik, fesleğen.", 
        p: "Köfteleri kızartın. Ayrı bir yerde bol domates ve sarımsakla yoğun bir sos hazırlayın. Köfteleri sosla buluşturup fırında 10 dk daha pişirin.", 
        g: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800" 
    },
    { 
        t: "Domates Soslu Köfte", 
        s: "• Spagetti Makarna<br>• Mevsim Salatası<br>• Limonata", 
        i: "2 kg kıyma, 2 kg olgun domates (rendelenmiş), 5 diş sarımsak, tereyağı.", 
        p: "Köfteleri yuvarlayıp pişirin. Rendelenmiş domatesleri sarımsakla pişirip sos yapın. Köfteleri içine atıp 5 dk çektirin.", 
        g: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800" 
    }
];

