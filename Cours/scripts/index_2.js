// Récupérer

let arrExample = [3, 5, 8, 12, 2, 43, 21, 2, 3, 42, 2, 5, 12, 555, 2, 43, 21, 2, 42, 2, 5]

let middleIndex;

if (arrExample.length %2 == 1) {
    middleIndex = (arrExample.length -1) / 2
} else {
    middleIndex = (arrExample.length) /2
}

let elementInTheMiddle = arrExample[middleIndex]

//console.log(elementInTheMiddle)

let administrators = ['Paul', 'Pierre', 'Mathilde']

let newAdmin1 = {
    name: 'Marianne',
    admin: true
}

let newAdmin2 = {
    name: 'Sophie',
    admin: false
}

let newAdmin3 = {
    name: 'Lucie',
    admin: true
}


//console.log(administrators)



displayName(newAdmin1)
displayName(newAdmin2)
displayName(newAdmin3)

function displayName (param) {
    //console.log(`bonjour ${param.name}`)
}
buildSentence (newAdmin2, newAdmin3)

function buildSentence (user1, user2) {
    //console.log(`Bonjour ${user1.name} et ${user2.name} `)
}


const town1 = {
    name: `Bordeaux`,
    population:300000,
    superficy:50,
    twinnings:['Londres', 'Munich', 'Amsterdam']
}

const town2 = {
    name: `Lyon`,
    population: 500000,
    superficy:48,
    twinnings:['Londres', 'Munich', 'Amsterdam','Marseille','Varsovie']
}

const town3 = {
    name: `Paris`,
    population: 2000000,
    superficy:105,
    twinnings:[ 'Londres', 'Munich', 'Amsterdam','Rennes']
}

longueur(town1,town2)
function longueur (t1, t2) {
    if(t1.twinnings.length >t2.twinnings.length) {
        console.log(t1.name)
    } else {
        console.log(t2.name)
    }
}






const result = productOfParamaters(4, 6)

function productOfParamaters(nb1, nb2) {
    
     return nb1 * nb2
}

console.log(result)


