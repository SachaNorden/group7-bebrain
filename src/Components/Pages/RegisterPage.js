import { getRememberMe, setAuthenticatedUser, setRememberMe } from '../../utils/auths';
import { clearPage, renderPageTitle } from '../../utils/render';
import brainstorming from '../../img/brainstorming.gif';
import Navbar from '../Navbar/Navbar';
import Navigate from '../Router/Navigate';

const RegisterPage = () => {
  clearPage();
  renderPageTitle('Register');
  renderRegisterForm();
};

function renderRegisterForm() {
  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.className = 'section';
  

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

  const title = document.createElement('h3');
  title.className = 'mb-5';
  title.textContent = 'Register';
  cardBody.appendChild(title);

  const form = document.createElement('div');
  form.className = 'form-outline mb-4';
  cardBody.appendChild(form);

  const name = document.createElement('input');
  name.type = 'Name';
  name.id = 'username';
  name.className = 'form-control form-control-lg';
  form.appendChild(name);

  const label = document.createElement('label');
  label.className = 'form-label';
  label.for = 'username';
  label.textContent = 'Name';
  form.appendChild(label);


  const form2 = document.createElement('div');
  form2.className = 'form-outline mb-4';
  cardBody.appendChild(form2);

  const mdp = document.createElement('input');
  mdp.type = 'password';
  mdp.id = 'passwordId';
  mdp.className = 'form-control form-control-lg';
  form2.appendChild(mdp);

  const label2 = document.createElement('label');
  label2.className = 'form-label';
  label2.for = 'passwordId';
  label2.textContent = 'Password';
  form2.appendChild(label2);


  const chekFlex = document.createElement('div');
  chekFlex.className = 'form-check d-flex justify-content-start mb-4';
  cardBody.appendChild(chekFlex);

  const chekInput = document.createElement('input');
  chekInput.className = 'form-check-input';
  chekInput.type = 'checkbox';
  chekInput.value = '';
  chekInput.id = "form1Example3";

  const remembered = getRememberMe();
  chekInput.checked = remembered;
  chekInput.addEventListener('click', onCheckboxClicked);
  chekFlex.appendChild(chekInput);



  /* Remember Me ? */
  const chekLabel = document.createElement('label');
  chekLabel.className = 'form-check-label';
  chekLabel.for = 'form1Example3';
  chekLabel.textContent = ' Remember Me';
  chekFlex.appendChild(chekLabel);

  const button1 = document.createElement('button');
  button1.className = 'btn btn-primary btn-lg btn-block';
  button1.type = 'submit';
  button1.textContent = 'Register';
  cardBody.appendChild(button1);


  const gifImg = document.createElement('img');
  gifImg.src = brainstorming;
  gifImg.className = 'imgGif';
  
  cardBody.appendChild(gifImg);

  main.appendChild(section);

  button1.addEventListener('click', onRegister);
}

function onCheckboxClicked(e) {
  setRememberMe(e.target.checked);
}

async function onRegister(e) {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#passwordId').value;

  const options = {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch('/api/auths/register', options);

  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const authenticatedUser = await response.json();

  setAuthenticatedUser(authenticatedUser);

  Navbar();

  Navigate('/');
}

export default RegisterPage;
