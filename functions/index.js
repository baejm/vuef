const functions = require("firebase-functions");
var admin = require("firebase-admin");
var serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: functions.config().admin.db_url // "https://baejm-vuef-default-rtdb.firebaseio.com"
});

const db = admin.database();

exports.createUser = functions.auth.user().onCreate(async user => {
  const { uid, email, displayName, photoURL } = user;
  const u = {
    email,
    displayName,
    photoURL,
    createAt: new Date().getMilliseconds(),
    level: email === functions.config().admin.email ? 0 : 5
  };
  db.ref("users")
    .child(uid)
    .set(u);
});

exports.deleteUser = functions.auth.user().onDelete(async user => {
  const { uid } = user;
  db.ref("users")
    .child(uid)
    .remove();
});
