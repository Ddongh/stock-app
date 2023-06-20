const express = require("express");
const app = express();
const path = require("path");  
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(cors());

app.use('/api/stock', require('./routes/stock'));
