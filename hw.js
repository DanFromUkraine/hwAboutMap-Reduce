//* Завдання 1
// Дано масив чисел. Потрібно визначити, чи є у ньому хоча б одне від'ємне число. Якщо є, то повернути масив, в якому кожен елемент масиву буде додатнім числом.

// Вхідні дані: масив чисел.

// Вихідні дані: масив додатніх чисел або повідомлення "No negative numbers found".

// Приклад вхідних даних:

// Ок, тільки я не зрозумів, наша функція має повертати масив з лише додатній чисел? чи змінювати від'ємні числа на додатні?

let arr = [3, -2, 5, 6, -8, 2];
console.log(Math.sign(arr[0]));

const checkArrOnSigns = (arr) => {
  return arr.filter((element) => {
    return Math.sign(element) > 0;
  });
};

console.log(checkArrOnSigns(arr)); // це перший випадок, де ми фільтруємо

const modifiedCheckOnSigns = (arr) => {
  return arr.map((number) => {
    return Math.sign(number) > 0 ? number : number * -1;
  });
};

console.log(modifiedCheckOnSigns(arr));

//* Завдання 2
// Дано масив чисел. Потрібно знайти суму всіх додатних чисел у масиві, які є кратними числу 3.

// Вхідні дані: масив чисел

// Вихідні дані: сума всіх додатних чисел у масиві, які є кратними числу 3.

// Приклад вхідних даних: [3, 5, -9, 7, 2, 8, 10, -6]

// Приклад вихідних даних: 9

// Ок, тут вже все ясніше
const test = [3, 5, -9, 7, 2, 8, 10, -6];
const addAllPositiveNumbers = (arr) => {
  return arr.reduce((acc, number) => {
    if (Math.sign(number) > 0 && number % 3 === 0) return acc + number;
    else return acc;
  }, 0);
};

console.log(addAllPositiveNumbers(test));

// Були із цим певні приколи, видається коли ми прописуємо елз випадок, то не можна повертати нуль, як я це робив, інакше всі функція поверне 0 