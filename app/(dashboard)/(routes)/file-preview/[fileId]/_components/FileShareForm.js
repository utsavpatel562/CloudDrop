import React, { useState } from 'react';
import { MdContentCopy } from "react-icons/md";
import { BiLock } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import GlobalApi from '../../../../../_utils/GlobalApi';
function FileShareForm({ file, onPasswordSave }) {
  const [isPasswordEnable, setIsEnablePassword] = useState(false);
  const [password, setPassword] = useState('');
  
  // logic for Sending email  
  const SendEmail = () => {
    const data={}
    GlobalApi.SendEmail(data).then(resp=> {
      console.log(resp);
    })
  }

  return file && (
    <>
      <div className='flex flex-col gap-2 md:mt-4'>
        <div>
          <label className='md:text-md text-zinc-300 font-semibold'>Short Url</label>
          <div className='flex gap-5 p-2 rounded-md justify-between mt-2 bg-zinc-900'>
            <input
              type='text'
              value={file.shortUrl}
              disabled
              className='disabled:text-zinc-400 outline-none w-full bg-transparent md:p-1 md:pl-1'
            />
            <MdContentCopy className='md:w-6 md:h-6 md:mt-1' />
          </div>
        </div>
        <div className='gap-3 flex mt-5'>
          <input
            type='checkbox'
            onChange={(e) => setIsEnablePassword(e.target.checked)} // Corrected state update
          />
          <label>Enable password</label>
        </div>
        {isPasswordEnable ? (
          <div className='flex gap-3 items-center'>
            <div className='rounded-md w-full p-2 bg-zinc-900'>
              <input
                className='bg-transparent md:p-1 md:pl-1 text-zinc-400'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Type your password'
              />
            </div>
            <button
              className='flex items-center gap-1 p-2 md:pr-4 md:pl-4 bg-green-600 text-white rounded-md disabled:bg-zinc-900 disabled:text-zinc-400 hover:bg-green-500'
              disabled={password?.length < 3}
              onClick={() => onPasswordSave(password)}
            >
              Save
              <BiLock className='md:w-4 md:h-4'/>
            </button>
          </div>
        ) : null}
        <div className='bg-zinc-900 rounded-md p-3 md:mt-4'>
          <div>
            <label className='font-sans'>Send File to Email</label>
            <div className='flex gap-5 p-1 rounded-md justify-between mt-2 bg-zinc-800'>
            <input
              type='value'
              className='disabled:text-zinc-400 outline-none w-full bg-transparent md:p-1 md:pl-1'
              placeholder='example@mail.com'
            />
            <MdMailOutline className='md:w-6 md:h-6 md:mt-1' />
          </div>
          <button onClick={()=> SendEmail()} className='flex items-center gap-2 justify-center bg-green-700 hover:bg-green-600 p-2 w-full rounded-md mt-3'>Send <GrSend/></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FileShareForm;
