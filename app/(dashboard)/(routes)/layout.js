import React from 'react'
import Sidenav from '../_components/Sidenav'
import TopHeader from '../_components/TopHeader'

function layout({children}) {
  return (
    <>
    <div className='bg-zinc-800 h-screen'>
    <div className='h-full md:w-64 flex-col fixed inset-y-0 z-50 bg-zinc-900 md:flex hidden'>
      <Sidenav/>
    </div>
    <div className='md:ml-64'>
      <TopHeader/>
    {children}
    </div>
    </div>
    </>
  )
}

export default layout