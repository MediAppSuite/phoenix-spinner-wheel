import React, { useEffect } from "react";
import { auth } from "../firebase/firebase";
import {
  UserCredential,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailLink,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("emailForSignIn");

    if (email) {
      setPersistence(auth, browserSessionPersistence)
        .then(async () => {
          let userCredentials: UserCredential = await signInWithEmailLink(
            auth,
            email,
            window.location.href
          );
          return userCredentials.user;
        })
        .then(() => {
          localStorage.removeItem("emailForSignIn");
          navigate("/");
        })
        .catch((error) => {
          console.error("Error signing in with email link:", error.message);
        });
    }
  }, []);

  return (
    <div>
      <p>Verifying your email...</p>
    </div>
  );
};

export default EmailVerification;
