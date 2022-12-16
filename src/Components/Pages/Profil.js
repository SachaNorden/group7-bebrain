import { clearPage, renderPageTitle } from '../../utils/render';
import profilBrain from '../../img/profilBrain.png';
import { getAuthenticatedUser } from '../../utils/auths';
import Navbar from '../Navbar/Navbar';


const readUsername = async () => {
  const userSession = getAuthenticatedUser();
  return userSession.username;
};


const ProfilPage = () => {
  clearPage();
  renderPageTitle('Profil');
  renderProfilForm();
};

async function renderProfilForm() {
    const main = document.querySelector('main');
    
    const container = document.createElement('div');
    container.className = 'container d-flex justify-content-center';

    const card = document.createElement('div');
    card.className = 'car';
    card.id = 'cardProfil';
    container.appendChild(card);

    const text = document.createElement('div');
    text.className = 'text-center';
    card.appendChild(text);

    const image = document.createElement('img');
    image.src = profilBrain;
    image.width = '100';
    image.className = 'rounded-circle';
    text.appendChild(image);

    const nom = document.createElement('h3');
    nom.className = 'mt-2';
    nom.textContent = await readUsername();
    text.appendChild(nom);

    const row = document.createElement('div');
    row.className = 'row mt-3 mb-3';

    const space = document.createElement('hr');
    row.appendChild(space);

    const game1 = document.createElement('div');
    game1.className = 'col-md-6';
    const title1 = document.createElement('h5');
    title1.textContent = 'Reflexe Game';
    game1.appendChild(title1);
    const num1 = document.createElement('span');
    num1.className = 'num';
    num1.textContent = 10;
    game1.appendChild(num1);
    row.appendChild(game1);

    const game2 = document.createElement('div');
    game2.className = 'col-md-6';
    const title2 = document.createElement('h5');
    title2.textContent = 'Reaction Time';
    game2.appendChild(title2);
    const num2 = document.createElement('span');
    num2.className = 'num';
    num2.textContent = 10;
    game2.appendChild(num2);
    row.appendChild(game2);

    const space1 = document.createElement('hr');
    row.appendChild(space1);

    const game3 = document.createElement('div');
    game3.className = 'col-md-6';
    const title3 = document.createElement('h5');
    title3.textContent = 'Reaction Time';
    game3.appendChild(title3);
    const num3 = document.createElement('span');
    num3.className = 'num';
    num3.textContent = 10;
    game3.appendChild(num3);
    row.appendChild(game3);

    const game4 = document.createElement('div');
    game4.className = 'col-md-6';
    const title4 = document.createElement('h5');
    title4.textContent = 'Tracking';
    game4.appendChild(title4);
    const num4 = document.createElement('span');
    num4.className = 'num';
    num4.textContent = 10;
    game4.appendChild(num4);
    row.appendChild(game4);



    text.appendChild(row);
    main.appendChild(container);

      
  Navbar();
}

export default ProfilPage;