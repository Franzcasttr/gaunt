import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Hello World</h1>
      <button disabled={true} className='p-4 rounded-lg bg-blue-400'>
        Click me
      </button>
    </main>
  );
}
