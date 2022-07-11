const express = require('express');
const db = require('../configs/mongoose.js');
const app = express();
const Tasks=require('../schemas/tasks');
module.exports.home = function(req, res){
    Tasks.find({}, function(err, task_list){
        if(err){
            console.log("error in fetching contacts from db");
            return;
        }
        return res.render('html',{
            tasklist: task_list
        });
    })
}

// module.exports.actionName = function(req, res){}