import MyProfil from "./Profil";

function MyTest() {
    return (
        <div>
            <MyProfil />
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div id='title'>
            <span>
                {/* PURE CSS */}
                Portfolio
            </span>
            <br></br>
            <span>
                {/* PARALLAX PIXEL STARS */}
            </span>
            </div>
        </div>
    );
}

export default MyTest;