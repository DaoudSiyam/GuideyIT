import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  private_info : 'private information'
  // apiKey: "AIzaSyDHLFVE2ejGWRGDx8LSl3KfaHJ3Md8fqtQ",
  // authDomain: "guideybackup3.firebaseapp.com",
  // projectId: "guideybackup3",
  // storageBucket: "guideybackup3.appspot.com",
  // messagingSenderId: "258504827453",
  // appId: "1:258504827453:web:737a4894e3363e6fc84054",
  // measurementId: "G-2R4XWSFLP9"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);