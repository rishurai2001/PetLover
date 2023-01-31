function validateForm() {
    
   let x = document.forms["contactForm"]["name"].value;
   if (document.forms["contactForm"]["name"].value == "") {
     alert("Name must be filled out");
     return false;
   }
   else  if (document.forms["contactForm"]["email"].value == "") {
    alert("Email must be filled out");
    return false;
  }
  else  if (document.forms["contactForm"]["subject"].value == "") {
    alert("Subject must be filled out");
    return false;
  }
  else  if (document.forms["contactForm"]["message"].value == "") {
    alert("Please write some message");
    return false;
  }
  else  alert("Data filled successfully, we will contact you soon")
  }