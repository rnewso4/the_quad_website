const functions = require("firebase-functions");
const admin = require('firebase-admin');
const { firestore } = require("firebase-admin");

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.getEvents = functions.https.onRequest((req, res) => {
    admin.firestore().collection('events').get()
    .then((data) => {
        let events = [];
        data.forEach(doc => {
            events.push(doc.data());
        });
        return res.json(events);
    })
    .catch(err => console.error(err));
})
