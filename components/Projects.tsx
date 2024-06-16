"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/WobbleCard";
import MagicButton from "./ui/MagicButton";
import { FaComputerMouse } from "react-icons/fa6";


export function Projects() {
  return (
    <section id="projects">
    <div className="text-center pb-14 pt-20">
        <h1 className="text-bold text-3xl  uppercase md:text-6xl  ">Projects</h1>
        <hr className="my-4 mx-auto h-0.5 w-80 border-t-0 bg-white/60" />
        <p className="text-lg">A Few Web Projects I've Created</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto pb-20 w-full">

     
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full project1-img  min-h-[500px] lg:min-h-[400px]"
        className=""
      >
        <div className="mx-auto ">
          <h2 className="text-center text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            QUICKSLEEK
          </h2>
          <p className="mt-4 text-center  text-base tracking-normal text-neutral-200">
          I collaborated with friends to develop a React.js website for our freelance company. We specialize in delivering fast, sleek, and SEO-optimized websites for businesses.
          </p>
          <a href="https://quicksleek.se/" target="_blank" className="mx-auto flex  justify-center">
          <MagicButton 
        title="Visit Website"
        icon={<FaComputerMouse />}
        position="right"
        />
        </a>
        </div>
        
      </WobbleCard>
  
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full project2-img   min-h-[500px] lg:min-h-[400px]"
        className=""
      >
        <div className="mx-auto ">
          <h2 className="text-center text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            LAN OUT LOUD
          </h2>
          <p className="mt-4 text-center  text-base tracking-normal text-neutral-200">
          A website I developed using React.js and Tailwind for a LAN event in Southern Halland, Sweden.
          </p>
          <a href="https://lanoutloud.se/" target="_blank" className="mx-auto flex  justify-center">
          <MagicButton 
        title="Visit Website"
        icon={<FaComputerMouse />}
        position="right"
        />
        </a>
        </div>
        
      </WobbleCard>
    </div>
    </section>
  );
}
