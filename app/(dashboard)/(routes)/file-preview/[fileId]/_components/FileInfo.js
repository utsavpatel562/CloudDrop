"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function FileInfo({file}) {
  const [fileType, setFileType]=useState();
  useEffect(()=> {
    file&&setFileType(file?.fileType.split('/')[0]);
    console.log(fileType);
  },[file]);
  return file&&(
    <div className='text-center border flex justify-center m-4 flex-col items-center p-6 rounded-md border-slate-500 bg-zinc-900'>
      <Image src={fileType=='image'?file?.fileUrl:'/file.png'} width={200} height={200} className='md:h-[200px] rounded-md object-contain'/>
    </div>
  )
}

export default FileInfo