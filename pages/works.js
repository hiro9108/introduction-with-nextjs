import React, {useEffect} from 'react';
import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";


// const changeColer = () => {
//   const button = document.getElementById("button");
//   button.onclick(() => alert("This is test."))
// }



// button.onclick(() => alert("This is test."));

const works = () => {

  useEffect(() => {
    const button = document.getElementById("button");
    
    button.addEventListener("click", () => {
      if (!button.style.color) {
        return button.style.color = "blue";
      }
      button.style.color = button.style.color === "blue" ? "red" : "blue";
    });
  },[]);
  
  return (
    <Layout>
      <Head>
        <title>works page</title>
      </Head>
      <h2>works page with Next.js</h2>
      <Link href="/"><a>back</a></Link>
      <button id="button">change color</button>
      <style jsx>{`
        color: red;
      `}</style>
    </Layout>
  );
};

export default works;