const quiz = document.getElementById('quiz');
const questionTitre = document.getElementById('questions');
const a_rep = document.getElementById('reponse_a');
const b_rep = document.getElementById('reponse_b');
const c_rep = document.getElementById('reponse_c');
const d_rep = document.getElementById('reponse_d');
const submit = document.getElementById('btn');
const reponses = document.querySelectorAll('.reponse');


const tabQuiz = [{
        question: "Quel est le meilleur langage de programmation ?",
        a: "Java",
        b: "Python",
        c: "C",
        d: "Javascript",
        reponse: "d",
    },
    {
        question: "Premiere  ecole de codage gratuit?",
        a: "SIMPLON",
        b: "ATOS",
        c: "SONATEL ACADEMIQUE",
        d: "AFI",
        reponse: "c",
    },
    {
        question: "EN QUELLE ANNEE LE SENAGAL EST CHAMPION D'AFRIQUE?",
        a: "2022",
        b: "2006",
        c: "2000",
        d: "2020",
        reponse: "a",
    }
    
];




let questionnaire = 0;
let score = 0;

leQuiz();

function leQuiz() {

    unchosenAnswers();

    const game = tabQuiz[questionnaire];

    questionTitre.innerText = game.question
    a_rep.innerText = game.a
    b_rep.innerText = game.b
    c_rep.innerText = game.c
    d_rep.innerText = game.d
};

function unchosenAnswers() {
    reponses.forEach(champ => champ.checked = false);
};

function chosenAnswer() {
    let reponse;
    reponses.forEach(champ => {
        if (champ.checked) {
            reponse = champ.id;
        }
    })
    return reponse;
};


submit.addEventListener('click', () => {
    const reponse = chosenAnswer();
    if (reponse) {
        if (reponse === tabQuiz[questionnaire].reponse) {
            score++;
        };

        questionnaire++;

        if (questionnaire < tabQuiz.length) {
            leQuiz();
        } else {
            submit.style.display = "none"
            quiz.innerHTML = `
            <h2>Vous avez repondu correctement à ${score}/${tabQuiz.length} .</h2>
            <button onclick="location.reload()">Rejouer</button>
            `
        };
    };
});