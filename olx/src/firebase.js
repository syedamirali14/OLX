import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCQ7s6wLxDOSbYLHZ4JYWfm6RlltRoFViY",
    authDomain: "saylani-8099b.firebaseapp.com",
    databaseURL: "https://saylani-8099b.firebaseio.com",
    projectId: "saylani-8099b",
    storageBucket: "saylani-8099b.appspot.com",
    messagingSenderId: "1028251352751"
  };
  firebase.initializeApp(config);
const db = firebase.firestore();

function firebaseRegister( email, password, age, fullname ) {
    firebase.auth().createUserWithEmailAndPassword('email', 'password')
        .then(function (res) {
            db.collection("users").doc(res.user.uid).set({ email, age, fullname })
                .then(function () {
                    alert('registered successfully');
                })
                .catch(function (error) {
                    var errorMessage = error.message;
                    alert(errorMessage);
                })
            console.log('user ===>', res.user.uid);

        })
        .catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            alert(errorMessage);
        });
}

function firebaseLogin(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(function (res) {
        alert('login successfully')
        console.log('user => ', res);
        var docRef = db.collection("users").doc(res.user.uid);

        docRef.get().then(function (doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    })
        .catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            alert(errorMessage);
        });
}

function addUser(userId, email, name) {
    db.collection("users").doc(userId).set({ email, name })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }

export {
    firebaseRegister,
    firebaseLogin
}


