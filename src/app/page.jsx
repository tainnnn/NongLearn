"use client"


import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { useSession } from "next-auth/react";

export default function Home() {

  const {data: session } = useSession()

  return (
    <main className="flex min-h-screen flex-col bg-slate-600">
      <Navbar session={session}/>
      <div  className="container mt-10 mx-auto px-12 py-4">
      <HeroSection/>
      </div>
    </main>
  );
}
