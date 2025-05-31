var age = prompt("Enter your age:");

if (age >= 18) {
  var Indian = prompt("Indian citizen? (yes/no)");

  if (Indian==="yes") {
    alert("You are eligible.");
  } else {
    alert("You are not an Indian citizen.");
  }
} else {
  alert("You are not 18 years old.");
}
