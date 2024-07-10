import Image from 'next/image';
import Link from 'next/link';

import { type ReactElement } from 'react';

export default function notFound(): ReactElement {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Image src="/svg/sad.svg" alt="not-found" width="160" height="37" priority></Image>
      <span className="py-4 text-3xl font-semibold">东西去哪了呢?</span>
      <div>
        <Link href={'/'}>
          <button className="border-4 border-solid border-black p-1 text-lg font-semibold">回到主页</button>
        </Link>
      </div>
    </div>
  );
}
