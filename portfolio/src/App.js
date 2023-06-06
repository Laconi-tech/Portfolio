import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './components/Navbar';
import MyProfil from './components/Profil';
import MyProjets from "./components/Projets";
import BasicExample from './components/Cards';
import Contact from './components/Contact';


function App() {
  return (
    <header>
    <div className="App">
      <div>
      <MyNavbar />
      {/* <MyProfil /> */}
      {/* <MyProjectCard /> */}
      {/* <BasicExample /> */}
      <MyProjets />
      <Contact />
      </div>
    </div>
    </header>
  );
}

export default App;
