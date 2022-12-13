// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import { isAuthenticated } from '../../utils/auths';

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
    <a class="navbar-brand " href="./">BeBrain</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/login" data-uri="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register" data-uri="/register">Register</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  `;
  
  const navbarAuth = `
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand " href="./">BeBrain</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#" data-uri="/profil">Profil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/logout" data-uri="/logout">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  `;
  navbarWrapper.innerHTML = isAuthenticated() ? navbarAuth : anonymousUserNavbar;
};


export default Navbar;
