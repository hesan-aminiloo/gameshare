import { initializeApp, getApps } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

const config = {
  apiKey: "AIzaSyD43VfGJTZ6rW5_mpxXk2pYHh5sgO-CAyE",
  authDomain: "gameshare-d8d2b.firebaseapp.com",
  projectId: "gameshare-d8d2b",
  storageBucket: "gameshare-d8d2b.appspot.com",
  messagingSenderId: "587965903658",
  appId: "1:587965903658:web:77a8ffcace50a34313a453",
  measurementId: "G-W8GY4C1HTB"
};

export const firebaseApp = initializeApp(config);

export const db = getFirestore(firebaseApp);

// export const auth = getAuth(firebaseApp);

// export const firebaseAnalytics = getAnalytics(firebaseApp);

export const firebaseApps = getApps();