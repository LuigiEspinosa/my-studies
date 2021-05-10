let students = ["Maria", "Sergio", "Rosa", "Daniel"];

function saluteStudents(students) {
    console.log(`Hola, ${students}`);
}

for (let i = 0; i < students.length; i++) {
    saluteStudents(students[i]);
}

for (let student of students) {
    saluteStudents(student);
}

while (students.length > 0) {
    let student = students.shift();
    saluteStudents(student);
}