

import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
	apiKey: "AIzaSyCG6tgQcjt9J_UgTet5Pw7xpxUCqI33odg",
	authDomain: "obrn-d99b4.firebaseapp.com",
	databaseURL: "https://obrn-d99b4.firebaseio.com",
	projectId: "obrn-d99b4",
	storageBucket: "obrn-d99b4.appspot.com",
	messagingSenderId: "381904201765",
	appId: "1:381904201765:web:99743920004aaf6cc237cc",
	measurementId: "G-7010CS1LRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
connectFirestoreEmulator(db, '127.0.0.1', 8080);



import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "users", "admin");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
	console.log("Document data:", docSnap.data());
} else {
	// docSnap.data() will be undefined in this case
	console.log("No such document!");
}

export const admin = docSnap.data()