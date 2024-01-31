import React from 'react'
import { Inter } from 'next/font/google';
import Image from 'next/image';
import certification from "@/Icons/certification.svg";
import certification2 from "@/Icons/certification2.svg";
import certification3 from "@/Icons/certification3.svg";
import certification4 from "@/Icons/certification4.svg";

const inter700 = Inter({ subsets: ["latin"], weight: "700" });
const Companyverification = () => {
  return (
    <>
    <div className='bg-[#17A6E8]'>
        <div className='container py-4'>
            <p className= {`text-center ${inter700.className} text-white text-4xl`}>Company Certification</p>
            <div className='row'>
                <div className='col-md-3'>
                    <Image src={certification} alt='certification'></Image>
                </div>
                <div className='col-md-3'>
                <Image src={certification2} alt='certification2'></Image>
                </div>

                <div className='col-md-3'>
                <Image src={certification3} alt='certification3'></Image>
                </div>

                <div className='col-md-3'>
                <Image src={certification4} alt='certification4'></Image>
                </div>

            </div>
        
        </div>
    </div>
    </>
  )
}

export default Companyverification