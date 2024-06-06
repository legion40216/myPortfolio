import React from 'react'
import { Github, Link  } from 'lucide-react';

export default function FeaturedCard({
    img,
    title,
    description,
    link,
    github,
    tech,
}) {
  return (
    <div className="bg-gray-100 hover:hover:bg-gray-200
    dark:bg-slate-700 dark:hover:bg-slate-600 
    p-3 rounded-md
    ">
      <div className='flex flex-col sm:flex-row gap-4 justify-between'>
  
        <div className='flex items-center sm:max-w-[220px] '>
          <div className='img-wrapper rounded overflow-hidden'>
              <a href={link ? link : "/"}  target="_blank" rel="noreferrer">
                <img src={img} alt=""  />
              </a>
            </div>
        </div>
          
        

          <div className="flex flex-col justify-between gap-4 text-wrapper">
            <div>
              <a href={link ? link : "/"} className=" hover:underline" target="_blank" rel="noreferrer">
                <h4 className='text-lg font-medium'>{title}</h4>
              </a>
              <p className='text-sm'>
                {description}
              </p>
            </div>

            <div className='flex flex-wrap  gap-1'>
              { tech &&
                tech.map((item, index)=>(
                <span key={index} className="tags text-sm 
                dark:bg-neutral-900 bg-neutral-400 text-white ">
                  {item}
                </span>
                ))
              }
            </div>
          </div>

        <div className='flex flex-row sm:flex-col gap-1'>
          <a href={github ? github : "/"} target="_blank" rel="noreferrer">
              <div className='
              bg-gray-300 hover:bg-slate-300  
              dark:bg-slate-800 dark:hover:bg-slate-700 
              p-1 rounded'>
                  <Github className="h-5 w-5"/>
              </div>
          </a>
          <a href={link ? link : "/"} target="_blank" rel="noreferrer">
             <div className='
              bg-gray-300 hover:bg-slate-300  
              dark:bg-slate-800 dark:hover:bg-slate-700 
              p-1 rounded'>
              <Link className="h-5 w-5"/>
              </div>
          </a>
        </div>
      </div>
  </div>
  )
}
