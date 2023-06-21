const component = document.getElementById('guestForm');
const component2 = document.getElementById('guestForm2'); 
document.getElementById('addIcon').addEventListener('click', function(){
    const component = document.getElementById('guestForm');
    const component2 = document.getElementById('guestForm2'); 
    console.log(component.style.display);
    
    if(component.style.display == 'none'){
        component.style.display = 'block';
        document.getElementById("guest1").textContent="Guest 1";
        document.getElementById("guest1_add").textContent="Remove Guest";  
    }
    else{
        if(component2.style.display == 'block'){
            component2.style.display = 'none';
            document.getElementById("guest2").textContent="You may add upto 1 guest";
            document.getElementById("guest2_add").textContent="Add Guest";
        }
        else{
        component.style.display = 'none';
        document.getElementById("guest1").textContent="You may add upto 2 guests";
        document.getElementById("guest1_add").textContent="Add Guest";
        }
        
    }
});

document.getElementById('addIcon2').addEventListener('click', function(){
    const component2 = document.getElementById('guestForm2'); 
    if(component2.style.display == 'none'){
        component2.style.display = 'block';
        document.getElementById("guest2").textContent="Guest 2";
        document.getElementById("guest2_add").textContent="Remove Guest";  
    }
    else{
        component2.style.display = 'none';
        document.getElementById("guest2").textContent="You may add upto 1 guest";
        document.getElementById("guest2_add").textContent="Add Guest";
    }
});
function showFormField() {
const select = document.getElementById("dropdown");
const selectedOption = select.options[select.selectedIndex].value;
console.log(selectedOption);

if(selectedOption==="carePartner"){
    document.getElementById("addGuest").style.display= 'flex';
    document.getElementById("carePartnerForm").style.display= 'block';
}
else{
    document.getElementById("carePartnerForm").style.display= 'none';  
}
}

//age limit to 2 characters
const input = document.getElementById("ageInput");
input.addEventListener("input", restrictToTwoDigits);

function restrictToTwoDigits() {
  if (input.value.length > 2) {
    input.value = input.value.slice(0, 2);
  }
}




//form validation
const form = document.getElementById('form');
const firstName = document.getElementById('firstNameInput');
const lastName = document.getElementById('lastNameInput');
const age = document.getElementById('ageInput');
const phoneNumber = document.getElementById('phoneInput');
const email = document.getElementById('emailInput');
const confirmEmail = document.getElementById('confirmEmailInput');
const howIHeard = document.getElementById('howIHeard');
// form.addEventListener('submit', e => {
//     e.preventDefault();
//     checkInputs();
// });

//guest 1 inputs
const guestfirstName_1 = document.getElementById('guestfirstNameInput1');
const guestlastName_1 = document.getElementById('guestlastNameInput1');
const guestage_1 = document.getElementById('guestageInput1');
const guestphoneNumber_1 = document.getElementById('guestphoneInput1');
const guestemail_1 = document.getElementById('guestemailInput1');
const guestconfirmEmail_1 = document.getElementById('guestconfirmEmailInput1');
const guesthowIHeard_1 = document.getElementById('guestdropdown1');

//guest 2 inputs
const guestfirstName_2 = document.getElementById('guestfirstNameInput2');
const guestlastName_2 = document.getElementById('guestlastNameInput2');
const guestage_2= document.getElementById('guestageInput2');
const guestphoneNumber_2 = document.getElementById('guestphoneInput2');
const guestemail_2 = document.getElementById('guestemailInput2');
const guestconfirmEmail_2 = document.getElementById('guestconfirmEmailInput2');
const guesthowIHeard_2 = document.getElementById('guestdropdown2');



document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();
    checkInputs();
    validateAge(e);
    validateEmail(e);
});

