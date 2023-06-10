
function Apropos(){
    return (
        <h1>A propos de moi :</h1>
    );
}

function contenu(){
    const myElement = (
        <div id="profil">
            <h1 id="h1Profil">À Propos de moi :</h1>
            <p id="pProfil">Du haut de mes 21 ans j’ai décidé de me réorienter à la Web@cadémie,
                 une école spécialisée dans le développement web.
                  Afin de compléter ma formation et d'acquérir une expérience professionnelle concrète,
                   je suis à la recherche d'une alternance de 14 mois.
                   Au cours de ma formation, j'ai appris les langages de programmation les plus courants tels que
                    HTML, CSS, JavaScript, PHP, ainsi que les frameworks les plus utilisés comme Symfony/Laravel et React.
                     J'ai également eu l'opportunité de travailler sur plusieurs projets web, en équipe ou en individuel,
                      ce qui m'a permis d'acquérir une expérience pratique. Je suis passionné par le développement web,
                       j'aime découvrir de nouvelles technologies et approches pour améliorer mes compétences.
                        Je suis également capable de travailler en autonomie et de m'adapter à des environnements de travail différents.
</p>
        </div>
      );
    return (
        myElement
    );
}

function MyProfil(){
    return (
        // Apropos(),
        contenu()
    );
}

export default MyProfil