// let squareP = (a,b) => console.log(a*b);
// squareP(10,20)

// let circleP=(r)=>console.log(3.14*r*r)
// circleP(2);

// let cilP=(r,h)=>console.log((3.14*r*r*2)+(2*3.14*r*h))
// cilP(4,5)

// let oblik=(arr)=>{
//     for (const arras of arr) {
//         console.log(arras)
//     }
// }
// oblik([3,8,6,5,4,3]);

// let text=(txt)=>{document.write(`<p>${txt}</p>`)}
// text("Abrakadabra")

// let creUL=(txt,num)=>{document.write(`<ul>`)
//     for (let i=0; i<num; i++) {
//         document.write(`<li>${txt}</li>`)
//     }
// }
// creUL('hello my world',4)

// let show=(qwe)=>{
//     for (const arrays of qwe) {
//         document.write(`<div> ${arrays.id} ${arrays.name} ${arrays.age}</div>`)
//     }
// }
// show([{id: 1134, name: "Ivan", age: 32},
//     {id: 2345, name: "Olena", age: 32},
//     {id: 3456, name: "Volodymyr", age: 32},
//     {id: 4567, name: "Slavko", age: 32},
//     {id: 5678, name: "Bogumyr", age: 32}])

// let najm=(arr)=> {
//     let res = arr[0]
//     for (const ololoEl of arr) {
//         if (ololoEl<res){
//             res = ololoEl
//         }
//     }
//     return res
// }
// console.log(najm([2, 6, 3,8 , 1]))

// let suma=(qqw)=> {
//     let res = 0
//     for (const qqwEl of qqw) {
//         res = res + qqwEl
//     }
//     return res
// }
// console.log(suma([2, 6, 3, 8 , 1, 84,20]))

// let chg=([a,b])=> {
//     return ([b, a])
// }
// console.log(chg([5,'tak']))

// let serAf=(gigi)=>{
//     let sum=0
//     for (const gigiEl of gigi) {
//     sum += gigiEl
//     }
//     return sum/gigi.length
// }
// console.log(serAf([1,5,10]))

// let najNaj = (mas) => {
//     let min = mas[0]
//     let max = mas[0]
//     for (const masEl of mas) {
//         if (masEl < min) {
//             min = masEl;
//         }
//         if (masEl > max) {
//             max = masEl;
//         }
//     }
//     console.log(max)
//     return min;
// }
// console.log(najNaj([5,8,3,15,4,35,9,1]))

// let rand = (limit) =>{
//     let array = []
//     array.push(Math.round(Math.random()*limit))
//     return array
// }
// console.log(rand(100))
// console.log(rand(4000))

let array = [1,2,3];
let chg = (arr) => {
    let num = array[0];
    array[0]=array[2];
    array[2]=num
    return arr
}
console.log(chg(array))


