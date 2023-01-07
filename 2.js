let x = 10, message;
switch (typeof x) {
  case "number":
    message = "x - число";
    break;
  case "string":
    message = "x - строка";
    break;
  case "boolean":
    message = "x - логическое";
    break;
  default:
    message = "Тип x не определен";
}
console.log(message);