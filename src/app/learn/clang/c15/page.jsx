"use client"

import React from 'react'
import Navbar from '@/app/components/Navbar';
import Contentbar from '@/app/components/Contentbar';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

function Cpage15() {
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
                <span className="bg-slate-700 p-2 rounded-xl">Structure</span>
              </h2>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`สตรัคเจอร์ (Structure)
คือ ข้อมูลแบบโครงสร้างที่นำเอาข้อมูลที่มีชนิดข้อมูลต่างกันมา
รวบรวมเข้าด้วยกัน แต่มีความสัมพันธ์ของข้อมูลแบบต่อกัน มาเก็บไว้ภายในโครงสร้างเดียวกัน
**เปรียบเทียบเสมือนกับสร้างชนิดข้อมูลขึ้นมาใช้งานเอง**

การสร้างสตรัคเจอร์
struct ชื่อสตรัคเจอร์ {
    ชนิดข้อมูลตัวที่ 1 ตัวแปรที่1;
    ชนิดข้อมูลตัวที่ 2 ตัวแปรที่2;
    ...
}; << ต้องมี
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`ตัวอย่างการใช้ Structure
#include <stdio.h>
#include <string.h>

struct user{
    char name[20];
    char gender;
    int age;
};

int main(){
    struct user emp1;
    strcpy(emp1.name,"Tain Maleaw");
    emp1.gender='M';
    emp1.age=17;

    struct user emp2;
    strcpy(emp2.name,"Cookie");
    emp2.gender='F';
    emp2.age=14;

    printf("Name = %s\\n",emp1.name);
    printf("Gender = %c\\n",emp1.gender);
    printf("Age = %d\\n",emp1.age);

    printf("-----------------------\\n");

    printf("Name = %s\\n",emp2.name);
    printf("Gender = %c\\n",emp2.gender);
    printf("Age = %d\\n",emp2.age);
    return 0;
}
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`สตรัคเจอร์แบบค่าเริ่มต้น
เป็นการกำหนดค่าเริ่มต้นให้ตัวแปรไว้ที่ struct เลย

#include <stdio.h>
#include <string.h>

struct user{
    char name[20];
    char gender;
    int age;
}
emp1={"Tain Maleaw",'M',17}, << ซึ่งเราต้องเอามาเขียนไว้ตรงนี้
emp2={"Cookie",'F',14};

int main(){
    printf("Name = %s\\n",emp1.name);
    printf("Gender = %c\\n",emp1.gender);
    printf("Age = %d\\n",emp1.age);

    printf("-----------------------\\n");

    printf("Name = %s\\n",emp2.name);
    printf("Gender = %c\\n",emp2.gender);
    printf("Age = %d\\n",emp2.age);
    return 0;
}
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`สร้างชนิดข้อมูลใหม่ด้วย typedef

#include <stdio.h>
#include <string.h>

typedef struct{
    char name[20];
    char gender;
    int age;
}Employee; << เป็นการใช้ typedef ในการเป็นตัวแทน

int main(){

    Employee emp1 = {"Tain Maleaw",'M',17};
    Employee emp2 = {"Cookie",'F',14};

    printf("Name = %s\\n",emp1.name);
    printf("Gender = %c\\n",emp1.gender);
    printf("Age = %d\\n",emp1.age);

    printf("-----------------------\\n");

    printf("Name = %s\\n",emp2.name);
    printf("Gender = %c\\n",emp2.gender);
    printf("Age = %d\\n",emp2.age);
    return 0;
}
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`ฟังก์ชันรับค่าสตรัคเจอร์

#include <stdio.h>
#include <string.h>

typedef struct{
    char name[20];
    char gender;
    int age;
}Employee;

void showData(Employee person); << ให้ person แทนค่าตัวแปร emp ที่ส่งเข้ามา

int main(){

    Employee emp1 = {"Tain Maleaw",'M',17};
    Employee emp2 = {"Cookie",'F',14};
    Employee emp3 = {"Nut",'M',19};

    showData(emp1);
    showData(emp2);
    showData(emp3);


    return 0;
}

void showData(Employee person){
    printf("Name = %s\\n",person.name);
    printf("Gender = %c\\n",person.gender);
    printf("Age = %d\\n",person.age);
    printf("-----------------------\\n");
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

export default Cpage15