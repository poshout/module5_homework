let value = +prompt('Введите число')
if (isNaN(value)) {
   alert ('Упс, кажется, вы ошиблись')
 }
else if (value % 2 ===0) {
   alert ('Число четное')
 }
else {
   alert ('Число нечетное')
 }