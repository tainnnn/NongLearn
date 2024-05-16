"use client"

import React from 'react'
import Navbar from '../../components/Navbar'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

function Pythonlang() {

  const {data: session} = useSession()
  const router = useRouter()
  console.log(session)
    
  if (!session) router.replace("/")
  if (session) router.replace("/learn/pythonlang")

  return (
    <div>
      <Navbar session={session}/>
    </div>
  )
}

export default Pythonlang
