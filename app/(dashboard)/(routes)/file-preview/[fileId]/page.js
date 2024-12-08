"use client"
import { app } from '@/firebaseConfig';
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect } from 'react'

function FilePreview({params}) {
  const db = getFirestore(app);
  useEffect(()=> {
    console.log(params?.fileDocId)
  }, [])

 // To Get the file from the Firestore
 const getFileInfo = async() => {
  const docRef = doc(db, "uploadedFile", params?.fileDocId);
  const docSnap = await getDoc(docRef)
 }

  return (
    <div>FilePreview</div>
  )
}

export default FilePreview