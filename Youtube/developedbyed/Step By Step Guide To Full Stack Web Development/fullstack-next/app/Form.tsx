'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function FormPost() {
  const [title, setTitle] = useState('');
  const router = useRouter();

  async function SubmitPost(e: FormEvent) {
    e.preventDefault();

    const data = await fetch(`/api/createPost`, {
      method: 'POST',
      body: JSON.stringify({ title }),
    });

    const res = await data.json();
    router.refresh();

    if (!res.ok) console.error(res.message);
  }

  return (
    <form onSubmit={SubmitPost} className='mb-8'>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='text-black py-1 px-2'
      />
      <button type='submit' className='ml-4'>
        New Post!
      </button>
    </form>
  );
}
