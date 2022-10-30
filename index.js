let globalIsSubmitted = false

function validate(isSubmitted = false) {
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let mobileNumber = document.getElementById('mobile-number').value
    
    let Gender1 = document.getElementById("male1").checked
    let Gender2 = document.getElementById("female2").checked
    let Gender3 = document.getElementById("others3").checked
    let Countries = document.getElementById('countries').value
    let error = false
    

    if (isSubmitted) { 
        globalIsSubmitted = true
    }


    
 //First Nmae Validation

    if(globalIsSubmitted) {
    if (firstName.length >= 3 && (firstName.match(/^[A-Za-z]+$/))) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    }
    else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error = true
    }


// LastName Validation

    if (lastName.length >= 3 && (lastName.match(/^[A-Za-z]+$/))) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    }
    else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        error = true
    }
 

//email validation    

    if (
			email.includes("@") &&
			email.includes(".") &&
			email.indexOf("@") != 0 &&
			email.length - email.lastIndexOf(".") >= 3
		) {
			document.getElementById("email-valid").style.display = "block";
			document.getElementById("email-invalid").style.display = "none";
		} else {
			document.getElementById("email-invalid").style.display = "block";
			document.getElementById("email-valid").style.display = "none";
			error = true
		}


// Mobile Validation

    if (mobileNumber.length === 10 && !isNaN(mobileNumber)) {
        document.getElementById('mobile-valid').style.display = 'block'
        document.getElementById('mobile-invalid').style.display = 'none'
    }
    else {
        document.getElementById('mobile-invalid').style.display = 'block'
        document.getElementById('mobile-valid').style.display = 'none'
        error = true
    }


// Gender Validation
 
    if (Gender1 || Gender2 || Gender3) {
        document.getElementById("gender-invalid").style.display = 'none'
        document.getElementById("gender-valid").style.display = 'block'
    } else {
        document.getElementById("gender-invalid").style.display = 'block'
        document.getElementById("gender-valid").style.display = 'none'
        error = true
    }
    

// Country Validation

    if (Countries != 'None') {
      document.getElementById('countries-valid').style.display = 'block'
      document.getElementById('countries-invalid').style.display = 'none'
  } else {
      document.getElementById('countries-invalid').style.display = 'block'
      document.getElementById('countries-valid').style.display = 'none'
      error = true
  } 
    
// Alert Validation

    if(!error && isSubmitted){
          alert('Your details have been saved successfully!')
          document.getElementById("registration-form").reset();
          let validFeedback = document.getElementsByClassName("valid-feedback");
    for (i = 0; i < validFeedback.length; i++) {
      validFeedback[i].style.display = "none";
    }
    let invalidFeedback = document.getElementsByClassName("invalid-feedback");
    for (i = 0; i < invalidFeedback.length; i++) {
      invalidFeedback[i].style.display = "none";
    }
    }
}
}