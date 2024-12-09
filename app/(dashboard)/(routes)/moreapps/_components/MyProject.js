import React from 'react'

function MyProject() {
  return (
    <div className='my-5'>
        <div className='grid md:grid-cols-3 gap-3'>
            <div className='border border-r-slate-100'>
            <div className="md:w-[400px] md:h-[200px] bg-white rounded-lg overflow-hidden" style={{
                boxShadow: "0px 0px 90px -43px rgba(173, 173, 173, 1)"
            }}>
            <img src="/projectimg2.png" className="w-full h-full object-cover" alt="projectimg2" />
            </div>
            CarrerBoost AI
            </div>

        {/* Second */ }
        <div className='border border-r-slate-100'>
            <div className="md:w-[400px] md:h-[200px] bg-white rounded-lg overflow-hidden" style={{
                boxShadow: "0px 0px 90px -43px rgba(173, 173, 173, 1)"
            }}>
            <img src="/projectimg2.png" className="w-full h-full object-cover" alt="projectimg2" />
            </div>
            CarrerBoost AI
            </div>

            
        </div>
    </div>
  )
}

export default MyProject