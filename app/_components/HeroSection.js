"use client"
// Code by Utsav Patel
import React from 'react';
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiClerk } from "react-icons/si";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiFusionauth } from "react-icons/si";
import { TbWorldBolt } from "react-icons/tb";
import { GrLink } from "react-icons/gr";
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

function HeroSection() {
  const { isSignedIn } = useUser(); // useUser used to check whether the user is logged in or not
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

<div className='flex gap-3 justify-center my-10'>
  <Link href={"/files"}><button className='bg-green-600 hover:bg-green-500 rounded-md text-md p-3 md:w-[140px]'>{!isSignedIn ? ( "Get Started" ): ("Access Files")}</button></Link>
  <button className='bg-zinc-900 hover:bg-zinc-800 rounded-md text-md p-3 md:w-[140px]'>Learn More</button>
</div>

      <div className="bg-white dark:bg-zinc-900 h-full py-6 sm:py-8 lg:py-12 mt-16 lg:rounded-lg">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-7 md:mb-7">
            <div className="flex items-center gap-12" id='myServices'>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">What we provide</h2>
            </div>
            <a href="#"
               className="inline-block rounded-lg border bg-white dark:bg-zinc-800 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 focus-visible:ring hover:bg-green-600 md:px-8 md:py-3 md:text-base">
              More
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 xl:gap-6">
          <a href="#" className="group relative flex h-48 items-start overflow-hidden rounded-xl bg-gray-100 shadow-lg md:h-80">
  <img src="/image1.jpg" loading="lazy" alt="Photo by Minh Pham" 
       className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-xl" />
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-800 via-transparent to-transparent opacity-50 rounded-xl"></div>
  
  <div className="relative p-4 text-white md:p-10">
    <div className="flex gap-2 items-center text-sm md:text-lg md:mb-2">
      <SiFusionauth className="w-5 h-5 md:w-6 md:h-6" />
      <span className="md:text-2xl">Secure File Upload</span>
    </div>
    <p className="text-md md:text-justify md:text-lg md:mt-2">
      Upload files with complete peace of mind. CloudDrop ensures each file is securely stored in the cloud with top-tier encryption, keeping your data safe from unauthorized access.
    </p>
  </div>
</a>

<a href="#" className="group relative flex h-48 items-start overflow-hidden rounded-xl bg-gray-100 shadow-lg md:col-span-2 md:h-80">
  <img src="/image5.jpg" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-xl" />
  
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-800 via-transparent to-transparent opacity-50 rounded-xl"></div>
  
  <div className="relative p-4 text-white md:p-10">
    <div className="flex items-center gap-2 text-sm md:text-lg md:mb-2">
      <RiLockPasswordLine className="w-5 h-5 md:w-6 md:h-6" /> {/* Replace SiTech with your desired icon */}
      <span className="md:text-2xl">Password-Protected Sharing</span>
    </div>
    <p className="text-md md:text-lg md:mt-2">
    Enable password protection on your shared files for an extra layer of security. Only users with the password can access and download, ensuring your files reach the right hands.
    </p>
  </div>
</a>


<a href="#" className="group relative flex h-48 items-start overflow-hidden rounded-xl bg-gray-100 shadow-lg md:col-span-2 md:h-80">
  <img src="/image7.jpg" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-xl" />
  
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-800 via-transparent to-transparent opacity-50 rounded-xl"></div>
  
  <div className="relative p-4 text-white md:p-10">
    <div className="flex items-center gap-2 text-sm md:text-lg md:mb-2">
      <TbWorldBolt className="w-5 h-5 md:w-6 md:h-6" /> {/* Replace SiTech with your desired icon */}
      <span className="md:text-2xl">Anywhere, Anytime Access</span>
    </div>
    <p className="text-md md:text-lg md:mt-2">
    Access your files anytime, anywhere. With CloudDrop’s responsive design and cloud storage integration, your files are always just a click away, on any device.
    </p>
  </div>
</a>

<a href="#" className="group relative flex h-48 items-start overflow-hidden rounded-xl bg-gray-100 shadow-lg md:h-80">
  <img src="/image1.jpg" loading="lazy" alt="Photo by Minh Pham" 
       className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-xl" />
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-800 via-transparent to-transparent opacity-50 rounded-xl"></div>
  
  <div className="relative p-4 text-white md:p-10">
    <div className="flex gap-2 items-center text-sm md:text-lg md:mb-2">
      <GrLink className="w-5 h-5 md:w-6 md:h-6" />
      <span className="md:text-2xl">Instant Sharing Links</span>
    </div>
    <p className="text-md text-justify md:text-lg md:mt-2">
    Share files instantly with secure, one-click links. Just upload, generate a unique link, and share it—file sharing has never been easier or more efficient.
    </p>
  </div>
</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
