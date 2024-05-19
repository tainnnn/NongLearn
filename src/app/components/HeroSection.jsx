'use client'

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation"
import styles from '@/app/styles/image.module.css'

function HeroSection() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-12 my-4'>
        <div className='col-span-7 place-self-center place-items-center grid lg:place-items-start'>
            <h1 className="text-white max-w-2xl mb-4 lg:text-8xl text-4xl font-extrabold">
                <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-white bg-clip-text">
                    Hello{" "}
                </span>{" "}
          <br />
          <TypeAnimation
            sequence={[
              "Welcome to",
              1000,
              "NongLearn",
              1000,
              "Website",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            />
            </h1>
            <p className='text-base mb-6 text-lg lg:text-xl'>
                Hello and welcome to NongLearn Website!
                <br />
                Dive into the world of knowledge and start exploring today
            </p>
            <div>
                <a href="https://www.w3schools.com/" target='_blank' rel='noopener noreferrer'>
                    <button className='bg-gradient-to-br from-blue-500 via-emerald-500 to-cyan-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4'>
                        W3Schools
                    </button>
                </a>
                <a href="https://chatgpt.com/" target='_blank' rel='noopener noreferrer'>
                    <button className='bg-gradient-to-br from-blue-500 via-emerald-500 to-cyan-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4'> 
                        ChatGPT
                    </button>
                </a>
            </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className='bg-slate-500 lg:w-[500px] lg:h-[500px] w-[250px] h-[250px] rounded-full relative'>
                <Image
                  src="/images/pro.png"
                  alt='nonglearn'
                  className={`${styles.image} absolute`}
                  fill
                />
            </div>
        </div>
    </section>
  )
}

export default HeroSection;