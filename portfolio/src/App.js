import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/Navbar";
import MyProfil from "./components/Profil";
import MyProjets from "./components/Projets";
import ContactUs from "./components/Contact";
import MyCv from "./components/Intro";

function App() {
  return (
    <html>
      <body>
        <div className="App">
          {/* <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="title"> */}
            <MyNavbar />
            <MyCv />
            {/* <MyProfil /> */}
            <MyProjets />
            <ContactUs />
          {/* </div> */}
        </div>
      </body>
     </html>
  );
}

export default App;
