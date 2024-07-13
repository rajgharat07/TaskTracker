// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-497fe.firebaseapp.com",
  projectId: "taskmanager-497fe",
  storageBucket: "taskmanager-497fe.appspot.com",
  messagingSenderId: "395631537500",
  appId: "1:395631537500:web:dca6adf229b59add2d2599",
  measurementId: "G-8VM7HRK9MD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);