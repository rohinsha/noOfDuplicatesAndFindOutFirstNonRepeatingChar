// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
let sum = 0;
function getSumOfNums(num) {
  if (num > 0) {
    //console.log(num);
    sum += num;
    getSumOfNums(num - 1);
  }
  return sum;
}
console.log(getSumOfNums(4));

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//abdcbcead
function toFindNonRepeatingChar(str) {
  const strArr = str.split("");
  const firstUniqElem = strArr
    .filter((item, i) => strArr.indexOf(item) === i)
    .find((item) => {
      return strArr.filter((it) => it === item).length === 1;
    });
  console.log(firstUniqElem + " " + "toFindNonRepeatingChar");
}

toFindNonRepeatingChar("abdcbcead");

function toFindNumberOfDuplicatesInString(str) {
  const strArr = str.split("");
  const uniqueArr = strArr.filter((item, i) => strArr.indexOf(item) === i);
  const duplicateCharsArr = uniqueArr.map((item) => {
    return [item, strArr.filter((it) => it === item).length];
  });
  console.log(
    duplicateCharsArr + " " + " toFindNumberOfDuplicatesInString Array"
  );
}
toFindNumberOfDuplicatesInString("abdcbcead");
