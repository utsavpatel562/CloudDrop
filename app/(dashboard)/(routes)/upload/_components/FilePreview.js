import Image from 'next/image'
import React from 'react'

function FilePreview({file}) {
  return (
    <div className='flex items-center md:w-full gap-2 pt-3'>
        <Image src={"/file2.png"} width={80} height={80} alt='File' className='bg-zinc-700 p-2 rounded-md'/>
        <div className='md:w-full'>
        <h2 className='md:text-lg bg-zinc-700 text-zinc-300 p-1 rounded-md'>{file.name}</h2>
        <h2 className='md:text-lg bg-zinc-700 p-1 text-zinc-300 rounded-md mt-2'>{file?.type} / {(file.size/1024/1024).toFixed(2) + " MB"}</h2>
        </div>
    </div>
  )
}

export default FilePreview