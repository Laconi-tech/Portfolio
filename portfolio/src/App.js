import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/Navbar";
import MyProfil from "./components/Profil";
import MyProjets from "./components/Projets";
import ContactUs from "./components/Contact";

function App() {
  return (
    <html>
      <body>
        <div className="App">
            <MyNavbar />
            <MyProfil />
            <MyProjets />
            <ContactUs />
        </div>
      </body>
     </html>
  );
}

export default App;
