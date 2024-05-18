"use client"

import React from 'react'
import Navbar from '@/app/components/Navbar';
import Contentbar from '@/app/components/Contentbar';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react'
import { useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

function Cpage7() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) router.replace('/c7')
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
                <span className="bg-slate-700 p-2 rounded-xl">Compound Assignment</span>
              </h2>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`+=  รูปแบบการเขียน x+=  ความหมาย x=x+y
-=  รูปแบบการเขียน x-=  ความหมาย x=x-y
*=  รูปแบบการเขียน x*=  ความหมาย x=x*y
/=  รูปแบบการเขียน x/=  ความหมาย x=x/y
%=  รูปแบบการเขียน x%=  ความหมาย x=x%y
`}
                </code>
              </pre>

              <pre className='mt-3 text-sm lg:text-xl flex-grow text-white'>
                <code>
{`ตัวอย่างการใช้ Assignment

#include <stdio.h>

int main()
{
    int total = 20000;
    printf("Before = %d\\n",total);
    int x = 3;
    total *= x;
    printf("Total = %d\\n",total);
    int mouse_price = 500;
    total += mouse_price;
    printf("Total = %d\\n",total);
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

export default Cpage7
