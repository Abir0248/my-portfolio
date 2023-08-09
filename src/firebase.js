import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyAIeQxXci4kKTecpOq17zhIbO0dAwLyFbY',
  authDomain: 'react-portfolio-dashboar-6440f.firebaseapp.com',
  projectId: 'react-portfolio-dashboar-6440f',
  storageBucket: 'react-portfolio-dashboar-6440f.appspot.com',
  messagingSenderId: '93974301263',
  appId: '1:93974301263:web:63bff9796b434a0dfbf83a',
  measurementId: 'G-H3XJ5118C4',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
