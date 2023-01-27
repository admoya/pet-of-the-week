import { useContext } from 'react';
import { useRouter } from 'next/router';
import {
  getAuth, GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
import userSessionContext from '../util/userSessionContext';
import { app } from '../util/firebase';
import styles from '../styles/page.module.css';

const auth = getAuth(app);
auth.useDeviceLanguage();

const signInWithProvider = (provider, errorMessageHandler) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const { user } = result;
      // eslint-disable-next-line no-console
      console.log(`Signed in: ${JSON.stringify(user, null, 2)}`);
    // ...
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // eslint-disable-next-line no-console
      console.error(`${errorCode}: ${errorMessage}`);
      errorMessageHandler(error);
    });
};

export default function Login() {
  const router = useRouter();
  const { isLoggedIn } = useContext(userSessionContext);
  if (isLoggedIn) {
    router.push('/');
  }
  return (
    <main>
      <div className={styles.main}>
        Choose a login method:
        <div>
          <button type="button" onClick={() => signInWithProvider(new GoogleAuthProvider(), console.error)}>Google</button>
        </div>
      </div>
    </main>
  );
}
