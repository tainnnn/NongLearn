'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";
import Link from 'next/link'
import styles from '@/app/styles/image.module.css'

function MainPage() {

  const {data: session} = useSession()
  const router = useRouter()
  console.log(session)
  
  if (!session) router.replace("/")
  if (session) router.replace("/main")

  return (
    <div className='bg-slate-600 min-h-screen'>
      <Navbar session={session}/>
      <div className='mx-5 my-10 col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        
        <div className="card w-96 bg-base-100 shadow-xl image-full bg-slate-700">
          <figure className="my-8 w-full h-48 overflow-hidden">
            <img src="/images/C.png" alt="C"  />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">C Language</h2>
            <p>C เป็นภาษาโปรแกรมระดับสูงที่พัฒนาขึ้นในช่วงต้นทศวรรษ 1970 โดย Dennis Ritchie ที่ Bell Labs</p>
          <div className="card-actions justify-end">
            <a href="/learn/clang">
              <button className="btn btn-primary">Let's go</button>
            </a>
          </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl image-full bg-slate-700">
          <figure className="my-8 w-full h-48 overflow-hidden">
            <img src="/images/Python.png" alt="py" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Python Language</h2>
            <p>Python เป็นภาษาการเขียนโปรแกรมที่รู้จักในด้านไวยากรณ์ที่อ่านง่ายและมีความสามารถรอบด้าน พัฒนาโดย Guido van Rossum และเปิดตัวครั้งแรกในปี 1991</p>
          <div className="card-actions justify-end">
            <a href="https://www.w3schools.com/python/default.asp" target='_blank'>
              <button className="btn btn-primary">Let's go</button>
            </a>
          </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl image-full bg-slate-700">
          <figure className="my-8 w-full h-48 overflow-hidden">
            <img src="/images/js.png" alt="js" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">JavaScript Language</h2>
            <p>JavaScript เป็นภาษาสคริปต์แบบไดนามิกระดับสูงและทรงพลังซึ่งเป็นที่รู้จักในด้านบทบาทในการพัฒนาเว็บเป็นหลัก สร้างสรรค์โดย Brendan Eich ในปี 1995</p>
          <div className="card-actions justify-end">
            <a href="https://www.w3schools.com/js/default.asp" target='_blank'>
              <button className="btn btn-primary">Let's go</button>
            </a>
          </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl image-full bg-slate-700">
          <figure className="my-8 w-full h-48 overflow-hidden">
            <img src="/images/java.png" alt="java" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Java Language</h2>
            <p>ภาษา Java เป็นภาษาโปรแกรมระดับสูงที่มีคุณสมบัติเป็นแบบวัตถุและถูกออกแบบมาเพื่อให้มีการพึ่งพาการติดตั้งน้อยที่สุด ภาษานี้ถูกพัฒนาโดยบริษัทซันไมโครซิสเต็มส์ในปี 1995</p>
          <div className="card-actions justify-end">
            <a href="https://www.w3schools.com/java/default.asp" target='_blank'>
            <button className="btn btn-primary">Let's go</button>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
