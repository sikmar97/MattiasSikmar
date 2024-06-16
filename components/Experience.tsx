"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";


export function Experience() {
  return (
    <section id="experience" >
    <div className="text-center max-lg:pt-10 pt-20">
    <h1 className="text-bold text-3xl  uppercase md:text-6xl  ">Experience</h1>
    <hr className="my-4 mx-auto h-0.5 w-80 border-t-0 bg-white/60" />
    <p className="text-lg">Some of the experience I have as a Developer</p>
    </div>
    <div className="h-[20rem] rounded-md flex flex-col  antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className=""
      />
    </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "I worked as a Front-End Developer, utilizing technologies such as React.js, PHP, Shopify-Liquid, and WordPress. I learned alot from this experience",
    name: "May 2023 - October 2023",
    title: "Effektify",
  },
  {
    quote:
      "My friends and I created Quicksleek, a freelance service that builds fast, responsive, modern websites using technologies like React.js, Next.js, and more.",
    name: "2024 - Current ",
    title: "Quicksleek",
  },
  {
    quote:
      "I studied for 2 years in Halmstad, where I studied .NET web development, gaining expertise in CMS, SQL, JavaScript, C#, HTML/CSS, and .NET Core.",
    name: "2019 - 2021",
    title: "EC Utbildning",
  },
];
