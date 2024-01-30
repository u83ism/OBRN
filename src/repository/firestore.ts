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

import { collection, addDoc } from "firebase/firestore";
import { obrList } from "../entity/obr-works";
import { sites } from "../entity/Sites";


export const changeDB = async (): Promise<void> => {
	// const obrCollection = collection(db, "obr-works")
	// for (const obr of obrList) {
	// 	await addDoc(obrCollection, obr)
	// }
	// const sitesCollection = collection(db, "sites")
	// for (const site of sites) {
	// 	await addDoc(sitesCollection, site)
	// }
}