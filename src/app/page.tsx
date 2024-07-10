import { type ReactElement } from 'react';

export default function Home(): ReactElement {
  const a = 1;

  return (
    <main className="">
      {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
      <div>
        <div className="w-full bg-red-500">
          <div> 测试数据 </div>
        </div>
      </div>
    </main>
  );
}
