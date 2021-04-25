const mongoose = require('mongoose');

//mongoose.connect('mongodb://186.178.18.70/notes-app', {
//mongoose.connect('mongodb+srv://pjlZPARR88TQVbdM:pjlZPARR88TQVbdM@cluster0.x8mia.mongodb.net/test', {
mongoose.connect('mongodb+srv://pjlZPARR88TQVbdM:pjlZPARR88TQVbdM@cluster0.x8mia.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))