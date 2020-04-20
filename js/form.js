
function tckontrol(tc) {
  var tckontrol,toplam; tckontrol = tc; tc = tc.value; toplam =
  Number(tc.substring(0,1)) + Number(tc.substring(1,2)) +
  Number(tc.substring(2,3)) + Number(tc.substring(3,4)) +
  Number(tc.substring(4,5)) + Number(tc.substring(5,6)) +
  Number(tc.substring(6,7)) + Number(tc.substring(7,8)) +
  Number(tc.substring(8,9)) + Number(tc.substring(9,10));
  strtoplam = String(toplam); onunbirlerbas = strtoplam.substring(strtoplam.length,strtoplam.length-1);


  if(onunbirlerbas == tc.substring(10,11)) {
    alert("Doğru TC Kimlik Numarası");
  } else{
    alert("Yanlış TC Kimlik Numarası");
  }
}
function isValid(frm)
{
  var bilgilerim_ad = frm.bilgilerim_ad.value;
  var bilgilerim_adres=frm.bilgilerim_adres.value;
  var bilgilerim_mail = frm.bilgilerim_mail.value;
  var atpos=bilgilerim_mail.indexOf("@");
  var dotpos=bilgilerim_mail.lastIndexOf(".");
  if ( bilgilerim_ad ==null || bilgilerim_ad =="" || bilgilerim_ad .length < 4 ){
    alert("Ad Soyad 4 karakterden az olamaz");
    return false;
}
if ( bilgilerim_adres ==null || bilgilerim_adres =="" || bilgilerim_adres .length < 1 ){
  alert("Adres Alanı Boş Geçilemez");
  return false;
}
  if ( atpos<1 || dotpos<atpos+2 || dotpos+2>=bilgilerim_mail.length )
  {
      alert("Geçerli E-mail Adresi Girin");
      return false;
  }
  else
  {
      alert("E-mail Adresi Geçerli");
      return true;
  }
}
