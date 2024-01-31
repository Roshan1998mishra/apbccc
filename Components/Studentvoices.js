import React from 'react'
import { Inter } from 'next/font/google'
const inter400 = Inter({ subsets: ["latin"], weight: "400" });

const Studentvoices = () => {
  return (
<>
<div>
    <div className='container'>
        <p className={`text-4xl ${inter400.className} `}>Student Voices</p>

    </div>
</div>
</>
  )
}

export default Studentvoices
