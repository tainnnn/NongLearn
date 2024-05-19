import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Contentbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (page) => {
    router.push(`/learn/clang/${page}`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='mx-10 my-10'>
      <button
        className='mb-2 md:hidden bg-slate-800 text-white p-2 rounded focus:outline-none rounded-xl'
        onClick={toggleMenu}
      >
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
        </div>
      </button>
      <div className={`flex items-start ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="menu w-30 md:w-48 lg:w-56 rounded-box bg-slate-800">
          <li>
            <ul>
              <li className='text-white'><a onClick={() => handleNavigation('/')}>ภาษา C</a></li>
              <li className='text-white'><a onClick={() => handleNavigation('c1')}>โครงสร้างเบื้องต้น</a></li>
              <li className='text-white'><a onClick={() => handleNavigation('c2')}>คอมเมนต์</a></li>
              <li className='text-white'><a onClick={() => handleNavigation('c3')}>ตัวแปรและชนิดข้อมูล</a></li>
              <li className='text-white'><a onClick={() => handleNavigation('c4')}>การแสดงผลข้อมูล</a></li>
              <li className='text-white'><a onClick={() => handleNavigation('c5')}>การรับข้อมูล</a></li>
              <li className='text-white'><a onClick={() => handleNavigation('c6')}>ตัวดำเนินการทางคณิตศาสตร์</a></li>
              <li className='text-white'><a onClick={() => handleNavigation('c7')}>Compound Assignment</a></li>
              <li className='text-white'><a onClick={() => handleNavigation('c8')}>ตัวดำเนินการเปรียบเทียบ</a></li>
              <li className='text-white'><a onClick={() => handleNavigation('c9')}>If..Else</a></li>
              <li className='text-white'><a onClick={() => handleNavigation('c10')}>Switch..Case</a></li>
              <li className='text-white'><a onClick={() => handleNavigation('c11')}>Loop</a></li>
              <li className='text-white'><a onClick={() => handleNavigation('c12')}>Array</a></li>
              <li className='text-white'><a onClick={() => handleNavigation('c13')}>Function</a></li>
              <li className='text-white'><a onClick={() => handleNavigation('c14')}>Function แบบต่างๆ</a></li>
              <li className='text-white'><a onClick={() => handleNavigation('c15')}>Structure</a></li>
              <li className='text-white'><a onClick={() => handleNavigation('c16')}>Pointer</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contentbar;
