require("dotenv").config(); // require the env file
const mongoose = require("mongoose"); // require or reference mongoose

// connect to the database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// define the schema
let emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
});

module.exports = mongoose.model("Email", emailSchema);
