const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');

require('./models/User');
require('./services/passport');

const app = express();


/* const authRoutes = require('./rotes/authRoutes')
authRoutes(app);
 */
require('./routes/authRoutes')(app)

mongoose.connect(keys.mongoURI);
/* app.get('/', (req, res) => {
    res.send({ hi: 'buddy'-});
}); */
const PORT = process.env.PORT || 5000

app.listen(PORT);



