import Image from 'next/image'
import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";

function FilePreview({file, removeFile}) {
  return (
    <div className='flex items-center md:w-full gap-2 justify-between p-3 bg-zinc-900 my-2 rounded-lg'>
      <div className='flex items-center md:w-full gap-4'>
        <Image src={"/file2.png"} width={60} height={60} alt='File' className='bg-zinc-700 p-2 rounded-md'/>
        <div className='text-zinc-300 text-left md:text-md'>
        <h2 className=''>{file.name}</h2>
        <h2 className='mt-1'>{file?.type} / {(file.size/1024/1024).toFixed(2) + " MB"}</h2>
        </div>
        </div>
        <IoIosCloseCircleOutline className='md:w-7 md:h-7 cursor-pointer' onClick={()=>removeFile()}/>
    </div>
  )
}

export default FilePreview