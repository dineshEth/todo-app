import React from 'react'
import { instagram, github,linkedin, youtube, twitter } from '../assets'

const Footer = () => {
  return (
    <div className='text-white relative z-10 p-4 bottom-0 left-0 right-0 w-full bg-[#112A46] flex flex-col justify-center items-center'>
        <p className='text-[24px] my-4'>Follow us</p> 
        <div className='flex flex-row flex-wrap w-full gap-8 justify-center items-center'>
            <a href="https://www.instagram.com/cs_dinez" className='text-white w-12 '>
                <img src={instagram} alt="social" className='w-full object-contain' />
            </a>
            <a href="https://www.youtube.com/@dineshTechfi" className='text-white w-12'>
                <img src={youtube} alt="social" />
            </a>
            <a href="https://www.github.com.dineshEth" className='text-white w-12'>
                <img src={github} alt="social" />
            </a>
            <a href="https://www.linkedin.com/in/dinesh-prajapati-26b1a7216/" className='text-white w-12 '>
                <img src={linkedin} alt="social" />
            </a>
            <a href="https://www.x.com/dinesh_eth" className='text-white w-12 '>
                <img src={twitter} alt="social" />
            </a>
        </div>  
        <p className='text-[24px] my-4'>Copyright 2024</p> 
    </div>
  )
}

export default Footer