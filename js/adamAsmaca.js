var kelimeler = [
    { kelime: 'yazılım', ipucu: 'Program da denilen, bir bilgisayarı belirli işlevleri yerine getirmek üzere yöneten, bilgisayara ne yapacağını söyleyen, kodlanmış komutlar dizisi.' },
    { kelime: 'error', ipucu: 'Programcıların aldığı bir tür hata mesajı (İngilizce)' },
    { kelime: 'yazılımcı', ipucu: 'bilgisayarlar için özgün yazılımlar üreten kimse, yazılım uzmanı.' },
    { kelime: 'site', ipucu: 'uluslararası bilgisayar ağında sanal olarak oluşturulmuş, belli adresle ulaşılabilen, kuruluşlar ve kişilerce düzenlenmiş, bilgilendirici bilgisunar sayfaları.' },
    { kelime: 'donanım', ipucu: 'bilgisayarı oluşturan ekran, klavye, fare, disket sürücü gibi fiziksel gereç.' },
    { kelime: 'uygulama', ipucu: 'Yazılım geliştiricilerin yaptığı, bilgisayar ve telefon gibi elektronik cihazlarda çalışan programlar' },
    { kelime: 'sunucu', ipucu: '(bilgisayarda) bilgilerin yedeklendiği ana bilgisayar.' },
	  { kelime: 'html', ipucu: "Web sayfalarını oluşturmak için kullanılan standart metin işaretleme dilidir."},
    { kelime: 'bilgisayar', ipucu: 'önceden belleğine yüklenmiş bir izlenceye (yazılıma) göre komuta edilerek, çok sayıda ve karmaşık mantıksal ve aritmetiksel işlemlerden oluşan bir işi çok kısa sürede yapıp sonuçlandırabilen aygıt.' },
    { kelime: 'mühendis', ipucu: 'üniversitede belirli alanlarda öğrenim görerek diploma alanlara verilen san; örneğin kimya mühendisi, makine mühendisi gibi.' },
	  { kelime: 'teknoloji', ipucu: 'bir sanayi alanında gücü ve bilgiyi biriktirme, denetleme, işleme, iletme gibi amaçlarla oluşturulan makinelerin, araç gereçlerin, aygıtların, yöntemlerin vb. tümünü kapsayan uygulama bilgisi.' },
    { kelime: 'aı', ipucu: 'Yapay zeka kısatması (ingilizce)' },
	  { kelime: 'veri', ipucu: 'İşlenmemiş ham bilgi'},
	  { kelime: 'data', ipucu: 'İşlenmemiş ham bilgi (İngilizce)'},
];
var alfabe =["a","b","c","ç","d","e","f","g","ğ","h","ı","i","j","k","l","m","n","o","ö","p","r","s","ş","t","u","ü","v","w","x","y","z"];
var secilenArr = kelimeSec()
var secilenKelime = secilenArr[0]
var secilenIpucu = secilenArr[1]
var uzunluk = secilenKelime.length
var hataSayisi = 0;
var kelimeDizi = new Array();

function hazirla(){
	if(uzunluk > 18){
		document.getElementById('kelime').style.fontSize = 400/uzunluk
	}
	for(var i=0; i<uzunluk; i++){
		kelimeDizi.push("_")
		document.getElementById('kelime').innerHTML += "<b>" + kelimeDizi[i] + " </b>"
    }
	document.getElementById('ipucu').innerHTML += "</br>" + secilenIpucu + " </br></br>"
    adamAs()
    alfabeGoster()
	document.getElementById('uyari').innerHTML = "Başlamak için aşağıdaki harflerden birine dokun..."
}

function kelimeSec(){
	var index = Math.floor(Math.random() * kelimeler.length)
	return [kelimeler[index].kelime,kelimeler[index].ipucu]
}


function harfKonumu(harf){
	var dizi = secilenKelime.split("")
	var bulunan = new Array();
	for(var i=0; i<dizi.length; i++){
		if(dizi[i] == harf){
    		bulunan.push(i)
    	}
	}
return bulunan;
}

function varmi(harf){
    document.getElementById('kelime').innerHTML = ""
    document.getElementById(harf).innerHTML = ""
	if(harfKonumu(harf) == "" ){
        harfYok()
    }
    for(var i=0; i<uzunluk; i++){
            if(harfKonumu(harf).indexOf(i) == -1){
            	document.getElementById('kelime').innerHTML += "<b>" +kelimeDizi[i] + " </b>"
    		}
            else{
				document.getElementById('uyari').innerHTML = "Harf var "
				kelimeDizi[i] = harf;
            	document.getElementById('kelime').innerHTML += "<b>" +kelimeDizi[i] + " </b>"
				if(kelimeDizi.indexOf("_") == -1){
					document.getElementById('uyari').innerHTML="Tebrikler, Oyunu kazandınız..!"
					document.getElementById('alfabe').innerHTML=""
				}
    }
	}
}

function harfYok(){
	document.getElementById('uyari').innerHTML = "Harf yok..."
	hataSayisi = hataSayisi + 1
	if(hataSayisi == 6){
		document.getElementById('uyari').innerHTML = "Adam Asıldı!"
		// Buraya oyunu yeniden başlatma butonu koyulacak
		document.getElementById('alfabe').innerHTML = ""

		for(var i=0; i<alfabe.lengt; i++){
			document.getElementById('alfabe').innerHTML += '<p  id="' + alfabe[i] + '">' + alfabe[i] + ' </a>';
		}
	}
	adamAs()
}

function adamAs(){
	switch(hataSayisi) { // Resimleri değiştiren fonksiyon
    	case 0:
        	document.getElementById('adaminResmi').src="../../assets/adam.png"
      break;
    	case 1:
        	document.getElementById('adaminResmi').src="../../assets/adam1.png"
      break;
		  case 2:
			   document.getElementById('adaminResmi').src="../../assets/adam2.png"
		  break;
		  case 3:
			   document.getElementById('adaminResmi').src="../../assets/adam3.png"
		  break;
		  case 4:
			   document.getElementById('adaminResmi').src="../../assets/adam4.png"
		  break;
		  case 5:
			   document.getElementById('adaminResmi').src="../../assets/adam5.png"
		  break;
		  case 6:
			  document.getElementById('adaminResmi').src="../../assets/adam6.png"
		  break;
	}
}

function alfabeGoster(){ // Alfabeyi gösteren fonksiyon
	for(var i=0; i<alfabe.length; i++){
		document.getElementById('alfabe').innerHTML += '<a class="harfler" id="' + alfabe[i] + '" href="javascript:varmi(' + "'" +  alfabe[i] + "'" + ')">' + alfabe[i] + ' </a>';
    }
}
