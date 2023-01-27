import { useContext } from 'react';
import userSessionContext from '../util/userSessionContext';
import styles from '../styles/page.module.css';
import { useEffect, useState, useRef } from 'react';
import { getDatabase, ref, onValue, set, push, child } from 'firebase/database';
import { app } from '../util/firebase';

export default function Home() {
  const { isLoggedIn, userData } = useContext(userSessionContext);
  const [households, setHouseholds] = useState([]);
  const userHouseholdsRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const db = getDatabase(app);
      userHouseholdsRef.current = ref(db, `users/${userData.uid}/households`);
      onValue(userHouseholdsRef.current, (snapshot) => {
        setHouseholds(snapshot.val() || []);
      });
    };
    if (userData) {
      getData();
    }
  }, [userData]);

  const createHousehold = () => {
    const householdsRef = ref(getDatabase(app), `households`);
    const { key: householdKey, ref: householdRef } = push(householdsRef);
    set(userHouseholdsRef.current, [...households, householdKey]);
    set(child(householdRef, 'members'), [userData.uid]);
  }

  if (!isLoggedIn) return <h1 className={styles.container}>Please log in</h1>; // TODO: Make a nice home page for guests


  return (
    <div className={styles.container}>
        <h1>Pet of the Week</h1>
        <h2>
          Welcome back,
          {' '}
          {userData.displayName}
        </h2>
        <h2>Your households:</h2>
        <ol>
          {households.map(household => <li key={household}>{household}</li>)}
        </ol>
          <button onClick={createHousehold}>Create a new Household</button>
    </div>
  )
}
