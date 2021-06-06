function calculateAgeInDays() {
  var usersBirthYear = document.getElementById("txtBirthYear").value;
  var date = new Date();
  var currentYear = date.getFullYear();

  if (
    isNaN(usersBirthYear) == false &&
    parseInt(usersBirthYear) <= currentYear
  ) {
    var ageInDays = (currentYear - usersBirthYear) * 365;
    document.getElementById("txtAgeInDays").value = ageInDays + " days";
  } else {
    alert("Please enter your birth year in valid number !");
  }
}
