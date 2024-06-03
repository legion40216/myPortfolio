import React from 'react'
import { projectsData } from '../constants/ProjectsConstants'
import ProjectCard from '../components/project-components/project-card'

export default function Projects() {
  return (
    <div className="space-y-4">
      <h2 className=" text-2xl font-medium">Other notable projects</h2>
      <div className=' grid multiple-grid gap-5'>
      {
        projectsData.map((item, index)=>(
     <div>
           <ProjectCard
          key={index}
          img={item.img}
          title={item.title}
          description={item.description}
          tech = {item.technologies}
          link={item.link}
          github={item.github}
          />
     </div>
        ))
      }
      </div>
  </div>
  )
}
