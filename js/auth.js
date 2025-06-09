import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./firebase-config.js";

const auth = getAuth(app);

// 🔐 Login Admin
export const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

// 🔓 Logout Admin
export const logout = async () => {
  await signOut(auth);
};
