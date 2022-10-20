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
        Name: 'Wayne Barnett',
        Role: 'Founder & CEO',
        Image: './assets/img/wayne-barnett-founder-ceo.jpg',
    },

    {
        Name: 'Angela Caroll',
        Role: 'Chief Editor',
        Image: './assets/img/angela-caroll-chief-editor.jpg',
    },

    {
        Name: 'Waleter gordon',
        Role: 'Social Media Manager',
        Image: './assets/img/walter-gordon-office-manager.jpg',
    },

    {
        Name: 'Angela Barnett',
        Role: 'Chief Editor',
        Image: './assets/img/wayne-barnett-founder-ceo.jpg',
    },

    {
        Name: 'Scott Estrada',
        Role: 'Developer',
        Image: './assets/img/scott-estrada-founder-ceo.jpg',
    },

    {
        Name: 'Barbara Ramos',
        Role: 'Grafic designer',
        Image: './assets/img/barbara-ramos-graphic-designer.jpg',
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
    console.log(memberTeam.Name);
    console.log(memberTeam.Role);
    console.log(memberTeam.Image);

    const listMembersDom = `
    <div>
        <h4>${memberTeam.Name}</h4>
        <h6>${memberTeam.Role}</h6>
        <p>${memberTeam.Image}</p>
    </div>`;
    //console.log(listMembersDom);

    listTeam.insertAdjacentHTML('beforeend', listMembersDom);
}


// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
// creare nel dom elemento in cui stampare - ok 
// collegare in js l'elemento del dom
// stampare nel dom le stringe con i membri del team - ipotesi template literal e poi un tipo di insert.
// template literal ...
/* const listMembersDom = `
<div>
    <h2>${memberTeam.Name}</h2>
    <h4>${memberTeam.Role}</h4>
    <p>${memberTeam.Image}</p>
</div>` */


