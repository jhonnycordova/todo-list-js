const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, index: true, unique: true },
    password: String,
}, { timestamps: { createdAt: 'created_at' } });

UserSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified('password') && !user.isNew) return next();
  
    bcrypt.genSalt(SALT_WORK_FACTOR, function (saltError, salt) {
        if (saltError) return next(saltError);

        bcrypt.hash(user.password, salt, function(hashError, hash) {
            if (hashError)  return next(hashError)

            user.password = hash
            next()
        })
    
    })
})


UserSchema.methods.comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(error, isMatch) {

        if (error)  return callback(error)
        callback(null, isMatch)
    })
  }

export const User = mongoose.model("User", UserSchema);



const email = 'a@a.com',  password = 'abc123'
// create a user a new user
var testUser = new User({
    name: 'probando',
    email: email,
    password: password
});

// save user to database
testUser.save(function(error) {
    if (error) {
      console.error('ERROR');
    } else {
      console.log('PROBANDO');
    }
  })

// fetch user and test password verification
User.findOne({ email: email }, function(err, user) {
    if (err) throw err;

    // test a matching password
    user.comparePassword(password, function(err, isMatch) {
        if (err) throw err;
        console.log(password, isMatch); // -> Password123: true
    });

    // test a failing password
    user.comparePassword('123Password', function(err, isMatch) {
        if (err) throw err;
        console.log('123Password:', isMatch); // -> 123Password: false
    });
});
