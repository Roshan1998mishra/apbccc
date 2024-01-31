import React from 'react'
import {Inter} from "next/font/google";
import Image from 'next/image';
import student from "@/Icons/student.svg";
import Black from "@/Icons/Black.svg";
import readbook from "@/Icons/readbook.svg";
import Black2 from "@/Icons/Black2.svg";

const inter500 = Inter({ subsets: ["latin"], weight: "500" });
const inter400 = Inter({ subsets: ["latin"], weight: "400" });
const inter700 = Inter({ subsets: ["latin"], weight: "700" });
const Navigationopp = () => {
  return (
    <>
    <div className='navigation-oppurtunitybg my-1'>
        <div className='container py-14'>
            <div>
            <p className={`text-center text-[#17A6E8] font-bold	text-5xl ${inter500.className}`}>Navigating Opportunities </p>
            <p className={`font-medium text-center text-black text-4xl leading-10 ${inter500.className}`}>In-Depth Review of After Passout's  Platform and Services !</p>
            </div>
        </div>
        {/*  */}

        <div className='container'>
            <div className='row'>
                <div className='col-md-3 items-center justify-center'>
                 <div className='flex items-center leading-3 border-[#16A6EC] borderclass'>
                 <Image src={student} alt='student'></Image>
                 <div>
                    <p className={`text-[#16a6ec] ${inter700.className} text-3xl`}>10k+</p>
                    <p className={`${inter400.className} text-[#333333] text-lg studentplaced`}>Student Placed</p>
                 </div>

                 </div>
                </div>

                {/*  */}

                <div className='col-md-3 items-center justify-center'>
                 <div className='flex items-center leading-3 border-[#16A6EC] borderclass'>
                 <Image src={Black} alt='Black'></Image>
                 <div>
                    <p className={`text-[#16a6ec] ${inter700.className} text-3xl`}>100k+</p>
                    <p className={`${inter400.className} text-[#333333] text-lg studentplaced`}>Student Placed</p>
                 </div>

                 </div>
                </div>

                {/*  */}


                <div className='col-md-3 items-center justify-center'>
                 <div className='flex items-center leading-3 border-[#16A6EC] borderclass'>
                 <Image src={readbook} alt='readbook'></Image>
                 <div>
                    <p className={`text-[#16a6ec] ${inter700.className} text-3xl`}>200k+</p>
                    <p className={`${inter400.className} text-[#333333] text-lg studentplaced`}>Student Placed</p>
                 </div>

                 </div>
                </div>

                {/*  */}

                
                <div className='col-md-3 items-center justify-center'>
                 <div className='flex items-center leading-3 border-[#16A6EC] borderclass'>
                 <Image src={Black2} alt='Black2'></Image>
                 <div>
                    <p className={`text-[#16a6ec] ${inter700.className} text-3xl`}>10k+</p>
                    <p className={`${inter400.className} text-[#333333] text-lg studentplaced`}>Student Placed</p>
                 </div>

                 </div>
                </div>

            </div>

        </div>

    </div>
    </>
  )
}

export default Navigationopp