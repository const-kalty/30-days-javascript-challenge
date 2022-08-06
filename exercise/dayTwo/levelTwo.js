console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another `);
console.log(`"Love is not patronizind and charity isn't about pity, it is about love. Charity and love are the same -- with charity
you give love, so don't just give money but reach out your hand instead." `);

let num = '10'
console.log(`${num === 10}`);
let newNum = parseInt(num)
console.log(`${newNum === 10}`)

let float = "9.8"
console.log(`${float === 10}`);
let newFloat = parseInt(float)
let output = newFloat + 1;
console.log(`${output === 10}`);

let py = "python";
let ja = "jargon"
console.log(`${py && ja}`.includes("on"));

let jargon = "I hope this course is not full of jargon"
console.log(jargon.includes("jargon"));

let random = Math.floor(Math.random() * 101);
let floor = Math.floor(random);
console.log(random);

let specific = Math.floor(Math.random(50) * 100);
console.log(specific);

let ran = Math.floor(Math.random() * 256)

console.log(ran);

let jav = "Javascript";
let access = jav.charAt(Math.floor(Math.random() * jav.length));
console.log(access);
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");
let rule = "You cannot end a sentence with because because because is a conjunction";
console.log(rule.substring(31, 54));