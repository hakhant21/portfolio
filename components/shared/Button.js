import Loader from './Loader';

export default function Button({ loading, children}) {
  return (
    <button type="submit" className='inline-flex items-center px-6 py-2 border text-white leading-6 font-medium rounded-md transition ease-in-out duration-150 bg-indigo-500 hover:bg-indigo-400 hover:border-indigo-400 hover:opacity-50 border-indigo-500'>
      {loading ? <Loader /> : children ? children : 'Send'}
    </button>
  );
}

