import React from 'react';

function MyProject() {
  return (
    <div className="my-5 px-4">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {/* CareerBoost AI */}
        <div className="bg-zinc-950 p-4 rounded-lg">
          <div
            className="w-full h-48 md:h-56 lg:h-64 bg-white rounded-lg overflow-hidden mx-auto"
            style={{
              boxShadow: '0px 0px 100px -43px rgba(173, 173, 173, 1)',
            }}
          >
            <img
              src="/projectimg2.png"
              className="w-full h-full object-cover"
              alt="CareerBoost AI"
            />
          </div>
          <h2 className="mt-4 font-semibold text-lg text-white">CareerBoost AI</h2>
          <p className="mt-2 text-justify text-gray-300">
            Full Stack AI Mock Interview App project! A powerful AI-driven mock interview application using modern technologies.
          </p>
        </div>

        {/* Zoom Clone */}
        <div className="bg-zinc-950 p-4 rounded-lg">
          <div
            className="w-full h-48 md:h-56 lg:h-64 bg-white rounded-lg overflow-hidden mx-auto"
            style={{
              boxShadow: '0px 0px 100px -43px rgba(173, 173, 173, 1)',
            }}
          >
            <img
              src="/projectimg1.png"
              className="w-full h-full object-cover"
              alt="Zoom Clone"
            />
          </div>
          <h2 className="mt-4 font-semibold text-lg text-white">Zoom Clone</h2>
          <p className="mt-2 text-justify text-gray-300">
          A feature-rich Zoom clone built with modern tech stack such as TypeScript, Next.js, Tailwind CSS, GetStream, Clerk and etc.
          </p>
        </div>

        {/* CarConnect */}
        <div className="bg-zinc-950 p-4 rounded-lg">
          <div
            className="w-full h-48 md:h-56 lg:h-64 bg-white rounded-lg overflow-hidden mx-auto"
            style={{
              boxShadow: '0px 0px 100px -43px rgba(173, 173, 173, 1)',
            }}
          >
            <img
              src="/projectimg3.png"
              className="w-full h-full object-cover"
              alt="CarConnect"
            />
          </div>
          <h2 className="mt-4 font-semibold text-lg text-white">CarConnect</h2>
          <p className="mt-2 text-justify text-gray-300">
          This full-stack application is designed with performance, scalability, and user engagement in mind. It leverages a modern tech stack.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyProject;
