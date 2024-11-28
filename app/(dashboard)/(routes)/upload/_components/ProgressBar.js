import React from 'react'

function ProgressBar({progress=40}) {
  return (
    <div className='bg-zinc-700 w-full mt-3 rounded-full' style={{
        boxShadow: "0px 0px 8px 0px white inset"
    }}>
        <div className='p-0.2 bg-green-600 font-bold rounded-full' style={{
            width: `${progress}%`,
            boxShadow: "0px 0px 4px 0px green inset"
        }}>{`${Number(progress).toFixed(0)}%`}</div>
    </div>
  )
}

export default ProgressBar