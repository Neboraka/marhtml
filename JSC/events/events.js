// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//     const div = document.createElement('div');
// div.innerText = 'Baser'
// const button = document.createElement('button')
// button.innerText = 'Click me'
// document.body.append(div,button)
// button.onclick = function (){
//     div.innerText = ''
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const input = document.createElement('input')
//     input.type = 'number'
// const button = document.createElement('button')
// button.innerText = 'Click me'
// document.body.append(input,button)
// button.addEventListener('click', function (){
//     if (input.value >= 18){
//         alert('Hello')
//     }else {
//         alert('Good bye')
//     }
//     // input.value = ''
// })

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const button = document.getElementById('button')
// button.addEventListener('click',function (){
//     console.log(document.forms.formOne.inputOne.value);
//     console.log(document.forms.formOne.inputTwo.value);
//     console.log(document.forms.formTwo.inputThree.value);
//     console.log(document.forms.formTwo.inputFour.value);
// })


//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий -
// кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка,
//     з відповідним вмістом.
// (Додатковачастина для завдання)

const inputOne = document.createElement('input');
const inputTwo = document.createElement('input');
const inputThree = document.createElement('input');
const button = document.createElement('button')
button.innerText = 'Click me'
document.body.append(inputOne,inputTwo,inputThree,button)
button.addEventListener('click', function (){
    const tr = inputOne.value
    const td = inputTwo.value
    const inpText = inputThree.value

    function creatorTable(tr, td, text){
        const table = document.createElement('table')
        document.body.append(table)
        for (let i = 0; i < tr; i++) {
            const tr = document.createElement('tr')
            table.appendChild(tr)
            for (let j = 0; j < td; j++) {
                const td = document.createElement('td');
                td.innerText = `${text}`
                td.style.border = '2px solid red'
                tr.appendChild(td)
            }
        }
        }
        creatorTable(tr, td, inpText)
})