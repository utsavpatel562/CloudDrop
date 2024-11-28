import React from 'react'

function ProgressBar({progress=40}) {
  return (
    <div className='bg-zinc-400 w-full h-2 mt-3 rounded-full'>
        <div className='p-1 bg-green-500 rounded-full' style={{
            width: `${progress}%`
        }}></div>
    </div>
  )
}

export default ProgressBar