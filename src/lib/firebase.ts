import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBPpTKXIBpM5Je5FpQd_Kp991djDBtX5N4',
  authDomain: 'test-3fb7f.firebaseapp.com',
  databaseURL: 'https://test-3fb7f.firebaseio.com',
  projectId: 'test-3fb7f',
  storageBucket: 'test-3fb7f.appspot.com',
  messagingSenderId: '197704559138',
  appId: '1:197704559138:web:f373ec99c0218a774ff87b',
  measurementId: 'G-HP7G1FS9FN',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
