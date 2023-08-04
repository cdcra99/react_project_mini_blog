import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCD9w3st8cwbDq3dlHNivcYZOieTuUoteg",
  authDomain: "miniblog-fffd0.firebaseapp.com",
  projectId: "miniblog-fffd0",
  storageBucket: "miniblog-fffd0.appspot.com",
  messagingSenderId: "904987171836",
  appId: "1:904987171836:web:b9e0226aa9aa79790e7079"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};