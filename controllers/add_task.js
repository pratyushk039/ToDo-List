// const express = require('express');
// const db = require('../configs/mongoose.js');
// const app = express();
const Task=require('../schemas/tasks');
module.exports.add = function(req, res){
    Task.create({
        task_text: req.body.task_text,
        task_category: req.body.task_category,
        date:req.body.date,
        done:false,
        task_id:'1'
    }, function(err, newTask){
        if(err){console.log('Error in creating a task!',err)
            return;}
            Task.findByIdAndUpdate(newTask._id,{task_id:newTask._id.valueOf()},function(err,docs){
                if(err){return;}
                else{return res.redirect('back');}
            })
    })
  
}