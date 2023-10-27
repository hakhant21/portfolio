import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { sanityClient, urlFor } from '../lib/sanity';
import Button from '../components/shared/Button';

const developerQuery = `*[_type == 'developer']{
  _id,
  slug,
  name,
  about,
  image,
}`;

export default function Home({ developers }) {
  return (
    <div className='py-12 mb-12'>
      <Head>
        <title>HAK</title>
        <meta
          name='description'
          content="Htet Aung Khant's portfolio,a fullstack web developer"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='w-full px-4 py-8 mx-auto md:max-w-full lg:max-w-6xl lg:px-0 lg:py-12'>
        {developers?.length > 0 &&
          developers.map((developer) => (
            <div className='grid gap-6 lg:grid-cols-2' key={developer._id}>
              <div className='lg:pr-1'>
                <h5 className='mb-4 text-2xl font-extrabold leading-none text-indigo-400 lg:text-3xl'>
                  Yoo! I'm {developer.name} <br className='hidden sm:block' />
                  <span className='inline-block mt-4 text-xl text-gray-100 lg:text-2xl'>
                    Fullstack <br /> Web Developer
                  </span>
                </h5>
                <p className='mb-6 text-xl text-gray-300 lg:text-2xl'>
                  {developer.about}
                </p>
                <hr className='mb-5 border-gray-300' />
                <div className='flex items-center justify-start gap-2'>
                 
                    <Button className='animite-bounce transition:delay-100'>
                      <Link href='/contact' passHref={true}>
                          Contact
                      </Link>
                    </Button>
                    <Button className='animite-bounce transition:delay-100'>
                      <Link href='/projects' passHref={true}>
                          Works
                      </Link>
                    </Button>
                </div>
              </div>

              <div className='w-full overflow-hidden rounded'>
                <Image
                  layout='responsive'
                  width='100'
                  height='70'
                  src={urlFor(developer.image).url()}
                  className='object-cover object-center w-full mb-6 rounded overflow-hidden'
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const developers = await sanityClient.fetch(developerQuery);

  return {
    props: {
      developers,
    },
  };
}
