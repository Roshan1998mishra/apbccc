import React from 'react'
import { Inter } from 'next/font/google';
import Image from 'next/image';
import media from "@/Icons/media.svg";
import media2 from "@/Icons/media2.svg"
import media3 from "@/Icons/media3.svg"
import media4 from "@/Icons/media4.svg"
import media5 from "@/Icons/media5.svg"


const inter700 = Inter({ subsets: ["latin"], weight: "700" });
const Mediapresence = () => {
  return (
    <>
    <div className='py-8 bg-[#F2FBFF]'>
        <div className='container'>
        <p className={`text-center ${inter700.className} `}>Media Presence</p>
        
        <div className='media-section'>
            <Image src={media} alt='media'></Image>
            <Image src={media2} alt='media2'></Image>
            <Image src={media3} alt='media3'></Image>
            <Image src={media4} alt='media4'></Image>
            <Image src={media5} alt='media5'></Image>
        </div>
        </div>
    </div>
    </>
  )
}

export default Mediapresence