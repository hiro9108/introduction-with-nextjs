import React, {useEffect} from 'react';
import Head from "next/head";
import Link from "next/link";

const works = () => {

  const localUrl = "http://localhost:9000/.netlify/functions/hello";
  const devUrl = "https://hiro-portfolio.netlify.app/.netlify/functions/hello";

  useEffect(async () => {
    const resData = await fetch(devUrl)
      .then(res => res.url);

    const btn = document.getElementById("button");
    btn.addEventListener("click", () => {
      btn.innerText = resData;
    });
  },[]);
  return (
    <>
      <Head>
        <title>works page</title>
      </Head>
      <h2>works page with Next.js</h2>
      <Link href="/"><a>back</a></Link>
      <button id="button">check api url</button>
      <style jsx>{`
        color: coral;
      `}</style>
    </>
  );
};

export default works;