"use client"

import React from 'react'
import Navbar from '@/app/components/Navbar';
import Contentbar from '@/app/components/Contentbar';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

function Cpage13() {
  const { data: session } = useSession()
  const router = useRouter()
  console.log(session)
  
  if (!session) router.replace("/");

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
                <span className="bg-slate-700 p-2 rounded-xl">Function</span>
              </h2>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`ฟังก์ชัน คืออะไร
ชุดคำสั่งที่นำมาเขียนรวมกันเป็นกลุ่มเพื่อให้เรียกใช้งานตามวันถุประสงค์ที่ต้องการ
และลดความซ้ำซ้อนของคำสั่งที่ใช้งานบ่อย

ฟังก์ชั่นสามารถนำไปใช้งานได้ทุกที่และแก้ไขได้ในภายหลัง
ทำให้โค้ดในโปรแกรมมีระเบียบและใช้งานได้สะดวกมากยิ่งขึ้น
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`ประเภทของฟังก์ชัน

- ฟังก์ชันมาตรฐาน (Standard Library Functions) คือ ฟังก์ชันที่มี
อยู่ในภาษา C ผู้ใช้สามารถเรียกใช้งานได้เลย เช่น printf(), scanf()
ที่ทำงานอยู่ในไลบราลี่ หรือ Header File เช่น stdio.h เป็นต้น

- ฟังก์ชันที่ผู้ใช้สร้างขึ้นมาเอง (User-Define Function) คือฟังก์ชัน
ที่ถูกสร้างขึ้นมาเพื่อวัตถุประสงค์ให้ทำงานตามที่ผู้ใช้ต้องการ
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`ฟังก์ชันหลัก (main)

int main()
{
    // statement
}

ฟังก์ชัน main() คือ ฟังก์ชันพิเศษสำหรับกลุ่มคำสั่งที่อยู่ในฟังก์ชันนี้จะถูกสั่งให้ทำงานโดยอัตโนมัติเป็นลำดับแรกเสมอ
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`รูปแบบของฟังก์ชัน
-ฟังก์ชันแบบปกติ (Void Function)
-ฟังก์ชันแบบมีพารามีเตอร์ (Parameter Function)
-ฟังก์ชันแบบมีค่าส่งกลับ (Return Function)
-ฟังก์ชันแบบรับและส่งค่า
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`กฎการตั้งชื่อฟังก์ชัน
-ชื่อฟังก์ชันต้องไม่ซ้ำกัน
-ชื่อฟังก์ชันสามารถตั้งเป็นตัวอักษรหรือตัวเลขได้
-ชื่อของฟังก์ชันต้องไม่ขึ้นต้นด้วยตัวเลข
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`วิธีการสร้างฟังก์ชัน
1.นิยามชื่อฟังก์ชันก่อนกำหนดโครงสร้าง

func_name(); //นิยามชื่อฟังก์ชัน(function prototype)

int main(){

}

func_name(){} //กำหนดโครงสร้างการทำงานหลังฟังก์ชัน main

2.นิยามชื่อฟังก์ชันพร้อมกำหนดโครงสร้าง
//นิยามชื่อพร้อมกำหนดโครงสร้างคำสั่ง (เขียนอยู่ด้านบน main เท่านั้น)

func_name(){}

int main(){

}
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

export default Cpage13