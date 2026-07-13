const subjects = document.getElementById("subjects");

// Add Subject
document.getElementById("addSubjectBtn").onclick = function () {
  let subjectDiv = document.createElement("div");

  subjectDiv.className = "subject";

  subjectDiv.innerHTML = `
        <input type="number" class="grade" placeholder="Grade">
        <input type="number" class="unit" placeholder="Units">
        <button class="removeBtn">✖</button>
    `;

  subjects.appendChild(subjectDiv);
};

// Remove Subject (works for both existing and new subjects)
subjects.addEventListener("click", function (e) {
  if (e.target.classList.contains("removeBtn")) {
    const allSubjects = document.querySelectorAll(".subject");

    // Prevent deleting the last subject
    if (allSubjects.length > 1) {
      e.target.parentElement.remove();
    } else {
      alert("At least one subject is required.");
    }
  }
});

// Calculate GWA
document.getElementById("calculateBtn").onclick = function () {
  const grades = document.querySelectorAll(".grade");
  const units = document.querySelectorAll(".unit");

  let totalGrade = 0;
  let totalUnits = 0;

  for (let i = 0; i < grades.length; i++) {
    let grade = parseFloat(grades[i].value);
    let unit = parseFloat(units[i].value);

    if (!isNaN(grade) && !isNaN(unit)) {
      totalGrade += grade * unit;
      totalUnits += unit;
    }
  }

  if (totalUnits === 0) {
    document.getElementById("result").innerHTML = "GWA: 0.00";
    return;
  }

  let gwa = totalGrade / totalUnits;

  document.getElementById("result").innerHTML = `GWA: ${gwa.toFixed(3)}`;
};
// Background Slideshow
const images = [
  "images/background1.jpg",
  "images/background6.jpg",
  "images/background3.jpg",
  "images/background4.jpg",
  "images/background5.jpg",
];

const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");

let current = 0;
let showingFirst = true;

// First image
bg1.style.backgroundImage = `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)),
url('${images[0]}')`;

setInterval(() => {
  current = (current + 1) % images.length;

  const nextImage = `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)),
url('${images[current]}')`;

  if (showingFirst) {
    bg2.style.backgroundImage = nextImage;

    bg2.style.opacity = 1;
    bg1.style.opacity = 0;
  } else {
    bg1.style.backgroundImage = nextImage;

    bg1.style.opacity = 1;
    bg2.style.opacity = 0;
  }

  showingFirst = !showingFirst;
}, 5000);
