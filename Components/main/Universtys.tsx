  "use client"
import {
  satir1,
  satir2,
  satir3,
  satir4,
  satir5
  } from "@/constants";


import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
 import SkillDataProvider from "../sub/SkillDataProvider";
  
 
  const Universtys = () => {
    return (
      <section
        id="universtys"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden"
      >
       <div className='w-full h-auto flex flex-col items-center justify-center'>
        
        
          <motion.div
         variants={slideInFromLeft(0.5)}
         initial="hidden"
         animate={ "visible" }
          className='font-medium text-center '
          >
                 <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Üniversiteler
      </h1>
          </motion.div>
        
      </div>
  
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {satir1.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
          
        </div>
  
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {satir2.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {satir3.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {satir4.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {satir5.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
  
        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Universtys;