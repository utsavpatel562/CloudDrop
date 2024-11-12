"use client";
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';
import { FiAlignJustify } from "react-icons/fi";

function TopHeader() {
    return (
        <div className="flex items-center justify-between p-5 border-b border-zinc-700 shadow-sm gap-4 md:justify-end">
            <FiAlignJustify className="text-xl cursor-pointer md:hidden" />
           <Image src={"/logo2.png"} alt='logo' width={200} height={200} className='md:hidden'/>
            <UserButton />
        </div>
    );
}

export default TopHeader;
