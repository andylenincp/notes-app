const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const { extname } = require('path');
const { mainModule } = require('process');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('title', 'Sistema de gestión de anotaciones para usuarios');
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: main,
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares

// Global variables

// Routes

// Static files

// Server listening
app.listen(app.get('port'), () => {
    console.log(app.get('title'), 'corriendo en el puerto', app.get('port'));
});