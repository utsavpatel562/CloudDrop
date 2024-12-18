"use client"
import React, { useState } from 'react'
import { GrUploadOption } from "react-icons/gr";
import { RiFolderUploadLine } from "react-icons/ri";
import AlertMsg from './AlertMsg';
import FilePreview from './FilePreview';
import ProgressBar from './ProgressBar';
function UploadForm({uploadBtnClick, progress}) {
  const [file, setFile] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const onFileSelect = (file)=> {
    console.log(file);
    if(file&&file.size>2000000){
      console.log("The size is greater than 2 MB");
      setErrorMsg('Maximum 2 MB file size is allowed');
      return;
    }
    setErrorMsg(null);
    setFile(file);
  }
  return (
    <div className='text-center'>
      
<div className="flex items-center justify-center w-full mt-10">
    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-zinc-700 hover:bg-zinc-800 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-zinc-800">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <RiFolderUploadLine className='w-12 h-12 mb-5'/>
            <p className="mb-2 md:text-lg text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or <strong className='text-green-500'>drag</strong> and <strong className='text-green-500'>drop</strong></p>
            <p className="md:text-md text-gray-500 dark:text-gray-400">Any files (MAX Size: 2MB)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" onChange={(event)=> onFileSelect(event.target.files[0])} />
    </label>
</div> 
{errorMsg?<AlertMsg/>:null}
{file?<FilePreview file={file} removeFile={()=>setFile(null)}/>:null}
{progress>0?<ProgressBar progress={progress}/>:<button disabled={!file} className='flex items-center justify-center m-auto gap-2 p-3 font-bold bg-green-600 text-white w-[30%] rounded-full mt-5 disabled:bg-zinc-900 disabled:text-zinc-700' onClick={()=>uploadBtnClick(file)}><GrUploadOption/>Upload</button>}
    </div>
  )
}

export default UploadForm