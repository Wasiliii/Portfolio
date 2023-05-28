import sun from "./img/sun.svg";
import moon from "./img/moon.svg";
import React, {useEffect, useRef} from "react";
import {useLocalStorage} from "../../utils/useLocalStorage";
import detectedDarkMade from "../../utils/detectedDarkMode";


const ButtonDark = () => {

    const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectedDarkMade());

    const buttonRef = useRef<HTMLButtonElement>(null);
    const toggleDarkMode = () => {
        setDarkMode((value: string)=>{
            return value === "light" ? "dark" : "light"
        })
    }

    useEffect(
        ()=>{
            if (darkMode === "dark"){document.body.classList.add("dark")
                buttonRef.current && buttonRef.current.classList.add("dark-mode-btn")
            }
            else{document.body.classList.remove("dark")}
            buttonRef.current && buttonRef.current.classList.remove("dark-mode-btn")
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
        },[]
    )

  return(
      <button ref={buttonRef} className="dark-mode-btn" onClick={toggleDarkMode}>

          <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
          <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
      </button>
  );
}
export default ButtonDark;