// eslint-disable-next-line no-unused-vars
import {Navbar as BootstrapNavbar} from 'bootstrap';
import {isAuthenticated} from '../../utils/auths';
import Navigate from "../Router/Navigate";

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
    renderNavbar();
};

function renderNavbar() {
    const navbarWrapper = document.querySelector('#navbarWrapper');

    const anonymousUserNavbar = `
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand " id="homePage" data-uri="./">BeBrain</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" id="login" data-uri="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="register" data-uri="/register">Register</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  `;

    const navbarAuth = `
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand " id="homePage" >BeBrain</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" id="profil" data-uri="/profil">Profil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="logout" data-uri="/logout">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  `;
    navbarWrapper.innerHTML = isAuthenticated() ? navbarAuth : anonymousUserNavbar;

    const login = document.getElementById("login");
    const register = document.getElementById("register");
    const homePage = document.getElementById("homePage");
    const profil = document.getElementById("profil");
    const logout = document.getElementById("logout");

    homePage.addEventListener("click", (e) => {
        e.preventDefault();
        Navigate(homePage.getAttribute("data-uri"));
    });
    if(isAuthenticated()){
        profil.addEventListener("click", (e) => {
            e.preventDefault();
            Navigate(profil.getAttribute("data-uri"));
        });
        logout.addEventListener("click", (e) => {
            e.preventDefault();
            Navigate(logout.getAttribute("data-uri"));
        });
    }else{
        login.addEventListener("click", (e) => {
            e.preventDefault();
            Navigate(login.getAttribute("data-uri"));
        });
        register.addEventListener("click", (e) => {
            e.preventDefault();
            Navigate(register.getAttribute("data-uri"));
        });
    }


};


export default Navbar;
