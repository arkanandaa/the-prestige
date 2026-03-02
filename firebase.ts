
import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  doc, 
  addDoc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot,
  query,
  orderBy 
} from "firebase/firestore";

/**
 * PENTING: Untuk menghilangkan error, Anda harus:
 * 1. Buka Firebase Console (https://console.firebase.google.com/)
 * 2. Buat Project baru atau pilih project yang ada.
 * 3. Buka "Project Settings" (icon gerigi) > General.
 * 4. Tambahkan "Web App" dan salin konfigurasi yang diberikan ke objek di bawah ini.
 * 5. Pastikan "Cloud Firestore" sudah diaktifkan di menu samping.
 * 6. Set "Rules" Firestore ke mode pengujian agar bisa dibaca/tulis sementara.
 */

const firebaseConfig = {
  apiKey: "AIzaSyBlsQD2YlogrK1gX0j6mjZx63vd1axmlYk",
  authDomain: "the-prestige-f661b.firebaseapp.com",
  projectId: "the-prestige-f661b",
  storageBucket: "the-prestige-f661b.firebasestorage.app",
  messagingSenderId: "776984382253",
  appId: "1:776984382253:web:36e10082773d2ea38f21a4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export const portfoliosRef = collection(db, "portfolios");
export { doc, addDoc, setDoc, updateDoc, deleteDoc, onSnapshot, query, orderBy };
