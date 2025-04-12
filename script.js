    const students = [];
    const displayDiv = document.querySelector(".display");

    function addstnd(e) {
      e.preventDefault();

      let studentName = document.querySelector("#name").value.trim();
      let studentAge = document.querySelector("#age").value.trim();
      let studentClass = document.querySelector("#class").value.trim();
      let studentMarks = document.querySelector("#marks").value.trim();

      if (studentName && studentAge && studentClass && studentMarks) {
        const student = {
          studentName,
          studentAge,
          studentClass,
          studentMarks: parseInt(studentMarks),
        };

        students.push(student);
        display(students);
        document.querySelector("form").reset();
      }
    }

    function display(data) {
      displayDiv.innerHTML = ""; // Clear previous cards
      data.forEach((student, index) => {
        let card = document.createElement("div");
        card.className = "studentCard";
        card.innerHTML = `
          <h3>${student.studentName}</h3>
          <p>Age: ${student.studentAge}</p>
          <p>Class: ${student.studentClass}</p>
          <p>Marks: <span class="color">${student.studentMarks} </span></p>
          <button onclick="remove(${index})">Remove</button>
        `;
        displayDiv.appendChild(card);
      });
    }

    function remove(index) {
      students.splice(index, 1);
      display(students);
    }

    document.querySelector(".btn1").addEventListener("click", () => {

      const sorted = students.sort((a, b) => b.studentMarks - a.studentMarks);
    display(sorted);
    });
  function show() {
      const filtered = students.filter(s => s.studentMarks > 75);
      display(filtered);
    }
    document.querySelector(".show").addEventListener("click", () => {
      const filtered = students.filter(s => s.studentMarks > 75);
      display(filtered);
    });
 
    document.querySelector(".btn2").addEventListener("click", () => {
      const average = students.reduce((sum, student) => sum + student.studentMarks, 0) / students.length;
      alert(`Average Marks: ${average}`);
    });
    document.querySelector("#search").addEventListener("input", (e) => {
      const searchname= e.target.value.toLowerCase();
      const filteredStudents = students.filter(student => student.studentName.toLowerCase().includes(searchname));
      display(filteredStudents);
    });

 
