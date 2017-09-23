class Parent{
    getName(){
        console.log("This is a getName in Parent");
    }
}

class Chid extends Parent
{
    constructor(name){
        super();
        this.name = name;
    }

    getFull(){
        console.log("full name in child");
    }
}

var childd = new Chid("dafsg");
childd.getName();
childd.getFull();