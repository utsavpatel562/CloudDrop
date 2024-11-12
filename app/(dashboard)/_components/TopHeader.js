"use client";
import { UserButton, useUser } from '@clerk/nextjs';
import React from 'react';
import { FiAlignJustify } from "react-icons/fi";

function TopHeader() {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex items-center justify-between p-5 border-b border-zinc-700 shadow-sm gap-4 md:justify-end">
            {/* Menu Icon for smaller screens */}
            <FiAlignJustify className="text-xl cursor-pointer md:hidden" />
            
            {/* Display user's email */}
            <h3 className="bg-zinc-900 text-zinc-300 p-1 px-4 rounded-lg text-sm md:text-base">
                {user.primaryEmailAddress?.emailAddress}
            </h3>

            {/* User profile button */}
            <UserButton />
        </div>
    );
}

export default TopHeader;
