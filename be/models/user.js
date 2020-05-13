const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        require: true
    },
    // username: {
    //     type: String,
    //     unique: true,
    //     require: true
    // },
    password: {
        type: String,
        require: true
    }
});

userSchema.methods = {
    matchPassword: function(password) {
        return bcrypt.compare(password, this.password)
    }
}

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) { next(err); return; }
        bcrypt.hash(this.password, salt, (err, hash) => {
          if (err) { next(err); return; }
          this.password = hash;
          next();
        });
      });
      return;
    }
    next();
  });
module.exports = mongoose.model('User', userSchema);