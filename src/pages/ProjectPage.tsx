import img from "./../img/projects/02-big.jpg"
import ButtonGitHub from "../components/ButtomGitHub/ButtonGitHub";
import {useParams} from "react-router-dom";
import {projects} from "../helpers/projectList";

const ProjectPage = () => {
    const {id} = useParams()
    const project = projects[+id!]

return(<main className="section">
    <div className="container">
        <div className="project-details">

            <h1 className="title-1">{project.title}</h1>

            <img src={project.imgBig} alt={project.title} className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>Skills: {project.skills}</p>
                </div>

            {project.gitLink &&
 <ButtonGitHub gitLink={"https://github.com"}></ButtonGitHub>}
        </div>
    </div>
</main> );
}
export default ProjectPage;