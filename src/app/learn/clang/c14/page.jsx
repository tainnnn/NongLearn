"use client"

import React from 'react'
import Navbar from '@/app/components/Navbar';
import Contentbar from '@/app/components/Contentbar';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

function Cpage14() {
  const { data: session } = useSession()
  const router = useRouter()
  console.log(session)
  
  if (!session) router.replace("/");

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
                <span className="bg-slate-700 p-2 rounded-xl">Function แบบต่างๆ</span>
              </h2>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`ฟังก์ชั่นแบบปกติ Void Funtion

คือฟังก์ชันที่ไม่มีการรับและส่งค่า (void)

โครงสร้างคำสั่ง

void ชื่อฟังก์ชัน(){
    //คำสั่งต่างๆ
}

การเรียกใช้งานฟังก์ชัน
ชื่อฟังก์ชัน();

ตัวอย่างการใช้ Void Function

#include <stdio.h>

void func_name(); // ประกาศฟังก์ชันไว้ก่อนด้านบนจะได้ไม่รกแล้วไปเขียนด้านล่าง

int main()
{
    func_name();
    return 0;
}

void func_name(){
    printf("Please don't you go\\n");
}
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`ฟังก์ชันรับค่าอาร์เรย์

เป็นฟังก์ชันที่มีการรับค่าเข้ามาเหมือนกันแต่เป็นรับค่าอาร์เรย์

ตัวอย่างการใช้งานฟังก์ชันรับค่าอาร์เรย์
#include <stdio.h>

void showArray(int arr[],int count);
int main()
{
    int weight[] = {40,50,60,70,80,90,100};
    int score[] = {10,20,30,50,60};
    showArray(score,4);
    showArray(weight,6);
    return 0;
}

void showArray(int arr[],int count){
    printf("----Data----\\n");
    for(int i=0;i<count;i++){
        printf("Index %d = %d\\n",i,arr[i]);
    }
}
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`ฟังก์ชันแบบมีค่าส่งกลับ หรือ ฟังก์ชันรีเทิร์นค่า

โครงสร้างคำสั่ง

type ชื่อฟังก์ชัน(){
    return ค่าที่จะส่งออกไป(อ้างอิงตามชนิดข้อมูล)
}

การเรียกใช้งานฟังก์ชัน
ตัวแปรที่รับค่าจากฟังก์ชัน = ชื่อฟังก์ชัน();

ตัวอย่างการใช้งานฟังก์ชันแบบรีเทิร์นค่าs
#include <stdio.h>

int getDiscount();
int main()
{
    printf("Today discount = %d bath\\n",getDiscount());
    int price;
    printf("Enter Product Pirce = ");
    scanf("%d",&price);
    int total = price-getDiscount();
    printf("Total = %d\\n",total);
    return 0;
}

int getDiscount(){
    return 50;
}
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`ฟังก์ชันแบบรับและส่งค่า

โครงสร้างคำสั่ง
type ชื่อฟังก์ชัน(parameter1,parameter2,...){
    return ค่าที่จะส่งออกไป(อ้างอิงตามชนิดข้อมูล);
}

การเรียกใช้งานฟังก์ชัน
ตัวแปรที่รับค่าฟังก์ชัน = ชื่อฟังก์ชัน(argument1,argument2,...);

ตัวอย่างการใช้งานฟังก์ชันแบบรับและส่งค่า
#include <stdio.h>

int power();

int main(){
    int resulst = power(2,3);
    printf("Result = %d\\n",resulst);
    return 0;
}

int power(int base,int n){
    int number=1;
    for(int i=1;i<=n;i++){
        number = base*number;
    }
    return number;
}
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`ฟังก์ชันมาตรฐานเกี่ยวกับตัวอักษร ctype
เป็นการใช้ standard library สำหรับการเปลี่ยนพิมพ์เล็กพิมพ์ใหญ่ในภาษา C

#include <stdio.h>
#include <ctype.h> << โดยเราต้องเรียกใช้ตัว Header ที่มีชื่อว่า ctype.h

int main(){
    char letter='a';
    printf("value = %c\\n",letter);
    letter = toupper(letter);
    printf("value = %c\\n",letter);
    letter = tolower(letter);
    printf("value = %c\\n",letter);
    return 0;
}
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`ฟังก์ชันมาตรฐานเกี่ยวกับคณิตศาสตร์
เป็นการใช้ standard library สำหรับคณิตศาสตร์

#include <stdio.h>
#include <math.h> << โดยเราต้องเรียกตัว Header ที่มีชื่อว่า math.h มาก่อนถึงจะสามารถใช้งานฟังก์ชันคณิตศาสตร์ได้

int main(){
    int number1 = 5;
    float number2 = 9.5;
    int number3 = -5;

    float result1 = pow(number1,4); << pow เป็นฟังก์ชันยกกำลัง
    printf("5 Power 4 = %.2f\\n",result1);

    float result2 = sqrt(number1); << sqrt เป็นฟังก์ชันถอดลูท
    printf("Square root 5 = %.2f\\n",result2);

    float result3 = ceil(number2); << ceil เป็นฟังก์ชันปัดเศษขึ้น
    printf("9.5 round up = %.2f\\n",result3);

    float result4 = floor(number2); << floor เป็นฟังก์ชันปัดเศษลง
    printf("9.5 round down = %.2f\\n",result4);

    float result5 = fabs(number3); << fabs เป็นฟังก์ชันหาค่าสมบูรณ์
    printf("absolute -5 = %.2f\\n",result5);
    return 0;
}
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`ฟังก์ชันมาตรฐานเกี่ยวกับข้อความ string
เป็น standard library สำหรับ String

#include <stdio.h>
#include <string.h> << โดยเราต้องเรียกใช้งานตัว Header ที่มีชื่อว่า string.h มาก่อนถึงจะใช้งานได้

int main(){
    char name[20] = "Tain Maleaw";
    printf("Count = %d\\n",strlen(name)); << strlen คือ ฟังก์ชันสำหรับการนับจำนวนตัวอักษรในตัวแปร String
    char copyName[20];
    printf("%s\\n",strcpy(copyName,name)); << strcpy คือ ฟังก์ชันสำหรับการ copy อีกตัวแปรมาไว้ในอีกตัวแปร
    printf("%s\\n",strcat(copyName," Naja")); << strcat คือ ฟังก์ชันสำหรับการต่อ string
    if(strcmp(copyName,name)==0){ << strcmp คือ ฟังก์ชัน สำหรับการเปรียบเทียบ string ว่ามีค่าเท่ากับหรือไม่โดยจะให้ผลออกเป็น True = 0 False = 1
        printf("Equal \\n");
    }else{
        printf("Not Equal \\n");
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

export default Cpage14