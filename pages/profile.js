import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

const profile = () => {
  return (
    <Layout>
      <Head>
        <title>profile page</title>
      </Head>
      <h2>profile page with Next.js</h2>
      <Link href="/"><a>back</a></Link>
    </Layout>
  );
};

export default profile;