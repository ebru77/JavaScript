console.log("Hello Javascript");
// alert("dikkat");
console.log("javascript javadan daha kolay bir dildir");
console.error("bu bir hatadir");
console.warn("bu bir uyaridir");

// **=========DEGISKEN TANIMLAMA========**
// var keyword'uyle degisken tanimlanabilir.Ancak 
// modern JS de var keyword'unun kullanimi azaldi.cunku
// var globaldegisken gibi gozukuyor
 var pi = 3.14;
 console.log(pi);
 console.log(typeof pi);

 pi = "3";
 console.log(pi);
 console.log(typeof pi);

 pi = true;
 console.log(pi);
 console.log(typeof pi);

isim = 4;
console.log(isim);
console.log(typeof isim);

//**=================CONST================ */

// ? const ve let yeni degisken tanimlama keywordleridir.
// ! CONST:Sadece baslangicta deger atilabilir(non-primitiveler haric)
// ! Sonradan degeri degistirilemez

//const piSayisi = 3.14;
//console.log(piSayisi);

// app.js:34 Uncaught TypeError: Assignment to constant variable.
// constant degiskene atama yapilmis(hatanin anlami)
//piSayisi = 3;
//console.log(piSayisi);

//**===========LET==================== */

//Eger ki degiskenimizin degerinin degismesi gerekiyorsa const kullanamayiz
//Bunun yerine Let kullanabiliriz. LET Block-scope bir tanimlamadir.sadece 
//tanimli oldugu alanda gecerlidir

let fiyat;
console.log(fiyat);
fiyat = 5.5;
console.log(fiyat);
console.log(typeof fiyat);

let isim1 = "Ahmet";// String
let isim2 = 'Feyza';// String
let isim3 = `Esra`;// String (Backtick)

const dil = null;
console.log(dil);
console.log(typeof dil);

const sucuk =40; 
const sakiz =2;
const kola =5;
//const toplamfiyat = sucuk+sakiz+kola;
//toplamfiyat++ CONST ta deger degistiremezsin
let toplamfiyat = sucuk+sakiz+kola
toplamfiyat++;
toplamfiyat+=50;
console.log(toplamfiyat);

//birden fazla degiskenin degerini yazdirmak icin virgul kullanilir
console.log(toplamfiyat,kola);//98 5
console.log("TOPLAM :",toplamfiyat);//TOPLAM : 98

// + operatoru string islemleri birlestirmek icin de kullanilir
const ad = "Can";
const soyad = " Canan";
console.log(ad+soyad);

const s1=7 , s2="7";
console.log(s1+s2);

//Template Literal(String sablonlari, ES6 ile gelmistir)

const ad1="Mesut";
const yas=55;
console.log("Benim adim:"+ad1+" " +"Yasim:"+yas+"'dir");//1.yol classic(Benim adim:Mesut Yasim:55'dir)
console.log(`Benim adim ${ad1} yasim ${yas}'dir`);//2. yol(Benim adim Mesut yasim 55'dir)


const yil = 2021;
const dogumTarihi = 1980;
const yas1 = yil-dogumTarihi;
console.log("YAS:"+yas1);//YAS:41
//console.log("YAS:"+yil-dogumTarihi);//Hata verir-->NaN(Not a number)
console.log(`YAS: ${yil-dogumTarihi}`);//YAS:41 Template Literal ile yazdirma

const taban = 2;
const us = 8;
const sonuc = taban**us;
console.log(sonuc);

const sayi = 123;
console.log("Birler basamagi:" + sayi%10);
const birler = sayi%10;
const onlar = Math.floor(sayi/10)%10;
const yuzler = Math.floor(sayi/100);
console.log("Birler:"+birler);
console.log("Onlar:"+onlar);
console.log("Yuzler:"+yuzler);

//**=========KARSILASTIRMA OPERATORLERI========= */

const sayi1 = 100;
const sayi2 = "100";
console.log(typeof sayi1,typeof sayi2);
console.log(sayi1==sayi2);//true
console.log(sayi1===sayi2);//false

const x = true;
const y = true;
const z = undefined;
console.log(x && y && z);//undefined

// **============TERNARY================= */
// const age = +prompt("Yasinizi giriniz:");
const age = Number(prompt("Yasinizi giriniz:"));
const name1 = prompt("Adinizi giriniz")
console.log("Yasiniz:"+age);
console.log(typeof age);
age >=18 ? console.log(`${name1} ehliyet alabilir`):console.log(`${name1} ehliyet alamaz`);

const result = age>=18 ? `${name1} ehliyet alabilir`:`${name1} ehliyet alamaz`;
console.log(result);

const sayi4 = 52;
console.log(String(sayi4),sayi);


