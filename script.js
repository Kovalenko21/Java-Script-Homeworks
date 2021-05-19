let name = prompt("Enter your name");
alert(`Hello, ${name}!`);

let year = +prompt("Enter your year of birth");
const currentYear = 2021;
alert(`Your age is: ${currentYear - year}`);

let lenght = +prompt("Enter side of the square");
alert(`The perimeter of the square is: ${lenght ** 2}`);

let radius = +prompt("Enter circle radius");
alert(`Area of ​​the circle is: ${radius * radius * 3.1415}`);

let distance = +prompt("Enter distance in km");
let time = +prompt("Enter time in hours");
alert(`Your speed must be around: ${distance / time} km/h`);

let amountOfMoney = +prompt("Enter amount of money in US dollars");
alert(`You will get ${amountOfMoney * 0.82} euros`);

let memory = +prompt("Enter amount of memory in gigabytes");
alert(`The file will fit ${(memory * 1024) / 820} times`);

let amountOfMoney = +prompt("Enter amount of money");
let price = +prompt("Enter price of chocolate bar");
alert(
  `You will get ${
    amountOfMoney / price
  } chocolate bars,the rest of money will be ${amountOfMoney % price} `
);

let number = +prompt("Enter 3 digit number");
let firstNumber = number % 10;
let secondNumber = number % 100;
alert(
  `Revert three digit number is: ${
    firstNumber * 100 +
    (secondNumber - firstNumber) +
    (number - secondNumber) / 100
  }`
);

let number = +prompt("Amount of money:");
alert(
  `The amount of the deposit after 2 months will be: ${
    ((number * 5) / 100 / 12) * 2
  }`
);