function validateAge(event) {
    event.preventDefault();
    const ageInput = document.getElementById('ageInput');
    const ageErrorTooltip = document.getElementById('age-error-tooltip');
    const age = parseInt(ageInput.value);

    if (age < 18) {
      ageErrorTooltip.classList.add('show-error');
      return false;
    } else {
      ageErrorTooltip.classList.remove('show-error');
      return true;
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }

//   function validateEmail(event) {
//     event.preventDefault();
//     const emailInput = document.getElementById('emailInput');
//     const emailConfirmationInput = document.getElementById('confirmEmailInput');
//     const invalidEmailErrorTooltip = document.getElementById('email-error-invalid-tooltip');
//     const emailErrorTooltip = document.getElementById('email-error-tooltip');
//     if (!isValidEmail(emailInput.value)) {
//      invalidEmailErrorTooltip.setAttribute('data-error', 'Error: Invalid email address.');
//      invalidEmailErrorTooltip.classList.add('show-error');
//       return false;
//     } else if (emailInput.value !== emailConfirmationInput.value) {
//       emailErrorTooltip.setAttribute('data-error', 'Error: Email addresses do not match.');
//       emailErrorTooltip.classList.add('show-error');
//       return false;
//     } else {
//       invalidEmailErrorTooltip.classList.remove('show-error');
//       emailErrorTooltip.classList.remove('show-error');
//       return true;
//     }
//   }


  function validateEmail(event) {
    event.preventDefault();
    const emailInput = document.getElementById('emailInput');
    const emailConfirmationInput = document.getElementById('confirmEmailInput');
    const emailErrorTooltip = document.getElementById('email-error-tooltip');

    if (emailInput.value !== emailConfirmationInput.value) {
      emailErrorTooltip.classList.add('show-error');
      return false;
    } else {
      emailErrorTooltip.classList.remove('show-error');
      return true;
    }
  }


function firstNameCheck(fname){
    const firstNameValue = fname.value.trim();
    if (firstNameValue === '') {
        setError(fname);
    }  
    else{
        removeError(fname);
    }
}

function lastNameCheck(lname){
    const lastNameValue = lname.value.trim();
    if (lastNameValue === '') {
        setError(lname);
    } 
    else{
        removeError(lname);
    }
}

function ageCheck(age){
    const ageValue = age.value.trim();
    if (ageValue === '') {
        setError(age);
    } 
    else{
        removeError(age);
    }
}

function phoneNumberCheck(pNumber){
    const phoneNumberValue = pNumber.value.trim();
    if (phoneNumberValue === '') {
        setError(pNumber);
    } 
    else{
        removeError(pNumber);
    }
}

function emailCheck(e_mail){
    const emailValue = e_mail.value.trim();
    if (emailValue === '') {
        setError(e_mail);
    } 
}

function confirmEmailCheck(emailcheck){
    const confirmEmailValue = emailcheck.value.trim();
    if (confirmEmailValue === '') {
        setError(emailcheck);
    } 
    
}

function dropdownCheck(select){
    //const select = document.getElementById("howIHeard");
    const selectedOption = select.options[select.selectedIndex].value;
    console.log(selectedOption);

    if(selectedOption==="0"){
        setError(select);
    }
    else{
   
    }
}

function checkInputs() {
    firstNameCheck(firstName);
    lastNameCheck(lastName);
    ageCheck(age);
    phoneNumberCheck(phoneNumber);
    emailCheck(email);
    confirmEmailCheck(confirmEmail);
    dropdownCheck(howIHeard);

    if(component.style.display === 'block'){
        firstNameCheck(guestfirstName_1);
        lastNameCheck(guestlastName_1);
        ageCheck(guestage_1);
        phoneNumberCheck(guestphoneNumber_1);
        emailCheck(guestemail_1);
        confirmEmailCheck(guestconfirmEmail_1);
        dropdownCheck(guesthowIHeard_1);

        if(component2.style.display === 'block'){
            firstNameCheck(guestfirstName_2);
            lastNameCheck(guestlastName_2);
            ageCheck(guestage_2);
            phoneNumberCheck(guestphoneNumber_2);
            emailCheck(guestemail_2);
            confirmEmailCheck(guestconfirmEmail_2);
            dropdownCheck(guesthowIHeard_2);
        }
    }
    
}

function setError(inputControl){
        document.getElementById('error-message').style.display='inline-block';
        document.getElementById('errortextField').style.display='inline';
        document.getElementById('errortextField').innerHTML="Please fill out every field that is marked with asterisk";
        inputControl.className= 'inputerror';
}
function removeError(inputControl){
     inputControl.className= 'input';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}