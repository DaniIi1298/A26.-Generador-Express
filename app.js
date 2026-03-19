// ============================
// ===== INSTANCIAS

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const cors = require('cors');

var app = express();
app.use(cors());

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "API Bicicletas",
      version: "1.0.0",
      description: "Documentación de la API REST de bicicletas con Swagger"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./routes/**/*.js"]
};

const specs = swaggerJsdoc(options);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

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


//router que se encargará de la API  de bicicletas
var bicicletasAPIRouter = require('./routes/api/bicicletas');

//If there are several versions of the API, /api/v1/bicicletas is usually used
app.use('/api/bicicletas', bicicletasAPIRouter);

// ============================
// ===== MANEJADORES DE ERRORES

// Captura de errores 404
app.use(function (req, res, next) {
  next(createError(404));
});

// ============================
// MANEJADOR DE ERRORES
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});


// ============================
// ===== EXPORTACIÓN DE LA APP

module.exports = app;