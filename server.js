const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');


require('./db/db');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const trailController = require('./controllers/trailController');

app.use('/trails', trailController);


app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
  });