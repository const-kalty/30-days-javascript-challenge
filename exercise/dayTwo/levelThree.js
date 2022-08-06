let love = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let loveAll = /love/gi
console.log(love.match(loveAll));

let rule = "You cannot end a sentence with because because because is a conjunction";
let because = /because/gi
console.log(rule.match(because));

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const cleaned = sentence.replace(/[@#%&;$]/gi, "")
let cleanedSentence = cleaned.split("")
let mostOccured = [];
let mostOccuredWord = [];
for (let i = 0; i < cleanedSentence.length; i++) {
    if (!mostOccured.includes(cleanedSentence[i])) {
        mostOccured.push(cleanedSentence[i]);
    }
}
console.log(cleanedSentence);
// const mostOccured = {};
// const mostOccuredWord = cleaned.split(/\b/)
// for (const i = 0; i < mostOccured.length; i++)
//     mostOccured["_" + mostOccuredWord[i]] = (mostOccured["_" + mostOccuredWord[i]] || 0) + 1;
console.log(cleaned);

let income = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let total = /\d+/g;
numbers = income.match(total);
let annualIncome = numbers[0] * 12;
console.log(annualIncome);
let annualBonus = numbers[1];
let onlineCourses = numbers[2] * 12
let totalEarning = Number(annualIncome) + Number(annualBonus) + Number(onlineCourses);
console.log(totalEarning);