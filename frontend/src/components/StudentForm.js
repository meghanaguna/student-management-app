import { useEffect, useState } from "react";
import API from "../services/api";


const StudentForm = ({fetchStudents, selectedStudent, setSelectedStudent}) => {
   const [student , setStudent] = useState({
    name : '',
    email : '',
    course : ''
   })

   useEffect(() =>{
    if(selectedStudent){
        setStudent(selectedStudent)
    }
   }, [selectedStudent]);

   const handleChange = (e) =>{
        const {name, value} = e.target
        setStudent((prev) => ({...prev, [name] : value}));
   }

    const submitForm = async (event) =>{
        event.preventDefault();

        if(!student.name || !student.email){
            return alert("required fields");
        }

        if(student.id){
            //Update student
            await API.put(`/students/${student.id}` , student); 
        }
        else{
            //Add Student
            await API.post("/students" , student);
        }

        fetchStudents();
        setStudent({name : "", email : "",course : ""});
        setSelectedStudent(null);
    };

    return(
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-header fw-bold">
                     {(student.id) ? "Edit Student" : "Add Student" }
                </div>
                <div className="card-body">
                    <form onSubmit={submitForm}>
                        <div className="row g-3">
                            <div className="col-lg-4">
                                <label className="form-label">Name</label>
                                <input name="name" className="form-control" type="text" placeholder="Enter your name" value={student.name} onChange={handleChange}/>
                            </div>
                            <div className="col-lg-4">
                                <label className="form-label">Email</label>
                                <input name="email" className="form-control" type="email" placeholder="Enter Email" value={student.email} onChange={handleChange}/>
                            </div>
                            <div className="col-lg-4">
                                <label className="form-label">Course</label>
                                 <input name="course" className="form-control" type="text" placeholder="Enter course name" value={student.course} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="mt-3 text-end">
                            <button type="submit" className="btn btn-primary me-2"> {(student.id) ? "Update Student" : "Add Student" }</button>
                        </div>              
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StudentForm;