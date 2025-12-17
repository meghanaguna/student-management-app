const db = require("../config/db");

exports.getStudents = callback => {
    db.query('SELECT * FROM students', callback);
}

exports.addStudent = (data, callback) =>{
    db.query("INSERT INTO students SET ?", data, callback);
}

exports.updateStudent = (id, data, callback) =>{
    db.query("UPDATE students set ? WHERE id = ?", [data, id], callback );
}

exports.deleteStudent = (id, callback) => {
    db.query("DELETE FROM students WHERE id = ?" , [id] , callback);
}