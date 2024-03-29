import Head from 'next/head';
import Project from '../components/Project';
import { sanityClient, urlFor } from '../lib/sanity';

const projectQuery = `*[_type == 'project']{
  _id,
  title,
  slug,
  body,
  publishedAt,
  github,
  mainImage,
  developer->{
    _id,
    name,
    github,
    image,
  }
}`;

export default function Projects({ projects }) {
  return (
    <div className='py-2'>
      <Head>
        <title>HAK | Projects</title>
        <meta name='description' content='here you can find some of my project,buids ecommerce site using laravel nodejs react' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-6xl lg:px-0 px-4 lg:py-6'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h2 className='text-2xl text-indigo-100 font-bold title-font mb-1 uppercase tracking-widest'>
            Checkout some of my works here
          </h2>
        </div>
        <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12'>
          {projects?.length > 0 &&
            projects.map((project) => (
              <Project project={project} key={project._id} urlFor={urlFor} />
            ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(
) {
  const projects = await sanityClient.fetch(projectQuery);

  return {
    props: {
      projects,
    },
  };
}

