import React from 'react'
import websiteImg1 from "../assets/ecommerce-websites.jpg"
import websiteImg2 from "../assets/food-ecommerce.jpg"
import websiteImg3 from "../assets/website-blog.jpg"

export const Projects = () => {
    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Ecommerce Website. Built with MERN Stack.',
                link: 'https://github.com/jvlcode/jvlcart'
            },
            {
                image: websiteImg2,
                description: 'Food Ecommerce website like Swiggy, Built with Angular & .Net',
                link: 'https://github.com/jvlcode/food'
            },
            {
                image: websiteImg3,
                description: 'Basic Blog Website . Built with Next JS and MongoDB',
                link: 'https://github.com/jvlcode/blog'
            }
        ]
    }
  return (
    <section id='project' className='flex flex-col px-5 py-20 justify-center bg-primary text-white'>
        <div className='w-full'>
            <div className='flex flex-col px-10 py-5'>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
                <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out </p>
            </div>
        </div>
        <div className='w-full'>
            <div className='flex flex-col md:flex-row px-5 gap-4'>
                {config.projects.map((project)=>(
                <div className='relative'>
                    <img className="h-[200px] w-[400px]" src={project.image} alt="" />
                    <div className='project-desc'>
                        <p className='text-center py-5 px-5' >{project.description}</p>
                        <div className='flex justify-center'>
                            <a className='btn' href="_blank">view project</a>
                        </div>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    </section>
  )
}
