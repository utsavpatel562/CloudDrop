import React from 'react'
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiClerk } from "react-icons/si";
function HeroSection() {
  return (
    <div className='p-10'>
        <div className='md:mt-20'>
            <h2 className='md:text-5xl text-center font-bold'>Effortlessly Share and Manage <span className='text-green-500 font-extrabold'>Your Files!</span></h2>
            <p className='md:mt-3 md:w-[85%] text-slate-400 text-center md:m-auto text-xl'>With our seamless cloud storage integration and intuitive interface, quickly upload, organize, and access your files anytime, anywhere. Spend less time searching and more time collaborating.</p>
            <div className='md:flex items-center gap-2 w-fit md:m-auto md:mt-5'>
                <h2 className='font-extrabold text-lg'>Powered by</h2>
                <RiNextjsFill className='w-8 h-8 hover:bg-zinc-400 hover:text-slate-950 rounded-full p-1' />
                <FaReact className='w-7 h-7 hover:bg-sky-300 hover:text-slate-950 font-bold rounded-full p-1' />
                <RiTailwindCssFill className='w-7 h-7 hover:bg-slate-300 hover:text-cyan-600 font-bold rounded-full p-1'  />
                <IoLogoFirebase className='w-7 h-7 hover:bg-slate-300 hover:text-orange-500 font-bold rounded-full p-1'   />
                <SiClerk className='w-7 h-7 hover:bg-slate-300 hover:text-indigo-600 font-bold rounded-full p-1'/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection