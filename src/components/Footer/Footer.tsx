import "./style.css"
import vk from "./img/icons/vk.svg";
import gitHub from "./img/icons/gitHub.svg";
import linkedIn from "./img/icons/linkedIn.svg";
import React from "react";

const Footer = () =>{
    return(

        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://vk.com/benzinfinity"><img src={vk} alt="Link"/></a></li>
                        <li className="social__item"><a href="https://github.com/Wasiliii"><img src={gitHub} alt="Link"/></a></li>
                        <li className="social__item"><a href="https://www.linkedin.com/"><img src={linkedIn} alt="Link"/></a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;