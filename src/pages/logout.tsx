import { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../util/firebase';

function LogOut() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const logout = async () => {
      try {
        await signOut(getAuth(app));
        setLoading(false);
      } catch (ex) {
        setError(ex.message);
      }
    };
    logout();
  }, []);

  if (error) {
    return (
      <div>
        There was an error logging you out:
        {' '}
        {error}
      </div>
    );
  }
  return (
    <div>
      { loading ? 'Signing you out...' : 'You have been signed out' }
    </div>
  );
}

export default LogOut;
