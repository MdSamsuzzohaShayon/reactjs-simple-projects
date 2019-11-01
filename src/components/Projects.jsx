import ProjectItem from './ProectItem';
import React, { Component } from 'react'



//STATE HELPS TO CONNECT DATABASE
// FOR TRANSFER PROPERTIES CLASS TO CLASS WE DON'T NEED TO PASS PERAMETERS
//

class Projects extends Component {


  render() {
    //LOGGIN AND GETTING EACH INDIVIDUAL PROJECT
    let projectItem ;
    if(this.props.projects){
      projectItem  =this.props.projects.map(project =>{
        //console.log(project);
        return (<ProjectItem key={project.title} project= {project}/>);
      })
    }



      //STATE OF APP CLASS WILL BE PROPS IN THIS CLASS
      // AND THOSE PROPS WILL WORK IN ONLY RENDER METHOD
        console.log(this.props);
    return (
      <div className="Projects">
        My Project
        {this.props.test}
        {projectItem }
      </div>
    );
  }
}
export default Projects;
