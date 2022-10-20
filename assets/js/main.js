//alert('ciao, funziono!')

/******************************************************************************** 
TRACCIA 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0: Creare l’array di oggetti con le informazioni fornite
MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede
********************************************************************************/

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// proprietà da inserire: nome, ruolo, foto.

//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite
const membersTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: './assets/img/wayne-barnett-founder-ceo.jpg',
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: './assets/img/angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Waleter gordon',
        role: 'Social Media Manager',
        image: './assets/img/walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Barnett',
        role: 'Chief Editor',
        image: './assets/img/wayne-barnett-founder-ceo.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: './assets/img/scott-estrada-founder-ceo.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Grafic designer',
        image: './assets/img/barbara-ramos-graphic-designer.jpg',
    }
]

console.log(membersTeam);

// MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
// ciclo (provare entrambi for - for in) per ciclare la lunghezza dell'array
// consolelog per stampare in console
console.log('PROVA CON CICLO FOR IN');
for (const key in membersTeam) {
    console.log(key, membersTeam[key]);
}

console.log('');

const listTeam = document.querySelector('.container');
console.log(listTeam);

console.log('PROVA CON CICLO FOR');
for (let i = 0; i < membersTeam.length; i++) {
    const memberTeam = membersTeam[i];
    console.log(memberTeam.name);
    console.log(memberTeam.role);
    console.log(memberTeam.image);

    // MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
    const listMembersDom = `
    <div>
        <h4>${memberTeam.name}</h4>
        <h6>${memberTeam.role}</h6>
        <p>${memberTeam.image}</p>
    </div>`;
    //console.log(listMembersDom);

    listTeam.insertAdjacentHTML('beforeend', listMembersDom);
}


// creare nel dom elemento in cui stampare - ok 
// collegare in js l'elemento del dom
// stampare nel dom le stringe con i membri del team - ipotesi template literal e poi un tipo di insert.
// template literal ...
/* const listMembersDom = `
<div>
    <h2>${memberTeam.name}</h2>
    <h4>${memberTeam.role}</h4>
    <p>${memberTeam.image}</p>
</div>` */


