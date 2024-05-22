import React from 'react'
import HeroImg from "../assets/hero.png"
import { AiOutlineTwitter,AiOutlineLinkedin,AiOutlineInstagram,AiOutlineFacebook } from "react-icons/ai";

export const Hero = () => {

    const config  = {
        subtitle: "I'm a Full-stack developer",
        social: {
            twitter: 'https://x.com/Gokul17122001',
            facebook: 'https://www.facebook.com/profile.php?id=100008305120258',
            linkedin: 'https://www.linkedin.com/in/gokul-reddy-b132a5194/',
            instagram: "https://www.instagram.com/gokul_reddyy/"
        }
    }

  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col '>
            <h1 className='w-1/2 text-white text-6xl font-Hero-font'>Hi,<br/>I'm Gokul K
            <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex text-5xl py-4'>
                <a className='pr-3 hover:text-white' href={config.social.linkedin}><AiOutlineLinkedin/></a>
                <a className='pr-3 hover:text-white' href={config.social.twitter}><AiOutlineTwitter/></a>
                <a className='pr-3 hover:text-white' href={config.social.facebook}><AiOutlineFacebook/></a>
                <a className='pr-3 hover:text-white' href={config.social.instagram}><AiOutlineInstagram/></a>
            </div>
        </div>
        <img className='md:w-1/3 ' src={HeroImg} alt="" />
    </section>
  )
}
