import {useState, useEffect} from "react";
import API from "./services/api";
import StudentForm from './components/StudentForm';
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = async () =>{
    const res = await API.get("/students");
    setStudents(res.data);
  };

 useEffect(() => {
  fetchStudents();
 }, []);

  return (
    <>
      <StudentForm fetchStudents={fetchStudents} selectedStudent = {selectedStudent} setSelectedStudent = {setSelectedStudent} />
      <StudentList students={students} fetchStudents={fetchStudents} setSelectedStudent = {setSelectedStudent}/>
    </>
  );
}

export default App;
