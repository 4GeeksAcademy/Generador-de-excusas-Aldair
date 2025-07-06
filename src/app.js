let who = ['my cat', 'my father', 'the dog', 'the carter'];
let action = ['ate', 'broke', 'crushed', 'burned'];
let what = ['my homework', 'my car', 'my home', 'my motorcycle'];
let when = ['before the class', 'in the night', 'yesterday', 'in the day'];

const pickRandomElementOf = list => list[Math.floor(Math.random() * list.length)];

function generateExcuse() {
    return `${pickRandomElementOf(who)} ${pickRandomElementOf(action)} ${pickRandomElementOf(what)} ${pickRandomElementOf(when)}.`;
}

window.onload = function () {
    document.getElementById("excuse").innerHTML = generateExcuse();
    
};
