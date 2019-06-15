import Rebase from 're-base';
import firebase from "firebase";


const fireBaseApp  = firebase.initializeApp({
    apiKey: "AIzaSyB1PH77QLNpPF7pcipfWkTv4hRO33JrzKM",
    authDomain: "store-1-e5e86.firebaseapp.com",
    databaseURL: "https://store-1-e5e86.firebaseio.com",
});

const base = Rebase.createClass(fireBaseApp.database());

// This is a named export
export { fireBaseApp };

// this is a default export
export default base;

