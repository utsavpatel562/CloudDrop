"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { LuFileText } from "react-icons/lu";
import { AiOutlineFileUnknown } from "react-icons/ai";
function FileInfo({ file }) {
  const [fileType, setFileType] = useState();

  useEffect(() => {
    file && setFileType(file?.fileType.split('/')[0]);
    console.log(fileType);
  }, [file]);

  // Convert file size from bytes to MB
  const formatFileSize = (sizeInBytes) => {
    return (sizeInBytes / (1024 * 1024)).toFixed(2); // Convert to MB and round to 2 decimal places
  };

  // Truncate file name if it exceeds 20 characters
  const truncateFileName = (fileName) => {
    if (fileName.length > 25) {
      return fileName.substring(0, 25) + '...';
    }
    return fileName;
  };

  return file && (
    <div className='text-center border flex justify-center m-4 flex-col items-center p-6 rounded-md border-slate-500 bg-zinc-900'>
      <Image 
        src={fileType === 'image' ? file?.fileUrl : '/folder1.png'} 
        width={200} 
        height={200} 
        alt='UserImage' 
        className='md:h-[200px] rounded-md object-contain'
      />
      <div className='mt-5'>
        <h3 className='flex items-center gap-2 md:text-left font-mono text-zinc-300 mb-1'><LuFileText/>{truncateFileName(file?.fileName)}</h3>
        <h3 className='flex items-center gap-2 md:text-left font-mono text-zinc-300'><AiOutlineFileUnknown/>{`${formatFileSize(file?.fileSize)} MB / Size`}</h3>
      </div>
    </div>
  );
}

export default FileInfo;
