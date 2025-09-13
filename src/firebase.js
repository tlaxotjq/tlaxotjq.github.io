import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey : import.meta.env.VITE_FB_API_KEY, 
  authDomain : import.meta.env.VITE_FB_AUTO_DOMAIN,
  projectId : import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket : import.meta.env.VITE_FB_STORAGE_BUCKET,
  messagingSenderId : import.meta.env.VITE_FB_MESSAGING_SENDER_ID,
  appId : import.meta.env.VITE_FB_APP_ID,
  measurementId : import.meta.env.VITE_FB_MEASUREMENT_ID,
}

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

export {firebase, firebaseApp, db}
