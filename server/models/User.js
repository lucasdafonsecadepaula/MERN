const mongoose = require("../server.js");
const bcrypt = require("bcrypt");


const UserSchema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true, lowercase: true },
  password: { type: String, require: true, select: false },
  passwordResetToken: {type: String, select: false},
  createdAt: { type: Date, default: Date.now },
  friends: {type: Array, require: false, default: []},
  friendsData: {type: Object, require: false, default: {}}
});

UserSchema.pre('save', async function(next){
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
})

const User = mongoose.model('User', UserSchema)

module.exports = User;
