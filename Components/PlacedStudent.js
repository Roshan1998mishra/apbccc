import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import akash from "@/Icons/akash.svg";
import Group from "@/Icons/Group.svg";
import akash2 from "@/Icons/akash2.svg";
import akash3 from "@/Icons/akash3.svg";
import akash4 from "@/Icons/akash4.svg";

const inter700 = Inter({ subsets: ["latin"], weight: "700" });
const inter600 = Inter({ subsets: ["latin"], weight: "600" });
const inter400 = Inter({ subsets: ["latin"], weight: "400" });


const PlacedStudent = () => {
  return (
    <>
    <div>
        <div className='container my-12'>
            <p className={`${inter700.className} text-center text-4xl`}>Placed Students</p>
            <div className='row'>
                <div className='col-sm-3'>
                  <div className='placed-section'>
                   <Image src={akash} alt='akash'></Image>
                   <p className={`${inter600.className} text-xl`}>Aakash Gupta</p>
                   <p className={`${inter400.className} text-[#717b9e] akashtxt`}>Mechanical Engineer</p>
                   <Image src={Group} alt='Group'></Image>
                  </div>
                </div>

                {/*  */}


                <div className='col-sm-3'>
                  <div className='placed-section'>
                   <Image src={akash2} alt='akash2'></Image>
                   <p className={`${inter600.className} text-xl`}>Aakash Gupta</p>
                   <p className={`${inter400.className} text-[#717b9e] akashtxt`}>Mechanical Engineer</p>
                   <Image src={Group} alt='Group'></Image>
                  </div>
                </div>

                {/*  */}

                <div className='col-sm-3'>
                  <div className='placed-section'>
                   <Image src={akash3} alt='akash3'></Image>
                   <p className={`${inter600.className} text-xl`}>Aakash Gupta</p>
                   <p className={`${inter400.className} text-[#717b9e] akashtxt`}>Mechanical Engineer</p>
                   <Image src={Group} alt='Group'></Image>
                  </div>
                </div>

                {/*  */}


                <div className='col-sm-3'>
                  <div className='placed-section'>
                   <Image src={akash4} alt='akash4'></Image>
                   <p className={`${inter600.className} text-xl`}>Aakash Gupta</p>
                   <p className={`${inter400.className} text-[#717b9e] akashtxt`}>Mechanical Engineer</p>
                   <Image src={Group} alt='Group'></Image>
                  </div>
                </div>

                {/* end  */}

            </div>

        </div>
    </div>
    </>
  )
}

export default PlacedStudent