var Department = /** @class */ (function () {
    function Department(name, id) {
        var _this = this;
        this.getname = function () { return _this.name; };
        this.getId = function () { return _this.id; };
        this.name = name;
        this.id = id;
    }
    return Department;
}());
var obj1 = new Department("Accounting", 1);
console.log(obj1.getname());
var obj2 = new Department("I.T.", 2);
console.log(obj2.getname());
console.log(obj2.getId());
var DepCpy = { getName: obj1.getname };
console.log(DepCpy.getName());
