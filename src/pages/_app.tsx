/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import '../styles/globals.css';
import 'purecss';

import UserSessionProvider from '../components/UserSessionProvider';
import AppBar from '../components/AppBar';

function MyApp({ Component, pageProps }) {
  return (
    <UserSessionProvider>
      <AppBar />
      <Component {...pageProps} />
    </UserSessionProvider>
  );
}

export default MyApp;
