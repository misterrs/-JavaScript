let sum = prompt("Введите сумму для зачисления на счет:");
let strong = +sum.length;
let sym = strong - 1;
let sym2 = strong - 2;
let a = +sum.charAt(sym);
let b = +sum.charAt(sym2);

if (a > 4 || a === 0 || b === 1) {
    document.write("Ваша сумма в " + sum + " рублей успешно зачислена");
} else if (a > 1 && a <= 4) {
    document.write("Ваша сумма в " + sum + " рубля успешно зачислена");
} else if (a === 1) {
    document.write("Ваша сумма в " + sum + " рубль успешно зачислена");
} else {
    alert("введите корректные данные")
}