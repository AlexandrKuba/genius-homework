// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

/*
let num;
num = -3;
//num = 0;
//num = 1;
if (num < 0) {
  console.log("false");
} else if (num > 0) {
  console.log("true");
}
  */

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test', "qwerty", true

/*
let text;
text = "test";
//text = true;
//text = `test`;
//text = "qwerty";
if (text === "test") {
  console.log("true");
}
*/

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

/*
let num;
//num = 1;
//num = 10;
num = 13;
if (num > 10) {
  num -= 5;
} else if (num < 10) {
  num += 5;
}
console.log(num);
*/

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

/*
let num;
get();
function get() {
  num = Number(prompt("Введіть число від 1 до 12"));
  if (num < 1 || num > 12) {
    alert("Не вірно введене значення");
    get();
  }
}

switch (num) {
  case 1:
    console.log("Січень");
    break;
  case 2:
    console.log("Лютий");
    break;
  case 3:
    console.log("Березень");
    break;
  case 4:
    console.log("Квітень");
    break;
  case 5:
    console.log("Травень");
    break;
  case 6:
    console.log("Червень");
    break;
  case 7:
    console.log("Липень");
    break;
  case 8:
    console.log("Серпень");
    break;
  case 9:
    console.log("Вересень");
    break;
  case 10:
    console.log("Жовтень");
    break;
  case 11:
    console.log("Листопад");
    break;
  case 12:
    console.log("Грудень");
    break;
}
    */

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

/*
let num;
let sum = 0;
let key;
get();
function get() {
  num = parseInt(prompt("Введіть тризначне число"));
  if (num < 100 || num > 999 || isNaN(num)) {
    alert("Не вірно введене значення");
    get();
  } else {
    num = String(num);
  }
}
for (key of num) {
  key = +key;
  sum += key;
}
alert(sum);
*/
