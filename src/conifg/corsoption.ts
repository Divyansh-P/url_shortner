const allowedOrigins = require('./allowedOrigins');

const corsoptions = {
  origin: (origin:any, callback:any) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};
export default corsoptions