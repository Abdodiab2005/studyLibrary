// ! Navbar
let navLinks = document.querySelectorAll(".navBtn");
let sections = document.querySelectorAll(".section");
function showDiv(btn, sec) {
  navLinks.forEach((el) => {
    el.classList.remove("active");
    document.getElementById(`${btn}`).classList.add("active");
  });
  sections.forEach((el) => {
    el.style.display = "none";
    document.getElementById(`${sec}`).style.display = "flex";
  });
}

// ? Assignments SHow
let required = document.querySelectorAll(".required");
function showAssignment(id) {
  required.forEach((el) => {
    el.style.display = "none";
  });
  if (document.getElementById(`${id}`).style.display === "block") {
    document.getElementById(`${id}`).style.display = "none";
  } else {
    document.getElementById(`${id}`).style.display = "block";
  }
}

// ? Nested Assignments Show
function showNestedAssignment(id) {
  if (document.getElementById(`${id}`).style.display === "block") {
    document.getElementById(`${id}`).style.display = "none";
  } else {
    document.getElementById(`${id}`).style.display = "block";
  }
}

// ! Download Function
function downloadFile(URL, name) {
  const link = document.createElement("a");
  link.href = URL;
  link.download = name;
  link.click();
}

// * URL validation
const hashURL = window.location.hash;
if (hashURL === "#assignments") {
  showDiv("assignments", "assignmentsSec");
} else if (hashURL === "#summaries") {
  showDiv("summaries", "summariesSec");
} else if (hashURL === "#explains") {
  showDiv("explains", "explainsSec");
} else if (hashURL === "#books") {
  showDiv("books", "booksSec");
} else {
  showDiv("homepage", "mainSec");
}
