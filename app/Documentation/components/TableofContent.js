import React from 'react'
import { FaRegFileCode } from "react-icons/fa6";

function TableofContent() {
  return (
    <div>
        <div className='bg-zinc-800 p-9'>
            <h1 className='text-zinc-300 font-semibold md:text-3xl flex items-center gap-2'><FaRegFileCode className='md:w-7 md:h-7'/>Documentation</h1>
            <p className='mt-1'>A robust file-sharing platform designed for efficiency, scalability, and user-friendliness.</p>
        </div>
    </div>
  )
}

export default TableofContent