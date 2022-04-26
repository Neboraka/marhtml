// let a = prompt("First side")
// let b = prompt("Second side")
//
// function squareP(){
//     let result = a*b;
//     console.log(a)
//     console.log(b)
//     return result;
// }
//
// let answer=squareP()
// console.log(answer)


// const p = 3.14;
// let r = prompt("Радіус круга");
// function circlearea(){
//     let S=p*r;
//     return S;
// }
//
// let answer=circlearea();
// console.log(answer);


// const p = 3.14
// let h = prompt("Висота циліндра")
// let r = prompt("Радіус циліндра")
// function cilinder() {
//   let answer = 2*p*h*r;
//   return answer;
// }
// let answer = cilinder()
// console.log(answer)


// let array= [4,"abc","kvadro", "jiel", 115];
// let i = 0
// function monitor() {
//     while (i < array.length){
//     console.log(array[i])
//     i++}
// }
// monitor()

// let array= [4,"abc","kvadro", "jiel", 115];
// let array1= [4,"abc","kvadro", "jiel", 115];
// let array2= [4,"abc","kvadro", "jiel", 115];
// let array3= [4,"abc","kvadro", "jiel", 115];
// function ula(arra) {
//     for (const arras of arra) {
//         console.log(arras)
//     }
// }
// ula(array)
// ula(array1)
// ula(array2)
// ula(array3)

// let txt = prompt("Give me your text")
// function showing(text){
//     document.write(`<h1>${text}</h1>`)
// }
// showing(txt);

// let txt = prompt("Give me your text")
// function li(text){
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// li(txt)



// function li(text, num){
//     document.write(`<ul>`)
//     for (let i=0; i<num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// li('sdjkjf', 8)

// let array= [4,"abc","kvadro", "jiel", 115];
// function ororo(ar1) {
//     document.write('<ul>')
//     for (const arrayEl of ar1) {
//         document.write(`<li>${arrayEl}</li>`)
//     }
//     document.write('</ul>')
// }
// ororo(array)

// let array= [
//     {id: 1134, name: "Ivan", age: 32},
//     {id: 2345, name: "Olena", age: 32},
//     {id: 3456, name: "Volodymyr", age: 32},
//     {id: 4567, name: "Slavko", age: 32},
//     {id: 5678, name: "Bogumyr", age: 32}]
// function show(qwe) {
//     for (const arrays of qwe) {
//         document.write(`<div> ${arrays.id} ${arrays.name} ${arrays.age}</div>`)
//     }
// }
// show(array)


// let array= [2, 6, 3,8 , 1];
// function najmenshe(ololo) {
//     let res = ololo[0]
//     for (const ololoEl of ololo) {
//         if (ololoEl<res){
//             res = ololoEl
//         }
//     }
//     return res
// }
// console.log(najmenshe(array));


// let array= [2, 6, 3,8 , 1];
// function najmenshe(ololo) {
//     let res = ololo[0]
//     for (const ololoEl of ololo) {
//         if (ololoEl<res){
//             res = ololoEl
//         }
//     }
//     return res
// }
// console.log(najmenshe(array));

let array= [2, 6, 3, 8 , 1, 84,20];
function sum(qqw) {
    let res = 0
    for (const qqwEl of qqw) {
    res = res + qqwEl
    }
    return res
}
console.log(sum(array))
