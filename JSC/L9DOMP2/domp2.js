// const div = document.createElement('div')
// div.innerText = 'Testing block for lesson 9'
// // div.classList.add('wrap')
// // div.classList.add('collapse')
// // div.classList.add('alpha')
// // div.classList.add('beta')
// div.setAttribute('class', 'wrap collapse alpha beta')
// div.style.background = 'red'
// div.style.color = 'white'
// div.style.width = '200px'
//
//
// document.body.append(div)
// document.body.append(div.cloneNode(true))

// const mas = ['Main','Products','About us','Contacts']
// for (const masE of mas) {
//     let elem = document.getElementsByClassName('menu')[0]
//     const li = document.createElement('li')
//     li.innerText = masE
//     elem.appendChild(li)
// }

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// for (const courEl of coursesAndDurationArray) {
//     const div = document.createElement('div')
//     div.innerHTML = `<a>${courEl.title} - ${courEl.monthDuration}</a>`
//     document.body.appendChild(div)
// }

for (const couEl of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.className = 'item'
    let hEl = document.createElement('h1');
    hEl.className = 'heading'
    hEl.innerText = `${couEl.title}`
    let pEl = document.createElement('p');
    pEl.className = 'description'
    pEl.innerText = `${couEl.monthDuration}`
    document.body.append(hEl, pEl)

}