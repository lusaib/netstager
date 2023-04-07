/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/9.8.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.8.3/firebase-messaging-compat.js");


// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyC-Xp57ntBf1v8eMIZu64PNBD9JoFQeMNw",
  authDomain: "fixbrix-dev.firebaseapp.com",
  projectId: "fixbrix-dev",
  storageBucket: "fixbrix-dev.appspot.com",
  messagingSenderId: "353432552221",
  appId: "1:353432552221:web:139fa70022865ccb53d7f4",
};

firebase.initializeApp(firebaseConfig);

// create messaging instance
const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//     const notificationTitle = payload.notification.title; 
//     const notificationOptions = {
//         body: payload.notification.body,
//     }
//     // eslint-disable-next-line no-restricted-globals
//     return self.registration.showNotification(notificationTitle, notificationOptions);
// });