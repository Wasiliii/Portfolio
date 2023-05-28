
import React from "react";
import "./style.css"
import {NavLink} from "react-router-dom";
import ButtonDark from "../ButtonDark/ButtonDark";

const Navbar = ()=> {
    const activeLink: string = "nav-list__link nav-list__link--active";
    const normalLink: string = "nav-list__link";

    return(
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink  to="/" className="logo"><>
                        <strong>Freelancer</strong> portfolio</>
                    </NavLink>
                    {/*<a href="./index.html" className="logo"><strong>Freelancer</strong> portfolio</a>*/}

                   <ButtonDark></ButtonDark>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to ="/" className={({isActive})=>isActive ? activeLink: normalLink}> Home</NavLink>

                        </li>
                        <li className="nav-list__item">
                            <NavLink to ="/projects" className={({isActive})=>isActive ? activeLink: normalLink}> Projects</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to ="/contacts" className={({isActive})=>isActive ? activeLink: normalLink}> Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

