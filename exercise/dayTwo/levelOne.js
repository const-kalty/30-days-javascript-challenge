let challenge = "30 Days Of JavaScript"
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.substring(3));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));

let socialMedia = "Facebook,Google,Microsoft,Oracle,IBM,Apple,Amazon"
console.log(socialMedia.split(","));

console.log(challenge.replace("30 Days Of JavaScript", "30 Days Of Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let rule = "You cannot end a sentence with because because because is a conjunction";
console.log(rule.indexOf("because"));
console.log(rule.lastIndexOf("because"));
console.log(rule.search("because"));

console.log(challenge.trim());
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("Script"));
let match = /a/gi
console.log(challenge.match(match));
let con = "30 Days of "
console.log(con.concat("Javascript"));
console.log(challenge.repeat(2));