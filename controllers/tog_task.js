const { findOne } = require('../schemas/tasks');
const Task=require('../schemas/tasks');
module.exports.tog = function(req, res){
    var x = (req.body.state === 'true');
    if (x===false){
        x=true;
    }
    else{
        x=false;
    }
    const filter={task_id:req.body.id};
    const update={done:x};
    Task.findOneAndUpdate(filter,update,{new:true},function(err,doc){
        if(err){
            return ;
        }
        return res.redirect('back');

    })
}