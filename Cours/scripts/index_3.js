const persons = [{
    name:"Pierre",
    hasCar: true,
    hasBike: true,
    isSick:true
},

    {
    name:"Mélanie",
    hasCar: true,
    hasBike: false,
    isSick:false
},

    {
    name:"Paul",
    hasCar: false,
    hasBike: true,
    isSick:false
},
    {
    name:"Sophie",
    hasCar: false,
    hasBike: false,
    isSick:true
}]



//canGoToUniversity(person_3)
//canGoToTopOfMountain(person_1)

// Opérateur de comparaison complexe : OR
function canGoToUniversity(person) {
    if(person.hasCar || person.hasBike && !person.isSick){
        //console.log(`${person.name} peut aller à l'université`)
    } else {
        //console.log(`${person.name} ne peut pas aller à l'université`)
    }
    
}

// Opérateur de comparaison complexe : AND
function canGoToTopOfMountain(person) {
    if(person.hasCar && person.hasBike && !person.isSick) {
        //console.log(`${person.name} peut aller au sommet de la montagne`)
    } else {
       // console.log(`${person.name} ne peut pas aller au sommet de la montagne`)
    }
   
}


/**
 * LES BOUCLES
 */


for(let i = 0 ; i <= 10; i += 2) {
    //console.log('Salut' + i)
}

let arr = [3,5,12,8,1]

for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 3 == 0) {
        //console.log('Element courant : ' + arr[i])
    }
}


let numbers = [3,5,12,8,1,4]

let sum =0;

for(let ind = 0 ; ind < numbers.length ; ind ++) {
    sum += numbers[ind]
}

//console.log(sum)

let max = 0;
for(let i =0; i<numbers.length; i++) {
    if(numbers[i] > max) {
        max = numbers[i]
    }
}

//console.log(max);

// Afficher uniquement les nombres strictement supérieurs à 4 ==> 5, 12, 8

let filtereNumbers = []
for(let index=0; index < numbers.length ; index++) {
    if(numbers[index] > 5) {
        filtereNumbers.push(numbers[index])
    }
}

//console.log(filtereNumbers);

//Encapsuler le script précédent dans une fonction et y ajouter le parametre limit

const arrayResult = filterArray(4)

function filterArray(limit) {
    let filtereNumbers = []
    for(let n = 0; n < numbers.length; n++) {
        if(numbers[n] > limit)
        filtereNumbers.push(numbers[n])
    }

}

//console.log(filtereNumbers);
//return filtereNumbers;

// Ecrire une boucle for pour afficher dans un nouveau tableau toutes les personnes malades



const result = malade(persons);
console.log(result);

function malade (personnes) {
    let sickPersons = []

    for(let indice = 0 ; indice < personnes.length ; indice ++) {
    if (personnes[indice].isSick) {
        sickPersons.push(personnes[indice].name)
        
    }
    return sickPersons;
}
}



