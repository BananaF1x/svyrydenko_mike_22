const len = +prompt("Введіть довжину масива (не менше 1).");
let arr = [];
if(isNaN(len) != true && len > 0) {
    for(let i = 0; i < len; i++) {
        arr.push(prompt("Введіть елемент."));
    }
    document.write(`Створений масив <br> ${arr} <br>`);
    arr.sort((a, b) => a - b);
    document.write(`Відсортований масив за зростанням <br> ${arr} <br>`);
    arr.splice(1, 3);
    document.write(`Масив після видалення елементів з 2 по 4 (включно!) <br> ${arr} <br>`);
} else {
    document.write("Ви ввели не коректне число");
}
