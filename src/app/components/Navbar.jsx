'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { signOut } from 'next-auth/react'

function Navbar({session}) {
  return (
  <div className="navbar bg-slate-800">
  <div className="flex-1">
    <a href="/" className="btn btn-ghost text-xl text-white">
      <img alt="NongLearn Logo" src="/images/nonglearn.png" width={30} height={30}/>
      NongLearn
    </a>
  </div>
  <div className="flex-none">

    {!session ? (
      <>
        <ul className="menu menu-horizontal px-0 py-0 mx-1 bg-slate-900 rounded-lg hover:bg-slate-800">
          <li><Link href="/login">LOGIN</Link></li>
        </ul>
      </>
    ): (
      <>
      <ul className="menu menu-horizontal px-0 py-0 mx-1 bg-slate-900 rounded-lg hover:bg-slate-800">
        <li><Link href="/main">Home</Link></li>
      </ul>
      <ul className="menu menu-horizontal px-0 py-0 mx-1 bg-slate-900 rounded-lg hover:bg-red-900">
        <li><a onClick={() => signOut()}>LOGOUT</a></li>
      </ul>
      </>
      
    )}

    
  </div>
  </div>
  )
}

export default Navbar
