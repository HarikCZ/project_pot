import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBSFJrOKaTr2n9d0Avp3EluZ9wV5IZ2i0s",
    authDomain: "project-pot-e8a0a.firebaseapp.com",
    projectId: "project-pot-e8a0a",
    storageBucket: "project-pot-e8a0a.appspot.com",
    messagingSenderId: "792344260857",
    appId: "1:792344260857:web:cc320fd22a5675c4123228"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }