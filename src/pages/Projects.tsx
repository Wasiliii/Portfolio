import Project from "../components/Project/Project";
import {projects} from "./../helpers/projectList"
import { v4 as uuidv4 } from 'uuid';




const Projects  = () => {
   return(<main className="section">
    <div className="container">
     <h2 className="title-1">Projects</h2>
     <ul className="projects">

      {projects.map((project, index)=>{
       return(<Project key={uuidv4()} title={project.title as string} img={project.img} index={index}  ></Project>)
      })}



     </ul>
    </div>
   </main>);
 }
export default Projects;