console.log('labas')

// Uzduotis 1
// Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais -
// name ir surname. JavaScripte pasirašykite konstruktorių, kuris turės vardą, pavardę ir metodą -
// atsirasti lentelėje. Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis;
// pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit,
// o kitas - sumažinkit (capitalization); sukurkite objektą naudojant konstruktorių; ir galiausiai
// iškvieskite metodą, kad pridėtų į lentelę. Taip, naudojant OOP pagrindus, vartotojui įrašius
// duomenis į formą, atsiras apačioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai
// projekto plėtrai (t.y. darbui su objektais).

// function Person(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     this.addToTable = function() {
//         const nameColumn = document.createElement('td')
//         nameColumn.textContent = this.name
//         const surnameColumn = document.createElement('td')
//         surnameColumn.textContent = this.surname
//         const tr = document.createElement('tr')
//         tr.append(nameColumn, surnameColumn)
//         document.querySelector('table > tbody').append(tr)
//     }
// }

// const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()

// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     const fullname = document.getElementById('fullname').value
//     const [name, surname] = fullname.split(' ').map(namePart => capitalize(namePart.trim()))

//     const person = new Person(name, surname)
//     person.addToTable()
// })



// Uzduotis 2
// Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage,
// price ir image (url laukelis). Per konstruktorių, sukuriams objektas ir jis atvaizduojamas po forma
// (CSS rašykite CSS'e) kaip atvaizduota nuotraukoje apačioje. Paspaudus ant automobilio bloko - turi
// alert išmesti kainą.

class Car {
    constructor(brand, model, mileage, price, image) {
        this.brand = brand;
        this.model = model;
        this.mileage = mileage;
        this.price = price;
        this.image = image;
    }
    addToList() {
        const commomCard = document.createElement('div')
        commomCard.className = 'card'
        commomCard.addEventListener('click', () => alert(`Car price is ${this.price}`))

        const img = document.createElement('img')
        img.src = this.image

        const carText = document.createElement('h6')
        carText.innerText = `${this.brand} ${this.model}`

        document.querySelector('div.wrapper').append(commomCard)
        commomCard.append(img, carText)
    }
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const brand = document.getElementById('carBrand').value
    const model = document.getElementById('carModel').value
    const mileage = document.getElementById('carMileage').value
    const price = document.getElementById('price').value
    const image = document.getElementById('image').value
    const car = new Car(brand, model, mileage, price, image)
    car.addToList()
})


// Uzduotis 3
// Prisimename darbą su masyvais: sukurkite funkciją, kuri priims masyvą ir išfiltruos visus
// pasikartojančius skaičius bei šį masyvą grąžins atgal.
// Pvz:
// paduodu: [1, 3, 3, 5, 5, 5]
// grąžina: [1, 3, 5]

const removeDuplicates = myArray => [... new Set(myArray)]
console.log(removeDuplicates([1, 1, 3, 5, 5, 12, 12, 13]))