//object oriented programming
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = fn;
        this.lastName = ln;
    }
    Person.prototype.getFullName = function () {
        return '${this.firstName} ${this.lastName}';
    };
    return Person;
}());
var SuperPerson = /** @class */ (function () {
    function SuperPerson(p, f, l) {
        var _this = _super.call(this, f, l) || this;
        SuperPerson.power = p;
        return _this;
    }
    return SuperPerson;
}()); // by default public, but if you declare something as private then it cannot passed
SuperPerson.power;
var obj4 = new SuperPerson("raj", "satish");
console.log(obj4.getFullName());
