// js/portfolio-crud.js
import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const portfolioCollection = collection(db, "portfolios");

// 🟢 Read Data
export const getPortfolios = async () => {
  const snapshot = await getDocs(portfolioCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// 🔵 Create Data
export const addPortfolio = async (data) => {
  await addDoc(portfolioCollection, data);
};

// 🟡 Update Data
export const updatePortfolio = async (id, updatedData) => {
  const portfolioDoc = doc(db, "portfolios", id);
  await updateDoc(portfolioDoc, updatedData);
};

// 🔴 Delete Data
export const deletePortfolio = async (id) => {
  const portfolioDoc = doc(db, "portfolios", id);
  await deleteDoc(portfolioDoc);
};
