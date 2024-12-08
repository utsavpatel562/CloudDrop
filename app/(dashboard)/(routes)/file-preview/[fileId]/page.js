"use client";

import { app } from '@/firebaseConfig';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

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

  return <div>FilePreview</div>;
}

export default FilePreview;
