"use client"

import React from 'react'
import Navbar from '@/app/components/Navbar';
import Contentbar from '@/app/components/Contentbar';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react'
import { useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

function Cpage10() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) router.replace('learn/clang/c10')
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
                <span className="bg-slate-700 p-2 rounded-xl">Switch..Case</span>
              </h2>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`Switch เป็นคำสั่งที่ใช้กำหนดเงื่อนไขคล้ายๆกับ if แต่จะเลือกเพียงหนึ่งทางเลือกออกมาทำงาน
โดยนำค่าในตัวแปร มากำหนดเป็นทางเลือกผ่านคำสั่ง case (ตัวแปรควบคุม)
`}
                </code>
              </pre>
              
              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`รูปแบบคำสั่ง

switch(ค่าที่เก็บในตัวแปรควบคุม){
    case ค่าที่ 1 : คำสั่งที่ 1;
        break;
    case ค่าที่ 2 : คำสั่งที่ 2;
        break;
    case ค่าที่ N : คำสั่งที่ N;
        break;
    default:คำสั่งเมื่อไม่มีค่าที่ตรงกับที่ระบุใน case;
}

คำสั่ง break จะทำให้โปรแกรมกระโดดออกไปทำงาน
นอกคำสั่ง switch ถ้าไม่มีคำสั่ง break โปรแกรมจะทำคำสั่งต่อไปเรื่อยๆ จนจบการทำงาน
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`ตัวอย่างการใข้ Switch case

#include <stdio.h>
#include <string.h>

int main()
{
    int service;
    printf("Input Service Number = ");
    scanf("%d",&service);

    switch(service){
        case 1:
            printf("Create accout\\n");
            break;
        case 2:
            printf("Withdraw\\n");
            break;
        case 3:
            printf("Deposite\\n");
            break;
        default: printf("Invalid");
    }
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

export default Cpage10
