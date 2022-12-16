import rotatingBrain from '../../img/ClickHereBrain.gif';
import rotatingBrainEmpty from '../../img/rotatingBrain.gif';
import gamebutton from '../../img/verte.png';
import reflexGameButton from '../../img/ReflexGame.gif';
import fastClick from '../../img/FastClickGame.gif';
import memory from '../../img/Memory.gif';
import Navigate from "../Router/Navigate";
import { isAuthenticated } from '../../utils/auths'; 

const HomePage = () => {
    renderPage();
};

function renderPage() {
    const main = document.querySelector('main');

    const homePage = `
  
    <div class="row align-items-center homePageContent">
        <div class="col-md align-self-end float-lg-start text-component">   
            <h1>Welcome to BeBrain !</h1>
            <p>Here you can try to improve your brain level and discover his potential.</p>
        </div>
        <div class="col-sm-3 gameButtons">
            <div id=firstGame data-uri="/reflexPage">
            </div>
            <div id=secondGame data-uri="/memory">
            </div>
            <div id=thirdGame data-uri="#">
            </div>
            <div id=lastGame data-uri="/fastClick">
            </div>
        </div>
        <div class="col-md d-flex justify-content-center">
            <div class="row gif">
                <img id ='brain' class="img-fluid " src="${rotatingBrain}" alt="Responsive image" />
            </div>
        </div>
  </div>

`;

const homePageEmpty = `
  
<div class="row align-items-center homePageContent">
    <div class="col-md align-self-end float-lg-start text-component">   
        <h1>Welcome to BeBrain !</h1>
        <p>Here you can try to improve your brain level and discover his potential.</p>
    </div>
    <div class="col-sm-3 gameButtons">
        <div id=firstGame data-uri="/reflexPage">
        </div>
        <div id=secondGame data-uri="/reflexPage">
        </div>
        <div id=thirdGame data-uri="#">
        </div>
        <div id=lastGame data-uri="/fastClick">
        </div>
    </div>
    <div class="col-md d-flex justify-content-center">
        <div class="row gif">
            <img id ='brain' class="img-fluid " src="${rotatingBrainEmpty}" alt="Responsive image" />
        </div>
    </div>
</div>

`;

    if(isAuthenticated()){
        main.innerHTML = homePage;
    } else {
        main.innerHTML = homePageEmpty;
    }
    const menu = document.getElementById('brain');
    const firstGame = document.getElementById('firstGame');
    const secondGame = document.getElementById('secondGame');
    const thirdGame = document.getElementById('thirdGame');
    const lastGame = document.getElementById('lastGame');

    let isclicked = false;
    menu.addEventListener('click', () => {
        if (!isclicked && isAuthenticated()) {
            firstGame.innerHTML += `
                <img class='topbutton'  src="${reflexGameButton}" alt="button_game" className="img-fluid" id="btnPop">
            `;
            secondGame.innerHTML += `
                <img class='topbutton' src="${memory}" alt="button game" className="img-fluid" id="btnPop">
            `;
            thirdGame.innerHTML += `
                <img class='dimension-button ' src="${gamebutton}" alt="button game" className="img-fluid" id="btnPop">
            `;
            lastGame.innerHTML += `
                <img class='dimension-button ' src="${fastClick}" alt="button game" className="img-fluid" id="btnPop">
            `;
            isclicked = true;

            firstGame.addEventListener('click', (e) => {

                e.preventDefault();
                Navigate(firstGame.getAttribute('data-uri'));
            });

            secondGame.addEventListener('click', (e) => {

                e.preventDefault();
                Navigate(secondGame.getAttribute('data-uri'));
            });

            thirdGame.addEventListener('click', (e) => {

                e.preventDefault();
                Navigate(thirdGame.getAttribute('data-uri'));
            });

            lastGame.addEventListener('click', (e) => {

                e.preventDefault();
                Navigate(lastGame.getAttribute('data-uri'));
            });

        } else {
            firstGame.innerHTML = ``;
            secondGame.innerHTML = ``;
            thirdGame.innerHTML = ``;
            lastGame.innerHTML = ``;
            isclicked = false;
        }
    });

}


export default HomePage;
