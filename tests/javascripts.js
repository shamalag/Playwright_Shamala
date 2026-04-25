// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

function nonrepeating(str){
    const counts = new Map();

    for (const ch of str) {
        counts.set(ch, (counts.get(ch) || 0) + 1);
    }

    for (const ch of str) {
        if (counts.get(ch) === 1) return ch;
    }

    return null;
}

console.log(nonrepeating('automation')); // u
console.log(nonrepeating('anant'));      // t
console.log(nonrepeating('racerc'));     // a
console.log(nonrepeating('ojas'));       // o
