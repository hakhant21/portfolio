import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../components/shared/Button';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const sendEmail = (e) => {
    e.preventDefault();

    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify({ email, name, message }),
    })
      .then(setLoading(true))
      .then(
        setTimeout(() => {
          router.push(
            '/',
            window.alert('Your message has been send successfully  🥰 ')
          );
        }, 3000)
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className='py-4'>
      <Head>
        <title>HAK | Contact Me</title>
        <meta name='description' content='here is how you can reach me easy right?' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section
        className='py-8 mx-auto w-full md:max-w-full lg:max-w-6xl px-4 md:px-12
        lg:py-12 bg-white rounded-md shadow-md dark:bg-gray-800'>
        <h2 className='text-3xl font-semibold text-center text-gray-800 dark:text-white'>
          Get in touch
        </h2>
        <p className='mt-3 text-center text-gray-600 dark:text-gray-400'>
          Feel free to message me or call me
        </p>
        <div className='grid gap-4 mt-6 lg:grid-cols-3'>
          <span className='flex flex-col items-center py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500'>
            <svg
              className='w-5 h-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                clipRule='evenodd'
              />
            </svg>

            <span className='mt-2'>Rose Street | Pyinmana | Nay Pyi Taw</span>
          </span>

          <span className='cursor-pointer flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500'>
            <svg
              className='w-5 h-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
            </svg>
            <span className='mt-2'>
              <Link href='tel:+9595095905'>095095905</Link>
            </span>
          </span>

          <span className='flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500'>
            <svg
              className='w-5 h-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
              <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
            </svg>

            <span className='mt-2'>
              <Link href='mailto:hakhant.dev@gmail.com'>
                hakhant.dev@gmail.com
              </Link>
            </span>
          </span>
        </div>
        <form className='mt-6' onSubmit={sendEmail}>
          <div className='lg:flex flex-col justify-center items-center'>
            <div className='w-full md:mt-0'>
              <label
                htmlFor='name'
                className='block mt-2 text-xl font-thin text-gray-600 dark:text-gray-200'>
                Name
              </label>
              <input
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                placeholder='What you want me to call ?'
                className='block w-full px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                required
              />
            </div>

            <div className='w-full md:mt-0'>
              <label
                htmlFor='email'
                className='block mt-2 text-lg font-thin text-gray-600 dark:text-gray-200'>
                E-mail
              </label>
              <input
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Your email address ?'
                className='block w-full px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                required
              />
            </div>
          </div>

          <div
            className='w-full lg:mt-0'>
            <label
              htmlFor='message'
              className='block mt-2 text-lg font-thin text-gray-600 dark:text-gray-200'>
              Message
            </label>
            <textarea
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='block w-full h-40 px-2 py-2 font-thin text-gray-700 bg-white border border-gray-300 rounded-md 
              dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              required
            />
          </div>

          <div className='flex justify-start mt-6'>
            <span className='inline-flex rounded-md shadow-sm'>
              <Button loading={loading} />
            </span>
          </div>
        </form>
      </section>
    </div>
  );
}


