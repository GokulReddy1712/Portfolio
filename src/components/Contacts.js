import React from 'react'
import ResumeImg from "../assets/resume.jpg"


export const Contact = () => {
  return (
    <section id='contact' className='flex flex-col bg-primary px-5 py-32'>
        <div className='flex flex-col items-center text-white'>
            
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
                <p className='py-2'>If you want to discuss more in detail,Please Contact Me</p>
                <p className='py-2'><span className='font-bold'>Email :</span>gokul17122001@gmail.com</p>
                <p className='py-2'><span className='font-bold'>Phone :</span>9940552783</p>
        </div>
    </section>
  )
}