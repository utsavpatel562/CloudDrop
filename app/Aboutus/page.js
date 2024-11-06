import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const page = () => {
  // About Us Page
  return (
    <>
      <Header />
      <div
        className="h-screen w-full"
        style={{
          background:
            "#E4E4E1; background-image: radial-gradient(at top center, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.03) 100%), linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(143,152,157,0.60) 100%); background-blend-mode: normal, multiply",
        }}
      >
        <div className="flex justify-center items-center">
          <div className="w-[30%] mt-20">
            <article className="group">
              <img
                alt=""
                src="/mypic1.jpeg"
                className="h-52 w-full rounded-xl object-cover shadow-xl transition"
              />

              <div className="p-4 bg-zinc-300 my-5 rounded-xl">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    About Me
                  </h3>
                </a>

                <p className="mt-2 text-justify text-sm/relaxed text-gray-700 font-semibold">
                  I am Utsav Patel, the developer behind CarConnect, a
                  marketplace platform for car buyers and sellers. Built with
                  React, Tailwind CSS, Drizzle ORM, and real-time chat powered
                  by Sendbird, the app features a sleek UI using ShadCN,
                  Acernity, and Hyper UI. Deployed on Netlify, CarConnect
                  delivers a fast and responsive user experience.
                </p>
                <div className="my-5 flex gap-3 items-center">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/utsavpatel_01"
                    className="cursor-pointer text-slate-950 hover:bg-pink-500 hover:text-white p-1 rounded-lg"
                  >
                    <FaInstagram style={{ fontSize: "25px" }} />
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/utsavpatel562"
                    className="cursor-pointer text-slate-950 hover:bg-slate-900 hover:text-white p-1 rounded-lg"
                  >
                    <FiGithub style={{ fontSize: "25px" }} />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/utsav-patel-coder"
                    className="cursor-pointer text-slate-950 hover:bg-blue-600 hover:text-white p-1 rounded-lg"
                  >
                    <FaLinkedinIn style={{ fontSize: "25px" }} />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;
