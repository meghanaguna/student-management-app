const Student = require("../models/studentModels");

exports.getAll = (req,res) =>{
    Student.getStudents((err,results)=>{
        if(err) throw err;
        res.json(results); 
    })
}

exports.create((req,res) =>{
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
    Student.deleteStudent(req.params.id, () =>{
        res.json({"message":"student data deleted successfully"});
    })
}