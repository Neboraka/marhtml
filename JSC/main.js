let z0 ='hello';
let z1 ='owu';
let z2 ='com';
let z3 ='ua';
let z4 =1;
let z5 =10;
let z6 =-999;
let z7 =123;
let z8 =3.14;
let z9 =2.7;
let z10 =16;
let z11 =true;
let z12 =false;

console.log(z1)
console.log(z2)
console.log(z3)
console.log(z4)
console.log(z5)
console.log(z6)
console.log(z7)
console.log(z8)
console.log(z9)
console.log(z10)
console.log(z11)
console.log(z12)

let story1 = {
    name: 'Abrakadabra',
    genre: 'Philosophy',
    time: 45
};

console.log(story1)
let story2 = {
    name: 'Chupakabra',
    genre: 'Phentesy',
    time: 22,
    authors : [
        'babka1',
        'svidok',
        'zhertva',
    ]
};
console.log(story2);
let fn = 'Ivan';
let mn = 'Ivanovych';
let ln = 'Oleshchuk';
// let me = fn + ' ' + md + ' ' + ln;
let me = `${fn} ${mn} ${ln}`
console.log(me);

// let fin = prompt('First name')
// let sen = prompt('Second name')
// let lan = prompt('Last name')
// let ivan = fin+' '+sen+' '+lan
// console.log(ivan)
let a = 100;
let b = '100';
let c = true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

let stories = [
    {title: 'virsh', genre: 'poesy',long : 34, authors: ['vasya', 'petua', 'sraka', 'kvitka']},
    {title: 'text', genre: 'proza',long : 40},
    {title: 'usne', genre: 'movlennia',long : 54},
]
console.log(stories[0].authors[3])