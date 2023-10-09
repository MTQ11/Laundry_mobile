
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore, initializeFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBSgljJ2zU5yT42mBMxe9Um3eDjv3Fe8Nk",
  authDomain: "laundry-application-eda22.firebaseapp.com",
  projectId: "laundry-application-eda22",
  storageBucket: "laundry-application-eda22.appspot.com",
  messagingSenderId: "1058245502213",
  appId: "1:1058245502213:web:e7c6369f92ff4f7535c36c",
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
//const db  = getFirestore();
const db = initializeFirestore(app,{
  experimentalForceLongPolling: true
});


export {auth,db};