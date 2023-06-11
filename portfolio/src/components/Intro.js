import CV from '../CV GOMIS Nicolas.pdf'
import Space from '../space.jpg';
import MyProfil from './Profil';

function MyCv() {
    return(
        <>
        <div class="container">
            <img id='space' src={Space} alt="space"></img>
            <MyProfil />
            {/* <div class="centered">Centered</div> */}
        </div>
            {/* <a href={CV} download={CV}>
            <img width="100" height="100" src="https://img.icons8.com/stickers/100/parse-resumes.png" alt="parse-resumes"/>
            </a> */}
        </>
    );
}

export default MyCv;