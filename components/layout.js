import Link from 'next/link';
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <>
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
      <div>{children}</div>
    </>
  );
}