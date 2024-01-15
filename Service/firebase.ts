// firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBDUSO-KGuneftHkmKS6tij1Xdmz13Jq1Y',
  authDomain: 'yuniwebsite-237ab.firebaseapp.com',
  projectId: 'yuniwebsite-237ab',
  storageBucket: 'yuniwebsite-237ab.appspot.com',
  messagingSenderId: '712264539413',
  appId: '1:712264539413:web:14c732801c662cbb53dd1c'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
