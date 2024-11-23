import React from 'react'
import { FiAlertTriangle } from "react-icons/fi";
function AlertMsg() {
  return (
    <>
    <div className='flex md:items-center md:justify-center gap-4 bg-red-500 p-3 md:text-lg my-3 rounded-lg'>
        <FiAlertTriangle className='w-6 h-6 md:w-5 md:h-5'/>
        File Size if greater than 2 MB. Please upload a smaller file.
    </div>
    </>
  )
}

export default AlertMsg