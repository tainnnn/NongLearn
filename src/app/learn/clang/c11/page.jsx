"use client"

import React from 'react'
import Navbar from '@/app/components/Navbar';
import Contentbar from '@/app/components/Contentbar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

function Cpage11() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) router.replace('/c11')
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
                <span className="bg-slate-700 p-2 rounded-xl">Loop</span>
              </h2>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`กลุ่มคำสั่งที่ใช้ในการวนรอบ (Loop) โปรแกรมจะทำงานไปเรื่อยๆ
จนกว่าเงื่อนไขที่กำหนดไว้จะเป็นเท็จ จึงจะหยุดการทำงาน

ซึ่งมี 3 แบบดังนี้
-While
-For
-Do..While

ข้อแตกต่างและการใช้งาน Loop
-While ใช้ในกรณีที่ไม่รู้จำนวณรอบ
-For ใช้ในกรณีรู้จำนวณรอบชัดเจน
-Do..While ใช้ในกรณีที่อยากให้ลองทำก่อน 1 รอบ แล้วทำซ้ำไปเรื่อยๆตราบเท่าที่เงื่อนไขเป็นจริง
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`While Loop
จะทำงานตามคำสั่งภายในโปรแกรม while ไปเรื่อยๆเมื่อเงื่อนไขทีกำหนดเป็นจริง

while(เงื่อนไข){
    คำสั่งที่จะทำซ้ำเมื่อเงื่อนไขเป็นจริง;
}

ตัวอย่างการใช้ While Loop

#include <stdio.h>

int main()
{
    int count = 1;
    while(count <= 10){
        printf("%d\\n",count);
        count++;
    }
    return 0;
}
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`For Loop

เป็นรูปแบบการซ้ำที่ใช้ในการตรวจสอบเงื่อนไขการทำงาน มีการกำหนดค่าเริ่มต้น
และเปลี่ยนค่าไปพร้อมๆกัน เมื่อเงื่อนไขในคำสั่ง for เป็นจริงก็จะทำงานตามคำสั่งที่แสดงไว้ภายในคำสั่ง for ไปเรื่อยๆ

for(ค่าเริ่มต้นของตัวแปร;เงื่อนไข;เปลี่ยนแปลงค่าตัวแปร){
    คำสั่งเมื่อเงื่อนไขเป็นจริง;
}

ตัวอย่างการใช้ For Loop

#include <stdio.h>

int main()
{
    for(int count = 1 ; count <= 10 ; count++){
        printf("%d.Tainmaleaw\\n",count);
    }
    return 0;
}
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`Do..While

โปรแกรมจะทำงานตามคำสั่งอย่างน้อย 1 รอบ เมื่อทำงานเสร็จจะมาตรวจสอบเงื่อนไข
ที่คำสั่ง while ถ้าเงื่อนไขเป็นจริงจะวนกลับขึ้นไปทำงาน ที่คำสั่งใหม่อีกรอบ แต่ถ้าเป็นเท็จจะหลุดออกจากลูป

do{
    คำสั่งต่างๆ เมื่อเงื่อนไขเป็นจริง;
}while(เงื่อนไข);

ตัวอย่างการใช้ Do..while

#include <stdio.h>

int main()
{
    int count = 1;
    do{
        printf("%d.TainMaleaw\\n",count);
        count++;
    }while(count <= 10);
    return 0;
}
`}
                </code>
              </pre>
              
              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`Break & Continue

-break ถ้าโปรแกรมพบคำสั่งนี้จะหลุดจากการทำงานในลูป ทันทีเพื่อไปทำคำสั่งอื่นที่อยู่นอกลูป
-continue คำสั่งนี้จะทำให้หยุดการทำงานแล้วย้อนกลับไปเริ่มต้นการทำงานที่ต้นลูปใหม่

ตัวอย่างการใช้ Break & Continue

#include <stdio.h>

int main()
{
    for(int count=1;count<=10;count++){
        printf("%d.Tainmaleaw\\n",count);
        if(count==5){
            break หรือ continue;
        }
    }
    
    return 0;
}
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`Nested Loop
ในการเขียนโปรแกรมสามารถนำคำสั่งลูป แบบต่างๆ ให้มาทำงานซ้อนกันได้เรียกว่า
"ลูปซ้อนลูป (Nested Loop)"

โครงสร้างคำสั่ง
    for(ค่าเริ่มต้นของตัวแปร;เงื่อนไข;เปลี่ยนแปลงค่าตัวแปร){
        for(ค่าเริ่มต้นของตัวแปร;เงื่อนไข;เปลี่ยนแปลงค่าตัวแปร){

        }
    }

ตัวอย่างการใช้ Nested Loop

#include <stdio.h>

int main()
{
    for(int i=1;i<=3;i++){
        printf("Outsite = %d\\n",i);
        for(int j=1;j<=5;j++){
            printf("Insite = %d\\n",j);
        }
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

export default Cpage11