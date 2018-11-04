const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors           = require('cors');


require('./db/db');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));


const trailController = require('./controllers/trailController');

app.use('/api/v1/trails', trailController);


app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
  });