const par = document.getElementById('content')
const txt = par.innerText
console.log(txt);
// par.innerText = 'Oul'

const rul = document.getElementById('rules')
const text = rul.innerText
console.log(text);
// rul.innerText = 'Babra'

// let children = document.body.children
// for (const child of children) {
//     child.style.background = 'red'
//     child.style.color = 'blue'
// }

console.log(document.getElementById('rules').classList);

const fcrul = document.body.getElementsByClassName('fc_rules')
for (const fcrulEl of fcrul) {
    fcrulEl.style.color = 'red'
}
