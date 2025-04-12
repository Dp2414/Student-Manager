document.querySelector("form").addEventListener("submit", addstnd);
function addstnd(event) {
  event.preventDefault();
  let studentName = document.querySelector("#name").value.trim();
  let studentAge = document.querySelector("#age").value.trim();
  let studentClass = document.querySelector("#class").value.trim();
  let studentMarks = document.querySelector("#marks").value.trim();
  if (studentName && studentAge && studentClass && studentMarks) {
    let card = document.createElement("div");
    card.className = "studentCard";
    card.innerHTML = `
          <h3>${studentName}</h3>
          <p>Age: ${studentAge}</p>
          <p>Class: ${studentClass}</p>
          <p>Marks: ${studentMarks}</p>
          <p> <span>Remove</span> </p>`;

    // Append the card to display area
    document.querySelector(".display").appendChild(card);

    document.querySelector("form").reset();
  }
}
