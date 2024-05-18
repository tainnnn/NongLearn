"use client"

import React from 'react'
import Navbar from '../../components/Navbar'
import Contentbar from '@/app/components/Contentbar';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

function Clang() {

  const { data: session } = useSession();
    if (!session) redirect("/login");

  const handleNavigation = (page) => {
    router.push(`/learn/clang/${page}`);
  };

  return (
    <div className='bg-slate-600 min-h-screen'>
      <Navbar session={session}/>
      <div className='flex'>
        <Contentbar />
        <section className="mt-10 mr-10 flex-1 bg-slate-500 rounded-box p-4 flex flex-col h-full">
          <div className='w-full flex items-center bg-slate-700 rounded-box p-2'>
            <div className="ml-10 text-sm lg:text-xl flex-grow ml-4 text-white">
            <p className='text-white'>
            ภาษา C เป็นภาษาโปรแกรมที่มีอิทธิพลอย่างมากในวงการคอมพิวเตอร์ ถูกพัฒนาขึ้นเมื่อปี ค.ศ. 1972 โดย เดนนิส ริตชี
            </p>
            <p className='text-white'>
            ที่ห้องปฏิบัติการเบลล์แล็บส์ มีจุดมุ่งหมายเพื่อใช้ในการพัฒนาระบบปฏิบัติการยูนิกซ์ ซึ่งก่อนหน้านั้นยูนิกซ์ถูกเขียนด้วยภาษาแอสเซมบลี
            </p>
            <p className='text-white mt-2'>
            ภาษา C เป็นภาษาคอมพิวเตอร์เพื่อวัตถุประสงค์ทั่วไป เป็นภาษาที่มีความจำเป็นมาก
            มันสนับสนุนการเขียนโปรแกรมที่มีโครงสร้าง การกำหนดขอบเขตของตัวแปร และการเรียกใช้ตัวเอง (Recusion) 
            และมันเป็นภาษาที่อยู่ในระดับต่ำ (Low level) นั่นคือ มันเป็นภาษาที่สามารถทำงานได้ดีในระดับของฮาร์ดแวร์ ภาษา C 
            เป็นสามารถที่ออกแบบมาให้สามารถที่จะทำงานกับคำสั่งพื้นฐานของคอมพิวเตอร์ได้อย่างมีประสิทธิภาพ เพราะฉะนั้นมันจึงถูกพบบ่อย
            ในการใช้สร้างแอพพลิเคชันในสมัยก่อนที่เขียนโดยภาษาแอสเซมบลี รวมถึงระบบปฏิบัติการ เช่นเดียวกันกับซอฟต์แวร์ประยุกต์สำหรับ
            คอมพิวเตอร์ ซุปเปอร์คอมพิวเตอร์ และระบบฝังตัว
            </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Clang
