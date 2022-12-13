import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import ReflexGame from '../Pages/ReflexGame';
import FastClickGame from '../Pages/FastClickGame';
import Logout from '../Logout/Logout';



const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/login' : LoginPage,
  '/register': RegisterPage,
  '/reflexPage' : ReflexGame,
  '/fastClick' : FastClickGame,
  '/logout': Logout,
};

export default routes;
