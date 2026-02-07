// data.js
const allMenus = [
    { 
        t: "Kuru Fasulye", 
        s: "• Pirinç Pilavı<br>• Karışık Turşu<br>• Buz Gibi Cacık", 
        i: "2 kg kuru fasulye (ıslatılmış), 1–1.5 kg kuşbaşı et, 5 büyük soğan, 6–8 domates, 4 yk domates salçası, 2 yk biber salçası, 1.5 su bardağı sıvı yağ.", 
        p: "Soğanı ve eti kavurun, salçaları ekleyin. Fasulyeleri ekleyip sıcak suyla 2–3 saat (düdüklüde 45-60 dk) pişirin.", 
        g: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800" 
    },
    { 
        t: "Etli Nohut", 
        s: "• Şehriyeli Bulgur Pilavı<br>• Gavurdağı Salatası<br>• Ayran", 
        i: "2 kg nohut (ıslatılmış), 1.5–2 kg kuşbaşı et, 6 büyük soğan, 8 domates, 5 yk salça, 1 su bardağı sıvı yağ, kimyon.", 
        p: "Eti mühürleyin, soğan ve salçayı kavurun. Nohutları ekleyip 2–2.5 saat pişirin.", 
        g: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800" 
    },
    { 
        t: "Zeytinyağlı Enginar", 
        s: "• Dereotlu Fava<br>• Yeşil Mevsim Salatası<br>• Portakal Suyu", 
        i: "25 enginar, 6 havuç, 6 patates, 1.5 sb bezelye, 1.5 sb zeytinyağı, limon suyu, dereotu.", 
        p: "Sebzeleri soteleyin, enginarların içine doldurun. Limonlu suda 40–50 dk pişirin. Soğuk servis edin.", 
        g: "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?w=800" 
    },
    { 
        t: "İskender Kebap", 
        s: "• Süzme Yoğurt<br>• Közlenmiş Biber ve Domates<br>• Şıra", 
        i: "3.5 kg döner eti, 20 adet tırnak pide, 2 kg yoğurt, 700 gr tereyağı, 10 domates (sos için).", 
        p: "Pideleri ısıtıp doğrayın. Üzerine kızarmış döneri koyun. Domates sosu ve kızgın tereyağı gezdirin.", 
        g: "https://images.unsplash.com/photo-1633321702518-7feccafacdc1?w=800" 
    },
    { 
        t: "Tavuk Şiş", 
        s: "• Lavaş Ekmeği<br>• Sumaklı Soğan Salatası<br>• Közlenmiş Patlıcan", 
        i: "6 kg tavuk göğsü, 8 soğan, 8 biber, 1 sb zeytinyağı, yoğurt, kekik, pul biber.", 
        p: "Tavukları marine edin (4-6 saat). Sebzelerle şişe dizip ızgarada veya 200 derece fırında 30 dk pişirin.", 
        g: "https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?w=800" 
    },
    { 
        t: "Karnıyarık", 
        s: "• Şehriyeli Pirinç Pilavı<br>• Cacık<br>• Çoban Salata", 
        i: "25 adet patlıcan, 2 kg kıyma, 8 soğan, 8 domates, salça, maydanoz.", 
        p: "Patlıcanları kızartın. Kıymalı harcı hazırlayıp içine doldurun. Fırında 30-40 dk pişirin.", 
        g: "https://images.unsplash.com/photo-1590577976322-3d234ff38235?w=800" 
    },
    { 
        t: "Biber Dolması", 
        s: "• Sarımsaklı Yoğurt<br>• Domatesli Makarna<br>• Mevsim Salatası", 
        i: "50 adet dolmalık biber, 1.5 kg pirinç, 1.5 kg kıyma, 8 soğan, nane, dereotu.", 
        p: "İç harcı hazırlayıp biberleri doldurun. Tencereye dizip kısık ateşte 50 dk pişirin.", 
        g: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=800" 
    },
    { 
        t: "Hünkar Beğendi", 
        s: "• Domates Çorbası<br>• Gavurdağı Salatası<br>• Revani", 
        i: "3 kg kuzu eti, 12 patlıcan, 1.5 lt süt, 300 gr kaşar peyniri, tereyağı, un.", 
        p: "Eti kavurup pişirin. Patlıcanları közleyip beşamel sos ve kaşarla püre yapın. Üzerine eti koyun.", 
        g: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800" 
    },
    { 
        t: "Zeytinyağlı Barbunya", 
        s: "• Mısır Ekmeği<br>• Turp Salatası<br>• Üzüm Hoşafı", 
        i: "2.5 kg barbunya, 6 soğan, 6 domates, zeytinyağı, şeker, tuz.", 
        p: "Barbunyaları haşlayın. Soğan ve salçayı kavurup barbunyalarla birleştirin. 45 dk pişirin.", 
        g: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800" 
    },
    { 
        t: "Kayseri Mantısı", 
        s: "• Soslu Patlıcan Kızartma<br>• İnce Kıyım Salata<br>• Ev Yapımı Limonata", 
        i: "2 kg un, 1 kg kıyma, 500 gr yoğurt, tereyağı, sarımsak, sumak.", 
        p: "Hamuru açıp çok küçük kareler kesin. Kıymalı harcı koyup kapatın. Haşlayıp yoğurt ve sosla servis edin.", 
        g: "https://images.unsplash.com/photo-1563805042-7684c849a135?w=800" 
    }
    // ... Devamı senin listene göre 167'ye kadar gidebilir
];
