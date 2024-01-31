import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/Icons/logo.svg";

const Header = () => {
    const menu = ["About", "Services", "Career", "Contact", "Hire From Us"];
        return (
            <>
            <div className='headers'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2'>
                        <Image src={logo} alt='logo'></Image>
                    </div>
{/*  */}
                    
                    <div className='col-md-8'>
                    <div>
                    <ul className='flex gap-4'>
                    <li>
                    <Link href="/">Home</Link>
                </li>
                {menu.map((item, index) => (
                    <li key={index}>
                        <Link href={`/${item.toLowerCase().replace(/\s+/g, '')}`}>
                        {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        </div>

        <div className='col-md-2'>
icon
        </div>
                    
                </div>

            </div>
        
            </div>
            </>
            
    );
};

export default Header;
