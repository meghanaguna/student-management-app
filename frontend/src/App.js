import {useState, useEffect} from "react";
import API from "./services/api";
import StudentForm from './components/StudentForm';
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () =>{
    const res = await API.get("/students");
    setStudents(res.data);
  };

 useEffect(() => {
  fetchStudents();
 }, []);

  return (
    <>
      <h1>Student Management</h1>
      <StudentForm fetchStudents={fetchStudents}/>
      <StudentList students={students} fetchStudents={fetchStudents}/>
    </>
  );
}

export default App;
