import StudentItem from "./StudentItem";

const StudentList = ({students, fetchStudents}) =>{

    return(
        <div>
            {students.map((student) => (
                <StudentItem key={student.id} fetchStudents={fetchStudents}/>
             ))}
        </div>
    )
}

export default StudentList;