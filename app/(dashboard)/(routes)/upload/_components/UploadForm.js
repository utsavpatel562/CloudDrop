import React from 'react'
import { RiFolderUploadLine } from "react-icons/ri";
function UploadForm() {
  return (
    <div>
      
<div className="flex items-center justify-center w-full mt-10">
    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-zinc-700 hover:bg-zinc-800 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-zinc-800">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <RiFolderUploadLine className='w-9 h-9 mb-5'/>
            <p className="mb-2 text-md text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or <strong className='text-green-500'>drag</strong> and <strong className='text-green-500'>drop</strong></p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Any files (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 

    </div>
  )
}

export default UploadForm