import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './components/Navbar';
import MyProfil from './components/Profil';
import MyProjets from "./components/Projets";


function App() {
  return (
    <header>
    <div className="App">
      <div>
      <MyNavbar />
      <MyProfil />
      {/* <MyProjectCard /> */}
      <MyProjets />
      </div>
    </div>
    </header>
  );
}

export default App;
