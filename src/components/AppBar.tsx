/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import Link from 'next/link';
import userSessionContext from '../util/userSessionContext';
import styles from '../styles/page.module.css';

function AppBar() {
  const { isLoggedIn } = useContext(userSessionContext);
  const links = isLoggedIn ? [
    { href: '/', value: 'Home' },
    { href: '/nominate', value: 'Nominate' },
    { href: '/vote', value: 'Vote' },
    { href: '/logout', value: 'Log Out' },
  ] : [
    { href: '/', value: 'Home' },
    { href: '/login', value: 'Log In' },
  ];
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.navLinks}>
          {links.map(({ href, value }) => (
            <Link
              href={href}
              key={href}
              className={styles.navLink}
            >
                {value}
            </Link>
          ))}
        </nav>
      </header>
      <hr />
    </div>

  );
}

export default AppBar;
