import CV from '../CV GOMIS Nicolas.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';


function contenu() {
    AOS.init();
  const myElement = (
    <div id="profil">
      <h1 id="h1Profil">À Propos de moi :</h1>
      <p id="pProfil" data-aos="zoom-in">
        Du haut de mes 21 ans j’ai décidé de me réorienter à la Web@cadémie, une
        école spécialisée dans le développement web. Afin de compléter ma
        formation et d'acquérir une expérience professionnelle concrète, je suis
        à la recherche d'une alternance de 14 mois. Au cours de ma formation,
        j'ai appris les langages de programmation les plus courants tels que
        HTML, CSS, JavaScript, PHP, ainsi que les frameworks les plus utilisés
        comme Symfony/Laravel et React. J'ai également eu l'opportunité de
        travailler sur plusieurs projets web, en équipe ou en individuel, ce qui
        m'a permis d'acquérir une expérience pratique. Je suis passionné par le
        développement web, j'aime découvrir de nouvelles technologies et
        approches pour améliorer mes compétences. Je suis également capable de
        travailler en autonomie et de m'adapter à des environnements de travail
        différents.
      </p>
      <h3 style={{ color: "white", fontFamily: "fantasy" }}>Mon cv et mes réseaux juste ici <img width="30" height="30" src="https://img.icons8.com/fluency/48/long-arrow-down.png" alt="long-arrow-down"/></h3>
      <a href={CV} download={CV}  ><img width="100" height="100" src="https://img.icons8.com/nolan/100/resume.png" alt="cv" data-aos="flip-left"/></a>
      <a href='https://github.com/Laconi-tech' target="_blank"><img width="100" height="100" src="https://img.icons8.com/nolan/100/github.png" alt="github" data-aos="flip-left"/></a>
      <a href='https://www.linkedin.com/in/nicolas-gomis-dev/' target="_blank"><img width="100" height="100" src="https://img.icons8.com/nolan/100/linkedin.png" alt="linkedin" data-aos="flip-left"/></a>
    </div>
  );
  return myElement;
}

function MyProfil() {
  return (
    contenu()
  );
}

export default MyProfil;
