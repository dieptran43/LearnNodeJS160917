//so sanh: ==, ===, >=, <=, !
//phep gan: =, +=, *=, /=, %=
//Toan hoc: +, -, *, /
//Toan tu logic: !, ||, &&

// let a = 1; let b = '1';
// console.log(a===b); //so sanh gia tri va type cua 2 bien
// console.log(a==b); //chi check gia tri

// console.log(typeof (a || b)); 
// //console.log(type (a && b)); 

// //false: '', null, undefined, 0;

let trai= false;
let phai = 'myPhai'; //true

let res = trai || phai; 
console.log(res);