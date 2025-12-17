import StudentItem from "./StudentItem";

const StudentList = ({students, fetchStudents, setSelectedStudent}) =>{

    return(
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-header fw-bold">
                    Student List
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover mb-0">
                            <thead className="table-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>email</th>
                                    <th>Course</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student) => (
                                    <StudentItem key={student.id} student={student} fetchStudents={fetchStudents} setSelectedStudent={setSelectedStudent}/>
                                ))}
                            </tbody>
                        </table>               
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentList;