var arr = ['use1', 'use2', 'use3', '44', 'user5'];
// var a = arr[0];
// var b = arr[1];
// var c = arr[2];]

//use destructing assignment
// var [a,b,c] = arr;
// console.log(`a: ${a} - b: ${b} - ${c}`);

// var [a,b,c, ...d] = arr;
// console.log(`a: ${a} - b: ${b} - ${c} - d la: ${d}`);

// //chuyen bao tham so tuy y
// function name(...name){
//     console.log(`Count: ${name.length} ` +name);
// }
// name('use6', 'use7', 'use3', '44', 'user5');

// function defaultParam(name='name default'){
//     if(typeof name =='string'){
        
//     console.log(name);
//     }
// }
// defaultParam();
// defaultParam(55);

// //Kiem tra phai la mang hay la object
// var obj = {name: "Diep", age: 50};
// console.log(Array.isArray(obj)); 

const daObj = {fullname: "Hoang Hieu", address: 7};
// const {fullname, address, defaultParams="test default"} = daObj;
// console.log(fullname + ' - '+ address +" - "+defaultParams);

function funcObject(objP){
    let {fullname, address, defaultParams="test default"} = objP;
    console.log(fullname + ' - '+ address +" - "+defaultParams);
}
funcObject(daObj);