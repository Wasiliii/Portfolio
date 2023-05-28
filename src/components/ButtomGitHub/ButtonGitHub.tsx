import "./style.css"
import img from "../../img/projects/02-big.jpg";
import imgGit from "./img/gitHub-black.svg";

type ButtonGitHubProps = {
    gitLink: string;
}

const ButtonGitHub = ({gitLink}: ButtonGitHubProps) => {
  return( <a href={gitLink} className="btn-outline">
        <img src={imgGit} alt=""/>
        GitHub repo
      </a>
  );
}
export default ButtonGitHub;