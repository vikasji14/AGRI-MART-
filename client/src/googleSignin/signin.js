import React, { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../pages/Auth/config"; // Adjust the path as needed

function SignIn() {
  const [user, setUser] = useState(null);

  // Handle Google Sign-In
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google Sign-In Successful:', user);
      setUser(user); // Update user state upon successful sign-in
      localStorage.setItem("email", user.email); // Store user's email in localStorage
    } catch (error) {
      console.error('Google Sign-In Failed:', error.message);
    }
  };

  // Set up an authentication state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        localStorage.setItem("email", user.email); // Store user's email in localStorage
      } else {
        setUser(null);
        localStorage.removeItem("email"); // Remove user's email from localStorage if logged out
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="text-center mt-8">
      {user ? (
        <p>Welcome, {user.email}!</p> // Display user's email if logged in
      ) : (
        <button
          onClick={handleSignIn}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Sign In With Google
        </button> // Show Sign-In button if not logged in
      )}
    </div>
  );
}

export default SignIn;
