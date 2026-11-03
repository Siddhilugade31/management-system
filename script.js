
let students = [];

function addStudent() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;

    if(name == "" || roll == "" || course == "") {
        alert("Please fill all details");
        return;
    }

    students.push({
        name: name,
        roll: roll,
        course: course
    });

    display();

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
}

function display() {

    let output = "";

    students.forEach((student, index) => {

        output += `
        <tr>
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.course}</td>
            <td>
                <button class="delete"
                onclick="deleteStudent(${index})">
                Delete
                </button>
            </td>
        </tr>
        `;

    });

    document.getElementById("data").innerHTML = output;
}

function deleteStudent(index) {

    students.splice(index, 1);

    display();
}
