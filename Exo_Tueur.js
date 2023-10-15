const survivorNames = ["John", "Jane", "Max", "Rayan", "Andrew"]

const characteristics = ["nerd", "spotif", "policier", "debile", "courageux"]

function randomName () {
    const ranName =  Math.floor(Math.random() * survivorNames.length)
    return survivorNames[ranName]
}

function randomCharacteristic () {
    const ranChar =  Math.floor(Math.random() * characteristics.length)
    return characteristics[ranChar]
}

class Survivor {
    constructor() {
        this.health = 100
        this.name = randomName()
        this.characteristics = randomCharacteristic()
        this.probaDie = 0.2
        this.probaDodge = 0.5
        this.probaHitDie = 0.3
    }
}

class Killer {
    constructor() {
        this.health = 100
    }
    doAttack(survivor) {
        let proba = Math.random()
        if (survivor.probaDie > proba) {
        console.log("Jason a tue", survivor.name, "!") 
    } else if (survivor.probaHitDie > proba) {
        console.log("Jason a tue", survivor.name, "mais a prit 15 degats !") 
        this.health -= 15
    } else {
        console.log("Jason a attaque", survivor.name, "mais celui-ci esquive et inflige 10 degats!")
        this.health -= 10
    }
    }
}

let survivor1 = new Survivor()
let survivor2 = new Survivor()
let survivor3 = new Survivor()
let survivor4 = new Survivor()
let survivor5 = new Survivor()

let jason = new Killer()

let arrSurv = [survivor1, survivor2, survivor3, survivor4, survivor5]

while(jason.health > 0 && survivor1.health > 0 && survivor2.health > 0 && survivor3.health > 0 && survivor4.health > 0 && survivor5.health > 0) {
    if (survivor1.health <= 0) {
        arrSurv.splice(0, 1)
    } else if (survivor2.health <= 0) {
        arrSurv.splice(1, 1)
    } else if (survivor3.health <= 0) {
        arrSurv.splice(2, 1)
    } else if (survivor4.health <= 0) {
        arrSurv.splice(3, 1)
    } else if (survivor5.health <= 0) {
        arrSurv.splice(4, 1) 

    if (jason.health <= 0) {
        console.log("Les survivants ont vaincu Jason !")
} else if (survivor1.health <= 0 && survivor2.health <= 0 && survivor3.health <= 0 && survivor4.health <= 0 && survivor5.health <= 0) {
    console.log("Jason a tue tous les survivants!")
        jason.doAttack(arrSurv[Math.floor(Math.random() * arrSurv.length)])
    }
}
}

