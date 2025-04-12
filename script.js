const studentList = [];
const displayContainer = document.querySelector(".display");

function handleAddStudent(event) {
  event.preventDefault();

  const nameInput = document.querySelector("#name").value.trim();
  const ageInput = document.querySelector("#age").value.trim();
  const classInput = document.querySelector("#class").value.trim();
  const marksInput = document.querySelector("#marks").value.trim();

  if (nameInput && ageInput && classInput && marksInput) {
    const newStudent = {
      name: nameInput,
      age: ageInput,
      className: classInput,
      marks: parseInt(marksInput),
    };

    studentList.push(newStudent);
    renderStudents(studentList);
    document.querySelector("form").reset();
  }
}

function renderStudents(studentsToRender) {
  displayContainer.innerHTML = "";
  studentsToRender.forEach((student, idx) => {
    const studentCard = document.createElement("div");
    studentCard.classList.add("studentCard");

    studentCard.innerHTML = `
      <h3>${student.name}</h3>
      <p>Age: ${student.age}</p>
      <p>Class: ${student.className}</p>
      <p>Marks: <span class="color">${student.marks}</span></p>
      <button onclick="deleteStudent(${idx})">Remove</button>
    `;

    displayContainer.appendChild(studentCard);
  });
}

function deleteStudent(index) {
  studentList.splice(index, 1);
  renderStudents(studentList);
}

document.querySelector(".btn1").addEventListener("click", () => {
  const sortedList = [...studentList].sort((a, b) => b.marks - a.marks);
  renderStudents(sortedList);
});

document.querySelector(".show").addEventListener("click", () => {
  const highScorers = studentList.filter((student) => student.marks > 75);
  renderStudents(highScorers);
});

document.querySelector(".btn2").addEventListener("click", () => {
  if (studentList.length === 0) {
    alert("No students to calculate average.");
    return;
  }

  const totalMarks = studentList.reduce(
    (acc, student) => acc + student.marks,
    0
  );
  const averageMarks = totalMarks / studentList.length;
  alert(`Average Marks: ${averageMarks.toFixed(2)}`);
});

document.querySelector("#search").addEventListener("input", (event) => {
  const keyword = event.target.value.toLowerCase();
  const matchedStudents = studentList.filter((student) =>
    student.name.toLowerCase().includes(keyword)
  );
  renderStudents(matchedStudents);
});

document.querySelector("form").addEventListener("submit", handleAddStudent);
