"use client"

import React from 'react'
import Navbar from '@/app/components/Navbar';
import Contentbar from '@/app/components/Contentbar';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react'
import { useEffect } from 'react';
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

function Cpage3() {

  const { data: session } = useSession();
  if (!session) redirect("/c3");

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
                <span className="bg-slate-700 p-2 rounded-xl">ตัวแปรและชนิดข้อมูล</span>
            </h2>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`Variable and Data Type 
ตัวแปรและชนิดข้อมูล
ตัวแปร (Variable) คือ ชื่อที่ถูกนิยามขึ้นมาเพื่อใช้เก็บค่าข้อมูลสำหรับนำไปใช้งานในโปรแกรม
โดยข้อมูลประกอบด้วย ข้อความ ตัวเลข ตัวอักษร หรือ ผลลัพธ์จากการประมวลผลข้อมูล
`}
              </code>
            </pre>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`ชนิดข้อมูลพื้นฐาน (Data Type)
boolean คือ ค่าทางตรรกศาสตร์ (True = 1/ False = 0)
int     คือ ตัวเลขที่ไม่มีจุดทศนิยม
float   คือ ตัวเลขที่มีจุดทศนิยม
char    คือ ตัวอักษร(ใช้เครื่องหมาย Single Quote(''))
string  คือ กลุ่มตัวอักษรหรือข้อความ (ใช้เครื่องหมาย Double Quote(""))
`}
              </code>
            </pre>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`การสร้างตัวแปร
- ชนิดข้อมูล ชื่อตัวแปร;
- ชนิดข้อมูล ชื่อตัวแปร = ค่าเริ่มต้น;
- ชนิดข้อมูล ชื่อตัวแปร1,ชื่อตัวแปร2;

เช่น
int age = 18;
char name[] = "Somchai";
`}
              </code>
            </pre>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`กฎการตั้งชื่อ
- ขึ้นต้นด้วยตัวอักษร A-Z หรือ a-z หรือ _เครื่องหมายขีดเส้นใต้เท่านั้น
- อักษรตัวแรกห้ามเป็นตัวเลข
- ตัวพิมพ์เล็ก-พิมพ์ใหญ่มีความหมายต่างกัน (Case Sensitive)
- ห้ามใช้อักขระพิเศษมาประกอบเป็นชื่อตัวแปร เช่น {} , % ^ และช่องว่างเป็นต้น
- ไม่สามารถประกาศชื่อเดียวกัน แต่มีชนิดข้อมูล 2 ชนิดได้
- ไม่ซ้ำกับคำสงวนในภาษา C

คำสงวนในภาษา C (Keywords)
auto     double      int      struct
break    else        long     switch
case     enum        register typedef
char     extern      return   union
continue for         signed   void
do       if          static   while
default  goto        sizeof   Volatile
const    float       short    Unsigned
`}
              </code>
            </pre>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`ตัวอย่างการประกาศตัวแปร

#include <stdio.h> << standard input output
#include <stdbool.h> << standard boolean เรียกใช้เมื่อใน code เรานั้นต้องการใช้ค่า boolean

int main()
{
    //student data
    char name[10] = "Somchai" , gender = 'M'; << เราสามารถกำหนด จำนวนตัวอักษรของ char
    ได้โดยใช้ [ตามด้วยจำนวนที่เราต้องการสามารถใส่เกินได้] แล้วเราก็จะสามารถเขียนใน Double Quote ("") ได้  
    int age = 17;
    float gpa = 3.61;
    bool status = true;
    char somewords[] = "What can I say? Please recognize I'm tryin', babe";
    การกำหนดชนิดข้อมูลโดยไม่ใส่ตัวเลขใน [] แบบนี้จะทำให้เราสามารถเขียนกี่ตัวก็ได้เป็น String นั้นเอง

    age = 27;
    gpa = 4.00;

    //output data
    printf("Name = %s \\n",name); << เวลาเราจะ printf อย่าลืมกำหนดตำแหน่งด้วย Format String ก็คือ %s ฯลฯ
    printf("Age = %d \\n",age);
    printf("Gender = %c \\n",gender);
    printf("GPA = %.2f \\n",gpa);
    printf("Status = %d \\n",status);
    printf("say someword? = %s \\n",somewords);
    return 0;
}
`}
              </code>
            </pre>

            <h2 className="mb-4 mt-4 text-white">
                <span className="bg-slate-700 p-2 rounded-xl">ค่าคงที่ Constant</span>
            </h2>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
              <code>
  {`มีลักษณะการใช้งานคล้ายกับตัวแปร แต่ค่าคงที่ 
คือค่าที่ ไม่สามารถเปลี่ยนแปลงค่าได้ ตอนประกาศใช้งาน
ค่าคงที่จะต้องมีการประกาศค่าเริ่มต้นเสมอ

ประเภทของค่าคงที่ (Constant)
- Literal Constant
- Defined Constant
- Memory Constant

-Literal Constant
คือค่าคงที่ซึ่งเป็นข้อมูลที่แน่นอน ไม่จำเป็นต้องมีตัวแปรมารองรับ
สามารถกำหนดเข้าไปในโปรแกรมได้เลย เช่น
    printf("Hello %s","World")
    printf("2 x 2 = %d",4)

-Defined Constant
คือค่าคงที่ซึ่งประกาศไว้ที่ส่วนหัวของโปรแกรมใน
ลักษณะ Preprocessing Directive เช่น
    #define MAX_VALUE 100s
    int main(){
        printf("MAX = %d",MAX_VALUE)
    }

-Memory Constant
เป็นการกำหนดค่าคงที่ให้ตัวแปร ส่งผลให้ตัวแปรที่
ถูกกำหนดค่านั้น ไม่สามารถแปรเปลี่ยนค่าได้ ตลอดการทำงานของโปรแกรม ตัวอย่าง เช่น
    const float PI = 3.14;
    const int SIZE = 10;

ตัวอย่าง Constant

#include <stdio.h>
#define MAX_VALUE 100 << Defined Constant

int main()
{
    const float PI = 3.14; << Memory Constant
    const int SIZE = 10; << Memory Constant

    //output data
    printf("Name = %s\\n","TainRuksiam"); << Literal Constant
    printf("MAX = %d\\n",MAX_VALUE);
    printf("PI Value = %.2f\\n",PI);
    printf("SIZE Value = %d\\n",SIZE);
    return 0;
}
`}
              </code>
            </pre>

            <h2 className="mb-4 mt-4 text-white">
                <span className="bg-slate-700 p-2 rounded-xl">ขอบเขตตัวแปร</span>
            </h2>

            <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`- Local varible ตัวแปรที่ประกาศอยู่ภายในฟังก์ชันมีขอบเขตการทำงาน
ตั้งแต่จุดเริ่มต้นไปจนถึงจุดสิ้นสุดของฟังก์ขันจะถือว่าฟังก์ชันนั้นเป็นเจ้าของตัวแปรนั้น
ฟังก์ชันอื่นจะไม่สามารถเรียกใช้งานกับตัวแปรนี้ได้

#include <stdio.h>

void func1();

int main(){
    int number = 100;
    printf("%d\\n",number);
    func1();
    return 0;
}

void func1(){
    printf("%d\\n",number); << เมื่อเรียกใช้งาน number ที่ประกาศใน ฟังก์ชัน main ก็จะเรียกไม่ได้เพราะเป็น Local varible
}


- Global varible ตัวแปรที่ประกาศอยู่นอกฟังก์ชันมีขอบเขตการทำงาน
ตั้งแต่จุดเริ่มต้นไปจนถึงจุดสิ้นสุดของไฟล์ที่ประกาศใช้ นั่นหมายถึงตัวแปรดังกล่าวนั้น
เป็นสาธารณะ ไม่มีฟังก์ขันใดเป็นเจ้าของ ทุกฟังก์ชันสามารถเรียกใช้งานตัวแปรนี้ได้

#include <stdio.h>

int number = 100;
void func1();

int main(){
    printf("%d\\n",number);
    func1();
    return 0;
}

void func1(){
    printf("%d\\n",number); << เมื่อเรียกใช้งานก็จะรันได้เพราะตัวแปร number เป็น Global varible
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

export default Cpage3
