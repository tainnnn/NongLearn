"use client"

import React from 'react'
import Navbar from '@/app/components/Navbar';
import Contentbar from '@/app/components/Contentbar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

function Cpage12() {
  const { data: session } = useSession();
  if (!session) redirect("/c12");

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
                <span className="bg-slate-700 p-2 rounded-xl">Array</span>
              </h2>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`รู้จักกับอาร์เรย์ (Array)

ข้อจำกัดชนิดข้อมูลพื้นฐาน
การประกาศตัวแปรแต่ละครั้ง ตัวแปร 1 ตัวสามารถเก็บข้อมูลได้แค่ 1 ค่าเท่านั้น

อาร์เรย์ คืออะไร
1.ชุดของตัวแปรที่อยู่ในรูปลำดับใช้เก็บค่าข้อมูลให้อยู่ในกลุ่มเดียวกัน
โดยข้อมูลภายในอาร์เรย์จะถูกเก็บในตำแหน่งที่ต่อเนื่องกัน
2.เป็นตัวแปรที่ใช้ในการเก็บข้อมูลที่มีลำดับที่ต่อเนื่อง ซึ่งข้อมูลมีค่าได้หลายค่า
โดยใช้ชื่ออ้างอิงได้เพียงชื่อเดียว และใช้หมายเลขกำกับ (Index) ให้กับตัวแปรเพื่อจำแนกความแตกต่างของค่าตัวแปรแต่ละตัว

คุณสมบัติของอาร์เรย์
1.ใช้เก็บกลุ่มข้องข้อมูล
2.ข้อมูลที่อยู่ในอาร์เรย์จะเรียกว่าสมาชิก หรือ อิลิเมนต์ (element)
3.แต่ละอิลิเมนต์ (element) จะเก็บค่าข้อมูล (value) และ อินเด็กซ์ (Index)
4.Index หมายถึงคีย์ของอาร์เรย์ใช้อ้างอิงตำแหน่งของ element เริ่มต้นที่ 0
5.สมาชิกในอาร์เรย์ต้องมีชนิดข้อมูลเหมือนกัน
6.สมาชิกในอาร์เรย์จะถูกคั่นด้วยเครื่องหมายคอมม่า

สรุปอาร์เรย์
1.ใช้เก็บกลุ่มข้อมูล ที่มีชนิดข้อมูลเดียวกัน
2.ใช้ตัวแปรชื่อเดียวกัน
3.ใช้หมายเลขกำกับเพื่ออ้างอิงตำแหน่งของข้อมูลในอาร์เรย์
4.มีขนาดที่แน่นอนไม่สามารถปรับเปลี่ยนขนาดได้
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`การสร้างอาร์เรย์ (Array)
อาร์เรย์มี 2 แบบ แบบกำหนดขนาดกับแบบไม่กำหนดขนาด

แบบกำหนดขนาด
    ชนิดข้อมูล ชื่อตัวแปร[ขนาด]; //ขนาดต้องเป็นตัวเลขจำนวนเต็ม
    เช่น int score[3];

แบบกำหนดขนาดและค่าเริ่มต้น
    ชนิดข้อมูล ชื่อตัวแปร [ขนาด] = {สมาชิก,...};
    เช่น int score [3] = {100,90,80};

ตัวอย่างการสร้าง Array
#include <stdio.h>


int main()
{
    int score[3] = {100,90,60}; // แบบกำหนดขนาด
    int random[] = {1,2,3,4,5,6,7,8,9,10};  แบบไม่กำหนดขนาด
    printf("%d",score[0]);
    printf("%d\\n",random[5]);
    return 0;
}
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`จัดการสมาชิกในอาร์เรย์
หรือการเข้าถึงสมาชิกใน Array
เมื่อเราประกาศ Array ขึ้นมา
int score[] = {100,200,300};
ถ้าเราอยาก printf ออกมาเราก็ต้องกำหนดตำแหน่งที่เราต้องการ เช่น
printf("%d",score[0]); << ก็จะได้ 100 ออกมาเพราะ Index จะเริ่มที่ 0
หรือเราจะทำการเปลี่ยนแปลงค่าก็ได้ เช่น
score[3] = 500;

การเข้าถึงสมาชิกด้วย For Loop

#include <stdio.h>


int main()
{
    // Input
    int count;
    printf("Input Count = ");
    scanf("%d",&count);

    int number[count];
    float sum,avg;
    for(int i=0;i<count;i++){
        printf("Enter Number %d = ",i+1);
        scanf("%d",&number[i]);
    }

    // Process
    for(int j=0;j<count;j++){
        sum = sum+number[j];
    }
    avg = sum/count;

    // Output
    printf("Total = %.2f\\n",sum);
    printf("Average = %.2f\\n",avg);
    return 0;
}
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`Array 2 มิติ

- อาร์เรย์ที่มีข้อมูลสมาชิกภายในเป็นอาร์เรย์ (Array ซ้อน Array)
- มีโครงสร้างเป็นรูปแบบแถว (แนวนอน) และคอลัมน์ (แนวตั้ง)

Array 2 มิติ
แบบกำหนดขนาด
    ชนิดข้อมูล ชื่อตัวแปร[ขนาดแถว][ขนาดคอลัมน์];
    เช่น int score [2][4] = {
        {50,70,80,90},
        {100,99,60,55}
    };

การเปลี่ยนแปลงค่าในอาร์เรย์ 2 มิติ
score[0][1] = 99;
score[1][3] = 88;

ตัวอย่างการใช้ Array 2 มิติ

#include <stdio.h>


int main()
{
    int score[2][4] = {
        {100,90,80,70},
        {60,50,40,30}
    };
    int total;
    score[0][2] = score[0][2] + score[0][1];

    for(int row=0;row<2;row++){ << เป็นการใช้ nested loop
            printf("Row = %d \\n",row);
        for(int col=0;col<3;col++){
            printf("Col %d = %d \\n",col,score[row][col]);
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

export default Cpage12