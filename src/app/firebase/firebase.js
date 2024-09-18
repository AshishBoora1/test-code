import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDcRglK-B4wdVdC_N9ySYH1mQofw9TTCB0",
  authDomain: "portfolio-e8db7.firebaseapp.com",
  projectId: "portfolio-e8db7",
  storageBucket: "portfolio-e8db7.appspot.com",
  messagingSenderId: "1060482856820",
  appId: "1:1060482856820:web:604559c718c0aa5901de21",
  measurementId: "G-EDZMXJG9LY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
