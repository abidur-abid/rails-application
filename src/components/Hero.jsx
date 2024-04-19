'use client'
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';



const Hero = () => {
    return (
        <div className='mt-28'>
            <Image src={logo} width={400} className='mx-auto'/>
            <div className='flex justify-center'>
                <h2 className='text-5xl text-center mt-6 rounded font-extrabold uppercase'>Welcome To Markeable</h2>
            </div>
            <ul className='socialLink2 mt-6'>
            <a href={'https://www.linkedin.com/in/mdabidurrahmanabid/'} target='_blank' ><FaLinkedin/></a>
                    <a href={'https://github.com/abidur-abid'} target='_blank' ><FaGithub /></a>
                    {/* <a href={'https://www.upwork.com/freelancers/~01e8f0b5d950da36b8?viewMode=1'} target='_blank' ><SiUpwork /></a> */}
                    <a href={'https://web.facebook.com/abidurabid40'} target='_blank' ><FaFacebook /></a>
                         
            </ul>
            <div className='flex justify-center mt-6 mb-28'>
             <Link href='contact' className='button'>Contact</Link>
            </div>
        </div>
    );
};

export default Hero;