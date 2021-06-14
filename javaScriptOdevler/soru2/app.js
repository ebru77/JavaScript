/*Soru-2: Girilen ay ismine karşılık gelen sıra numarası veren programı switch-case yapısı kullanarak yazınız.*/

const monthName = prompt("Type the month ");
switch (monthName) {
 case "January":
  monthNo = 1;
  break;
  case "Febuary":
  monthNo = 2;
  break;
  case "March":
  monthNo = 3;
  break;
  case "April":
  monthNo = 4;
  break;
  case "May":
  monthNo = 5;
  break;
  case "June":
  monthNo = 6;
  break;
  case "July":
  monthNo = 7;
  break;
  case "August":
  monthNo = 8;
  break;
  case "September":
  monthNo = 9;
  break;
  case "October":
  monthNo = 10;
  break;
  case "November":
  monthNo = 11;
  break;
  case "December":
  monthNo = 12;
  break;
default:
 break;
}
console.log(monthNo);