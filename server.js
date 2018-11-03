const express        = require('express');
const app            = express();


require('./db/db');


const trailController = require('./controllers/trailController');

app.use('/trails', trailController);

app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
  });