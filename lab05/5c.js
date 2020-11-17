var studentProto = {
    firstName: '',
    lastName: '',
    id: '',
    courses: ['BYT', 'GRK', 'PRO']
}


function createStudent(fname, lname, id) {
    let stud = Object.create(studentProto);
    stud.firstName = fname;
    stud.lastName = lname;
    stud.id = id;
    stud.prototype = studentProto;
    return stud;
}
console.log(createStudent('Maryia', 'Ruzava', 's18822'))