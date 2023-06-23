// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcpP-w5FH2sOqMPADqsBAe3bZpPUFgF7A",
  authDomain: "auth-app-4399a.firebaseapp.com",
  databaseURL: "https://auth-app-4399a-default-rtdb.firebaseio.com",
  projectId: "auth-app-4399a",
  storageBucket: "auth-app-4399a.appspot.com",
  messagingSenderId: "1039233456147",
  appId: "1:1039233456147:web:8135a5f09cbfc9c2fa47e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

