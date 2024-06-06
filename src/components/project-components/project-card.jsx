import React from 'react'
import { Github, Link  } from 'lucide-react';


export default function ProjectCard({
    img,
    title,
    description,
    tech,
    link,
    github,
}) {
  return (

    <div className='
    bg-gray-100 hover:hover:bg-gray-200
    dark:bg-slate-700 dark:hover:bg-slate-600 
    space-y-5 flex flex-col justify-between
    p-2 rounded-md
    '>
    <div className=' space-y-2'>
        <div className='img-wrapper rounded overflow-hidden 
        overflow-y-auto max-h-[160px]'
        >
            <a href={link ? link : "/"} target="_blank" rel="noreferrer">
                <img src={img} alt=""/>
            </a>
        </div>
        <div className='text-wrapper space-y-5'>
            <div> 
                <a href={link ? link : "/"} className='hover:underline' target="_blank" rel="noreferrer">
                    <h4 className='text-sm font-medium'>
                        {title}
                    </h4>
                </a>
                <p className='text-xs'>
                    {description}
                </p>
            </div>
        </div>
    </div>

   <div className='grid gap-2'>
   <div className='flex flex-wrap gap-1'>
        {tech &&
        tech.map((item, index)=>(
        <span key={index} 
        className="
        dark:bg-neutral-900 bg-neutral-400 
        tags text-xs text-white ">
            {item}
        </span>
        ))
        }
    </div>

        <div className='flex gap-1'>
        <a href={github ? github : "/"} target="_blank" rel="noreferrer">
            <div className='
            bg-gray-300 hover:bg-slate-300  
            dark:bg-slate-800 dark:hover:bg-slate-700 
            p-1 rounded'
            >
                <Github className="h-5 w-5"/>
            </div>
        </a>
            <a href={link ? link : "/"} target="_blank" rel="noreferrer">
            <div className='bg-gray-300 hover:bg-slate-300  
            dark:bg-slate-800 dark:hover:bg-slate-700 
            p-1 rounded'
            >
            <Link className="h-5 w-5"/>
            </div>
            </a>
        </div>
   </div>
</div>
  )
}
