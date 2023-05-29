import sun from "./img/sun.svg";
import moon from "./img/moon.svg";
import React, {useEffect} from "react";
import {useLocalStorage} from "../../utils/useLocalStorage";
import detectedDarkMade from "../../utils/detectedDarkMode";
import  "./style.css"

const ButtonDark = () => {

    const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectedDarkMade());


    const toggleDarkMode = () => {
        setDarkMode((value: string)=>{
            return value === "light" ? "dark" : "light"
        })
    }

    useEffect(
        ()=>{
            if (darkMode === "dark"){document.body.classList.add("dark")
            }
            else{document.body.classList.remove("dark")}
        } ,[darkMode]
    )

    useEffect(
        ()=>{
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .addEventListener("change", (event) => {
                    const newColorScheme = event.matches ? "dark" : "light";

                   setDarkMode(newColorScheme)
                });
        },[setDarkMode]
    )

    const buttonNormal = "dark-mode-btn"
    const buttonActive = "dark-mode-btn dark-mode-btn--active"

  return(
      <button className={darkMode==="dark" ? buttonActive : buttonNormal} onClick={toggleDarkMode}>

          <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
          <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
      </button>
  );
}
export default ButtonDark;