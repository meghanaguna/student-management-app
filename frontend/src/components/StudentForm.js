import { useState } from "react";
import API from "../services/api";


const StudentForm = ({fetchStudents}) => {
   const [student , setStudent] = useState({
    name : '',
    email : '',
    course : ''
   })

   const handleChange = (e) =>{
        setStudent({...student, [e.target.name] : e.target.value});
   }

    const submitForm = async (event) =>{
        event.preventDefault();
        if(!student.name || !student.email){
            return alert("required fields");
        }
        await API.post("/students" , student);
        fetchStudents();
        setStudent({name : "", email : "",course : ""});
    };

    return(
        <form onsubmit={submitForm}>
            <input name="name" type="text" placeholder="Enter your name" onChange={handleChange}/>
            <input name="email" type="email" placeholder="Enter Email" onChange={handleChange}/>
            <input name="course" type="text" placeholder="Enter course name" onChange={handleChange}/>
            <button type="submit">Add Student</button>
        </form>
    )

}

export default StudentForm;