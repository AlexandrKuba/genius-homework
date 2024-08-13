// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

/*
function massage(name, specialty, score, miss) {
  console.log(
    `Я ${this.name}, вчусь на ${this.specialty}, пропустив ${this.miss} занять і маю середній бал ${this.score}`
  );
}
const Vova = {
  name: "Vova",
  specialty: "driver",
  score: 4.4,
  miss: 250,
};
const Lena = {
  name: "Lena",
  specialty: "cook",
  score: 4.7,
  miss: 86,
};
const Polina = {
  name: "Polina",
  specialty: "doctor",
  score: 3.8,
  miss: 137,
};
const Misha = {
  name: "Misha",
  specialty: "lawyer",
  score: 4.3,
  miss: 21,
};

massage.bind(Vova)();
massage.call(Polina);
massage.apply(Misha);
*/

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

/*
document.querySelector(".html-button").addEventListener("click", () => {
  alert(
    "HTML (англ. HyperText Markup Language — мова розмітки гіпертексту) — стандартизована мова розмітки документів для перегляду вебсторінок у браузері."
  );
});
document.querySelector(".css-button").addEventListener("click", () => {
  alert(
    "CSS (англ. Cascading Style Sheets, укр. Каскадні таблиці стилів) — це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду."
  );
});
*/

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

/*
const storeBanana = {
  name: "banana",
  price: 30,
  kg: 4.5,
};
const storeChery = {
  name: "cherry",
  price: 58,
  kg: 1.3,
};
const storeOrange = {
  name: "orange",
  price: 89,
  kg: 3.4,
};

function getProduct(name, price, kg) {
  let cost = (this.price * (this.kg * 10)) / 10;
  let tovar = [this.name, cost];
  return tovar;
}
getProduct.bind(storeBanana)();
*/
