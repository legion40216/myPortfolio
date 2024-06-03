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
<div className='project-card space-y-5 flex flex-col justify-between'>
    <div className=' space-y-2'>
        <div className='img-wrapper rounded overflow-hidden overflow-y-auto max-h-[160px]'>
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
        className="tags bg-neutral-900 text-xs">
            {item}
        </span>
        ))
        }
    </div>

        <div className='flex gap-1'>
        <a href={github ? github : "/"} target="_blank" rel="noreferrer">
            <div className='p-1 bg-slate-800 hover:bg-slate-700 rounded'>
                <Github className="h-5 w-5"/>
            </div>
        </a>
            <a href={link ? link : "/"} target="_blank" rel="noreferrer">
            <div className='p-1 bg-slate-800 hover:bg-slate-700  rounded'>
            <Link className="h-5 w-5"/>
            </div>
            </a>
        </div>
   </div>
</div>
  )
}
