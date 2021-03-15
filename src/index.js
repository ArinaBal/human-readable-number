module.exports = function toReadable (number) {
    let result = [];
    let simple = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", 
    "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
     let dozen = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty","ninety"];
     let hundred = ["hundred"]
if (number === 0) {
    result.push("zero");
}

if (number >= 100 && number < 1000) {
    result.push(simple[Math.floor(number / 100)]);
    result.push(hundred[0]);
}

if ((number - (Math.floor(number / 100) * 100)) < 20) {
    result.push(simple[number % 100]);

} else if (number % 10 == 0) {
    result.push(dozen[Math.floor((number - (Math.floor(number / 100)) * 100) / 10)]);

} else if ((number - (Math.floor(number / 100) * 100)) > 20) {
    result.push(dozen[Math.floor((number - (Math.floor(number / 100)) * 100) / 10)]);
    result.push(simple[number % 10]);
}

str = result.filter(String).join(' ').toString();
return str;
}