// script.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  // ... other configuration properties
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM elements
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupButton = document.getElementById('signup-button');

const signinEmail = document.getElementById('signin-email');
const signinPassword = document.getElementById('signin-password');
const signinButton = document.getElementById('signin-button');

const signoutButton = document.getElementById('signout-button');
const message = document.getElementById('message');

// Sign up event
signupButton.addEventListener('click', () => {
  const email = signupEmail.value;
  const password = signupPassword.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      message.textContent = `Signed up as ${userCredential.user.email}`;
    })
    .catch((error) => {
      message.textContent = `Error: ${error.message}`;
    });
});

// Sign in event
signinButton.addEventListener('click', () => {
  const email = signinEmail.value;
  const password = signinPassword.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      message.textContent = `Signed in as ${userCredential.user.email}`;
    })
    .catch((error) => {
      message.textContent = `Error: ${error.message}`;
    });
});

// Sign out event
signoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      message.textContent = 'Signed out successfully';
    })
    .catch((error) => {
      message.textContent = `Error: ${error.message}`;
    });
});
