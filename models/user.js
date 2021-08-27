const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const { UnauthorizedError } = require('../errors/401_unauthorized-error');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email обязателен для заполнения'],
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Email должен быть валидным',
    },
  },
  password: {
    type: String,
    required: [true, 'Пароль обязателен для заполнения'],
    select: false,
  },
  name: {
    type: String,
    required: [true, 'Имя обязательно для заполнения'],
    minlength: [2, 'Имя не может быть короче 2-х символов'],
    maxlength: [30, 'Имя не может быть длинее 30-ти символов'],
  },
}, {
  versionKey: false,
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedError('Неверные почта или пароль'));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new UnauthorizedError('Неверные почта или пароль'));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
