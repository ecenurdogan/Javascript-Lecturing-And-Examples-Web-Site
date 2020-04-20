var girilen,secilen;// girdiler belirlendi
var eklenen,btnAlindi,btnSil,sonuc;//çıktılar belirlendi

function listeyeEkle()
{
    girilen=document.getElementById("txtAlinacaklar").value;

    if(girilen!="")
    {
        eklenen=document.createElement("li");// li tipinde bir nesne oluşturdu
        document.getElementById("listeAlinacaklar").appendChild(eklenen);//li appendChild olarak ekledik (eklenen eleman)
        eklenen.innerHTML=girilen;// girilende txtAlınacaklarin value değerini koy

        btnAlindi=document.createElement("img");//img nesnesi oluşturuldu
        eklenen.appendChild(btnAlindi);
        btnAlindi.setAttribute("src","../../assets/tamam.png");// tik resmini ekledik (assets klasörü içindeki resmin kaynağını ekledik attribute ile)
        btnAlindi.setAttribute("id","resimTamamla");//attribute ile id verdik

        btnAlindi.addEventListener("click",tamamla);//tıkalam olayı olduğunda o işlemi yapması sağlandı(olay dinleyici ekledik)


        btnSil=document.createElement("img");
        eklenen.appendChild(btnSil);
        btnSil.setAttribute("src","../../assets/sil.png");
        btnSil.setAttribute("id","resimSil");

        btnSil.addEventListener("click",sil);
        console.log(btnSil);

    }

    else alert("Boş bırakalamaz!");// bir şey girilmezse uyarı mesajı verir

}

function sil()
{
    secilen=event.currentTarget.parentNode;// O anda hangi eleman seçildiyse onun yapılmasını sağlayacak(li elde etmeye çalışıyoruz)
    secilen.remove();
    document.getElementById("sonuc").innerHTML="Seçiminiz silindi!";

}

function tamamla()
{
    eklenen=document.createElement("li");
    document.getElementById("listeAlinanlar").appendChild(eklenen);
    secilen=event.currentTarget.parentNode;
    secilen.childNodes[1].style.display="none";
    secilen.childNodes[2].setAttribute("onclick","sil();");
    eklenen.innerHTML=secilen.innerHTML;

    sil();
    document.getElementById("sonuc").innerHTML="Ürün Alındı!";//Ürün alındığında, alınacaklar listesinden
}
