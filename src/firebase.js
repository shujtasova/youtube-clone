import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB3qBE3f5Iis9OEz4rb1W5U_K-HR2jKBoY",
    authDomain: "clone-b9965.firebaseapp.com",
    projectId: "clone-b9965",
    storageBucket: "clone-b9965.appspot.com",
    messagingSenderId: "349042224060",
    appId: "1:349042224060:web:68bf8737ff0fbeb04019b9"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.auth();