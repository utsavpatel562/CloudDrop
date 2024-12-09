import React from 'react';

function MyProject() {
  return (
    <div className="my-5 px-4">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {/* CareerBoost AI */}
        <div className="text-center">
          <div
            className="w-full h-48 md:h-56 lg:h-64 bg-white rounded-lg overflow-hidden mx-auto"
            style={{
              boxShadow: '0px 0px 90px -43px rgba(173, 173, 173, 1)',
            }}
          >
            <img
              src="/projectimg2.png"
              className="w-full h-full object-cover"
              alt="CareerBoost AI"
            />
          </div>
          <p className="mt-3 font-medium text-lg">CareerBoost AI</p>
        </div>

        {/* Zoom Clone */}
        <div className="text-center">
          <div
            className="w-full h-48 md:h-56 lg:h-64 bg-white rounded-lg overflow-hidden mx-auto"
            style={{
              boxShadow: '0px 0px 90px -43px rgba(173, 173, 173, 1)',
            }}
          >
            <img
              src="/projectimg1.png"
              className="w-full h-full object-cover"
              alt="Zoom Clone"
            />
          </div>
          <p className="mt-3 font-medium text-lg">Zoom Clone</p>
        </div>

        {/* CarConnect */}
        <div className="text-center">
          <div
            className="w-full h-48 md:h-56 lg:h-64 bg-white rounded-lg overflow-hidden mx-auto"
            style={{
              boxShadow: '0px 0px 90px -43px rgba(173, 173, 173, 1)',
            }}
          >
            <img
              src="/projectimg3.png"
              className="w-full h-full object-cover"
              alt="CarConnect"
            />
          </div>
          <p className="mt-3 font-medium text-lg">CarConnect</p>
        </div>
      </div>
    </div>
  );
}

export default MyProject;
