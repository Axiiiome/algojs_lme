//Exo Class : combat de Pokémons
class Pokemon {
    constructor(name, attack, defense, hp, luck) { // Propriétés du Pokemon
    this.name = name
    this.attack = attack
    this.defense = defense
    this.hp = hp
    this.luck = luck
}
    isLucky() { // Fonction qui compare la luck du pokémon avec un nombre aléatoire (pour savoir s'il attaque)
        if (Math.random() < this.luck) {
            return true
        } else {
            return false
        }
    } 
    
    attackPokemon(cible) { // Fonction qui compte les dégats infligés, réduit les hp du pokémon attaqué, affiche les hp restants + les dégats infligés et est conditionné par isLucky
        if (this.isLucky() == true) {
            console.log(this.name, "a attaque", cible.name, "lui enlevant", this.attack - cible.defense, "hp, et lui laissant", cible.hp -= this.attack - cible.defense, "hp!") 
        } 
        else {
            console.log("L'attaque a echoue !")
        }
    } 
}

let Poichigeon = new Pokemon("Poichigeon", 10, 8, 30, 0.6) // Stats de Poichigeon
let Pikachu = new Pokemon("Pikachu", 12, 5, 35, 0.5) // Stats de Pikachu

while(Poichigeon.hp > 0 && Pikachu.hp > 0) { // Boucle du combat
    Poichigeon.attackPokemon(Pikachu)
    if (Pikachu.hp <= 0) { // Message de mort de Pikachu
        console.log("Pikachu est mort !")
        break
    }
    Pikachu.attackPokemon(Poichigeon)
    if (Poichigeon.hp <= 0) { // Message de mort de Poichigeon
        console.log("Poichigeon est mort !")
        break
    }
}