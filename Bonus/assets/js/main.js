/******************************************************************************** 
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede
********************************************************************************/



//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite
const membersTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Waleter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopes',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Grafic designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    }
]

console.log(membersTeam);

// MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
/* console.log('PROVA CON CICLO FOR IN');
for (const key in membersTeam) {
    console.log(key, membersTeam[key]);
}

console.log(''); */

const listTeam = document.querySelector('.container');
console.log(listTeam);

//console.log('PROVA CON CICLO FOR');
/*for (let i = 0; i < membersTeam.length; i++) {
    const memberTeam = membersTeam[i];
    //console.log(memberTeam.name);
    //console.log(memberTeam.role);
    //console.log(memberTeam.image);

    // MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
     const listMembersDom = `
    <div>
        <h4>${memberTeam.name}</h4>
        <h6>${memberTeam.role}</h6>
        <p>${memberTeam.image}</p>
    </div>`;
    //console.log(listMembersDom);

    listTeam.insertAdjacentHTML('beforeend', listMembersDom);
} */

const srcStart = './assets/img/';

for (let i = 0; i < membersTeam.length; i++) {

    const memberTeam = membersTeam[i];
    const imgSrc = imageSrc(srcStart, memberTeam.image);
    
    const cardMembersDom = `
     <div class="card">
        <img src="${imgSrc}"/>
        <h4>${memberTeam.name}</h4>
        <h6>${memberTeam.role}</h6>
    </div>`;
    console.log(cardMembersDom);
 
    listTeam.insertAdjacentHTML('beforeend', cardMembersDom);

}


//FUNCTION IMAGE

function imageSrc(url_1, url_2){
    const totalSrc = (url_1 + url_2);
    return totalSrc;
}





