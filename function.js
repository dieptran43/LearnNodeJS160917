//declare function
function name(param1, param2){
    console.log("Test function 1");
    console.log(arguments);
    console.log(arguments['1']);


    // //Convert object => to array
    //Cach 1: dung Array.prototype
    // var objArr = Array.prototype.slice.call(arguments);
    // console.log(objArr);
    // objArr.unshift("Them phan tu moi vao array");
    // console.log(objArr);

    //cach 2: Dung Object.values
    // var objArr = Object.values(arguments);
    // console.log(objArr);
    //
    //Cach 3 dung Array.from
    var objArr = Array.from(arguments);
    console.log(objArr);

}
//call function
// name('Hoten', 40);

//  const a = name;
//  console.log(a); //only a function type
//  console.log(a()); //call function name // result is undefined
 //how to know list params

// var arr = [1,2,3];
//push them phan tu vao cuoi array
//shift  remove phan tu dau array

// //function Object
// function callObject(obj)
// {
//     console.log(obj.name);
//     console.log(obj.age);
// }

// callObject({name: "Hoang Nam", age: 67});

//http://docs.sequelizejs.com/manual/installation/getting-started.html
//Thao tac ket noi voi cac he quan tri co so du lieu database

// //function express
// let funcExpress = function(){
//     console.log("This function express");
// }
// funcExpress();

// //closure function
// function tax(tax)
// {
//     return function price(price){
//         return price += price*(tax/100);
//     }
// }

// // const tax10 = tax(10);
// // console.log(tax10); //[Function: price]

// const suachua = tax10(5000);
// console.log(suachua); //5500 suc manh cua java script

//Cach khac neu ko viet closure

let taxFunc = function priceTax(price, tax){
    return price + price*tax;
}

console.log(taxFunc(5000, 0.1));








