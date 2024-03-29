import Link from 'next/link';

export default function Header() {
  return (
    <div className='py-4 mx-auto w-full md:max-w-full lg:max-w-6xl lg:px-0 px-4 lg:py-12'>
      <div className='py-8 flex justify-between items-center'>
        <div className='cursor-pointer lg:text-3xl font-bold text-gray-100'>
          <Link href='/' passHref={true}>
            <button className='py-2 px-4 rounded-md hover:text-indigo-300 hover:bg-gray-800  transition delay-100 cursor-pointer  font-semibold text-gray-100 text-center text-xl'>
              <span className='lg:text-3xl sm:text-xl'>H A K</span>
            </button>
          </Link>
        </div>

        <ul className='flex items-center'>
          <li>
            <button className='py-2 px-4 rounded-md hover:bg-gray-800 transition delay-100 cursor-pointer lg:text-lg text-sm font-semibold text-gray-100 text-center'>
              <Link href='/projects' passHref={true}>
                My Works
              </Link>
            </button>
          </li>
          <li>
            <button className='py-2 px-4 rounded-md hover:bg-gray-800 transition delay-100 cursor-pointer lg:text-lg text-sm font-semibold text-gray-100 text-center'>
              <Link href='/contact' passHref={true}>
                Get in Touch
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

