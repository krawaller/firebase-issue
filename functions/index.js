const functions = require("firebase-functions");

exports.fooListener = functions.database //.region("europe-west1")
  .instance("demo-te-default-rtdb")
  .ref("/vars/{key}")
  .onWrite(async (snap, ctx) => {
    console.log("Responding...", ctx);
    const key = ctx.params["key"];
    const before = snap.before.val();
    const after = snap.after.val();
    await snap.after.ref.root.child("/notice").set({
      key,
      before,
      after,
    });
    console.log("...responsed!");
  });
