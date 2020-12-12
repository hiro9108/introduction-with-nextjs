import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>render test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
      <nav>
        <div className={styles.row}>
          <img src="/images/logo.png" alt="site-logo" className={styles.logo} />
          <ul className={styles.header_nav}>
            <li><Link href="/works"><a>works</a></Link></li>
            <li><Link href="/skills"><a>skills</a></Link></li>
            <li><Link href="/profile"><a>profile</a></Link></li>
          </ul>
        </div>
      </nav>
      <div className={styles.title}>
        <h1>Portfolio of Introduction</h1>
      </div>
    </header>
    <section className={styles.section_works} id="works" ontouchstart="">
      <div className={styles.row}>
        <h2>works</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, et
          inventore! Fuga voluptatem, autem sit, quae voluptate dignissimos
          sed libero eius quos illum, quasi dolore optio id velit reiciendis
          vitae.
        </p>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <figure className={styles.work_image}>
            <img
              src="https://cdn.pixabay.com/photo/2017/06/19/21/12/concrete-2420845__480.jpg"
              alt="work card01"
              className={styles.work_01}
            />
          </figure>
          <div className={styles.content}>
            <h3>Work card01</h3>
            <p>
              Vero rerum repudiandae repellat sint temporibus obcaecati et,
              optio eos. Quia labore dolorem dolores corrupti neque minus vel
              illo reiciendis ex provident.
            </p>
            <Link href="works"><a className={styles.btn}>Read more</a></Link>
          </div>
        </div>
        <div className={styles.column}>Work card02</div>
        <div className={styles.column}>Work card03</div>
      </div>
    </section>
  </div>
  );
}
