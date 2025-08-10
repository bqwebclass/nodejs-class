const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Database Connected');
  }).catch(err => {
    console.log(err);
  })