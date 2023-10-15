var a = "Jean"
var b = "Paul"
var result = checkName(a,b)

function checkName(name1, name2) {
    if (name1 == name2) {
        return("Les noms sont identiques")
    } else {
        return("Les noms ne sont pas identiques")
    }
    
}
console.log(result)