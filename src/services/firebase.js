import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAJ0ZrkIZuHN7V7kLuyndpswqEEDxEA4C0",
  authDomain: "barberproject-ed1d6.firebaseapp.com",
  projectId: "barberproject-ed1d6",
  storageBucket: "barberproject-ed1d6.appspot.com",
  messagingSenderId: "907197166878",
  appId: "1:907197166878:web:93fa2abbe4eeda5885850f"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage }





