import React from 'react'
import { MoveRight } from 'lucide-react';
import FeaturedCard from "../components/home-components/featured-card";
import { featuredCardData } from "../constants/featuredConstants";
import { skillsData } from "../constants/skillsConstants";

export default function Home() {
  return (
        
          <div className=" space-y-9">
            <div className='flex flex-col-reverse sm:flex-row gap-10 items-center'>
              <div className=" space-y-4">
                  <div>
                    <h1 className=" text-4xl font-bold">Suleman Lohar</h1>
                    <p>Fullstack Developer</p>
                  </div>
                  <div>
                    <p  className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae accusamus impedit ab provident quia laborum aut debitis suscipit porro 
                      ipsum natus autem officia totam mollitia, animi amet officiis ratione dolor?
                    </p>
                  </div>
              </div>
              <div className='rounded-full overflow-hidden w-full sm: max-w-[300px]'>
                <img src="https://github.com/shadcn.png" alt="" />
              </div>
            </div>
      

            <div className="space-y-4">
              <h2 className=" text-2xl font-medium">Featured Projects</h2>
              {
                featuredCardData.map((item, index)=>(
                  <FeaturedCard 
                  key={index}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  github={item.github}
                  tech={item.technologies}
                  />
                ))
              }
            </div>

            <div>
              <a href="project" 
              className=" w-max flex gap-2 hover:bg-slate-700 
              p-2 px-3 rounded text-sm"
              >
              <span>View all projects</span> 
              <MoveRight className="h-5 w-5"/>
              </a>
            </div>

            <div className="space-y-4">
              <div>
                <h1 className=" text-2xl font-medium">Skills</h1>
              </div>
              <div className="flex gap-4 flex-wrap">
              {
                skillsData.map((item, index)=>(
                <span key={index} className="tags bg-slate-700  ">
                    {item.title}
                </span>
                ))
              }
              </div>
        
            </div>
          </div>
  )
}
