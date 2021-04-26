const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/notes-app', {
mongoose.connect('mongodb+srv://andylenincp:andylenincp@cluster0.x8mia.mongodb.net/notes-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))