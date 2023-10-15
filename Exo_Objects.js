let student = {
    name: "Jean",
    favoriteFood: "Burger",
    city: "Bezons",
}

let values = Object.values(student)
let nombreDeLettres = 0

values.forEach((value) => {
    nombreDeLettres += value.length
})

if (nombreDeLettres % 2 === 1) {
    console.log("impair")
} else {
    console.log("pair")
}