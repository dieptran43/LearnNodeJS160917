class Person2{
    constructor({name, age, addr})
    {
        this.name = name;
        this.age = age;
        this.addr = addr;
    }

    getAge(){
         return this.age;
    }

}


const user3 = new Person2({name:"Nguyen Hao", age: 7, addr: "Quan 6"});
console.log(user3);
console.log(user3.getAge());