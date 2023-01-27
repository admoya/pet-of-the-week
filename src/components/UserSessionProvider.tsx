import {
  useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import userSessionContext from '../util/userSessionContext';
import { app } from '../util/firebase';

const auth = getAuth(app);

function UserSessionProvider({ children }) {
  const [contextValue, setContextValue] = useState({ isLoggedIn: false, userData: null });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setContextValue({
          isLoggedIn: true,
          userData: user,
        });
      } else {
        setContextValue({
          isLoggedIn: false,
          userData: null,
        });
      }
    });
  }, []);
  return (
    <userSessionContext.Provider value={contextValue}>
      {children}
    </userSessionContext.Provider>
  );
}

UserSessionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserSessionProvider;
