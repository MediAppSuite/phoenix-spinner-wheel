import {
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
  UserCredential,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

export function signInWithGoogle(callback: () => void) {
  const provider = new GoogleAuthProvider();

  setPersistence(auth, browserSessionPersistence)
    .then(async () => {
      let userCredentials: UserCredential = await signInWithPopup(
        auth,
        provider
      );
      callback();
      return userCredentials.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export function signInWithFacebook(callback: () => void) {
  const provider = new FacebookAuthProvider();

  setPersistence(auth, browserSessionPersistence)
    .then(async () => {
      let userCredentials: UserCredential = await signInWithPopup(
        auth,
        provider
      );

      callback();
      return userCredentials.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
