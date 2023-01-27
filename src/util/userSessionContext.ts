import { createContext } from 'react';
import { User } from 'firebase/auth';

interface UserSessionContextType {
  isLoggedIn: Boolean,
  userData: User
}

const context = createContext<UserSessionContextType>({
  isLoggedIn: false,
  userData: null,
});
context.displayName = 'UserSessionContext';
export default context;
