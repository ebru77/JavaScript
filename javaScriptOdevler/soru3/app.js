// soru 3 farkli 3 tam sayinin toplamini,carpimini,en buyugunu ve en kucugunu yazdirin

alert("lutfen 3 tam sayi giriniz");
const sayi1 = Number(prompt("1. sayiyi giriniz"));
const sayi2 = Number(prompt("2. sayiyi giriniz"));
const sayi3 = Number(prompt("3. sayiyi giriniz"));
const islem = prompt("islemi giriniz");
let sonuc = 0;
if (islem=="+") {
 sonuc = sayi1+sayi2+sayi3;
 }else if (islem=="*"){
  sonuc = sayi1*sayi2*sayi3;
 }else{
alert("Yanlis islem girdiniz")
 }
 console.log(sonuc);
 //=======================================

 if (sayi1>sayi2 && sayi1>sayi3) {
  console.log("sayi1 en buyuk sayi"); 
 }else if (sayi2>sayi1 && sayi2>sayi3){
  console.log("sayi2 en buyuk sayi");
 }else{
  console.log("sayi3 en buyuk sayi");
 }
 console.log(sonuc);
 //======================================

 if (sayi1<sayi2 && sayi1<sayi3) {
  console.log("sayi1 en kucuk sayi"); 
 }else if (sayi2<sayi1 && sayi2<sayi3){
  console.log("sayi2 en kucuk sayi");
 }else{
  console.log("sayi3 en kucuk sayi");
 }
 console.log(sonuc);


 
 