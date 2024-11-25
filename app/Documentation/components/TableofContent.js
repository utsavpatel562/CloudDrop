import React from 'react'
import { FaRegFileCode } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

function TableofContent() {
  return (
    <div>
        <div className='bg-zinc-800 p-9'>
            <h1 className='text-zinc-300 font-semibold md:text-3xl flex items-center gap-2'><FaRegFileCode className='md:w-7 md:h-7'/>Documentation</h1>
            <p className='mt-1'>A robust file-sharing platform designed for efficiency, scalability, and user-friendliness.</p>
<div className="rounded-lg flex items-center flex-wrap mt-3">
  <ul className="flex items-center">
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
	<h2 className='font-extrabold text-xl mt-10'>1. Introduction</h2>
	<p className='mt-1 text-zinc-400'>CloudDrop is a modern file-sharing application enabling seamless 
		and secure transfer of files between users. Built for scalability and high availability, it ensures 
		privacy and efficiency in handling file uploads, downloads, and management. Developed using Next.js, React.js, Tailwind CSS, Firebase, Auth. using Clerk.</p>
</div>
<div id='Features'>
<h2 className='font-extrabold text-xl mt-10'>2. Features</h2>
</div>
<div id='TechnologyUsed'>
<h2 className='font-extrabold text-xl mt-10'>3. Technology Used</h2>
</div>
<div id='GettingStarted'>
<h2 className='font-extrabold text-xl mt-10'>4. Getting Started</h2>
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