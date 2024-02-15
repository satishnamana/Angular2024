var a = 20;
var b = "raj";
var c = true;
var arr = [15, 25, 5, 6, 'raj123', 'raj'];
var fruits = ["banana", "orange", "mango"];
/* tramsfile == transform+compile */
/* TUPLES*/
var details = ["prasad", 2000, "abc@gmail.com"];
console.log(details[0]);
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Yellow"] = 1] = "Yellow";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Blue"] = 3] = "Blue";
})(Colors || (Colors = {}));
var myColor = Colors.Green;
console.log(Colors[myColor]);
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wensday"] = 3] = "Wensday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
var today = Days.Wensday;
console.log(Days[today]);
//
function greet(name, greeting) {
    if (greeting === void 0) { greeting = "hai"; }
    console.log('${greeting},${name}');
}
greet("raj", "Hello");
greet("raj");
//rest parameters
function sum(numbers, number) {
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
sum(2, 3);
sum(2, 3, 5);
sum(2, 3, 5, 7, 9);
var multiply = function (a, b) { return a * b; };
function sub(a, b) {
    throw Error;
}
var myCar = { model: 456, manufacture: "tayato", year: 2020 };
var employee1 = { name: "satish", salary: 30000, id: 1526 };
