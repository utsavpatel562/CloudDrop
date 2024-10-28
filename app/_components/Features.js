import React from 'react'

function Features(){
  return (
    <>
<div className="bg-slate-950 p-4 min-h-screen">
<div className='text-center mt-10'>
    <h2 className='text-5xl'>HOW IT <span className='text-green-600 font-semibold'>WORKS</span></h2>
</div>
  <div className="max-w-8xl mx-auto px-6 md:px-12 xl:px-6">
    <div
      className="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden  rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4 shadow-gray-600">
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/164986/logo.svg" loading="lazy" width="200" height="200"className="w-12 h-12 rounded-full" style={{ color: "transparent"}}/>
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Upload Your File</h5>
            <p className="text-gray-300">Easily select and upload your file from any device.</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/120853/logo.svg" loading="lazy" width="200" height="200"className="w-12 h-12 rounded-full" style={{ color: "transparent"}} />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Generate a Secure Link</h5>
            <p className="text-gray-300">Once your file is uploaded, CloudDrop generates a unique, secure sharing link. </p>
          </div>
        </div>
      </div>
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/120852/logo.svg" loading="lazy" width="200" height="200"className="w-12 h-12 rounded-full" style={{ color: "transparent"}} />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Add a Password (Optional)</h5>
            <p className="text-gray-300">For an extra layer of protection, you can set a password on the sharing link.</p>
          </div>
        </div>
      </div>
      <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/120850/logo.svg" loading="lazy" width="200" height="200"className="w-12 h-12 rounded-full" style={{ color: "transparent"}} />
          <div className="space-y-2">
            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Share and Access</h5>
            <p className="text-gray-300">Share your link, who can then download the file from any device, at any time.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Features