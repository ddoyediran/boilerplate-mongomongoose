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

// search query
EmailModel.find({ email: "ad@m.com" })
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

// update record
EmailModel.findOneAndUpdate(
  {
    email: "ad@m.com",
  },
  {
    email: "ad22@m.com",
  },
  {
    new: true,
    runValidators: true,
  }
)
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log(err);
  });
