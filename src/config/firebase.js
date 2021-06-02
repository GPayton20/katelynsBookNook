import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyD6LfaDQGMMDenrKNl98cCaI_Z-8MGFzOo",
  authDomain: "katelyns-book-nook.firebaseapp.com",
  projectId: "katelyns-book-nook",
  storageBucket: "katelyns-book-nook.appspot.com",
  messagingSenderId: "136997831374",
  appId: "1:136997831374:web:9b8f991b59553d5917069f"
};

firebase.initializeApp(firebaseConfig);

export default firebase