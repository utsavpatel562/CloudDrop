import React from 'react'
import { FaRegFileCode } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";
import { TbFolderShare } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiFirebaseLine } from "react-icons/ri";
import { SiClerk } from "react-icons/si";
import { SiDrizzle } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
function TableofContent() {
  return (
    <div>
        <div className='bg-zinc-800 p-9'>
            <h1 className='text-zinc-300 font-semibold md:text-3xl flex items-center gap-2'><FaRegFileCode className='md:w-7 md:h-7'/>Documentation</h1>
            <p className='mt-1'>A robust file-sharing platform designed for efficiency, scalability, and user-friendliness.</p>
<div className="rounded-lg flex items-center flex-wrap mt-3">
  <ul className="md:flex items-center">
	<li className="inline-flex items-center">
	  <a href="#" className="text-zinc-200 hover:text-green-500">
		<FaCircleArrowRight/>
	  </a>

	  <span className="mx-4 h-auto text-zinc-200 font-medium">/</span>
	</li>

	<li className="inline-flex items-center">
	  <a href="#" className="text-zinc-400 hover:text-green-500">
		Introduction
	  </a>

	  <span className="mx-4 h-auto text-zinc-400 font-medium">/</span>
	</li>

	<li className="inline-flex items-center">
	  <a href="#" className="text-zinc-400 hover:text-green-500">
		Features
	  </a>

	  <span className="mx-4 h-auto text-zinc-400 font-medium">/</span>
	</li>
    <li className="inline-flex items-center">
	  <a href="#" className="text-zinc-400 hover:text-green-500">
		Technology Used
	  </a>

	  <span className="mx-4 h-auto text-zinc-400 font-medium">/</span>
	</li>
    <li className="inline-flex items-center">
	  <a href="#" className="text-zinc-400 hover:text-green-500">
		Getting Started
	  </a>

	  <span className="mx-4 h-auto text-zinc-400 font-medium">/</span>
	</li>
    <li className="inline-flex items-center">
	  <a href="#" className="text-zinc-400 hover:text-green-500">
		API Documentation
	  </a>

	  <span className="mx-4 h-auto text-zinc-400 font-medium">/</span>
	</li>

	<li className="inline-flex items-center">
	  <a href="#" className="text-zinc-400 hover:text-green-500">
		Contact
	  </a>
	</li>
  </ul>
</div>
<div id='Introduction'>
	<h2 className='font-extrabold text-xl mt-10'>Introduction</h2>
	<p className='mt-2 text-zinc-400 bg-zinc-900 p-3 rounded-lg'>CloudDrop is a modern file-sharing application enabling seamless 
		and secure transfer of files between users. Built for scalability and high availability, it ensures 
		privacy and efficiency in handling file uploads, downloads, and management. Developed using Next.js, React.js, Tailwind CSS, Firebase, Auth. using Clerk.</p>
</div>
<div id='Features'>
<h2 className='font-extrabold text-xl mt-10'>Features</h2>
<div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-3">
  <div className="p-8 bg-zinc-900 rounded-xl cursor-pointer">
    <div
      className="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl"
    >
      <MdOutlineFileUpload className='md:w-8 md:h-8'/>
    </div>
    <h2 className="uppercase mt-6 text-indigo-500 font-medium mb-3">
      File Upload
    </h2>
    <p className="font-light text-sm text-gray-500 mb-3">
	Securely upload files to the cloud with the power of firebase by Google, terms and conditions apply.
    </p>
    <a className="text-indigo-500 flex items-center hover:text-indigo-600" href="/">
      Learn More
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  </div>

  <div className="p-8 bg-zinc-900 rounded-xl cursor-pointer">
    <div
      className="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl"
    >
      <TbFolderShare className='md:w-8 md:h-8'/>
    </div>
    <h2 className="uppercase mt-6 text-green-500 font-medium mb-3">
	File Sharing
    </h2>
    <p className="font-light text-sm text-gray-500 mb-3">
	Generate shareable links for easy access. Share files with anyone, anywhere, anytime with password protection.
    </p>
    <a className="text-green-500 flex items-center hover:text-green-600" href="/">
      Learn More
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  </div>
  <div className="p-8 bg-zinc-900 rounded-xl cursor-pointer">
    <div
      className="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl"
    >
     <RiTailwindCssLine className='md:w-8 md:h-8'/> 
    </div>
    <h2 className="uppercase mt-6 text-red-500 font-medium mb-3">
	Responsive Design
    </h2>
    <p className="font-light text-sm text-gray-500 mb-3">
	Fully optimized for mobile and desktop users. Our responsive design ensures a seamless user experience across all devices.
    </p>
    <a className="text-red-500 flex items-center hover:text-red-600" href="/">
      Learn More
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  </div>
</div>
</div>
<div id='TechnologyUsed'>
<h2 className='font-extrabold text-xl mt-10'>Technology Used</h2>
<div className="md:flex gap-4 mt-2">
    <div draggable="true" role="button" title="Hover chip"
        className="hover:bg-black h-10 px-3 w-full mt-3 md:mt-2 justify-center flex gap-2 items-center rounded-full border border-zinc-600 text-gray-700 focus:bg-gray-300 focus:text-blue-900 active:text-yellow-500 active:bg-yellow-50  disabled:bg-gray-100 disabled:text-gray-400 dark:bg-zinc-900 dark:text-gray-300 dark:active:text-yellow-400">
       <RiNextjsLine className='md:w-5 md:h-5'/>
        <span className="block text-sm font-medium">Next.js</span>
    </div>
	<div draggable="true" role="button" title="Hover chip"
        className="hover:bg-sky-600 h-10 px-3 mt-3 md:mt-2 w-full justify-center flex gap-2 items-center rounded-full border border-zinc-600 text-gray-700 focus:bg-gray-300 focus:text-blue-900 active:text-yellow-500 active:bg-yellow-50  disabled:bg-gray-100 disabled:text-gray-400 dark:bg-zinc-900 dark:text-gray-300 dark:active:text-yellow-400">
       <FaReact className='md:w-5 md:h-5'/>
        <span className="block text-sm font-medium">React.js</span>
    </div>
	<div draggable="true" role="button" title="Hover chip"
        className="hover:bg-orange-500 h-10 px-3 mt-3 md:mt-2 w-full justify-center flex gap-2 items-center rounded-full border border-zinc-600 text-gray-700 focus:bg-gray-300 focus:text-blue-900 active:text-yellow-500 active:bg-yellow-50  disabled:bg-gray-100 disabled:text-gray-400 dark:bg-zinc-900 dark:text-gray-300 dark:active:text-yellow-400">
       <RiFirebaseLine className='md:w-5 md:h-5'/>
        <span className="block text-sm font-medium">Firebase</span>
    </div>
	<div draggable="true" role="button" title="Hover chip"
        className="hover:bg-green-700 h-10 px-3 mt-3 md:mt-2 w-full justify-center flex gap-2 items-center rounded-full border border-zinc-600 text-gray-700 focus:bg-gray-300 focus:text-blue-900 active:text-yellow-500 active:bg-yellow-50  disabled:bg-gray-100 disabled:text-gray-400 dark:bg-zinc-900 dark:text-gray-300 dark:active:text-yellow-400">
       <IoLogoNodejs className='md:w-5 md:h-5'/>
        <span className="block text-sm font-medium">Node.js</span>
    </div>
	<div draggable="true" role="button" title="Hover chip"
        className="hover:bg-purple-600 h-10 px-3 mt-3 md:mt-2 w-full justify-center flex gap-2 items-center rounded-full border border-zinc-600 text-gray-700 focus:bg-gray-300 focus:text-blue-900 active:text-yellow-500 active:bg-yellow-50  disabled:bg-gray-100 disabled:text-gray-400 dark:bg-zinc-900 dark:text-gray-300 dark:active:text-yellow-400">
       <SiClerk className='md:w-5 md:h-5'/>
        <span className="block text-sm font-medium">Clerk</span>
    </div>
	<div draggable="true" role="button" title="Hover chip"
        className="hover:bg-cyan-500 h-10 px-3 mt-3 md:mt-2 w-full justify-center flex gap-2 items-center rounded-full border border-zinc-600 text-gray-700 focus:bg-gray-300 focus:text-blue-900 active:text-yellow-500 active:bg-yellow-50  disabled:bg-gray-100 disabled:text-gray-400 dark:bg-zinc-900 dark:text-gray-300 dark:active:text-yellow-400">
       <RiTailwindCssFill className='md:w-5 md:h-5'/>
        <span className="block text-sm font-medium">Tailwind CSS</span>
    </div>
	<div draggable="true" role="button" title="Hover chip"
        className="hover:bg-lime-700 h-10 px-3 mt-3 md:mt-2 w-full justify-center flex gap-2 items-center rounded-full border border-zinc-600 text-gray-700 focus:bg-gray-300 focus:text-blue-900 active:text-yellow-500 active:bg-yellow-50  disabled:bg-gray-100 disabled:text-gray-400 dark:bg-zinc-900 dark:text-gray-300 dark:active:text-yellow-400">
       <SiDrizzle className='md:w-5 md:h-5'/>
        <span className="block text-sm font-medium">Drizzle ORM</span>
    </div>
</div>
</div>
<div id='GettingStarted'>
<h2 className='font-extrabold text-xl mt-10'>4. Getting Started</h2>
<div className='md:flex gap-10'>
    <ul className="mt-3 space-y-3 font-medium">
        <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>
                </svg>
            </div>
            <p className="ml-3 leading-5 text-zinc-400">
			Node.js (greater or equals v14.x)
            </p>
        </li>
        <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>
                </svg>
            </div>
            <p className="ml-3 leading-5 text-zinc-400">
			MongoDB installed locally or an Atlas account
            </p>
        </li>
        <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>
                </svg>
            </div>
            <p className="ml-3 leading-5 text-zinc-400">
			Firebase / AWS credentials
            </p>
        </li>
        <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>
                </svg>
            </div>
            <p className="ml-3 leading-5 text-zinc-400">
			A .env file for environment variables.
            </p>
        </li>
    </ul>
	<div className='md:flex gap-3 md:w-fit'>
	<div className='bg-zinc-900 p-3 text-zinc-300 rounded-xl md:mb-3'>
		<h3 className='text-lg font-semibold'>Installation</h3>
		<code
    className="my-2 md:w-fit text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-zinc-800 text-white rounded-lg p-4 pl-6">
    <span className="flex gap-4">
        <span className="shrink-0 text-gray-500">
            $
        </span>

        <span className="flex-1">
            <span>
			git clone https://github.com/utsavpatel562/CloudDrop.git
            </span>
<br/>
            <span className="text-yellow-500">
			cd CloudDrop
            </span>
        </span>
    </span>

    <svg className="shrink-0 h-5 w-5 transition text-gray-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
        <path
            d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
        </path>
    </svg>
</code>
<code
    className="my-2 md:w-fit text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-zinc-800 text-white rounded-lg p-4 pl-6">
    <span className="flex gap-4">
        <span className="shrink-0 text-gray-500">
            $
        </span>

        <span className="flex-1">
            <span>
			npm install # install dependencies
            </span>
<br/>
            <span className="text-yellow-500">
			npm run dev # start the development server locally
            </span>
        </span>
    </span>

    <svg className="shrink-0 h-5 w-5 transition text-gray-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
        <path
            d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
        </path>
    </svg>
</code>
	</div>
		<div className='bg-zinc-900 p-3 text-zinc-300 rounded-xl'>
		<h3 className='text-lg font-semibold'>Configure the environment variables:</h3>
		<code
    className="my-2 text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-zinc-800 text-white rounded-lg p-4 pl-6">
    <span className="flex gap-4">
        <span className="shrink-0 text-gray-500">
            $
        </span>

        <span className="flex-1">
            <span>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="YOUR_KEY"
CLERK_SECRET_KEY="YOUR_KEY"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="YOUR_KEY"
NEXT_PUBLIC_CLERK_SIGN_UP_URL=""YOUR_KEY""
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="YOUR_KEY"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="YOUR_KEY"
NEXT_FIREBASE_API_KEY="YOUR_KEY"
NEXT_FIREBASE_AUTH_DOMAIN="YOUR_KEY"
NEXT_FIREBASE_PROJECT_ID="YOUR_KEY"
NEXT_FIREBASE_STORAGE_BUCKET="YOUR_KEY"
NEXT_FIREBASE_MESSAGING_SENDER_ID="YOUR_KEY"
NEXT_FIREBASE_APP_ID="YOUR_KEY"
NEXT_FIREBASE_MEASUREMENT_ID="YOUR_KEY"
            </span>
<br/>
            <span className="text-yellow-500">
			cd CloudDrop
            </span>
        </span>
    </span>

    <svg className="shrink-0 h-5 w-5 transition text-gray-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
        <path
            d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
        </path>
    </svg>
</code>
	</div>
	</div>
</div>
</div>
<div id='APIDocumentation'>
<h2 className='font-extrabold text-xl mt-10'>5. API Documentation</h2>
</div>
<div id='Contact'>
<h2 className='font-extrabold text-xl mt-10'>6. Contact</h2>
</div>
        </div>
    </div>
  )
}

export default TableofContent