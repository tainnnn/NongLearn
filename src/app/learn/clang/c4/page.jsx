"use client"

import React from 'react'
import Navbar from '@/app/components/Navbar';
import Contentbar from '@/app/components/Contentbar';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

function Cpage4() {

  const {data: session} = useSession()
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
                <span className="bg-slate-700 p-2 rounded-xl">การแสดงผลข้อมูล Output</span>
            </h2>
            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`คำสั่งสำหรับใช้แสดงผลข้อมูลออกจากจอภาพทั้งหมด
ข้อมูลที่อยู่ในรูปแบบ ตัวเลขและตัวอักษรหรือผลลัพธ์จากการประมวลผล
มีโครงสร้างคำสั่งดังนี้
printf("Format String",List Of Data)
`}
              </code>
            </pre>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`Format String = การจัดรูปแบสตริง
%d คือ ข้อมูลตัวเลขจำนวนเต็ม
%f คือ ข้อมูลตัวเลขที่มีจุดทศนิยม
%c คือ ข้อมูลตัวอักษร
%s คือ ข้อมูลข้อความ มีลักษณะเป็นชุดของตัวอักษรตัวเลข หรือ อักษรพิเศษ อยู่ในพื้นที่เครื่องหมาย Double Quote("")
\\n คือ ขึ้นบรรทัดใหม่
\\t คือ เว้นช่องว่างในแนวนอน
%p คือ Address ของ pointer
`}
              </code>
            </pre>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`#include <stdio.h>

int main()
{
    printf("First = %s , Second = %s ","Hello","World");
    return 0;
}

>> First = Hello , Second = World
`}
              </code>
            </pre>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`printf("First = %s , Second = %s ","Hello","World");
หมายถึงการเชื่อมสตริง ด้วย %s โดย  First = จะนำไปต่อกับสตริงตัวแรกที่คั่นด้วยเครื่องหมาย (,) และ Last = จะนำไปต่อกับสตริงตัวที่สองซึ่งคั่นด้วยเครื่องหมาย (,) ต่อจาก "Hello"
จะได้ Output ออกมาเป็น First = Hello , Second = World

ถ้าเป็น String จะเขียนใน Double Quote แต่ถ้าเป็นตัวอักษรตัวเดียวจะเขียนใน Single Quote
`}
              </code>
            </pre>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`ตัวอย่างการใช้งาน

#include <stdio.h>

int main()
{
    printf("Student Data\\n");
    printf("FirstName = %s , LastName = %s \\n","Somchai","Ma leaw");
    printf("Age = %d year old\\n", 16+1);
    printf("Gender = %c\\n",'M'); << %c คือใช้สำหรับตัวอักษรตัวเดียวเรียกว่า character ไม่ใช่แบบเดียวกันกับ String
    printf("GPA = %.2f\\n",4.00); << %f ธรรมดาจะหมายถึงจำนวนทศนิยมแต่เมื่อแสดงผลจะออกมาเป็นแบบนี้ 4.000000
    ซึ่งเราสามารถกำหนดตำแหน่งทศนิมยมได้โดยใส่ตัวเลขข้างหน้า f เป็น %.2f ก็จะแสดงทศนิยมเพียง 2 ตำแหน่ง
    printf("Address = %s\\n","Samutsakhon");
    printf("Tel - %s","063-xxx-xxxx");
    return 0;
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

export default Cpage4
