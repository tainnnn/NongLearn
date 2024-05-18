"use client"

import React from 'react'
import Navbar from '@/app/components/Navbar';
import Contentbar from '@/app/components/Contentbar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

function Cpage16() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) router.replace('learn/clang/c16')
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
                <span className="bg-slate-700 p-2 rounded-xl">Pointer</span>
              </h2>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`รู้จักกับ Pointer

ปกติเราจะเก็บตัวแปรไว้ที่หน่วยความจำ
คำถาม:แล้วเราจะเข้าถึงค่าในหน่วยความจำได้อย่างไร?
คำตอบ:ใช้พอยน์เตอร์ (Pointer)

Pointer คืออะไร
พอยน์เตอร์ (Pointer) คือตัวแปรที่ใช้เก็บตำแหน่งที่อยู่ของตัวแปรที่สนใจหรือค่าแอดเดรส (Address)
หน่วยความจำ ซึ่่งมีประโยชน์อย่างมากสำหรับการเขียนโปรแกรมจัดการหน่วยความจำ

โครงสร้างพื้นที่หน่วยความจำ
ตัวแปร   ค่าในตัวแปร   แอดเดรส(Address)
a           10          0x6ffe3c
b           20          0x6ffe38
c           'A'         0x6ffe30

Address คือตำแหน่งที่เก็บข้อมูลในหน่วยความจำ เป็นรูปแบบเลขฐาน 16
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`การสร้างตัวแปร Pointer
โครงสร้างคำสั่ง
ชนิดข้อมูล*ตัวแปรพอยน์เตอร์ = &ค่าแอดเดรสของตัวแปร

ตัวอย่าง
int number = 10;
int *p1 = &number

char letter = 'A';
char *p2 = &letter;

* คือ ตำแหน่งแอดเดรสในหน่วยความจำที่พอยน์เตอร์ชี้อยู่
& คือ ค่าแอดเดรสของตัวแปร

ตัวแปร p1 คือ ตัวแปร pointer ที่ชี้ไปที่แอดเดรสของตัวแปรที่เป็นรูปแบบ int
ตัวแปร p2 ตือ ตัวแปร pointer ที่ชี้ไปที่แอดเดรสของตัวแปรที่เป็นรูปแบบ char

ตัวอย่างการใช้งาน Pointer
#include <stdio.h>

int main(){
    int number = 10;
    char letter = 'A';

    int *p1 = &number; << ประกาศตัวแปร *p1 ให้เป็น Pointer ของตัวแปร number
    char *p2 = &letter;

    printf("Pointer Address number = %p\\n",p1); << การใช้ %p จะได้ตำแหน่งของตัวแปร Pointer p1 มา ซึ่งเป็นเลขฐาน 16
    printf("Pointer Address letter = %p\\n",p2);

    printf("Pointer Number Value = %d\\n",*p1); << ถ้าเราอยากได้ค่าที่เก็บไว้ในตัวแปร Pointer ต้องใช้ * ไว้ด้านหน้าตามด้วยตัว pointer
    printf("Pointer Letter Value = %c\\n",*p2);

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

export default Cpage16