//1dan mingacha bulgan sonlar yig'indisini
//toq sonlar yig'indisini
//juft sonlar yig'indisini
// toq sonlar sonini
// juft sonlar sonini topish

let juft = 0;
let toq = 0;
function findnumber(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      juft = juft + i;
    } else {
      toq += i;
    }
  }
}
findnumber(1000);
console.log(juft);
console.log(toq);
let result = juft + toq;
console.log(result);
//   1000 gacha toq sonlar chiqarish;
//function toq (son) {
//for (i = 1; i <= son; i++) {
//  if (i % 2 == 1) {
//   console.log(i);
// }
//}
//}
//toq (1000);
// 1000 gacha juft sonlar chiqarish;
// function juft (son) {
//     for (i = 1; i <= son; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         }
//     }
// }
// juft (1000)

//  1000 gacha 3 bo'linadigan sonlar chiqarish;
// function uch(num) {
//     for (i = 1; i <= num; i++) {
//         if (i % 3 == 0) {
//             console.log(i);
//         }
//     }
// }
// uch(1000);

// 2 ta sonni funksiya orqali ayirish;
// let num1 = Number(prompt("birinchi sonni kiriting"));
// let num2 = Number(prompt("ikkinchi sonni kiriting"));
// function ayirish (num1, num2) {
//     return num1 - num2;
// }
// let natija = ayirish(num1, num2);
// console.log(natija);

// 2 ta sonni funksiya orqali bo'lish;
// let num1 = Number(prompt("birinchi sonni kiriting"));
// let num2 = Number(prompt("ikkinchi sonni kiriting"));
// function bulish(num1, num2) {
//     return num1 / num2;
// }
// natija = bulish(num1,num2);
// console.log(natija);

// 2 ta sonni funksiya orqali ko'paytirish;
// let num1 = Number(prompt("birinchi sonni kiriting"))
// let num2 = Number(prompt("ikkinchi sonni kiriting"))
// function kopaytirish(num1, num2) {
//     return num1 * num2;
// }
// let natija = kupaytirish(num1, num2);
// console.log(natija);

// sonning darajasini topish funksiyasi;
//let son = Number(prompt("sonni kiriting"));
//let darajasi = Number(prompt("darajani kiriting"));
//function amal(son, darajasi) {
//return son ** darajasi;
//}
//let natija = (son, darajasi);
//console.log(natija);
