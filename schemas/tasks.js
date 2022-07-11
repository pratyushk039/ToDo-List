const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    task_text: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    task_category:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        required:true
    },
    task_id:{
        type: String,
        required:true
    }

})


const tasks = mongoose.model('Tasks', taskSchema);

module.exports = tasks;