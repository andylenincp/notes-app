const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pjlZPARR88TQVbdM:pjlZPARR88TQVbdM@cluster0.x8mia.mongodb.net/test', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))