"use client"
import { useUser } from '@clerk/nextjs';
import React from 'react'

function page() {
    const {user} = useUser();
  return (
    <>
    <div className="p-5">
    <h2 className='text-zinc-300 text-2xl mb-5'>Settings</h2>
    <div className="max-w-fit rounded-lg w-[100%] overflow-hidden bg-zinc-700 shadow-[0_0_1rem_rgba(0,0,0,0.2)] ">
        <div className="card">
            <div className="grid grid-cols-5">
                <div className="col-span-1 p-4">
                    <img src={user?.imageUrl} alt="User profile" className='rounded-xl md:w-20'/>
                </div>
                <div className="col-span-3 p-4">
                    <div className="font-bold">First Name: {user?.fullName}</div>
                    <div className="mb-3">Email ID: {user?.primaryEmailAddress.emailAddress}</div>
                    <div className="flex mt-3 gap-2">
                        <button className="bg-green-600 text-white py-1 px-4 rounded-md  hover:bg-green-700 flex-1">
                              Go to Files
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default page