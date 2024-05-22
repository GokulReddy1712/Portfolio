import React from 'react'
import ResumeImg from "../assets/resume.jpg"


export const Resume = () => {

  return (
    <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='md:w-1/2 py-5 flex justify-center'>
            <img className='w-[300px]' src={ResumeImg} alt="" />
        </div>
        <div className='md:w-1/2 flex justify-center text-white'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='py-2'>You Can View My Resume <a className='btn' href="#http://localhost:3000/" download>Download</a></p>
            </div>
        </div>
    </section>
  )
}