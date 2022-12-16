import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import ReflexGame from '../Pages/ReflexGame';
import FastClickGame from '../Pages/FastClickGame';
import MemoryGame from '../Pages/MemoryGame';
import Logout from '../Logout/Logout';
import Profil from '../Pages/Profil';
import TrackingGame from "../Pages/TrackingGame";


const routes = {
  '/': HomePage,
  '/login' : LoginPage,
  '/register': RegisterPage,
  '/reflexPage' : ReflexGame,
  '/fastClick' : FastClickGame,
  '/logout': Logout,
  '/profil': Profil,
  '/memory' : MemoryGame,
  '/trackingGame' : TrackingGame

};

export default routes;
