// Snack 3
// Abbiamo sempre un array di squadre, con:
// nome
// punti fatti
// falli subiti
// Stampare in html (in forma tabellare!!! 
//  i dati relativi alle squadre evidenziando 
//  in giallo la riga corrispondente alla squadra con più falli subiti.


const listSquadre = [
    {
        nome: 'Juve',
        punti: 30,
        falli: 8
    },
    {
        nome: 'Milan',
        punti: 60,
        falli: 3
    },
    {
        nome: 'Inter',
        punti: 10,
        falli: 9
    }
];

console.log(listSquadre);



let result = '';
let falliPlus = 0;
let falliSquadra;
const outputSquadre = document.getElementById('result');

for ( let x = 0; x < listSquadre.length; x++){
    const {falli} = listSquadre[x];
    if (falli > falliPlus) {
        falliPlus = falli;
        falliSquadra = listSquadre[x]
    }
}


for (let x = 0; x < listSquadre.length; x++) {

    const { nome, punti, falli } = listSquadre[x]
    result += 
        `<ul class="squadra">
            <li> <h3>${nome}:</h3> </li>
            <li> ${punti} punti </li> 
        </ul>
        <ul class="falli">
            <li> ${falli} falli </li>
        </ul>`;
};

outputSquadre.innerHTML += result;


for ( let x = 0; x < listSquadre.length; x++) {
    if (listSquadre[x].falli === falliSquadra.falli) {
        document.getElementsByClassName('falli')[x].style.backgroundColor = 'yellow';
    }
}