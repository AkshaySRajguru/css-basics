function calculateAgeInDays() {
  var usersBirthYear = document.getElementById("txtBirthYear").value;
  var date = new Date();
  var currentYear = date.getFullYear();

  if (
    isNaN(usersBirthYear) == false &&
    parseInt(usersBirthYear) <= currentYear &&
    parseInt(usersBirthYear) > 0
  ) {
    var ageInDays = totalDaysInYears(usersBirthYear);

    document.getElementById("txtAgeInDays").value = ageInDays + " days";
  } else {
    alert("Please enter your birth year in valid number !");
  }
}

function resetAgeInDays() {
  document.getElementById("txtBirthYear").value = null;
  document.getElementById("txtAgeInDays").value = null;
}

// A year is a leap year if the following conditions are satisfied:

// The year is a multiple of 400.
// The year is a multiple of 4 and not a multiple of 100.

// program to check leap year
function isBirthLeapYear(year) {
  var isLeapYear = false;
  // three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    // console.log(year + " is a leap year");
    isLeapYear = true;
  } else {
    // console.log(year + " is not a leap year");
    isLeapYear = false;
  }

  return isLeapYear;
}

// calculate total number of leap years occurred from gien year
function totalDaysInYears(year) {
  var date = new Date();
  var currentYear = date.getFullYear();
  //   var totalLeapYears = 0;
  var totalDays = 0;
  for (i = year; i <= currentYear; i++) {
    if (isBirthLeapYear(i)) {
      //   totalLeapYears = totalLeapYears + 1;
      totalDays = totalDays + 366;
    } else {
      totalDays = totalDays + 365;
    }
  }
  return totalDays;
}

// Challenge 2: Cat Generator

function generateCat() {
  var image = document.createElement("img");
  image.src =
    "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
  image.alt = "cat-image";

  var div = document.getElementById("flexbox-div-cat");
  div.appendChild(image);
}
