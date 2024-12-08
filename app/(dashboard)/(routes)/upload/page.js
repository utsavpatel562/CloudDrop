"use client"
import React, { useEffect, useState } from 'react'
import UploadForm from './_components/UploadForm';
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from '@/firebaseConfig';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useUser } from '@clerk/nextjs';
import { generateRandom } from '@/app/_utils/GenerateRandom';
import { useRouter } from 'next/navigation';
// dashboard upload 
function Upload() {
  const {user} = useUser();
  const[progress, setProgress] = useState();
  const router = useRouter();
  const storage=getStorage(app)
  const db = getFirestore(app);
  const [fileDocId, setFileDocId] = useState();
  const [uploadCompleted, setUploadCompleted]=useState(false);
  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };
    const storageRef = ref(storage, `file-upload/${file?.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
  
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Track progress
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress);
      },
      (error) => {
        // Handle upload errors
        console.error('Upload failed:', error);
      },
      async () => {
        // Upload completed successfully, now get the download URL
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('File available at', downloadURL);
          saveInfo(file, downloadURL);
          setUploadCompleted(true); // Optional: Add a success state
        } catch (error) {
          console.error('Error fetching download URL:', error);
        }
      }
    );
  };  

  const saveInfo = async (file, fileUrl) => {
    try {
      const docId = generateRandom().toString(); // Use a unique document ID
      await setDoc(doc(db, "uploadedFile", docId), {
        fileName: file?.name,
        fileSize: file?.size,
        fileType: file?.type,
        fileUrl: fileUrl,
        userEmail: user?.primaryEmailAddress?.emailAddress || "Anonymous",
        userName: user?.fullName || "Anonymous",
        password: '',
        id: docId,
        shortUrl: process.env.NEXT_PUBLIC_BASE_URL+docId,
      });
      setFileDocId(docId);
      console.log("File info saved successfully.");
    } catch (error) {
      console.error("Error saving file info:", error);
    }
  };  

  useEffect(()=> {
    console.log("Trigger")

    progress==100 && setTimeout(()=> {
      setUploadCompleted(true);
    }, 2000)
  }, [progress==100]);

  useEffect(()=> {
    uploadCompleted&&
    setTimeout(()=> {
      setUploadCompleted(false);
      console.log("FileDocId",fileDocId);
      router.push(`/file-preview/${fileDocId}`);
    },2000)
  }, [uploadCompleted, fileDocId, router])
  
  return (
    <>
    <div className='p-5 px-8 md:px-28'>
      <h2 className='md:text-4xl text-center m-5'>Start <strong className='text-green-500'>Uploading</strong> File and <strong className='text-green-500'>Share</strong> it</h2>
      <UploadForm uploadBtnClick={(file)=>uploadFile(file)} progress={progress}/>
    </div>
    </>
  )
}

export default Upload;
