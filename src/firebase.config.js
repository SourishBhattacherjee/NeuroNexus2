// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXtyml49pGEwmiOIkWCF1OR1nrxpPlQ0A",
  authDomain: "online-job-portal-9699b.firebaseapp.com",
  projectId: "online-job-portal-9699b",
  storageBucket: "online-job-portal-9699b.appspot.com",
  messagingSenderId: "446749449280",
  appId: "1:446749449280:web:6858d98991e46c77ce93a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
