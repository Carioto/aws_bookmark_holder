const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')


const userSchema = new Schema (
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName:  {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,           
        },
        password: {
            type: String,
            required: true,
          },
        bookmarks:[
            {
            type:Schema.Types.ObjectId,
            ref: 'Bookmark'
            },
        ],
    },
    {
        toJSON: {
          virtuals: true,
        },
      }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  }


const User = model('User', userSchema)

module.exports = User;