"use client"

import React from 'react'
import Navbar from '@/app/components/Navbar';
import Contentbar from '@/app/components/Contentbar';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

function Cpage5() {

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) router.replace('/')
    if (session) router.replace("/c5");
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
                <span className="bg-slate-700 p-2 rounded-xl">การรับข้อมูล (Input) </span>
            </h2>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`คือคำสั่งสำหรับรับค่าทางคีย์บอร์ดและเก็บค่าดังกล่างลงไปในตัวแปรมีโครงสร้างคำสั่งดังนี้

scanf("Format String",List Of Address)

-Format String คือ ชุดข้อความพิเศษสำหรับกำหนดรูปแบบการรับข้อมูลจากผู้ใช้
คือพวก %d %f %c %s

-List Of Address คือ ตำแหน่งของตัวแปรในหน่วยความจำ โดยทั่วไปรูปของตัวแปร
 ที่มีเครื่องหมาย & นำหน้า เช่น ตำแหน่งของตัวแปร name คือ &name
`}
              </code>
            </pre>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`ตัวอย่างการรับ input
#include <stdio.h>

int main()
{
    //data
    char name[10] , gender;
    int age;
    float gpa;

    //input
    printf("Input Name = ");
    scanf("%s",&name);
    "scanf คือให้เราป้อนข้อมูลเข้าไปโดยค่าที่กำหนดก็ต้องตั้งไว้เป็นค่าว่าง และ &น่าตัวแปร เพื่อให้รู้ว่าเรียกใช้ตัวแปรนี้"
    printf("Input Age = ");
    scanf("%d",&age);
    printf("Input Gender = ");
    scanf(" %c",&gender); << ที่ต้องเว้นวรรคหน้า %c เพราะเมื่อเรากด Enter
    จากอีกอันโปรแกรมจะเข้าใจว่าเราป้อน char เข้าไปแล้วดังนั้นต้องเว้นวรรคเพื่อให้โปรแกรมรอเราป้อนข้อความเข้าไปก่อน
    printf("Input GPA = ");
    scanf("%f",&gpa);

    //output
    printf("----------------------------\\n");
    printf("Student Name = %s\\n",name);
    printf("Age = %d\\n",age);
    printf("Gender = %c\\n",gender);
    printf("GPA = %.2f\\n",gpa);

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

export default Cpage5
