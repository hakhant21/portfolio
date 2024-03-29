import Image from 'next/image';
import Link from 'next/link'

export default function Project({ project, urlFor }) {
  return (
    <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
      <div className='flex-1 bg-white'>
        <span className='h-10 w-10 rounded-full'>
          <Image
            src={urlFor(project.mainImage).url()}
            alt={project.title}
            layout='responsive'
            width='100'
            height='60'
            className='h-56 w-full object-cover'
          />
        </span>
      </div>
      <div className='bg-white px-4 py-6 lg:px-8 py-10 flex flex-col justify-between'>
        <div className='flex-1'>
          <Link href={project.github} className='block mt-2'>
            <a>
              <p className='lg:text-xl text-lg font-semibold text-gray-900 hover:underline'>
                {project.title}
              </p>
              <p className='mt-3 text-base text-gray-500'>
                {project.body.substring(0, 100)}
              </p>
            </a>
          </Link>
        </div>
        <div className='mt-6 flex items-center'>
          <div className='flex-shrink-0'>
            <Link href={project.developer.github}>
              <a>
                <span className='sr-only'>{project.developer.name}</span>
                <span>
                  <Image
                    src={urlFor(project.developer.image).url()}
                    alt={project.developer.name}
                    className='object-cover h-10 w-10 rounded-full overflow-hidden'
                    layout='fixed'
                    width='36'
                    height='36'
                  />
                </span>
              </a>
            </Link>
          </div>
          <div className='ml-3'>
            <p className='text-sm font-medium text-gray-900'>
              <Link href={project.developer.github} className='hover:underline'>
                <a>{project.developer.name}</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

