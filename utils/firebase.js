
import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : false

export const fireAuth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider