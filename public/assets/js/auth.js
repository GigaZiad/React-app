// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

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
const database = getDatabase(app);
const auth = getAuth(app);

// User Registration
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = registerForm.name.value;
  const email = registerForm.email.value;
  const password = registerForm.pass.value;

  // Firebase User Registration Logic
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User registered successfully
      const user = userCredential.user;
      const userId = user.uid;
      // Save additional user data to the Realtime Database
      set(ref(database, 'users/' + userId), {
        name: name,
        email: email
      });
      // Show success message
      showMessage('Registration successful!');
      // Additional actions after successful registration (e.g., redirect)
    })
    .catch((error) => {
      // Handle registration error
      const errorCode = error.code;
      const errorMessage = error.message;
      // Show error message
      showMessage(errorMessage);
      // Handle error and display it to the user
    });
});

// User Login
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = loginForm.your_name.value;
  const password = loginForm.your_pass.value;

  // Firebase User Login Logic
  signInWithEmailAndPassword(auth, name, password)
    .then((userCredential) => {
      // User logged in successfully
      const user = userCredential.user;
      // Show success message
      showMessage('Login successful!');
      // Additional actions after successful login (e.g., redirect)
    })
    .catch((error) => {
      // Handle login error
      const errorCode = error.code;
      const errorMessage = error.message;
      // Show error message
      showMessage(errorMessage);
      // Handle error and display it to the user
    });
});

// Function to show a message in the message container
function showMessage(message) {
  const messageContainer = document.getElementById('message-container');
  messageContainer.textContent = message;
}