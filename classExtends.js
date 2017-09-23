class ConNguoi{
    constructor(name, age, addr){
        this.name = name;
        this.age = age;
        this.addr = addr;
    }

    getThongTinOngNoi(){
        console.log("Xin chao thong tin Ong Noi");
    }
}

class HocSinh extends ConNguoi{
    constructor(name, age, addr ,truong, lop){
        super(name, age, addr);
        this.truong = truong;
        this.lop = lop;
    }
    getThongTinCha(){
        console.log("Xin chao thong tin Cha");
    }
}

class KySu  extends HocSinh{
    constructor(a,b,c, chuyenNganh, trinhDo){
        super(a,b,c);
        this.chuyenNganh = chuyenNganh;
        this.trinhDo = trinhDo;
    }

    getThongTin(){
        console.log("Xin chao ky su");
    }
}

var hosinhObj = new HocSinh("fsdgfds", 7, "Quan 3", "Ngo Quyen", "lop 9");
console.log(hosinhObj);

var kySuObj = new KySu("AAAAAAAA", 7, "Quan 3", "Ngo Quyen", "lop 9");

kySuObj.getThongTin();
kySuObj.getThongTinCha();
kySuObj.getThongTinOngNoi();