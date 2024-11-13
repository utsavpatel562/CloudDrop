"use client";
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { TbHome } from "react-icons/tb";

function TopHeader() {
    const router = useRouter();
    const handleHome = () => {
        router.push('/');
      };
    return (
        <>
        <div className="flex items-center justify-between p-5 border-b border-zinc-700 shadow-sm gap-4 md:justify-end">
        <button className='md:flex hidden items-center gap-2' onClick={handleHome}><TbHome className='w-4 h-4'/>Home</button>
            <FiAlignJustify className="text-xl cursor-pointer md:hidden" />
           <Image src={"/logo2.png"} alt='logo' width={200} height={200} className='md:hidden'/>
            <UserButton />
        </div>
        </>
    );
}

export default TopHeader;
