function wakeUp(inTime){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (inTime){
                resolve('I`m happy')
            }else {
                reject('Wake up faster')
            }
        }, 2000)
    })
}

function drinkCoffe(result){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (result === 'I`m happy'){
              resolve('Tasty coffy')
          }else {
              console.log('Drink water')
              reject('Drink water')
          }
      }, 200)
    })
}


wakeUp(true)
    .then(result => {
        console.log('Nice boy', result)

        return drinkCoffe(result)
    })
    .then(result => {
        console.log(result)
    })
    .catch(reason => {
        console.log(reason,', lazy man')
    })