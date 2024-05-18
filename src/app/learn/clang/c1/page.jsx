"use client"

import React from 'react'
import Navbar from '@/app/components/Navbar';
import Contentbar from '@/app/components/Contentbar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

function Cpage1() {

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) router.replace('/')
  }, [session, router])
    
  const handleNavigation = (page) => {
    router.push(`/learn/clang/${page}`);
  };

  return (
    <div className='bg-slate-600 min-h-screen'>
      <Navbar session={session}/>
      <div className='flex'>
        <Contentbar />
        <section className="mt-10 mr-10 flex-1 bg-slate-500 rounded-box p-4 flex flex-col h-full">
          <div className='w-full flex items-center'>
            <div className="ml-10 text-sm lg:text-xl flex-grow ml-4 text-white">
            <h2 className="mb-4 mt-2 text-white">
                <span className="bg-slate-700 p-2 rounded-xl">โครงสร้างเบื้องต้นในภาษา C</span>
            </h2>
            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`#include <stdio.h>

int main()
{
  printf("Hello World");
  return 0;
}`}
              </code>
            </pre>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`#include <stdio.h> เป็นการสั่งให้โปรแกรมนำเข้าหัวข้อไฟล์ (header file) ที่ชื่อว่า stdio.h
ซึ่งย่อมาจาก "standard input-output header"
ตัวอย่างฟังก์ชันที่ถูกประกาศใน stdio.h ได้แก่
printf(); ซึ่งใช้สำหรับพิมพ์ข้อความออกทางหน้าจอ
เครื่องหมายสิ้นสุดคำสั่ง ใช้สัญลักษณ์ ; semicolon ซึ่งในภาษา C ถ้าเราไม่ใส่จะทำให้เกิด Error ขึ้นได้
ฟังก์ชัน main() คือ ฟังก์ชันพิเศษ กลุ่มคำสั่งที่อยู่ใน ฟังก์ชันนี้ จะทำงานโดยอัตโนมัติในตอนเริ่มต้นเสมอ
โดยทั่วไป โปรแกรม C เกือบทุกโปรแกรมจะต้องใช้ #include <stdio.h> เพื่อให้สามารถใช้งานฟังก์ชันพื้นฐานเหล่านี้ได้
`}
              </code>
            </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Cpage1
