'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';

import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

function LoginPage() {

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.replace("/main");
  }, [session, router])
  return (
    <div className='h-screen bg-slate-600'>
      <Navbar/>
      <div className='flex justify-center items-center py-60'>
        <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
            <h1 className='text-slate-900 text-3xl block text-center font-semibold py-4'><FontAwesomeIcon icon={faUser} /> Login</h1>  
            <button button onClick={() => signIn()} className='text-slate-400 border-2 border-slate-700 bg-slate-700 py-1 w-full rounded-md hover:text-white font-semibold'><FontAwesomeIcon icon={faGoogle} /> Login with Google</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage