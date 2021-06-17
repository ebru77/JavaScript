//Soru4: Girilen sayıların tek veya çift olduğunu bildiren programı tasarla. (Ternary
//deyimi ile yapınız)
//const number = prompt("lutfen tam sayi giriniz");
//const result = number%2==0 ? "even":"odd";
//console.log(result);
//==========================================
//Soru-5: Girilen dereceyi fahrenayta veya fahrenaytı dereceye çeviren programı
//tasarla.Çevirimin hangi birimden hangi birime olacağı program başında sorulmalıdır.

let FC=prompt("lutfen derece turunu  giriniz ");
let temp=prompt("lutfen sicakligi giriniz");
if(FC=="C"){
temp=temp*9/5+32;

}else if(FC=="F"){
    temp=(temp-32)*5/9;
}else{
    
}
console.log(temp);

