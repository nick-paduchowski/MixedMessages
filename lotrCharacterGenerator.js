// This program is a Lord of the Rings character generation program. It will generate a charcter from the fellowship and give you a quest based on that character's stats

let character;

const fellowship = [
    {
        name: 'Aragorn',
        type: 'melee',
        race: 'men',
        strength: 'strong',
    },
    {
        name: 'Legolas',
        type: 'ranged',
        race: 'elf',
        strength: 'strong'
    },
    {
        name: 'Boromir',
        type: 'melee',
        race: 'men',
        strength: 'strong',
    },
    {
        name: 'Gandalf',
        type: 'ranged',
        race: 'wizard',
        strength: 'powerful'
    },
    {
        name: 'Gimli',
        type: 'melee',
        race: 'dwarf',
        strength: 'strong'
    },
    { 
        name: 'Sam',
        type: 'melee',
        race: 'hobbit',
        strength: 'weak'
    },
    {
        name: 'Frodo',
        type: 'melee',
        race: 'hobbit',
        strength: 'weak'
    },
    {
        name: 'Merry',
        type: 'ranged',
        race: 'hobbit',
        strength: 'weak'
    },
    {
        name: 'Pippin',
        type: 'ranged',
        race: 'hobbit',
        strength: 'weak'
    }
];


function selectCharacter(){
    character = fellowship[Math.floor(Math.random() * fellowship.length)];
}



let questStarts = ['You begin in the Shire', 'You begin in Gondor', 'You begin in Mirkwood', 'You begin in Rivendell'];
let questNextSteps = ['with a ranged weapon', 'with a sword', 'with an axe'];
let finalSteps = ['where you come across some dangerous spiders that have taken over and you must destroy them!', 'where you come across some orcs in your territory, you must wipe them out!', 'where you here a balrog! You must stop it before it destroys everything!'];
let questStart = '';
let questNextStep= '';
let finalStep = '';


function selectQuestStart (){
    if (character.race === 'hobbit'){
        questStart = questStarts[0];
    } else if (character.race === 'men'){
        questStart === questStarts[1];
    } else if (character.race === 'elf'){
        questStart === questStarts[2];
    } else if (character.race === 'wizard'){
        questStart === questStarts[3];
    }
}

function selectNextStep (){
    if (character.type === 'ranged'){
        questNextStep = questNextSteps[0];
    } else if (character.type === 'melee' && character.race === 'dwarf'){
        questNextStep = questNextSteps[2];
    } else if (character.type === 'melee' && character.race === 'men'){
        questNextStep = questNextSteps[1];
    }
}

function selectFinalStep (){
    if (character.strength === 'weak'){
        finalStep = finalSteps[0];
    } else if (character.strength === 'strong') {
        finalStep = finalSteps[1];
    } else if (character.strength === 'powerful') {
        finalStep = finalSteps[2];
    }
}


selectCharacter();
selectQuestStart();
selectNextStep();
selectFinalStep();

console.log(`You are ${character.name}. ${questStart} ${questNextStep} ${finalStep}`);

