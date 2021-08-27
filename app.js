const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const { PORT, MONGO_URL } = require('./config');
const router = require('./routes/index');
const { celebrateErrorHandler } = require('./middlewares/celebrate-errors-handler');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(requestLogger);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '6128aabb1db769c66d7ad439',
  };
  next();
});

app.use('/', router);

app.use(errorLogger);
app.use(celebrateErrorHandler);

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({ message: statusCode === 500 ? 'На сервере произошла ошибка' : message });
  next();
});

app.listen(PORT, () => {});
