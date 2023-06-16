const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/StudentDatabase').then(
    function(){
        console.log("Database Connected Successfully...");
    }
)