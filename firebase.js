import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6EDCC0rB2N0z-R4MRRipS4O4h9-1YlPI",
  authDomain: "webcam-fryer.firebaseapp.com",
  projectId: "webcam-fryer",
  storageBucket: "webcam-fryer.firebasestorage.app",
  messagingSenderId: "780661559142",
  appId: "1:780661559142:web:e96d1cf63bfc604cd282a7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { collection, addDoc };