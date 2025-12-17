import API from '../services/api';

const StudentItem = (params) =>{
const {student, fetchStudents, setSelectedStudent} = params;

const remove = async () =>{
  await API.delete(`/students/${student.id}`);
  fetchStudents();
};

return(
    <tr>
        <td><a href="#!" onClick= {()=>setSelectedStudent(student)}>{student.name}</a></td>
        <td>{student.email}</td>
        <td>{student.course}</td>
        <td>
            <button onClick={remove}>Delete</button>
        </td>
    </tr>
 );
}

export default StudentItem;
