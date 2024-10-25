import React from 'react'
import { GoHome } from "react-icons/go";
import { PiCodesandboxLogoFill } from "react-icons/pi";
import { CgFileDocument } from "react-icons/cg";
import { RiServiceLine } from "react-icons/ri";
import { TbLogin2 } from "react-icons/tb";
import { LuUserPlus2 } from "react-icons/lu";
function Header() {
  return (
    <div>
      <header className="bg-white dark:bg-transparent">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600 dark:text-teal-600" href="#">
          <span className="sr-only">Home</span>
         <img src='/logo2.png' alt='logo2' className='w-[200px] p-1'/>
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-md">
            <li>
              <a
                className="flex gap-2 items-center text-gray-500 transition hover:bg-zinc-800 rounded-full pt-2 pb-2 pr-3 pl-3 hover:font-semibold dark:text-white"
                href="#"
              >
                <GoHome className='w-4 h-4' />
                Home
              </a>
            </li>
            <li>
              <a
                className="flex gap-2 items-center text-gray-500 transition hover:bg-zinc-800 rounded-full pt-2 pb-2 pr-3 pl-3 hover:font-semibold dark:text-white"
                href="#"
              >
                <RiServiceLine className='w-4 h-4' />
                Services
              </a>
            </li>
            <li>
              <a
               className="flex gap-2 items-center text-gray-500 transition hover:bg-zinc-800 rounded-full pt-2 pb-2 pr-3 pl-3 hover:font-semibold dark:text-white"
                href="#"
              >
                <CgFileDocument className='w-4 h-4'/>
                Docs
              </a>
            </li>
            <li>
              <a
                className="flex gap-2 items-center text-gray-500 transition hover:bg-zinc-800 rounded-full pt-2 pb-2 pr-3 pl-3 hover:font-semibold dark:text-white"
                href="#"
              >
                <PiCodesandboxLogoFill className='w-4 h-4'/>
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-2">
          <a
            className="flex gap-2 items-center rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-green-700"
            href="#"
          >
            Login
            <TbLogin2 className='w-4 h-4'/>
          </a>

          <div className="hidden sm:flex">
            <a
              className="flex gap-2 items-center rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              href="#"
            >
              Register
              <LuUserPlus2 className='w-4 h-4' />
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button
            className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
    </div>
  )
}

export default Header