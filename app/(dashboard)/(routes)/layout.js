import React from 'react'
import Sidenav from '../_components/Sidenav'

function layout({children}) {
  return (
    <>
    <div className='bg-gray-300 h-screen'>
    <div className='h-full w-64 flex-col fixed inset-y-0 z-50 bg-zinc-200'>
      <Sidenav/>
    </div>
    <div className='ml-72'>
    {children}
    </div>
    </div>
    </>
  )
}

export default layout