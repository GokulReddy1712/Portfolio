import React from 'react'
import AboutImg from "../assets/about.png"


export const About = () => {
    const config  = {
        line1: 'Hi, My name is JV Logesh. I am a Full stack web developer. I built beautiful Websites with React.js , Tailwind CSS + Bootstrap',
        line2: 'I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.',
        line3: 'In backend I know Node.js, Express.js, MongoDB, and Mongoose'
    }
  return (
    <section id='about' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='w-1/2 py-5'>
            <img src={AboutImg} alt="" />
        </div>
        <div className='w-1/2 flex justify-center text-white'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='py-2'>{config.line1}</p>
                <p className='py-2'>{config.line2}</p>
                <p className='py-2'>{config.line3}</p>
            </div>
        </div>
    </section>
  )
}
