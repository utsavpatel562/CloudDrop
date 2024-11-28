"use client"
import React from 'react'
import UploadForm from './_components/UploadForm';
import { app } from '@/firebaseConfig';
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

function Upload() {
  const storage=getStorage(app)
  const uploadFile=(file)=> {
    const metadata = {
      contentType: file.type
    };
    const storageRef = ref(storage, 'file-upload/'+file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, )
  }
  return (
    <>
    <div className='p-5 px-8 md:px-28'>
      <h2 className='md:text-4xl text-center m-5'>Start <strong className='text-green-500'>Uploading</strong> File and <strong className='text-green-500'>Share</strong> it</h2>
      <UploadForm uploadBtnClick={(file)=>uploadFile(file)}/>
    </div>
    </>
  )
}

export default Upload;