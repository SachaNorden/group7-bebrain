import { clearPage, renderPageTitle } from "../../utils/render";
import BouttonBleu from "../../img/button-blue.png"
import BouttonRouge from "../../img/button-red.png"
import BouttonVert from "../../img/verte.png"


let timeout1;
let timeout2;

let color = "blue";

let TimeNow;

const reflexepage = () => {
    clearPage();
    renderPageTitle('Reflexe Game');
    renderReflexePage();
}


function renderReflexePage() {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    section.className = 'vh-100';
    
  
    const container = document.createElement('div');
    container.className = 'container py-5 h-100';
    section.appendChild(container);
  
    const row = document.createElement('div');
    row.className = 'row d-flex justify-content-center align-items-center h-100';
    container.appendChild(row);
  
    const col = document.createElement('div');
    col.className = 'col-12 col-md-8 col-lg-6 col-xl-5';
    row.appendChild(col);
  
    const cardShadow = document.createElement('div');
    cardShadow.className = 'card shadow-2-strong';
    cardShadow.style = 'border-radius: 1rem;';
    col.appendChild(cardShadow); 
  
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body p-5 text-center';
    cardShadow.appendChild(cardBody);



    const div1 = document.createElement('div');
    div1.className = 'reflexeGame';

    const header = document.createElement('div');
    header.className = 'headerReflexion';
    const titleGame = document.createElement('h1');
    titleGame.textContent = 'Reaction Time Game';
    header.appendChild(titleGame);
    cardBody.appendChild(header);

    const navi = document.createElement('div');
    navi.className = 'navigation';
    const title2 = document.createElement('h2');
    title2.textContent = 'Checkout your reaction time!';
    const p1 = document.createElement('p');
    p1.className = 'information';
    p1.textContent = 'Click the area after the color change to ';
    const greenSpan = document.createElement('span');
    greenSpan.textContent = 'GREEN';
    p1.appendChild(greenSpan);
    navi.appendChild(title2);
    navi.appendChild(p1);
    cardBody.appendChild(navi);

    const canvasParent = document.createElement('div');
    canvasParent.className = 'canvas-parent';
    canvasParent.id = 'canvasParent';

    const buttImg = document.createElement('img');
    buttImg.src = BouttonBleu;
    buttImg.className = 'bouttonColor';
    buttImg.id = "bouton";
   

    const scoreDiv = document.createElement('div');
    scoreDiv.className = 'score';

    const sect1 = document.createElement('div');
    sect1.className = 'section-1';


    

    canvasParent.appendChild(buttImg);

    cardBody.appendChild(canvasParent);


    scoreDiv.appendChild(sect1);

    const sect2 = document.createElement('div');
    sect2.className = 'section-2';

    const pText = document.createElement('p');
    pText.textContent = 'Your time (ms) :';
    pText.className = 'textYourTime';
    sect2.appendChild(pText);
    const pText2 = document.createElement('p');
    pText2.className = "timeText";
    pText2.id = 'time-text';
    pText2.textContent = 'NO TIME';
    
    sect2.appendChild(pText2);

    scoreDiv.appendChild(sect2);
    cardBody.appendChild(scoreDiv);

    section.appendChild(div1);
    main.appendChild(section);


   /* main.appendChild(div1); */

    buttImg.addEventListener('click', () => {
        if (color === "blue") {
            StartGame();
        } else if (color === "red"){
            pText2.innerHTML = "To fast...";
            EndGame();
        } else {
            const date2 = new Date();
            const TimeLater = date2.getTime();
            const PlayTime = (TimeLater - TimeNow);
            const TimeText = document.getElementById('time-text');
            TimeText.innerHTML = PlayTime;
            EndGame();
        }
    });
}



function StartGame() {
    const ChangeTime = GetRandomTime(1, 8);
    const EndTime = ChangeTime + 5000;

    const boutton = document.getElementById('bouton');
    boutton.src = BouttonRouge;
    color = "red";
    Timeout1Function( ChangeTime );
    Timeout2Function( EndTime );
}

function EndGame() {
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    const boutton2 = document.getElementById('bouton');
    boutton2.src = BouttonBleu;
    color = "blue";
   
}

function GetRandomTime(min, max) {
    let result = Math.floor( Math.random() * Math.floor(max) ) + min;
    result *= 1000;
    return result;
}

function Timeout2Function(time) {
    timeout2 = setTimeout( () => {
        const TimeText = document.getElementById('time-text');
        TimeText.innerHTML = "Too slow...";
        EndGame();
    }, time);
}

function Timeout1Function(time) {
    timeout1 = setTimeout( () => {

        const boutton3 = document.getElementById('bouton');
        boutton3.src = BouttonVert;
        color = "green";    

        const date1 = new Date();
        TimeNow = date1.getTime();

    }, time)
}

/*
async function saveScore(e){
    e.preventDefault();

    const score = document.querySelector('#time-text').textContent;

    const options = {
        method: 'POST',
        body: JSON.stringify({
            score,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch(`${process.env.API_BASE_URL}/auths/login`, options);

}
*/
export default reflexepage;
