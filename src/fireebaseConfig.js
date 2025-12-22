// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCAeC5KvEKUOSYJwbMuYCF9jwbf01b8ZBs",
//   authDomain: "ag-food-50922.firebaseapp.com",
//   databaseURL: "https://ag-food-50922-default-rtdb.firebaseio.com",
//   projectId: "ag-food-50922",
//   storageBucket: "ag-food-50922.appspot.com",
//   messagingSenderId: "627408994162",
//   appId: "1:627408994162:web:79b2a482bb118e81fb27eb",
// };

// const app = initializeApp(firebaseConfig);

// export const db = getDatabase(app);
// export const storage = getStorage(app);
// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAeC5KvEKUOSYJwbMuYCF9jwbf01b8ZBs",
  authDomain: "ag-food-50922.firebaseapp.com",
  databaseURL: "https://ag-food-50922-default-rtdb.firebaseio.com",
  projectId: "ag-food-50922",
  storageBucket: "ag-food-50922.appspot.com",
  messagingSenderId: "627408994162",
  appId: "1:627408994162:web:79b2a482bb118e81fb27eb",
  measurementId: "G-GZQT0LSD7W"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);
