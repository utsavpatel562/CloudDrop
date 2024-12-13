import React, { useState } from 'react'
import { MdContentCopy } from "react-icons/md";

function FileShareForm({file, onPasswordSave}) {
  const [isPasswordEnable, setIsEnablePassword]=useState(false);
  const [password, setPassword]=useState('');
  return file&&(
    <>
    <div className='flex flex-col gap-2 md:mt-4'>
      <div>
        <label className='md:text-md text-zinc-300 font-semibold'>Short Url</label>
        <div className='flex gap-5 p-2 rounded-md justify-between mt-2 bg-zinc-900'>
          <input type='text' value={file.shortUrl} disabled className='disabled:text-zinc-400 outline-none w-full bg-transparent md:pl-1'/> 
          <MdContentCopy className='md:w-6 md:h-6'/>
        </div>
      </div>
      <div className='gap-3 flex mt-5'>
        <input type='checkbox' onChange={(e)=>setIsEnablePassword}/>
        <label>Enable password</label>
      </div>
{isPasswordEnable?
      <div className='flex gap-3 items-center'>
        <div className='border rounded-md w-full p-2'>
          <input className='disabled:bg-gray-300 hover:bg-blue-300' type='password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button className='p-2 bg-green-600 text-white rounded-md disabled:bg-gray-300 hover:bg-blue-400' disabled={password?.length<3} onClick={()=>onPasswordSave(password)}>Save</button>
      </div>:null}
    </div>
    </>
  )
}

export default FileShareForm