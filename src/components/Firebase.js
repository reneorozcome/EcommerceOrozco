import { initializeApp } from '@firebase/app'
import { getFirestore } from 'firebase/firestore'

const app = initializeApp({
    projectId: 'ecommerce-orozco',
    messagingSenderId: '521927500428',
    storageBucket: 'ecommerce-orozco.appspot.com',
    authDomain: 'ecommerce-orozco.firebaseapp.com',
    apiKey: 'AIzaSyC3PtEYGOQPPYPSAK4rDAKlWzRCmtvhIxU',
    appId: '1:521927500428:web:cc88d743d07bd9c02cd1a9'
})
export const db = getFirestore(app)