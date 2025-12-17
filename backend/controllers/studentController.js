const Student = require("../models/studentModels");

exports.getAll = (req,res) =>{
    Student.getStudents((err,results)=>{
        if(err) throw err;
        res.json(results); 
    })
}

exports.create = ((req,res) =>{
    Student.addStudent(req.body, ()=>{
        res.json({"message": "Student added successfully"});
    })
})

exports.update = (req,res) => {
    Student.updateStudent(req.params.id,req.body,() =>{
        res.json({"message": "Student data updated successfully"});
    })
}

exports.remove = (req,res) =>{
    Student.deleteStudent(req.params.id, (err) =>{
        if(err){
            console.log("err", err);
            return res.status(500).json({"err":"Delete Failed"})
        }
        res.json({"message":"student data deleted successfully"});
    })
}