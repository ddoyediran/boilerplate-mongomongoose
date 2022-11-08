require("dotenv").config(); // require the env file
const mongoose = require("mongoose"); // require or reference mongoose

// connect to the database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// define the person Schema
let personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    minLength: 1,
    maxLength: 3,
  },
  favoriteFoods: {
    type: [String],
  },
});

// to create a person model from the schema
let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  // create a person with the instance of the Person Model
  const onePerson = new Person({
    name: "Dami O",
    age: 15,
    favoriteFoods: "Pad thai",
  });

  onePerson.save(function (error, data) {
    // if report the error
    if (error) {
      return console.error(error);
    }
    // done or save
    done(null, data);
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  const manyPeople = Person.create(arrayOfPeople);

  manyPeople.save(function (error, data) {
    if (error) {
      return console.error(error);
    }
    done(null, data);
  });

  // alternative
  Person.create(arrayOfPeople, function (err, data) {
    if (err) {
      return console.error(err);
    }
    done(null, data);
  });
};

// to find a user by name
const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function (err, data) {
    if (err) {
      return console.error(err);
    }
    done(null, data);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, function (err, data) {
    if (err) {
      return console.error(err);
    }
    done(null, data);
  });
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
