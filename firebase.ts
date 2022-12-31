import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBSFJrOKaTr2n9d0Avp3EluZ9wV5IZ2i0s",
    authDomain: "project-pot-e8a0a.firebaseapp.com",
    projectId: "project-pot-e8a0a",
    storageBucket: "project-pot-e8a0a.appspot.com",
    messagingSenderId: "792344260857",
    appId: "1:792344260857:web:2c3c066f3f4d9f5d123228"
  };

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export function getData(path: string) {
  const ref = database.ref(path);
  return ref.once('value').then(snapshot => snapshot.val());
}

export function setData(path: string, data: any) {
  const ref = database.ref(path);
  return ref.set(data);
}
