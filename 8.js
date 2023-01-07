let myMap = new Map ([["Вода", 100], ["Огонь", 200], ["Земля", 300]])

for (let [keys, values] of myMap) {

   console.log("Ключ - " + keys + ", Значение - " + values);

}