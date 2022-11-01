let EmailModel = require("./email");

let msg = new EmailModel({
  email: "ad@m.com",
});

// save the email instance to the database

msg
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

// using async / await

// async function saveToDatabase() {
//   try {
//     const doc = await msg.save();
//     console.log(doc);
//   } catch (err) {
//     console.error(err);
//   }
// }

// saveToDatabase();
