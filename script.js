// script.js

// Import Firebase modules
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
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
const welcomeMessage = document.getElementById('welcome-message');

const authSection = document.getElementById('auth-section');
const userSection = document.getElementById('user-section');

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

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    authSection.style.display = 'none';
    userSection.style.display = 'block';
    welcomeMessage.textContent = `Welcome, ${user.email}`;
  } else {
    authSection.style.display = 'flex';
    userSection.style.display = 'none';
    welcomeMessage.textContent = '';
  }
});
