"use client"

import React from 'react'
import Navbar from '@/app/components/Navbar';
import Contentbar from '@/app/components/Contentbar';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

function Cpage8() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/login')
    }
  }, [status, router]);

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
                <span className="bg-slate-700 p-2 rounded-xl">ตัวดำเนินการเปรียบเทียบ</span>
              </h2>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`== หมายถึง เท่ากับ
!= หมายถึง ไม่เท่ากับ
>  หมายถึง มากกว่า
<  หมายถึง น้อยกว่า
>= หมายถึง มากกว่าหรือเท่ากับ
<= หมายถึง น้อยกว่าหรือเท่ากับ
ผลการเปรียบเทียบจะได้คำตอบ คือ True(1) หรือ False (0)
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`&& (AND) หมายถึง และ
|| (OR) หมายถึง หรือ
!  (NOT) หมายถึง ไม่

ทำงานเหมือนตารางจริงเท็จ
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`ลำดับความสำคัญของตำดำเนินการ

ลำดับที่            เครื่องหมาย           ลำดับการทำงาน
  1                  ()                 
  2                ++,--                ซ้ายไปขวา
  3               *, / , %              ซ้ายไปขวา
  4                 + , -               ซ้ายไปขวา
  5             < , <= , > , >=         ซ้ายไปขวา
  6                 == , !=             ซ้ายไปขวา
  7                 && (AND)            ซ้ายไปขวา
  8                 || (OR)             ซ้ายไปขวา
  9       = , += , -= , *= , /= , %=    ขวาไปซ้าย
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-col text-white'>
                <code>
{`ตัวอย่างการใช้งานตัวดำเนินการเปรียบเทียบ

#include <stdio.h>

int main()
{
    int x = 100, y = 10;
    printf("1 = True and 0 = False");
    printf("X equal Y ? %d\\n",x==y);
    printf("X not equal Y ? %d\\n",x!=y);
    printf("X more than Y ? %d\\n",x>y);
    printf("X less Y ? %d\\n",x<y);
    printf("X more than or equal Y ? %d\\n",x>=y);
    printf("X less or equal Y ? %d\\n",x<=y);
    return 0;
}
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`ตัวอย่างการใช้ตัวดำเนินการทางตรรกศาสตร์

#include <stdio.h>

int main()
{
    // Input
    char gender;
    int age;
    printf("Input Gender(M/F) = ");
    scanf("%c",&gender);

    printf("Input Age = ");
    scanf("%d",&age);

    // Output
    if(gender == 'M' && age >=20){
        printf("Pass and get work\\n");
    }else{
        printf("Not Pass\\n");
    }

    /*if(gender == 'M' || age >=20){
        printf("Pass and get work\\n");
    }else{
        printf("Not Pass\\n");
    }
    */

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

export default Cpage8
