import React from 'react'
import { MdOutlineUploadFile } from "react-icons/md";
import { LuFileSearch2 } from "react-icons/lu";
import { TbPremiumRights } from "react-icons/tb";

function Sidenav() {
  // sidenav and  main content
  const menuList = [
    {
      id: 1,
      name: 'Upload',
      icon: MdOutlineUploadFile,
      path: '/upload',
    },
    {
      id: 2,
      name: 'Files',
      icon: LuFileSearch2,
      path: '/files',
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: TbPremiumRights,
      path: '/upgrade',
    },
  ]
  return (
    <>
    <div>Sidenav</div>
    </>
  )
}

export default Sidenav