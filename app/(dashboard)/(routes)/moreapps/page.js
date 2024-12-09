import React from 'react'
import { IoIosApps } from "react-icons/io";
import MyProject from './_components/MyProject';
function MoreApps() {
  return (
    <>
    <div>
    <div className='p-6'>
        <h2 className='md:text-2xl font-semibold flex items-center gap-2'><IoIosApps/>Explore my top apps</h2>
    <MyProject/>
    </div>
    </div>
    </>
  )
}

export default MoreApps;