// Footer Section
import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
function Footer() {
  return (
<>
<footer className="bg-gray-100 dark:bg-zinc-900">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center text-teal-600 dark:text-teal-300">
    <img src="/logo2.png" className='md:w-48' alt='mylogo'/>
    </div>

    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
    CloudDrop a convenient and secure solution for individuals and teams alike,  accessibility at its core.
    </p>

    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      <li>
        <Link
          className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
          href="/Aboutus"
        >
          About
        </Link>
      </li>

      <li>
        <Link
          className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
          href="/#myServices"
        >
          Services
        </Link>
      </li>

      <li>
        <Link
          className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
          href="/Documentation"
        >
          Documentation
        </Link>
      </li>

      <li>
        <Link
          className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
          href="/sign-up"
        >
          Register
        </Link>
      </li>

      <li>
        <a
          className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
          href="/Aboutus"
        >
          Contact
        </a>
      </li>
    </ul>

    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
      <li>
        <Link
          href="https://www.linkedin.com/in/utsav-patel-coder/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
        >
          <span className="sr-only">LinkedIn</span>
          <svg className="size-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
           <FaLinkedin/>
          </svg>
        </Link>
      </li>

      <li>
        <Link
          href="https://www.instagram.com/utsavpatel_01/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
        >
          <span className="sr-only">Instagram</span>
          <svg className="size-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
           <FaSquareInstagram/>
          </svg>
        </Link>
      </li>

      <li>
        <Link
          href="https://github.com/utsavpatel562"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
        >
          <span className="sr-only">GitHub</span>
          <svg className="size-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <FaSquareGithub/>
          </svg>
        </Link>
      </li>
      <li>
        <Link
          href="utsavpatel562@gmail.com"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
        >
          <span className="sr-only">Mail</span>
          <svg className="size-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <IoMail/>
          </svg>
        </Link>
      </li>
    </ul>
  </div>
</footer>
</>
  )
}

export default Footer
