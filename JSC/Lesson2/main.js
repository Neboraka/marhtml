let x = 0
if (x === 0){
    console.log(true)}
else{
    console.log(false)
}

// let time = +prompt('Show me a minute');
// console.log(time)
// if (time >= 0 && time <= 15) {
//     console.log('First quarter');}
// else if (time >=16 && time <=31){
//     console.log('Second quarter');}
// else if (time >=30 && time <=45){
//     console.log('Third quarter');}
// else if (time >=46 && time <=60){
//     console.log('Forth quarter');}
// else {
//     console.log('Try again');}

// let day = prompt('Tell me a number of a day')
// console.log(day)
// switch (day){
//     case '1':
//         console.log('Monday')
//         break;
//     case '2':
//         console.log('Tuesday')
//         break;
//     case '3':
//         console.log('Wednesday')
//         break;
//     case '4':
//         console.log('Thurhday')
//         break;
//     case '5':
//         console.log('Friday')
//         break;
//     case '6':
//         console.log('Saturday')
//         break;
//     case '7':
//         console.log('Sunday')
//         break;
// }

// let number = +prompt('Give me a number')
// let number2 = +prompt('Give me a number2')
// console.log(+number + ' '+ +number2);
// if (number > number2) {
//     console.log(number)
// }
// // else if (number === number2){
// //     console.log(number)
// // }
// else {
//     console.log(number2)
// }

let number = +prompt('Give me a number')
let number2 = +prompt('Give me a number2')
// console.log(number + ' '+ number2);
switch (number > number2) {
    case true:
        console.log(number);
        break;
    case false:
        console.log(number2);
        break
}
