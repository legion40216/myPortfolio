import React from 'react'
import { MoveRight } from 'lucide-react';
import FeaturedCard from "../components/home-components/featured-card";
import { featuredCardData } from "../constants/featuredConstants";
import { skillsData } from "../constants/skillsConstants";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
        
          <div className=" space-y-9">
            <div className='flex flex-col-reverse sm:flex-row gap-10 items-center'>

              <div className=" text-center sm:text-start space-y-4">
                  <div>
                    <h1 className=" text-4xl font-bold">Suleman Lohar</h1>
                    <p className=' font-medium'>Fullstack Developer</p>
                  </div>
                  <div>
                    <p  className='text-sm'>
                    Hello! I'm <strong>Suleman Lohar</strong>, a passionate full-stack developer who loves 
                    bringing ideas to life through code. I enjoy building web applications that 
                    are not only functional but also delightful to use. 
                    Check out some of my favorite projects below!
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
              <Link href="project" 
              className=" 
              hover:bg-gray-200 border-gray-200
              dark:hover:bg-slate-700 dark:border-slate-700 
              w-max flex gap-2 p-2 px-3 
              rounded text-sm border-[2px]"
              >
              <span>View all projects</span> 
              <MoveRight className="h-5 w-5"/>
              </Link>
            </div>

            <div className="space-y-4">
              <div>
                <h1 className=" text-2xl font-medium">Skills</h1>
              </div>
              <div className="flex gap-4 flex-wrap">
              {
                skillsData.map((item, index)=>(
                <span key={index} className="tags dark:bg-slate-700 bg-gray-300  ">
                    {item.title}
                </span>
                ))
              }
              </div>
        
            </div>
          </div>
  )
}
