import Link from 'next/link';

export default function Header() {
  return (
    <div className='py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-6xl lg:px-0 px-4 lg:py-12'>
      <div className='py-8 flex justify-between items-center'>
        <div className='cursor-pointer text-3xl font-bold text-gray-100'>
          <Link href='/' passHref={true}>
            <button>H A K</button>
          </Link>
        </div>

        <ul className='flex items-center'>
          <li>
            <Link href='/projects' passHref={true}>
              <button className='py-2 px-4 rounded-full hover:bg-gray-700 transition delay-100 cursor-pointer text-lg font-semibold text-gray-100 text-center'>
                My Works
              </button>
            </Link>
          </li>
          <li>
            <Link href='/contact' passHref={true}>
              <button className='py-2 px-4 rounded-full hover:bg-gray-700 transition delay-100 cursor-pointer text-lg font-semibold text-gray-100 text-center'>
                Get in Touch
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

