import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD3xwaAWAytl1pPqFu-0kmBYv5MP7WqOT0",
  authDomain: "personal-portfolio-a74b6.firebaseapp.com",
  databaseURL: "https://personal-portfolio-a74b6-default-rtdb.firebaseio.com",
  projectId: "personal-portfolio-a74b6",
  storageBucket: "personal-portfolio-a74b6.firebasestorage.app",
  messagingSenderId: "48238533712",
  appId: "1:48238533712:web:584869a1bbd4e3b2db0555",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);