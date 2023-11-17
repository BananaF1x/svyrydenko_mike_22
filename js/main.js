const len = +prompt("Введіть довжину масива.");
let arr = [];
for(let i = 0; i < len; i++) {
    arr.push(prompt("Введіть елемент."));
}
document.write(`Створений масив <br> ${arr}. <br>`);
arr.sort((a, b) => a - b);
document.write(`Відсортований масив за зростанням <br> ${arr}. <br>`);
arr.splice(1, 3);
document.write(`Масив після видалення елементів з 2 по 4 (включно!). <br> ${arr} <br>`);
