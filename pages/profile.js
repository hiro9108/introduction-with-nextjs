import React from 'react';
import Head from "next/head";
import Link from "next/link";

const profile = () => {
  return (
    <div>
      <Head>
        <title>profile page</title>
      </Head>
      <h2>profile page with Next.js</h2>
      <Link href="/"><a>back</a></Link>
    </div>
  );
};

export default profile;