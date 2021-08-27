import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBPJH4YX1bWBUDqU1cLwqafLcgRWADXL98',
  authDomain: 'tournamentmanager-8bdd5.firebaseapp.com',
  databaseURL:
    'https://tournamentmanager-8bdd5-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'tournamentmanager-8bdd5',
  storageBucket: 'tournamentmanager-8bdd5.appspot.com',
  messagingSenderId: '902806229936',
  appId: '1:902806229936:web:e305ad1bb8683635fc7c75',
  measurementId: 'G-6NZJX0X69N',
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const realtimeDB = firebase.database();
