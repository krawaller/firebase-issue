const { initializeApp } = require("firebase/app");
const process = require("process");
const key = process.argv[2] || "DEFAULTkey";
const val = process.argv[3] || "DEFAULTval";
const {
  getDatabase,
  connectDatabaseEmulator,
  ref,
  set,
} = require("firebase/database");

const app = initializeApp({
  // URL will be used to figure out database instance, but we will reroute to emulator
  // via subsequent `connectDatabaseEmulator` call
  databaseURL: "https://demo-te-default-rtdb.europe-west1.firebasedatabase.app",
  //projectId: "demo-te", // <--- doesn't seem to be needed
});

const db = getDatabase(app);

connectDatabaseEmulator(db, "127.0.0.1", 9000);

console.log(`Client will update "foo" to "${val}"...`);

set(ref(db, `/vars/${key}`), val)
  .then(() => console.log(`...client update successful!`))
  .catch(() => console.log(`...client update failed :(`))
  .finally(() => process.exit(0));
