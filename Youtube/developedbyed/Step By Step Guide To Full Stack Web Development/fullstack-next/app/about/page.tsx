import Link from 'next/link';

export default function About() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          Get started by editing&nbsp;
          <code className='font-mono font-bold'>app/about/page.tsx</code>
        </p>
      </div>

      <h1>About Page</h1>

      <Link className='bg-teal-400 text-black font-medium py-2 px-4 rounded-md' href={'/'}>
        Go back to Home
      </Link>
    </main>
  );
}
