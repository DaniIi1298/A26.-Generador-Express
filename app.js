// ============================
// ===== INSTANCIAS

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


// ============================
// ===== CONFIGURACIONES

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// ============================
// ===== MIDDLEWARES

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// ============================
// ===== RUTAS

app.use('/', indexRouter);
app.use('/users', usersRouter);


// ============================
// ===== MANEJADORES DE ERRORES

// Captura de errores 404
app.use(function(req, res, next) {
  next(createError(404));
});

// ============================
// MANEJADOR DE ERRORES
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});


// ============================
// ===== EXPORTACIÓN DE LA APP

module.exports = app;