import React from 'react'
import Sidenav from '../_components/Sidenav'

function layout({children}) {
  return (
    <>
    <div>
    <div className='hidden h-full md:w-64 flex-col fixed inset-y-0 z-50'>
      <Sidenav/>
    </div>
    <div className='md:ml-64'>
    {children}
    </div>
    </div>
    </>
  )
}

export default layout