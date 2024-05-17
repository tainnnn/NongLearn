"use client"

import React from 'react'
import Navbar from '@/app/components/Navbar';
import Contentbar from '@/app/components/Contentbar';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

function Cpage2() {

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.replace("/c2");
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
                <span className="bg-slate-700 p-2 rounded-xl">คอมเมนต์</span>
            </h2>
            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`คอมเมนต์ (Comment)
จุดประสงค์
-อธิบายหน้าที่หรือความหมายของโค้ดที่เขียน
-ยกเลิกโค้ดชั่วคราว ส่งผลให้ตัวแปลภาษาไม่สนใจโค้ดในบรรทัดที่ถูกกำหนดหมายเหตุ
`}
              </code>
            </pre>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`รูปแบบการเขียน Comment
สามารถเขียนได้ 2 แบบ
แบบที่ 1 ใช้เครื่องหมาย Slash / ในการอธิบายคำสั่งสั้นๆ
แบบที่ 2 ใช้เครื่องหมาย Slash กับ เครื่องหมายดอกจัน /**/ เพื่ออธิบายคำสั่งโค้ดยาวๆ
`}
              </code>
            </pre>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`ตัวอย่างการใช้งาน Comment

#include <stdio.h>

int main()
{
    printf("Hello World\\n"); \\n หมายถึงขึ้นบรรทัดใหม่

    comment แบบสั้น
    // ใช้คำสั่ง printf();

    comment แบบยาว
    /*
      แสดงผลข้อมูลโดยเรียกใช้ฟังก์ชัน printf();
      ที่อยู่ในไฟล์ stdio.h นำเข้ามาทำงานในฟังก์ชัน main
    */
    
    //printf("Hello World"); ตัวอย่างการใช้งาน comment เพื่อปิดการทำงานของโค้ดบรรทัดที่เรายังไม่อยากใช้งานไปก่อน
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

export default Cpage2
