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

function Cpage6() {

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
                <span className="bg-slate-700 p-2 rounded-xl">ตัวดำเนินการทางคณิตศาสตร์</span>
            </h2>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`ตัวดำเนินการ (Operator)
กลุ่มของเครื่องหมายหรือสัญลักษณ์ที่ใช้ในการเขียนโปรแกรม
-ตัวดำเนินการ (Operator)
-ตัวถูกดำเนินการ (Operaned)
`}
              </code>
            </pre>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`ตำดำเนินการทางคณิตศาสตร์ Math Operator
+ บวก
- ลบ
* คูณ
/ หาร
% หารเอาเศษ
`}
              </code>
            </pre>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`ตัวอย่างการใช้ Math Operator

#include <stdio.h>

int main()
{
    int number1,number2;

    printf("Input Number1 = ");
    scanf("%d",&number1);
    printf("Input Number2 = ");
    scanf("%d",&number2);
    printf("------------------------------------------------\\n");
    printf("%d + %d = %d\\n",number1,number2,number1+number2);
    printf("%d - %d = %d\\n",number1,number2,number1-number2);
    printf("%d x %d = %d\\n",number1,number2,number1*number2);
    printf("%d / %d = %d\\n",number1,number2,number1/number2);
    printf("%d mod %d = %d\\n",number1,number2,number1%number2);
    mod หมายถึงการหารเอาเศษเพราะถ้าเราใช้เครื่องหมาย % ในการแต่งประโยคจะทำให้เกิด error

    return 0;
}
`}
              </code>
            </pre>

            <h2 className="mb-4 mt-4 text-white">
                <span className="bg-slate-700 p-2 rounded-xl">ตัวดำเนินการเพิ่มค่าและลดค่า</span>
            </h2>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`หัวข้อนี้เราจะได้นำไปใช้งานไรเรื่อง Loop เป็นหลัก
++ (Prefix)  รูปแบบการเขียน ++a ความหมาย เพิ่มค่าให้ a ก่อน 1 ค่าแล้วนำไปใช้งาน
++ (Postfix) รูปแบบการเขียน a++ ความหมาย นำค่าปัจจุบันใน a ไปใช้ก่อนแล้วค่อยเพิ่มค่า
-- (Prefix)  รูปแบบการเขียน --b ความหมาย ลดค่าให้ b ก่อน 1 ค่าแล้วนำไปใช้
-- (Postfix) รูปแบบการเขียน b-- ความหมาย นำค่าปัจจุบันใน b ไปใช้ก่อนแล้วค่อยลดค่า
`}
              </code>
            </pre>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`ตัวอย่างการใช้ตัวดำเนินการเพิ่มค่าลดค่า

#include <stdio.h>

int main()
{
    int a=5;
    printf("Value = %d\\n",a);
    printf("prefix = %d\\n",++a);
    printf("postfix = %d\\n",a++);
    printf("Current = %d\\n",a);
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

export default Cpage6
