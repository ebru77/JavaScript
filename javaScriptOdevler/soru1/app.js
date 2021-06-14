/*Soru-1: Girilen not değerine karşılık gelen harfli notu bildiren programı yazınız.
• 0-25 arası not karşılığı FF olmalı,
26-45 arası DD, 
46-65 arası CC, 
66- 75 arası BB, 
76-90 arası BA, 
91-100 arası AA olarak çevrilmelidir.
• 100’den büyük veya 0‘dan küçük değerlerde hata mesajı verecektir. */


let harfNotu = "";
const not = Number(prompt("Notunuzu giriniz :"));
if (not>=0 && not<=25) {
 console.log("FF");
 }else if(not>25 && not<=45){
  console.log("DD");
 }else if(not>45 && not<=65){
  console.log("CC");
 }else if(not>65 && not<=75){
  console.log("BB");
 }else if (not>75 && not<=90){
  console.log("BA");
 }else if (not>90 && not<=100){
  console.log("AA");
 }else{
  alert("yanlis sayi girdiniz")
 }
 

 

