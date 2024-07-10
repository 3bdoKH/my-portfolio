'use client'
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='w-full mb-[100px] pb-10 md:mb-5' id='contact'>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Ready To Take
                    <span className="text-purple"> Your </span>
                    Digital Presence To The Next Level
                    <span className="text-purple"> ?</span>
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>
                    Reach Out To Me Today And Let's Discuss How I Can Help You Achive Your Goals.
                </p>
                <a href="mailto:the.abdo.kh@gmail.com" className='mt-3'>
                    <MagicButton title="Let's Get In Touch" icon={<FaLocationArrow />} position='right' />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>
                    Copyright © {currentYear} Abdo Khairy
                </p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <div
                            key={info.id}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            onClick={() => (
                                window.location.replace(info.link)
                            )}
                        >
                            <img src={info.img} alt="icons" width={20} height={20} />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
