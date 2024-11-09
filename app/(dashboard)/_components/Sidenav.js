import React from 'react'
import { MdOutlineUploadFile } from "react-icons/md";
import { LuFileSearch2 } from "react-icons/lu";
import { TbPremiumRights } from "react-icons/tb";
import Image from 'next/image';

function Sidenav() {
  // sidenav and  main content
  const menuList = [
    {
      id: 1,
      name:'Upload',
      icon:MdOutlineUploadFile,
      path:'/upload',
    },
    {
      id: 2,
      name:'Files',
      icon:LuFileSearch2,
      path: '/files',
    },
    {
      id: 3,
      name: 'Upgrade',
      icon:TbPremiumRights,
      path:'/upgrade',
    },
  ]
  return (
    <>
    <section className=''>
      <div className='p-5 border-b'>
        <Image src="/logo2.png" width={"200"} height={"200"}  alt='logo1'/>
      </div>
      <div className='flex flex-col float-left'>
      {menuList.map((item, index)=> (
        <button><item.icon/><h2>{item.name}</h2></button>
      ))}
      </div>
    </section>
    </>
  )
}

export default Sidenav