import FormPost from './Form';

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);

  if (!res.ok) console.error(res);

  return res.json();
}

export default async function Home() {
  const data: { id: number; title: string }[] = await getPosts();

  return (
    <main className='py-8 px-48'>
      <h1 className='mb-4'>Posts</h1>
      <FormPost />

      <pre>{JSON.stringify(data, null, 2)}</pre>

      <section className='mt-8'>
        {data.map((post) => (
          <h2 key={post.id} className='text-lg py-2'>
            {post.id} - {post.title}
          </h2>
        ))}
      </section>
    </main>
  );
}

