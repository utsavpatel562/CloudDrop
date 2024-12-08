"use client";
import React, { useEffect, useState } from "react";

function FilePreview({ params }) {
  const [fileId, setFileId] = useState(null);

  useEffect(() => {
    // Extract fileId from params
    async function fetchParams() {
      const unwrappedParams = await params; // Assuming params is a Promise
      setFileId(unwrappedParams?.fileId);
    }
    fetchParams();
  }, [params]);

  // Redirect to the upload page if fileId is missing (optional logic)
  useEffect(() => {
    if (!fileId) {
      console.log("Undefined");
    }
  }, [fileId]);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">File Preview</h2>
      {fileId ? (
        <p className="mt-3">File ID: <strong>{fileId}</strong></p>
      ) : (
        <p>Loading file information...</p>
      )}
    </div>
  );
}

export default FilePreview;
