class Department{
    name: string;
    id:number;

    constructor(name:string,id:number){
        this.name = name;
        this.id = id;
    }

    getname = ()=> this.name;
    getId = ()=> this.id;

} 

const obj1 = new Department("Accounting",1);
console.log(obj1.getname());
const obj2 = new Department("I.T.",2);
console.log(obj2.getname());
console.log(obj2.getId());
const DepCpy = {getName: obj1.getname}
console.log(DepCpy.getName());