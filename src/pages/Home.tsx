import Header from "../components/Header/Header";
import React from "react";

const Home = () => {
return(
<>
    <Header></Header>
    <main className="section">
        <div className="container">

            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Frontend</h2>
                    <p>JavaScript, TypeScript, ReactJS,  Next.js, Solid.js, Redux, mobx, zustand, HTML, CSS, NPM, BootStrap,
                        StyledComponents</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Backend</h2>
                    <p>NodeJS</p>
                </li>
            </ul>

        </div>
    </main>
</>
);
}
 export default Home;