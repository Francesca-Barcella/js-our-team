/******************************************************************************** 
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede
********************************************************************************/



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
        name: 'Waleter Gordon',
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
        image: './assets/img/scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Grafic designer',
        image: './assets/img/barbara-ramos-graphic-designer.jpg',
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

for (let i = 0; i < membersTeam.length; i++) {
    const memberTeam = membersTeam[i];

     const cardMembersDom = `
     <div class="card">
        <img src="${memberTeam.image}"/>
        <h4>${memberTeam.name}</h4>
        <h6>${memberTeam.role}</h6>
    </div>`;
    console.log(cardMembersDom);
 
    listTeam.insertAdjacentHTML('beforeend', cardMembersDom);

}


//TENTATIVO IMAGE

const srcStart = './assets/img/';
const srcEnd = 'wayne-barnett-founder-ceo.jpg';

function imageSrc (url_1, url_2){
    const totalSrc = (url_1 + url_2);
    return totalSrc
}

const imgSrc = imageSrc (srcStart, srcEnd);
console.log(imgSrc);





