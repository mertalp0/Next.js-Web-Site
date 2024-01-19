import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
interface Props {
  src: string;
  title: string;
  description: string;
  name : String
}

const PersonsCard = ({ src, title, description ,name}: Props) => {
  return (
    
    <div className="lg:w-1/3 bg-gray-900  rounded-lg relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] p-4 mx-auto">
   
    <div className="h-full text-center">
      <img
        alt="user img"
        className="w-20 h-20 mb-8 object-cover  rounded-full inline-block border-2 border-gray-200 bg-gray-100"
        src={src}
      />
      <p className="leading-relaxed text-white">
      {description}
      </p>
      <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
      <h2 className="text-white font-medium title-font  tracking-wider text-sm">{name}</h2>
      <p className="text-gray-500">{title}</p>
    </div>
  </div>
  );
};

export default PersonsCard;