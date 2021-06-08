/*const yas =18;
let sonuc;
if (yas<3) {
sonuc = "bebek";
}else if (yas<13){
sonuc = "cocuk"
}else if (yas<18){
 sonuc ="ergen"
}else {
 sonuc = "yetiskin"
}
console.log(sonuc); yetiskin yazdirir*/

const s1 = Number(prompt("Birinci sayi :"));
const islem = prompt("islemi giriniz");
const s2 = Number(prompt("Ikinci sayi :"));
let sonuc1 =0;
if(islem=="+"){
 sonuc1=s1+s2;
}else if(islem=="-"){
 sonuc1=s1-s2;
}else if(islem=="*"){
 sonuc1=s1*s2;
}else if(islem=="/"){
 sonuc1=s1/s2;
}else{
 alert("yanlis islem yaptiniz")
}
console.log(`${s1}${islem}${s2} = ${sonuc1}`);

const age = prompt("yasinizi giriniz");
const healt = prompt("saglikli misiniz e/h");
alert(age>18 && healt=="e" ? "Askere gidebilir" : "Askere gidemez")