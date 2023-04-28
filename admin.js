const admin = require("firebase-admin");
const process = require("process");
const key = process.argv[2] || "DEFAULTkey";
const val = process.argv[3] || "DEFAULTval";

process.env.FIREBASE_DATABASE_EMULATOR_HOST = "127.0.0.1:9000";

admin.initializeApp({
  // First part of URL is inferred to be DB instance
  // Actual URL will come from `env.FIREBASE_DATABASE_EMULATOR_HOST`
  databaseURL: "https://demo-te-default-rtdb.firebase.io",
});

const db = admin.database();

console.log(`Admin will update "vars/${key}" to "${val}"...`);

db.ref(`/vars/${key}`)
  .set(val)
  .then(() => console.log(`...admin update successful!`))
  .catch(() => console.log(`...admin update failed :(`))
  .finally(() => process.exit(0));
