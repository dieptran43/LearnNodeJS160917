// //callback
// var fetch = require("node-fetch");
// //npm install -save node-fetch

// function getData(source,cb){
//    //b();
//     //
//     fetch(source)
//     .then(res =>res.json()) //Day la cach khai bao arrow function
//     .then(cb);
// }

// function xulyData(data){
//     console.log(data);
//     for (let item of data) {
//        console.log(item.id);       
//     }
// }

// getData('http://jsonplaceholder.typicode.com/comments',xulyData);


// //arrow function
// function name(){ return giatri}; //()=>giatri
// function name2(param){ return giatri}; //(param)=>giatri
// function name3(param1, param2){ return giatri}; //(param1, params2)=>giatri
// function name3(){ return {name: "hoang", age: 4}}; //()=>({name: "hoang", age: 4})
// //khai bao

// const name6 =()=>({name: "Chau Kiet", age: 9, addr: "Q89"});
// console.log(name6());

// //Ung dung
// [1,2,3,4,5,6,7,8,9].forEach(
//     function(el, index){
//      console.log('vi tri '+ index++ +" "+ el);
//     }
// );

var arrList = [1,2,3,4,5,6,7,8,9];

// function myForEach(arr, callbackFc){
//     for (var index = 0; index < arr.length; index++) {
//         callbackFc(arr[index], index, "gia tri bat ky");        
//     }
// }

// myForEach(arrList, callBackFc);

// function callBackFc(param, index, arrBatKy){
//     console.log(index);
//     console.log("End");
// }

//cach dung map
const result2 = arrList.map((value)=>value*2); //{return value*2}
console.log(result2);

//so sanh voi dung map
function myForEach(arr, callbackFc){
    var mang = [];
    for (var index = 0; index < arr.length; index++) {
       let res = callbackFc(arr[index], index, "gia tri bat ky");        
       mang.push(res);
    }
    return mang;
}


function callBackFc(param, index, arrBatKy){
    return param * index;
}

var res22 = myForEach(arrList, callBackFc);
console.log(res22);

