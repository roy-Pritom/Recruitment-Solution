// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBbj81GZZKUDFm46l9BD-9sP6ew8bLnGUg",
    authDomain: "booking-app-cd451.firebaseapp.com",
    projectId: "booking-app-cd451",
    storageBucket: "booking-app-cd451.appspot.com",
    messagingSenderId: "461112597048",
    appId: "1:461112597048:web:101ad87a063f561655e4cd"
  };
  
 firebase.initializeApp(firebaseConfig);
    var auth = firebase.auth();
  
  // Login function
  function login(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
  
        // Redirect to dashboard or desired page
        window.location.href = '../index.html';
      })
      .catch(function(error) {
        console.error('Login error:', error);
        alert('Invalid email or password. Please try again.');
      });
  }
  
  // Register function
  function register(event) {
    event.preventDefault();
  

    var companyName = document.getElementById('company-name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
  
   
    auth.createUserWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        document.getElementById('company-name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirm-password').value = '';
  
        // Redirect to login page after successful registration
        window.location.href = 'login.html';
      })
      .catch(function(error) {
        console.error('Registration error:', error);
        alert('Registration failed. Please try again.');
      });
  }
  