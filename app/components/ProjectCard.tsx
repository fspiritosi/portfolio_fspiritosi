'use client'
import MyData from "../data/dataProjects"


function ProjectCard(props:MyData) {
    console.log(props)
  return (
    <>
      
      <p>{props.title}</p>
    </>
  );
}

export default ProjectCard