// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXvX7iPwtxwSDSdwc8fgFprI-4VG92IJI",
  authDomain: "netflix-gpt-f5f3f.firebaseapp.com",
  projectId: "netflix-gpt-f5f3f",
  storageBucket: "netflix-gpt-f5f3f.appspot.com",
  messagingSenderId: "867285978592",
  appId: "1:867285978592:web:be7eb134132135d9cd2f85",
  measurementId: "G-KL1M5SRB99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
