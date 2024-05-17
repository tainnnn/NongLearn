"use client"

import React from 'react'
import Navbar from '@/app/components/Navbar';
import Contentbar from '@/app/components/Contentbar';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

function Cpage9() {
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
                <span className="bg-slate-700 p-2 rounded-xl">If..Else</span>
              </h2>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`แบบมีเงื่อนไข (Condition)
กลุ่มคำสั่งที่ใช้ตัดสินใจในการเลือกทำงาน
ตามเงื่อนไขต่างๆ ภายในโปรแกรม
-If
-Switch..Case
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`รูปแบบคำสั่งแบบเงื่อนไขเดียว
if..Else statement
เป็นคำสั่งที่ใช้กำหนดเงื่อนไขในการตัดสินใจทำงานของโปรแกรม
ถ้าเงื่อนไขเป็นจริงจะทำตามคำสั่งต่างๆ ที่กำหนดภายใต้เงื่อนไขนั้นๆ

โครงสร้างคำสั่ง
if(เงื่อนไข){
    คำสั่งเมื่อเงื่อนไขเป็นจริง;
}else{
    คำสั่งเมื่อเงื่อนไขเป็นเท็จ;
}
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`ตัวอย่างการใช้งาน if..else

#include <stdio.h>

int main()
{
    const int score;
    printf("Input Score = ");
    scanf("%d",&score);
    printf("Score = %d\\n",score);
    if(score >= 50){
        printf("%d = Pass Exam\\n",score);
    }else{
        printf("%d = Not Pass Exam",score);
    }
    return 0;
}
`}
                </code>
              </pre>
              
              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`if..Else แบบหลายเงื่อนไข

if(เงื่อนไขที่ 1){
    คำสั่งเมื่อเงื่อนไขที่ 1 เป็นจริง;
}else if(เงื่อนไขที่ 2){
    คำสั่งเมื่อเงื่อนไขที่ 2 เป็นจริง;
}else if(เงื่อนไขที่ 3){
    คำสั่งเมื่อเงื่อนไขที่ 3 เป็นจริง;
}else{
    คำสั่งเมื่อทุกเงื่อนไขเป็นเท็จ;
}
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`ตัวอย่างการใช้ if..else แบบหลายเงี่อนไข

#include <stdio.h>

int main()
{
    // if else...if else
    int number1,number2;
    printf("Input Number1 = ");
    scanf("%d",&number1);
    printf("Input Number2 = ");
    scanf("%d",&number2);

    // output
    if(number1 > number2){
        printf("%d > %d\\n",number1,number2);
    }else if(number1 < number2){
        printf("%d < %d\\n",number1,number2);
    }else{
        printf("%d = %d\\n",number1,number2);
    }
    return 0;
}
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`if..else แบบลดรูป (Ternary Operator)

ตัวแปร = (เงื่อนไข) ? คำสั่งเมื่อเงื่อนไขเป็นจริง : คำสั่งเมื่อเงื่อนไขเป็นเท็จ;

ตัวอย่างการใช้ Ternary Operator

#include <stdio.h>

int main()
{
    char result;
    int score;
    printf("Input Number = ");
    scanf("%d",&score);
    // Ternary Operator
    result = (score >= 50) ? printf("Pass Exam") : printf("Not pass Exam");
    return 0;
}

เราต้องประกาศตัวแปร result ก่อนไม่งั้นจะรันไม่ได้
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`Nested-if แปลว่าซ้อนกัน

if(เงื่อนไขหลัก){
    if(เงื่อนไขย่อยที่ n){
        คำสั่งเมื่อเงื่อนไขย่อยที่ n เป็นจริง;
    }
}

ตัวอย่างการใช้ Nested-if

#include <stdio.h>
#include <string.h>

int main()
{
    char username[10],password[10];
    int choice;
    // Input
    printf("Username = ");
    scanf("%s",&username);
    printf("Password = ");
    scanf("%s",&password);

    // Output
    if(strcasecmp(username,"member")==0 && strcasecmp(password,"1234")==0){
        printf("Login Complete\\n");
        //Nested if
        printf("Select Choice (1-2) => ");
        scanf("%d",&choice);
        if(choice == 1){
            printf("withdraw\\n");
        }else if(choice == 2){
            printf("deposite\\n");
        }else{
            printf("Logout\\n");
        }
    }else{
        printf("Not Found\\n");
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

export default Cpage9
