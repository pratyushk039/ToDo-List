const Task=require('../schemas/tasks');
module.exports.del = function(req, res){
    Task.deleteMany({ done:true})
    .then(function(){
        return res.redirect('back'); })
    .catch(function(error){
        console.log(error); // Failure
    });
  
}