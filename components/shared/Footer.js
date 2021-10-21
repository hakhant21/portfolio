import React from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className='max-w-6xl mx-auto'>
      <div className='lg:flex justify-between items-center'>
        <h5 className='text-gray-100 font-bold text-lg text-center'>
          Copyrights © 2021
        </h5>
        <div className='flex justify-center items-center py-4'>
          <Link href='https://www.facebook.com/21st.hak' passHref={true}>
            <button className='font-semibold text-gray-100 text-md pr-4'>
              Facebook
            </button>
          </Link>
          <Link href='https://www.github.com/hakhant21' passHref={true}>
            <button className='font-semibold text-gray-100 text-md pr-4'>
              Github
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
