// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. 
// Risolvetelo prima in versione ES5, poi commentate la versione in ES5 e fatelo in ES6. 

// _________ES5_________

// var biciArray = [
    // {
        // nome: 'dinghi',
        // peso: 15,
    // },
    // {
        // nome: 'bmx',
        // peso: 10,
    // },
    // {
        // nome: 'dinghiPro',
        // peso: 20,
    // }
// ];


// var lastWeight;  // qui metterò l'oggetto bici
// var lastMinWeight = 100; // qui metterò solo il peso della bici più leggera

// for (var x = 0; x < biciArray.length; x++) {

    // var thisWeight = biciArray[x].peso;
    // if (thisWeight < lastMinWeight) {
        // lastWeight = biciArray[x];
        // lastMinWeight = thisWeight;
    // }

// }

// console.log(lastWeight);


// ___________ES6_____________


const biciArray = [
    {
        nome: 'dinghi',
        peso: 15,
    },
    {
        nome: 'bmx',
        peso: 10,
    },
    {
        nome: 'dinghiPro',
        peso: 20,
    }
];

let lastWeight;  // qui metterò l'oggetto bici
let lastMinWeight = 100; // qui metterò solo il peso della bici più leggera

for (let x = 0; x < biciArray.length; x++) {
    
    const {peso}  = biciArray[x];
    
    if (peso < lastMinWeight) {
        lastWeight = biciArray[x];
        lastMinWeight = peso;
    }
}
const {nome, peso} = lastWeight;

console.log(`La bici più leggera è ${nome} ${peso}`);

