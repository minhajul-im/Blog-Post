import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { apiKey, appId, measurementId, messagingSenderId } from './constant';

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: 'pack-n-jar.firebaseapp.com',
  projectId: 'pack-n-jar',
  storageBucket: 'pack-n-jar.appspot.com',
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const analytics = getAnalytics(app);
