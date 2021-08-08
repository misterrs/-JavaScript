let a = +prompt("Введите первое значение с которым вы хотите совершить операции");
let b = +prompt("Введите второе значение с которым вы хотите совершить операции");
function sum(value1, value2) {
    return sumresult = value1 + value2;
}
function sub(value1, value2) {
    return subresult = value1 - value2;
}
function mul(value1, value2) {
    return mulresult = value1 * value2;
}
function div(value1, value2) {
    return divresult = value1 / value2;
}
sum(a, b);
document.write("Сумма ваших значений " + sumresult + "<br>");
sum(b, b);
document.write("Ваше второе значение удвоено и равно " + sumresult + "<br>");
sub(a, b);
document.write("Вычитание второго значения из первого " + subresult + "<br>");
sub(b, a);
document.write("Вычитание первого значения из второго " + subresult + "<br>");
mul(a, b);
document.write("Произведение ваших значений" + mulresult + "<br>");
mul(a, a);
document.write("Первое значение во второй степени" + mulresult + "<br>");
mul(b, b);
document.write("Второе значение во второй степени" + mulresult + "<br>");
div(a, b);
document.write("Деление первого значения на второе" + divresult + "<br>");
div(b, a);
document.write("Деление первого значения на второе" + divresult + "<br>");
