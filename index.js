// function calculateSum(n) {
//     let S = 0;

//     for (let i = 1; i <= n; i++) {
//         S += 1 / i;
//     }

//     return S;
// }

// let n = 5; 
// let result = calculateSum(n);

// console.log("Yig'indi (S) =", result);
 
//  function Teskari (n){
//     let kopaytma = 1
//     for (let i = n; i > 0; i--){
//         console.log(i)
//     }
//  }

//  let b = Teskari(10)


// function kopaytirish(n) {

//     let natija = 1;

//     for (let i = 1; i <= n; i++) {
//         natija *= i;
//     }

//     return natija;
// }
// console.log(kopaytirish(5));


// ---------------------------------------  homework  -----------------------------------//


// ---------------------------------------  1-MASALA  -----------------------------------//

// function uchDaraja(son) {
//     let daraja = Math.pow(son, 3);
//     return daraja;
// }
// son = parseFloat(5);
// let natija = uchDaraja(son);
// console.log(`${natija}`);



// ---------------------------------------  2-MASALA  -----------------------------------//

// function yigindi(a, b) {
//     let natija = a + b;
//     return natija;
// }
// let a = prompt("a ni kiriting:");
// let b = prompt("b ni kiriting:");
// a = parseFloat(a);
// b = parseFloat(b);
// let jami = yigindi(a, b);

// console.log(`${jami}`);



// ---------------------------------------  3-MASALA  -----------------------------------//

// function yigindi(a, b) {
//     let natija = a - b;
//     return natija;
// }
// let a = prompt("a ni kiriting:");
// let b = prompt("b ni kiriting:");
// a = parseFloat(a);
// b = parseFloat(b);
// let jami = yigindi(a, b);

// console.log(`${jami}`);


// ---------------------------------------  4-MASALA  -----------------------------------//



// function daraja(a, n) {
//     let natija = Math.pow(a, n);
//     return natija;
// }
// let a = prompt("Qiymat kiriting:");
// a = parseFloat(a);
// let daraja_2 = daraja(a, 2);
// let daraja_3 = daraja(a, 3);
// let daraja_4 = daraja(a, 4);

// console.log(`${a} ning 2-darajasi: ${daraja_2}`);
// console.log(`${a} ning 3-darajasi: ${daraja_3}`);
// console.log(`${a} ning 4-darajasi: ${daraja_4}`);




// ---------------------------------------  5-MASALA  -----------------------------------//


// function toqlarTopuvchi(n) {
//     let toqlar = [];

//     for (let i = 1; i <= n; i += 2) {
//         toqlar.push(i);
//     }

//     return toqlar;
// }
// let n = prompt("Qiymat kiriting:");
// n = parseInt(n);
// let toqlar = toqlarTopuvchi(n);
// console.log(`1 dan ${n} gacha bo'lgan toq sonlar: ${toqlar}`);




// ---------------------------------------  6-MASALA  -----------------------------------//


// function toqlarTopuvchi(n) {
//     let juftlar = [];

//     for (let i = 2; i <= n; i += 2) {
//         juftlar.push(i);
//     }

//     return juftlar;
// }
// let n = prompt("Qiymat kiriting:");
// n = parseInt(n);
// let toqlar = toqlarTopuvchi(n);
// console.log(`1 dan ${n} gacha bo'lgan juft sonlar: ${toqlar}`);





// ---------------------------------------  7-MASALA  -----------------------------------//


// let n = prompt("n ni kiriting:");
// n = parseInt(n);
// let inkrement = n + 1;
// let dikrement = n - 1;

// console.log(`${n} ning inkrement qiymati: ${inkrement}`);
// console.log(`${n} ning dikrement qiymati: ${dikrement}`);




// ---------------------------------------  8-MASALA  -----------------------------------//


// function boluvchilarTopuvchi(n) {
//     let boluvchilar = [];

//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             boluvchilar.push(i);
//         }
//     }
//     return boluvchilar;
// }
// let n = prompt("son kiriting:");
// n = parseInt(n);
// let boluvchilar = boluvchilarTopuvchi(n);

// console.log(`${n} ning bo'luvchilari: ${boluvchilar}`);




// ---------------------------------------  9-MASALA  -----------------------------------//


// function amalBajar(a, b, amal) {
//     let natija;

//     switch (amal) {
//         case '+':
//             natija = a + b;
//             break;
//         case '-':
//             natija = a - b;
//             break;
//         case '*':
//             natija = a * b;
//             break;
//         case '/':
//             if (b !== 0) {
//                 natija = a / b;
//             } else {
//                 natija = "Noto'g'ri amal!";
//             }
//             break;
//         default:
//             natija = "Noto'g'ri amal!";
//             break;
//     }

//     return natija;
// }

// let a = prompt("a ni kiriting:");
// let b = prompt("b ni kiriting:");
// let amal = prompt("Amalni tanlang (+, -, *, /):");
// a = parseFloat(a);
// b = parseFloat(b);
// let javob = amalBajar(a, b, amal);
// console.log(`${a} ${amal} ${b} = ${javob}`);




// ---------------------------------------  10-MASALA  -----------------------------------//



// function karraniChiqar(n) {
//     console.log(`----> ${n} KARRA <----`);
    
//     for (let i = 1; i <= 10; i++) {
//         let natija = n * i;
//         console.log(`${n} x ${i} = ${natija}`);
//     }
// }
// let n = prompt("sizga nechi karra kerak kiriting:");
// n = parseFloat(n);
// karraniChiqar(n);



// ---------------------------------------  Homework end  -----------------------------------//













 
