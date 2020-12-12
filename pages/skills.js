import React from 'react';
import Head from "next/head";
import Link from "next/link";

const skills = () => {
  return (
    <div>
      <Head>
        <title>skills page</title>
      </Head>
      <h2>skills page with Next.js</h2>
      <Link href="/"><a>back</a></Link>
    </div>
  );
};

export default skills;