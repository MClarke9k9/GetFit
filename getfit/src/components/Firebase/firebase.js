import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


var config = {
    apiKey: "AIzaSyAlG2KjhMm5FcKDX8gk2fK31W-3ViBXshI",
    authDomain: "getfit-8bb82.firebaseapp.com",
    projectId: "getfit-8bb82",
    storageBucket: "getfit-8bb82.appspot.com",
    messagingSenderId: "1063622290277",
    appId: "1:1063622290277:web:ccf8a5b1c1586ec11ecf8c",
    measurementId: "G-1M71RSX2C4"
  };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }
    
    /*** Authentication  ***/
    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => 
        this.auth.signOut();

    doPasswordReset = email => 
        this.auth.sendPasswordResetEmail(email);
    
    /*** Database ***/
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');

    addActivity = (uid, activity) => {
        const ref = this.db.ref().child(`users/${uid}/activities`);
        ref.push(activity);
    };

    updateActivity = (uid, activity, activityKey) => {
        const ref = this.db.ref().child(`users/${uid}/activities/${activityKey}`);
        ref.update(activity);
    }
}
// {
//     "rules": {
//       ".read": false,
//       ".write": false
//     }
//   }

export default Firebase;