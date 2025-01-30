//Improved error handling for Firebase Authentication
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Successful authentication
    const user = userCredential.user;
    console.log("User signed in successfully:", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing in:", errorCode, errorMessage);
    //Handle different error codes to give specific feedback to users
    if (errorCode === 'auth/wrong-password') {
      //Inform user password is wrong
      alert("Incorrect password.");
    } else if (errorCode === 'auth/user-not-found') {
      //Inform user email is not found
      alert("Email not found. Please check and try again.");
    } else if (errorCode === 'auth/network-request-failed'){
        alert('Network error, please check your connection.');
    } else {
      //Generic error message for other errors
      alert("An unexpected error occurred. Please try again later.");
    }
  });