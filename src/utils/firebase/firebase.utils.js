import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBRcPr5zARstRYWuNpxi52FhC9xrmjVDQM",
  authDomain: "crwn-clothing-db-e00c6.firebaseapp.com",
  projectId: "crwn-clothing-db-e00c6",
  storageBucket: "crwn-clothing-db-e00c6.appspot.com",
  messagingSenderId: "843475681593",
  appId: "1:843475681593:web:d2976ade56a5ad4a4428e8"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);