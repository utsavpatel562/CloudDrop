"use client";

import { app } from '@/firebaseConfig';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import FileInfo from './_components/FileInfo';
import FileShareForm from './_components/FileShareForm';

function FilePreview({ params }) {
  const [fileId, setFileId] = useState(null); // State to store the unwrapped fileId
  const db = getFirestore(app);
  const [file, setFile] = useState(); // State to store the file object

  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await params; // Unwrap the Promise
      setFileId(resolvedParams.fileId);
    };

    unwrapParams();
  }, [params]);

  useEffect(() => {
    if (fileId) {
      getFileInfo();
    }
  }, [fileId]);

  // To Get the file from the Firestore
  const getFileInfo = async () => {
    try {
      const docRef = doc(db, "uploadedFile", fileId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data", docSnap.data());
        setFile(docSnap.data());
      } else {
        console.log("No such document");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };
  const onPasswordSave = (password) => {

  }

  return(
    <>
    <div className='py-10 px-20'>
      <Link href={"/upload"} className='flex gap-3'>Go</Link>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
        <FileInfo file={file}/>
        <FileShareForm file={file} 
        onPasswordSave={(password)=>onPasswordSave(password)}
        />
      </div>
    </div>
    </>
  )
}

export default FilePreview;
