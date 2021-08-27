const corsOptions = {
  origin: [
    'http://movies.Spanish.nomoredomains.monster',
    'https://movies.Spanish.nomoredomains.monster',
    'http://api.movies.Spanish.nomoredomains.monster',
    'https://api.movies.Spanish.nomoredomains.monster',
    'http://localhost:3000',
    'http://localhost:3001',
  ],
  credentials: true,
};

module.exports = corsOptions;
