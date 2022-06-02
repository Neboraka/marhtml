// // 1.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// // Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// // Для кожного елементу свій блок div.post
// // Всі характеристики повинні мати свої блоки всередені div.post
// // https://jsonplaceholder.typicode.com/posts
//
// const posts = document.getElementById('posts')
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(post => {
//         for (const postEl of post) {
//             const div = document.createElement('div')
//             div.classList.add('inndiv')
//             div.innerHTML = `<ul>
//                 <li>${postEl.userId}</li>
//                 <li>${postEl.id}</li>
//                 <li>${postEl.title}
//                 <li>${postEl.body}</li></ul>`
//             posts.append(div)
//         }
//     })

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі
// на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(value => {
        const divWrap = document.createElement('div')
        document.body.append(divWrap)

        for (const item of value) {
            const innDiv = document.createElement('div')
            divWrap.append(innDiv)
            for (const itKey in item) {
                const divElement = document.createElement('div')
                divElement.innerText = `${itKey} ${item[itKey]}`
                divWrap.append(divElement)
            }
        }
    })

