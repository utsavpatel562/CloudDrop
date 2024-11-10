"use client"
import React, { useState } from 'react'
import { MdOutlineUploadFile } from "react-icons/md";
import { LuFileSearch2 } from "react-icons/lu";
import { TbPremiumRights } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { MdLogout } from "react-icons/md";
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
    {
      id: 4,
      name: 'Settings',
      icon: MdOutlineSettings,
      path:'/settings',
    },
    
  ]
  const [activeIndex, setActiveIndex]=useState(0);
  return (
    <>
    <section>
      <div className='p-5 border-b bg-zinc-800'>
        <Image src="/logo2.png" width={"200"} height={"200"}  alt='logo1'/>
      </div>
      <div className='flex flex-col float-left w-full p-2 text-xl'>
      {menuList.map((item, index)=> (
        <button className={`flex gap-2 p-2 mt-2 items-center rounded-md hover:bg-gray-300 w-full text-slate-600 ${activeIndex==index?'bg-gray-300':null}`} onClick={()=>setActiveIndex(index)}><item.icon/><h2>{item.name}</h2></button>
      ))}
      <button className='flex gap-2 p-2 items-center rounded-md mt-2 hover:bg-gray-300 w-full text-slate-600'><MdLogout/> Logout</button>
      </div>
    </section>
    </>
  )
}

export default Sidenav