function verifyPassword() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value; 

  let status;

  if (user === "" || pass === "") {
    status = "empty";
  } 
  else if (user === "Vice Ganda" && pass === "67690") {
    status = "success";
  } 
  else {
    status = "denied";
  }

// SWITCH
   switch(status) {

    case "success":
      alert("Access granted\nWelcome " + user + "!");
      break;

    case "denied":
      alert("Access denied\nIncorrect username and/or password.");
      break;

    case "empty":
      alert("Please fill in all fields.");
      break;

    default:
      alert("Unknown error.");
  }
}