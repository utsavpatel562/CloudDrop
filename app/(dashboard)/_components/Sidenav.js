"use client";
import React, { useState } from 'react';
import { MdOutlineUploadFile } from "react-icons/md";
import { LuFileSearch2 } from "react-icons/lu";
import { TbPremiumRights } from "react-icons/tb";
import { MdOutlineSettings, MdLogout } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import Image from 'next/image';
import { IoIosApps } from "react-icons/io";
import { useRouter } from 'next/navigation';

function Sidenav() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const menuList = [
    { id: 2, name: 'Files', icon: LuFileSearch2, path: '/files' },
    { id: 1, name: 'Upload', icon: MdOutlineUploadFile, path: '/upload' },
    { id: 3, name: 'Upgrade', icon: TbPremiumRights, path: '/upgrade' },
    { id: 4, name: 'Settings', icon: MdOutlineSettings, path: '/settings' },
    { id: 5, name: 'More Apps', icon: IoIosApps, path: '/moreapps' },
    { id: 6, name: 'Contact Us', icon: MdContactPage, path: '/contact' },
    { id: 7, name: 'About GitHub', icon: AiFillGithub, path: '/code' },
  ];

  const handleLogout = () => {
    router.push('/');
  };

  const handleNavigation = (index, path) => {
    setActiveIndex(index);
    router.push(path);
  };

  return (
    <section className="shadow-sm border-r border-zinc-600 h-full">
      <div className="p-5 border-b border-zinc-600 bg-zinc-800">
        <Image src="/logo2.png" width={200} height={200} alt="logo1" />
      </div>
      <div className="flex flex-col float-left w-full p-2 text-xl">
        {menuList.map((item, index) => (
          <button
            key={item.id}
            className={`flex gap-2 p-2 mt-2 items-center rounded-md hover:bg-zinc-800 w-full text-slate-300 ${activeIndex === index ? 'bg-zinc-700' : ''}`}
            onClick={() => handleNavigation(index, item.path)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Sidenav;
