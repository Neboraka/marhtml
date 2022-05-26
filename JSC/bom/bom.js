// const inpname = document.createElement('input')
// const inpage = document.createElement('input')
// const button = document.createElement('button')
// button.innerText = "Confirm"
// document.body.append(inpname,inpage,button)
//
// button.addEventListener('click',function (){
//     const name = inpname.value
//     const age = inpage.value
//
//     const user = {name: `${name}`, age: `${age}`}
//     console.log(user);
//     localStorage.setItem('user', JSON.stringify(user))
// })

const model = document.createElement('input')
const type = document.createElement('input')
const volume = document.createElement('input')
const button = document.createElement('button')
button.innerText = "Confirm Car"
document.body.append(model,type,volume,button)

button.addEventListener('click',function () {
    const mod = model.value
    const typ = type.value
    const vol = volume.value

    const car = [mod, typ, vol]
    localStorage.setItem('car',JSON.stringify(car))
})