// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQMeWbtl6igpKSNhmrjw17wn3dcyqyyCs",
  authDomain: "dev-nomad-jp.firebaseapp.com",
  projectId: "dev-nomad-jp",
  storageBucket: "dev-nomad-jp.firebasestorage.app",
  messagingSenderId: "405115656500",
  appId: "1:405115656500:web:d72684b32e97b7e7efad61",
  measurementId: "G-M78S7GHKTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);