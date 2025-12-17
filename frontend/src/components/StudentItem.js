import API from '../services/api';

const StudentItem = (params) =>{
 const {students, fetchStudents} = params;

 const remove = async () =>{
  await API.delete(`/students/${students.id}`);
  fetchStudents();
 };

 return(
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>email</th>
                <th>Course</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{students.name}</td>
                <td>{students.email}</td>
                <td>{students.course}</td>
                <td>
                    <button onClick={remove}>Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
 );
}

export default StudentItem;
