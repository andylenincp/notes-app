const express = require('express');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('title', 'Sistema de gestión de anotaciones para usuarios');

// Middlewares

// Global variables

// Routes

// Static files

// Server listening
app.listen(app.get('port'), () => {
    console.log(app.get('title'), 'corriendo en el puerto', app.get('port'));
});