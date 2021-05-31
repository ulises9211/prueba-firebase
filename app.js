
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD6Go7xvyRzUSoF2JeLrcIfr7pSO5J-TJw",
    authDomain: "cloud-messaging-d625d.firebaseapp.com",
    projectId: "cloud-messaging-d625d",
    storageBucket: "cloud-messaging-d625d.appspot.com",
    messagingSenderId: "918214776903",
    appId: "1:918214776903:web:ea17049a969febf75cb962"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
function initializate() {
  messaging.requestPermission()
  .then( function() {
      console.log('Have permission');
      return messaging.getToken();
  })
  .then( function(token) {
    console.log(token);
  })
  .catch(function(e) {
     console.log('Error ocurred', e);
  });

  messaging.onMessage(function (payload) {
    console.log(payload);
  });
}

initializate();