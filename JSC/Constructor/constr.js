// function Client (id, name, surname, email, phone) {
//         this.id = id
//         this.surname = surname
//         this.name = name
//         this.email = email
//         this.phone = phone
//         }
// let book =[]
// let user1 = new Client(1, 'Anton', 'Dub', 'pkoh@iop', 3809)
// let user2 = new Client(2, 'Olha', 'Myska', 'mnghm@iop', 7863)
// let user3 = new Client(3, 'Iryna', 'Lis', 'drfdrt@iop', 4999)
// let user4 = new Client(4, 'Volodymyr', 'Krislo', 'iop@iop', 1523)
// let user5 = new Client(5, 'Svitozar', 'Zamok', 'nmzzzss@iop', 0894)
// let user6 = new Client(6, 'Kyrylo', 'Uzvar', 'ioop@iop', 6548)
// let user7 = new Client(7, 'Pantelejmon', 'Viter', 'sdfx@iop', 5987)
// let user8 = new Client(8, 'Pylyp', 'Byk', 'ghjy@iop', 2987)
// let user9 = new Client(9, 'Hanna', 'Doshka', 'sdfgujh@iop', 8306)
// let user10 = new Client(10, 'Havrylo', 'Drit', 'dggr@iop', 9765)
// book = [user1, user2, user3, user4,user5,user6,user7,user8, user9,user10]
// console.log(book);
// let filter = book.filter( usId => usId.id % 2 === 0 )
// console.log(filter);
// let sort = book.sort((a,b)=>a.id-b.id)
// console.log(sort);

function Car(model,producer,year,maxspeed,volume) {
    this.model = model
    this.producer = producer
    this.year = year
    this.maxspeed = maxspeed
    this.volume = volume
    this.drive = function () {
        console.log(`We are dribing with ${maxspeed}m/h speed`);
    }
    this.info = function () {
        for (const item in this) {
            console.log(`${item} - ${this[item]}`);
        }
    }
    this.faster = function (fust) {
     this.maxspeed += fust
    }
}
let vol = new Car('V40','Volvo',2000,168,1.4)
// vol.drive()
// vol.info()
console.log(vol.faster(40));
console.log(vol);
