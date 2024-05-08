const name = "Madhu"
const countRepo = 5

console.log(`Hi my name is ${name} and my repository count is ${countRepo}`);

const gameName = new String("Madhu-bunny-tg")

console.log(gameName [0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.charAt(2));

console.log(gameName.indexOf("d"));

console.log(gameName.toUpperCase());

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 5)
console.log(anotherString);

const newStringOne = "    madhu     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://madhu.com/madhu%20%20sarania"

console.log(url.replace("%20%20", "-"));

console.log(url.includes("bunny"));

console.log(gameName.split('-'));