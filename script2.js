let age = prompt("How old are you?");
if (age >= 0 && age < 2) alert("You are a child");
if (age >= 12 && age < 18) alert("You are a teenager");
if (age >= 18 && age < 60) alert("You are an adult");
if (age >= 60 && age < 100) alert("You are a pensioner");

let num = prompt("Choose number from 0 to 9");
switch (num) {
  case "0":
    alert(")");
    break;
  case "1":
    alert("!");
    break;
  case "2":
    alert("@");
    break;
  case "3":
    alert("#");
    break;
  case "4":
    alert("$");
    break;
  case "5":
    alert("%");
    break;
  case "6":
    alert("^");
    break;
  case "7":
    alert("&");
    break;
  case "8":
    alert("*");
    break;
  case "9":
    alert("(");
    break;


let number = prompt("Enter 3 digit number");
number = number + "";
if (
  number[0] == number[1] ||
  number[0] == number[2] ||
  number[1] == number[2]
) {
  alert("TRUE");
} else alert("FALSE");

let year = prompt("Enter year you want to check");
if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
  alert("This is a leap year");
} else alert("This is not a leap year");

let number = prompt("Enter 5 digit number");
if (number[0] == number[4] || number[1] == number[3]) {
  alert("This number is a palindrome");
} else alert("This number is not a palindrome");

let number = +prompt("Enter amount of money in US dollars");
let currency = prompt("EUR = 1, UAH = 2, AZN = 3");
switch (currency) {
  case "1":
    alert(number * 0.89 + "EUR");
    break;
  case "2":
    alert(number * 27.54 + "UAH");
    break;
  case "3":
    alert(number * 1.7 + "AZN");
    break;
}

let amount = +prompt("Enter amount of money");
if (amount >= 200 && amount < 300)
  alert((amount / 100) * 97 + "$ with 3% discount");
if (amount >= 300 && amount < 500)
  alert((amount / 100) * 95 + "$ with 5% discount");
if (amount >= 500) alert((amount / 100) * 93 + "$ with 7% discount");

let firstValue = +prompt("Enter circumference");
let secondValue = +prompt("Enter perimeter of a square");
alert(
  secondValue / 4 >= firstValue / 3.14
    ? "Circle fits in a square"
    : "Circle doesn`t fit in a square"
);

let firstQuestion = prompt(
  "Choose the right option:in what year did Napoleon die : 1821 , 1917 , 1656"
);
switch (firstQuestion) {
  case "1821":
    alert("Hell yeah! You are right.You earned 2 points");
    break;
  case "1917":
    alert("Nope.");
    break;
  case "1656":
    alert("Almost,but you are not right.");
  default:
    alert("Wrong option");
}
let secondQuestion = prompt("How many times Napoleon was married: 1 , 2 , 15");
switch (secondQuestion) {
  case "1":
    alert("Nope.");
    break;
  case "2":
    alert("Hell yeah! You are right.You earned 2 points");
    break;
  case "15":
    alert("Almost,but you are not right.");
  default:
    alert("Wrong option");
}
let thirdQuestion = prompt(
  "What was the height of Napoleon : 1.50 , 1.68 , 1.98"
);
switch (thirdQuestion) {
  case "1.98":
    alert("Nope.");
    break;
  case "1.50":
    alert("Almost,but you are not right.");
  case "1.68":
    alert("Hell yeah! You are right.You earned 2 points");
    break;
  default:
    alert("Wrong option");
}
let score = 0;
if (firstQuestion == 1821) score += 2;
if (secondQuestion == 2) score += 2;
if (thirdQuestion == 1.68) score += 2;
alert("Your score is " + score);

К десятому пока не подобрал нужный алгоритм решения

Дополнительные задания

const name = prompt("Какое «официальное» название JavaScript?");
if (name == "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете ECMAScript?");
}

const num = +prompt("Введите число");
if (num > 0) {
  alert("1");
} else if (num < 0) {
  alert("-1");
} else if (num == 0) {
  alert("0");
}

let result = a + b < 4 ? "мало" : "много";

let login = prompt("Enter login");
alert(
  login == "Worker"
    ? "Hello"
    : login == "Director"
    ? "Good morning"
    : "No login"
);
