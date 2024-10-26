import React from 'react';
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiClerk } from "react-icons/si";

function HeroSection() {
  return (
    <div className='px-4 py-8 md:px-10 md:py-16 lg:py-20'>
        <div className='md:mt-12 lg:mt-20 text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
              Effortlessly Share and Manage <span className='text-green-500 font-extrabold'>Your Files!</span>
            </h2>
            <p className='mt-4 text-base md:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto'>
              With our seamless cloud storage integration and intuitive interface, quickly upload, organize, and access your files anytime, anywhere. Spend less time searching and more time collaborating.
            </p>
            <div className='flex flex-wrap justify-center items-center gap-3 md:gap-4 mt-6 md:mt-4 lg:mt-4'>
                <h2 className='font-extrabold text-lg md:text-xl'>Powered by</h2>
                <RiNextjsFill className='w-7 h-7 md:w-8 md:h-8 hover:bg-zinc-400 hover:text-slate-950 rounded-full p-1' />
                <FaReact className='w-7 h-7 md:w-8 md:h-8 hover:bg-sky-300 hover:text-slate-950 font-bold rounded-full p-1' />
                <RiTailwindCssFill className='w-7 h-7 md:w-8 md:h-8 hover:bg-slate-300 hover:text-cyan-600 font-bold rounded-full p-1' />
                <IoLogoFirebase className='w-7 h-7 md:w-8 md:h-8 hover:bg-slate-300 hover:text-orange-500 font-bold rounded-full p-1' />
                <SiClerk className='w-7 h-7 md:w-8 md:h-8 hover:bg-slate-300 hover:text-indigo-600 font-bold rounded-full p-1'/>
            </div>
        </div>
    <div className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12 mt-10 lg:rounded-lg">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-7 md:mb-7">
            <div className="flex items-center gap-12">
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">What we provide</h2>
            </div>

            <a href="#"
                className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 focus-visible:ring hover:bg-green-600 md:px-8 md:py-3 md:text-base">
                More
            </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </a>
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
            </a>
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
            </a>
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
            </a>
        </div>
    </div>
</div>
    </div>
  );
}

export default HeroSection;
