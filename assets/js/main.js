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

console.log('PROVA CON CICLO FOR');
for (let i = 0; i < membersTeam.length; i++) {
    const memberTeam = membersTeam[i];
    console.log(memberTeam.Name);
    console.log(memberTeam.Role);
    console.log(memberTeam.Image);
}

