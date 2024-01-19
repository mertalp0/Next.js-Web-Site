"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer'

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";


interface Props {
  image: string;
  text: string[];
  position: boolean;
  
}


const AppContent = ({ image,text,position} : Props) => {

    
    const {ref, inView} = useInView({
        triggerOnce: true
    })
    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity:1}
    }
    const delay = 0.45

    return (
      
        <motion.div
          ref={ref}
          initial="hidden"
          variants={position ? slideInFromLeft(delay) : slideInFromRight(delay)}
          transition={{ delay: delay }}
          animate={inView ? "visible" : "hidden"}
          className="flex flex-row items-center justify-center px-20  w-full z-[20]"
          style={{ flexDirection: position ? "row-reverse" : "row" }}
        >
          
          <div className="h-full w-full flex flex-col justify-center m-auto text-start">
            <motion.div
              initial="hidden"
              variants={position ? slideInFromLeft(delay) : slideInFromRight(delay)}
              transition={{ delay: delay }}
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col gap-6 text-xl font-bold text-white  w-auto h-auto text-center"
            >
             <div className="bg-gradient-to-r  from-blue-700 to-black-200 m-3 p-8 rounded-md flex items-center transition duration-300 ease-in-out transform hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
              <p>
                {text[0]}
              </p>
            </div>
            <div className="bg-gradient-to-r  from-blue-700 to-black-200 m-3 p-8 rounded-md flex items-center transition duration-300 ease-in-out transform hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
              <p>
              {text[1]}
              </p>
            </div>
            <div className="bg-gradient-to-r  from-blue-700 to-black-200 m-3 p-8 rounded-md flex items-center transition duration-300 ease-in-out transform hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
              <p>
              {text[2]}
              </p>
            </div>
            </motion.div>
          </div>
          <motion.div
            ref={ref} 
            initial="hidden"
            variants={!position ? slideInFromLeft(delay) : slideInFromRight(delay)}
            transition={{ delay: delay }}
            animate={inView ? "visible" : "hidden"}
            className="flex justify-center items-center"
          >
   
   <div className="flex-grow bg-opacity-80 p-5 relative overflow-hidden w-[80vh] h-[80vh] ">
            <div className="" style={{ height: "100%", width: "100%" }}>
              <Image
              className="transition duration-200 ease-in-out transform hover:scale-105"
                src={image}
                alt="Telefon Resmi"
                layout="fill"
                objectFit="cover" 

              />
            </div>
          </div>
     
           
          </motion.div>
        </motion.div>
      );
      
      
}

export default AppContent