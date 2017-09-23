//Call first class function
function Person({name, age, addr}){
    //dung function de khoi tao ra class
    this.name = name;
    this.age = age;
    this.addr = addr;
    // this.getFullName = function(){
    //     return this.name;         
    // }
}

//Khai bao prototype de don gian hoa viec gan goi lien tuc ham getFullName

// Person.prototype.getFullName = function() {
//     return this.name;
// }
Person.prototype = {getFullName(){ return this.name;}}

var user1 = new Person({name:'Ngoan',age: 40, addr:'Quan 5'});
console.log(user1);
console.log(user1 instanceof Person);

function getName(user){
    if (user instanceof Person) {
        console.log(user.name);
    }
}

console.log("Goi methodv  "+ user1.getFullName());

getName(user1);