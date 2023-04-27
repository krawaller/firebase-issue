const admin = require("firebase-admin");

admin.initializeApp({
  // A "real" DB url looks like 'https://<DATABASE_NAME>.firebaseio.com'
  // (or https://<DatabaseName>.<region>.firebasedatabase.app). The admin
  // app extracts the database name from this URL, knowing that it is the
  // first part after the protocol. But, for the emulator we need to set
  // the URL to 127.0.0.1, which means the admin app infers the database
  // instance to be "127".
  databaseURL: "http://127.0.0.1:9000",
  // In other API:s there are more explicit means to set the DB instance,
  // such as `functions.database().instance('my-db-instance')`, but there
  // is no equivalent for `admin`. (right?)
});

const db = admin.database();

db.ref("foo").set("bar"); // This is now set in DB instance "127" :(
