let arr = [1, 2, 3, 4, 5, null, 'Text'];
console.log('Количество чётных чисел: ' + arr.filter(elem => elem % 2 == 0 && elem !== null).length );
console.log('Количество нечётных чисел: ' + arr.filter(elem => elem % 2 !== 0 && elem !== null && typeof(elem) == 'number').length );
console.log('Количество элементов null: ' + arr.filter(elem => elem === null).length );
console.log('Количество нечисловых элементов: ' + arr.filter(elem => typeof(elem) !== 'number').length );