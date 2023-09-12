let student1 = {
    id: 1,
    name: "Huseyn",
    surname: "Huseynov",
    age: 20,
    address: "Ecemi"
}

let student2 = {
    id: 2,
    name: "Aydemir",
    surname: "Resulov",
    age: 19,
    address: "Turkiye"
}

let student3 = {
    id: 3,
    name: "Idmanci",
    surname: "Axundov",
    age: 20,
    address: "Xetai"
}

let student4 = {
    id: 4,
    name: "Samir",
    surname: "Qehremanov",
    age: 24,
    address: "Californiya"
}

let group = {
    name: "P139",
    capacity: 6,
    students: [],
    addStudent: function (student) {
        if (student === undefined) {
            alert("Parametr is empty!");
            return;
        }

        if (this.students.length === this.capacity) {
            alert("Group already filled!");
            return;
        }

        this.students.push(student);
    },
    getAllStudent: function () {
        return this.students;
    },
    getStudentById: function (id) {
        let result = this.students.find(m => m.id == id)

        if (result === undefined) {
            alert("Student not found!");
            return;
        }

        return result;
    },
    updateStudent: function (student) {
        let existStudent = this.getStudentById(student.id);

        existStudent.name = student.name === undefined ? existStudent.name : student.name;
        existStudent.surname = student.surname === undefined ? existStudent.surname : student.surname;
        existStudent.age = student.age === undefined ? existStudent.age : student.age;
        existStudent.address = student.address === undefined ? existStudent.address : student.address;
    },
    searchStudents: function (search) {
        let searchStudent = this.students.filter(student => student.name === search || student.surname === search);

        if (searchStudent === undefined) {
            alert("Student not found!");
            return;
        }

        return searchStudent;
    },
    deleteStudent: function (id) {
        for (var i = 0; i < this.students.length; i++) {
            if (this.students[i].id === id) {
                this.students.splice(i, 1);
                return this.getAllStudent();
            }
        }
    }
}

group.addStudent(student1);
group.addStudent(student2);
group.addStudent(student3);
group.addStudent(student4);

console.log(group.getStudentById(1));
console.log(group.searchStudents("Resulov"));
console.log(group.deleteStudent(1));

function showBeforeUpdate() {
    let beforeStudents = group.getAllStudent();

    for (const item of beforeStudents) {
        let li = document.createElement("li");
        li.className = "list-group-item";
        let string = `${item.name} - ${item.surname} - ${item.age} - ${item.address}`;
        li.innerHTML = string;
        document.querySelector(".ul1").append(li);
    }
}

function showAfterUpdate() {
    let afterStudents = group.getAllStudent();

    for (const item of afterStudents) {
        let li = document.createElement("li");
        li.className = "list-group-item";
        let string = `${item.name} - ${item.surname} - ${item.age} - ${item.address}`;
        li.innerHTML = string;
        document.querySelector(".ul2").append(li);
    }
}

let updatedStudent = {
    id: 4,
    name: "Test",
    surname: "Testov",
    age: 21,
    address: "Canada"
}

showBeforeUpdate();
group.updateStudent(updatedStudent);
showAfterUpdate()