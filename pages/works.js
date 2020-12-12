import React from 'react';
import Head from "next/head";
import Link from "next/link";

const works = () => {
  return (
    <div>
      <Head>
        <title>works page</title>
      </Head>
      <h2>works page with Next.js</h2>
      <Link href="/"><a>back</a></Link>
    </div>
  );
};

export default works;