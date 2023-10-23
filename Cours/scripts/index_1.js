// Présentation des opérateurs arithmétiques

/* Commentaires sur plusieurs lignes

*/

/**
 * Variante de commentaires sur plusieurs lignes
 */

var myNumber1 = 9 + 2
var myNumber2 = 4

var myResult = myNumber1 * myNumber2

// console.log(myNumber1, myNumber2, myResult)

// Déclaration moderne (en ES6, javascript depuis 2015) de variables

const myNb1 = 9
const myNb2 = 3

const res = myNb1 * myNb2

// console.log(res)

// LES CHAINES DE CARACTERES (string) "" '' ``

let myName = `Je m'appelle Paul`
const lastname = `Doazan`
const age = 35;

myName += ' '
myName += lastname


const resultStr = `${myName} et j'ai ${age} ans.`

// console.log(resultStr)


// LES BOOLEENS

const myBoolean = true
const myBoolean2 = false

let myAge = 20
const legalAge = 21

const isMinor = myAge <= legalAge

if (isMinor) {
    //console.log('Paul est mineur')
} else {
    //console.log("Paul n'est pas mineur")
}

const bigNb1 = 100
const bigNb2 = 400

// écrire la condition pour afficher le plus grand nombre

const resultComparison = bigNb1 > bigNb2

if (bigNb1 > bigNb2) {
    //console.log(bigNb1)
} else if (bigNb1 < bigNb2) {
    //console.log(bigNb2)
} else if (bigNb1 == bigNb2) {
    //console.log(bigNb1,bigNb2)
}

const firstname = 'Pauline'

//console.log(`Bonjour ${firstname}, je ne connaissais pas ton prénom avant`)

let newArr = [3, 5,8]

