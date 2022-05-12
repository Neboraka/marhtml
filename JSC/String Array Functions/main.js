// let a = 'hello world'
// let b = 'lorem ipsum'
// let c = 'javascript is cool'
//
// console.log(a.length);
// console.log(b.length);
// console.log(c.length);
// console.log(a.toUpperCase());
// console.log(b.toUpperCase());
// console.log(c.toUpperCase());


//  let dir = ' dirty string   ';
//    let replace = dir.replace(' ', '')
//        .replace('   ','')
// console.log(replace)

// let str = 'Ревуть воли як ясла повні';
// let arr = str.split(' ');
// console.log(arr);

// let nums = [10,8,-7,55,987,-1011,0,1050,0]
// console.log(nums.map(num => num.toString()));

// let nums = [11,21,3,8];
// let sortNums = (arr,direction)=>{
//     if (direction === 'ascending'){
//         arr.sort((a,b)=>a-b)
//         console.log(arr)}
//     else if(direction === 'descending'){
//         arr.sort((a,b)=>b-a)
//         console.log(arr)
//     }
// }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let duratio = (arr)  => arr.sort((a, b) =>b.monthDuration-a.monthDuration)
// console.log(duratio(coursesAndDurationArray));
// let longer =(arra) =>arra.filter(arra=>arra.monthDuration > 5)
// console.log(longer(coursesAndDurationArray));

let cards = [
    {value:6, cardSuit:'spade', color: 'black'},
    {value:7, cardSuit:'spade', color: 'black'},
    {value:8, cardSuit:'spade', color: 'black'},
    {value:9, cardSuit:'spade', color: 'black'},
    {value:10, cardSuit:'spade', color: 'black'},
    {value:'jack', cardSuit:'spade', color: 'black'},
    {value:'queen', cardSuit:'spade', color: 'black'},
    {value:'king', cardSuit:'spade', color: 'black'},
    {value:'ace', cardSuit:'spade', color: 'black'},
    {value:6, cardSuit:'diamond', color:'red'},
    {value:7, cardSuit:'diamond', color:'red'},
    {value:8, cardSuit:'diamond', color:'red'},
    {value:9, cardSuit:'diamond', color:'red'},
    {value:10, cardSuit:'diamond', color:'red'},
    {value:'jack', cardSuit:'diamond', color:'red'},
    {value:'queen', cardSuit:'diamond', color:'red'},
    {value:'king', cardSuit:'diamond', color:'red'},
    {value:'ace', cardSuit:'diamond', color:'red'},
    {value:6, cardSuit:'heart', color:'red'},
    {value:7, cardSuit:'heart', color:'red'},
    {value:8, cardSuit:'heart', color:'red'},
    {value:9, cardSuit:'heart', color:'red'},
    {value:10, cardSuit:'heart', color:'red'},
    {value:'jack', cardSuit:'heart', color:'red'},
    {value:'queen', cardSuit:'heart', color:'red'},
    {value:'king', cardSuit:'heart', color:'red'},
    {value:'ace', cardSuit:'heart', color:'red'},
    {value:6, cardSuit:'club', color: 'black'},
    {value:7, cardSuit:'club', color: 'black'},
    {value:8, cardSuit:'club', color: 'black'},
    {value:9, cardSuit:'club', color: 'black'},
    {value:10, cardSuit:'club', color: 'black'},
    {value:'jack', cardSuit:'club', color: 'black'},
    {value:'queen', cardSuit:'club', color: 'black'},
    {value:'king', cardSuit:'club', color: 'black'},
    {value:'ace', cardSuit:'club', color: 'black'},
    {value:'joker', color:'red'},
    {value:'joker', color:'black'},
]
// console.log(cards);
// console.log(cards.find(value => value.value === 'ace' && value.cardSuit === 'club'));
// console.log(cards.filter(value => value.value === 6));
// console.log(cards.filter(value => value.color === 'red'));
// console.log(cards.filter(value => value.cardSuit === 'diamond'));
console.log(cards.filter(value => value.cardSuit === 'club' && value.value > '8'));
