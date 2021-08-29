const corsOptions = {
  origin: [
    'http://movies.spanish.nomoredomains.rocks',
    'https://api.movies.spanish.nomoredomains.rocks',
    'http://movies.spanish.nomoredomains.rocks',
    'https://api.movies.spanish.nomoredomains.rocks',
    'http://localhost:3000',
    'http://localhost:3001',
  ],
  credentials: true,
};

module.exports = corsOptions;
