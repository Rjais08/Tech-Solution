const jwt = require("jsonwebtoken");
const mongoose = require(`mongoose`);
const bcrypt = require(`bcrypt`);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirm_password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//To Encrypt password using bcrypt

userSchema.pre("save", async function (next) {
  // console.log("HI From Inside:");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirm_password = await bcrypt.hash(this.confirm_password, 12);
  }
  next();
});

// We are generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

//  collection creation
const User = mongoose.model("USER", userSchema);
module.exports = User;
