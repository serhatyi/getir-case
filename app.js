const express = require('express');
const app = express();
const connectDatabase = require('./config/db');
const port = process.env.PORT || 3000;
const projecttype = process.env.NODE_ENV || Development; 
// Config
connectDatabase();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // allows nested object as input

//Filter records import
const filterRoute = require('./routes/filterRoute');
app.use('/',filterRoute);


if (projecttype !== 'test') {
    app.listen(port, () => console.log(`Server running on port ${port}`));
}
module.exports = app
