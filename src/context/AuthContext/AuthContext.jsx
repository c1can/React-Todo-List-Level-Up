import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../settings/firebase";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {

  const [user, setUser] = useState({})

  useEffect(() => {
    onAuthStateChanged(auth, (user1) => {
      setUser(user1)
    });
  }, []);


  const registerUser = async(email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ registerUser, loginUser, signOutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
}
