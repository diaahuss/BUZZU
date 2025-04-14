// script.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  // ... other configuration properties
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM elements
const appDiv = document.getElementById('app');

// Render sign-up and sign-in forms
appDiv.innerHTML = `
  <h2>Sign Up</h2>
  <input type="email" id="signup-email" placeholder="Email" />
  <input type="password" id="signup-password" placeholder="Password" />
  <button id="signup-button">Sign Up</button>

  <h2>Sign In</h2>
  <input type="email" id="signin-email" placeholder="Email" />
  <input type="password" id="signin-password" placeholder="Password" />
  <button id="signin-button">Sign In</button>

  <button id="signout-button">Sign Out</button>

  <p id="message"></p>
`;

// Sign up event
document.getElementById('signup-button').addEventListener('click', () => {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById('message').textContent = `Signed up as ${userCredential.user.email}`;
    })
    .catch((error) => {
      document.getElementById('message').textContent = `Error: ${error.message}`;
    });
});

// Sign in event
document.getElementById('signin-button').addEventListener('click', () => {
  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById('message').textContent = `Signed in as ${userCredential.user.email}`;
    })
    .catch((error) => {
      document.getElementById('message').textContent = `Error: ${error.message}`;
    });
});

// Sign out event
document.getElementById('signout-button').addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      document.getElementById('message').textContent = 'Signed out successfully';
    })
    .catch((error) => {
      document.getElementById('message').textContent = `Error: ${error.message}`;
    });
});
