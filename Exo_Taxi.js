class passager {
    constructor(sant_ment) {
        this.sant_ment = sant_ment
    }

}

class trajet {
    constructor() {
        this.nbFeux = 30
        this.nbChangements = 0
        this.mus = ["Derek Pope - Awake", "Wejdene - Anissa", "Yury - Posted", "Spiral Drive - Space Train", "Royal Blood - Oblivion"]
    }
    playMus() {
        let randomNum = Math.random()
        if (0 < randomNum && randomNum < 0.2) {
            return this.mus[0]
        } else if (0.2 < randomNum && randomNum < 0.4) {
            return this.mus[1]
        } else if (0.4 < randomNum && randomNum < 0.6) {
            return this.mus[2]
        } else if (0.6 < randomNum && randomNum < 0.8) {
            return this.mus[3]
        } else if (0.8 < randomNum && randomNum < 1) {
            return this.mus[4]
        }
    }
}

let john = new passager(10)
let trajTaxi = new trajet()

while (trajTaxi.nbFeux > 0) {
    let playedMus = trajTaxi.playMus()
    console.log("La musique jouee est", playedMus)
    trajTaxi.nbFeux--
    if (playedMus == trajTaxi.mus[1]) {
        trajTaxi.nbChangements += 1
        john.sant_ment -= 1
        console.log("John change de Taxi et perd 1 de sante mentale, il lui reste alors", john.sant_ment, "de sante mentale.")
    } else {
        console.log("John reste dans le meme Taxi")
    }
    console.log("Il reste encore", trajTaxi.nbFeux, "feux")
    if (john.sant_ment <= 0) {
        console.log("John est mort")
        break
    } else if (trajTaxi.nbFeux == 0) {
        console.log("John est arrive a destination, il lui a fallu", trajTaxi.nbChangements, "changements pour y arriver.")
    }
}



