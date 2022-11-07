import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect } from "react";
import { auth } from "../../settings/firebase";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  useEffect(() => {
    onAuthStateChanged(auth, (user1) => {
      console.log(user1);
    });
  }, []);

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ registerUser, loginUser, signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
}
