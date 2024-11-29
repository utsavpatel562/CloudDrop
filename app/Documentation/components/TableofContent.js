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
<div className="grid grid-cols-1 md:grid-cols-3">
  <div className="p-8">
    <div
      className="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <h2 className="uppercase mt-6 text-indigo-500 font-medium mb-3">
      Social conversations
    </h2>
    <p className="font-light text-sm text-gray-500 mb-3">
      We get insulted by others, lose trust for those others. We get back
      stabbed by friends. It becomes harder for us to give others a hand.
    </p>
    <a className="text-indigo-500 flex items-center hover:text-indigo-600" href="/">
      More about us icon
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

  <div className="p-8">
    <div
      className="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <h2 className="uppercase mt-6 text-green-500 font-medium mb-3">
      Social conversations
    </h2>
    <p className="font-light text-sm text-gray-500 mb-3">
      We get insulted by others, lose trust for those others. We get back
      stabbed by friends. It becomes harder for us to give others a hand.
    </p>
    <a className="text-green-500 flex items-center hover:text-green-600" href="/">
      More about us icon
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
  <div className="p-8">
    <div
      className="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <h2 className="uppercase mt-6 text-red-500 font-medium mb-3">
      Social conversations
    </h2>
    <p className="font-light text-sm text-gray-500 mb-3">
      We get insulted by others, lose trust for those others. We get back
      stabbed by friends. It becomes harder for us to give others a hand.
    </p>
    <a className="text-red-500 flex items-center hover:text-red-600" href="/">
      More about us icon
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