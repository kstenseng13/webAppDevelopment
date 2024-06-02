const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended : false}));

//Routes, routes, and more routes
const indexRouter = require('./routes/index');
const menuRouter = require("./routes/menu");
const orderRouter = require("./routes/order");
const termsRouter = require("./routes/terms");
const loginRouter = require("./routes/login");
const userRouter = require("./routes/user");

app.use('/', indexRouter);
app.use('/menu', menuRouter);
app.use('/order', orderRouter);
app.use('/terms', termsRouter);
app.use('/login', loginRouter);
app.use('/user', userRouter);


var server = app.listen(process.env.PORT || 3000);
