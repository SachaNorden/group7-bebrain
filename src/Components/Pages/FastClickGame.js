import { clearPage, renderPageTitle } from "../../utils/render";
import BouttonBleu from "../../img/button-blue.png"
import BouttonOver from "../../img/BlueOver.png"
import BouttonRouge1 from "../../img/red1.png"
import BouttonRouge2 from "../../img/red2.png"
import BouttonRouge3 from "../../img/red3.png"
import BouttonVert from "../../img/verte.png"


let color = "blue";
let click = 0;


const fastpage = () => {
    clearPage();
    renderPageTitle('Fast Click Game');
    renderFastPage();
}


function renderFastPage() {
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
    titleGame.textContent = 'Fast Click Game';
    header.appendChild(titleGame);
    cardBody.appendChild(header);

    const navi = document.createElement('div');
    navi.className = 'navigation';
    const title2 = document.createElement('h2');
    title2.textContent = 'Checkout your speed !';
    const p1 = document.createElement('p');
    p1.className = 'information';
    p1.textContent = 'Click in the area for 5s when the color change to ';
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
    buttImg.id = "boutonFast";
   

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
    pText.textContent = 'Your score :';
    pText.className = 'textYourTime';
    sect2.appendChild(pText);
    const pText2 = document.createElement('p');
    pText2.className = "timeText";
    pText2.id = 'time-text';
    pText2.textContent = '...';
    
    sect2.appendChild(pText2);

    scoreDiv.appendChild(sect2);
    cardBody.appendChild(scoreDiv);

    section.appendChild(div1);
    main.appendChild(section);

    buttImg.addEventListener('click', () => {
        if (color === "blue") {
            StartGame();
        } else if (color === "green"){
            click += 1;
        }
    });
}


function StartGame() {
    const boutton = document.getElementById('boutonFast');
    boutton.src = BouttonRouge3;
    color = "red";
    setTimeout(Button2, 1000);
    setTimeout(Button1, 2000);
    setTimeout(TurnGreen, 3000);
}

function Button2() {
    const boutton = document.getElementById('boutonFast');
    boutton.src = BouttonRouge2;
}

function Button1() {
    const boutton = document.getElementById('boutonFast');
    boutton.src = BouttonRouge1;
}

function TurnGreen() {
    const boutton = document.getElementById('boutonFast');
    boutton.src = BouttonVert;
    color = "green";   
    Finish();
}

function EndGame() {
    const boutton2 = document.getElementById('boutonFast');
    boutton2.src = BouttonOver;
    color = "red";
    const TimeText = document.getElementById('time-text');
    TimeText.innerHTML = click/5;
    TimeText.innerHTML += " c/sec";
    click = 0;
    setTimeout(Restart, 3000);
}

function Restart() {
    const boutton2 = document.getElementById('boutonFast');
    boutton2.src = BouttonBleu;
    color = "blue";
}

function Finish() {
    setTimeout( () => {
        EndGame();  
    }, 5000)
}

export default fastpage;
