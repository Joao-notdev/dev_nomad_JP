import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyAQMeWbtl6igpKSNhmrjw17wn3dcyqyyCs",
  authDomain: "dev-nomad-jp.firebaseapp.com",
  projectId: "dev-nomad-jp",
  storageBucket: "dev-nomad-jp.firebasestorage.app",
  messagingSenderId: "405115656500",
  appId: "1:405115656500:web:d72684b32e97b7e7efad61",
  measurementId: "G-M78S7GHKTZ"
};
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);