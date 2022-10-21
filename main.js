const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const answer = document.getElementsByClassName("answer");
const wrong = document.getElementById("alert");
let score = document.getElementById("score");
let numbScore = 0;
let radio1, radio2, radio3;
function dif() {
    radio1 = document.getElementById("btnradio1").checked;
    radio2 = document.getElementById("btnradio2").checked;
    radio3 = document.getElementById("btnradio3").checked;
}
let bgColor = document.getElementById("guess");
let bgVal = bgColor.value
let choice = [];

getColor = () => {
    let colorA = Math.floor((Math.random() * (255 - 1) + 1) + 1).toString(16);
    let colorB = Math.floor((Math.random() * (255 - 1) + 1) + 1).toString(16);
    let colorC = Math.floor((Math.random() * (255 - 1) + 1) + 1).toString(16);
    return `#${colorA}${colorB}${colorC}`;
};

function randColor(params) {
    let bg = Math.floor(Math.random() * params);
    bgColor.style.backgroundColor = choice[bg];
    bgVal = choice[bg];
    return bg;
}

function quiz() {
    dif()
    choice = [];

    if (radio2 === true) {
        for (let i = 0; i < 3; i++) {
            choice.push(getColor());
            randColor(3);
            document.getElementById("answerD").classList.add("d-none")
            document.getElementById("answerE").classList.add("d-none")
            document.getElementById("answerF").classList.add("d-none")
        }
    }
    if (radio3 === true) {
        for (let i = 0; i < 6; i++) {
            choice.push(getColor());
            randColor(6);
            document.getElementById("answerD").classList.remove("d-none")
            document.getElementById("answerE").classList.remove("d-none")
            document.getElementById("answerF").classList.remove("d-none")
        }
    }

    document.getElementById("answerA").value = choice[0];
    document.getElementById("answerA").innerHTML = choice[0];
    document.getElementById("answerB").value = choice[1];
    document.getElementById("answerB").innerHTML = choice[1];
    document.getElementById("answerC").value = choice[2];
    document.getElementById("answerC").innerHTML = choice[2];
    document.getElementById("answerD").value = choice[3];
    document.getElementById("answerD").innerHTML = choice[3];
    document.getElementById("answerE").value = choice[4];
    document.getElementById("answerE").innerHTML = choice[4];
    document.getElementById("answerF").value = choice[5];
    document.getElementById("answerF").innerHTML = choice[5];

    return choice;
}

function answerA() {
    var answerA = document.getElementById("answerA").value;
    checkAnswer(answerA);
}
function answerB() {
    var answerB = document.getElementById("answerB").value;
    checkAnswer(answerB);
}
function answerC() {
    var answerC = document.getElementById("answerC").value;
    checkAnswer(answerC);
}
function answerD() {
    var answerD = document.getElementById("answerD").value;
    checkAnswer(answerD);
}
function answerE() {
    var answerE = document.getElementById("answerE").value;
    checkAnswer(answerE);
}
function answerF() {
    var answerF = document.getElementById("answerF").value;
    checkAnswer(answerF);
}

function checkAnswer(params) {
    if (params == bgVal) {
        quiz();
        wrong.classList.add("d-none");
        score.innerHTML = `Score : ${numbScore += 1}`
    }
    else {
        numbScore = 0;
        wrong.classList.remove("d-none");
        score.innerHTML = `Score : ${numbScore}`
    }
}