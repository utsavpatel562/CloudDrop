"use client"
import React from 'react'
import UploadForm from './_components/UploadForm';

function Upload() {
  return (
    <>
    <div className='p-5 px-8 md:px-28'>
      <h2 className='md:text-4xl text-center m-5'>Start <strong className='text-green-500'>Uploading</strong> File and <strong className='text-green-500'>Share</strong> it</h2>
      <UploadForm uploadBtnClick={()=>console.log(file)}/>
    </div>
    </>
  )
}

export default Upload;