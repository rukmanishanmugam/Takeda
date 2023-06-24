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
        changeIcon(true);
        

    }
    else{
        if(component2.style.display == 'block'){
            component2.style.display = 'none';
            document.getElementById("guest2").textContent="You may add upto 1 guest";
            document.getElementById("guest2_add").textContent="Add Guest";
            changeIcon2(false); 
        }
        else{
        component.style.display = 'none';
        document.getElementById("guest1").textContent="You may add upto 2 guests";
        document.getElementById("guest1_add").textContent="Add Guest";
        changeIcon(false);
        }
        
    }
});

document.getElementById('addIcon2').addEventListener('click', function(){
    const component2 = document.getElementById('guestForm2'); 
    if(component2.style.display == 'none'){
        component2.style.display = 'block';
        document.getElementById("guest2").textContent="Guest 2";
        document.getElementById("guest2_add").textContent="Remove Guest"; 
        changeIcon2(true); 
    }
    else{
        component2.style.display = 'none';
        document.getElementById("guest2").textContent="You may add upto 1 guest";
        document.getElementById("guest2_add").textContent="Add Guest";
        changeIcon2(false); 
    }
});


function changeIcon(addGuest){
    var iconAdd = document.getElementById('addIcon');
    updateIcon(addGuest,iconAdd);
    
}
function changeIcon2(addGuest){
    var iconAdd = document.getElementById('addIcon2');
    updateIcon(addGuest,iconAdd);
}

function updateIcon(addGuest,iconAdd){
    if(addGuest){
        iconAdd.style.backgroundImage = "url('../Images/remove-guest-icon.svg')";
    }
    else{
        iconAdd.style.backgroundImage = "url('../Images/add-guest-icon.svg')";
    }
}

//form field add guest validation
function showFormField() {
const select = document.getElementById("_PIdropdown");
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
const guestageinput_1 = document.getElementById("guestageInput1");
guestageinput_1.addEventListener("input", restrictToTwoDigits);

function restrictToTwoDigits1() {
  if (guestageinput_1.value.length > 2) {
    guestageinput_1.value = input.value.slice(0, 2);
  }
}
const guestageinput_2 = document.getElementById("guestageInput2");
guestageinput_2.addEventListener("input", restrictToTwoDigits);

function restrictToTwoDigits2() {
  if (guestageinput_2.value.length > 2) {
    guestageinput_2.value = input.value.slice(0, 2);
  }
}

//phone number masking
const phoneInput = document.getElementById('phoneInput');
    phoneInput.addEventListener('input', (event) => {
      let value = event.target.value;
      value = value.replace(/\D/g, ''); // Remove all non-digit characters
      value = value.replace(/^(\d{3})(\d)/g, '$1-$2'); // Add a hyphen after the first 3 digits
      value = value.replace(/-(\d{3})(\d)/, '-$1-$2'); // Add a hyphen after the next 3 digits
      event.target.value = value;
    });

    const phoneInput1= document.getElementById('guestphoneInput1');
    phoneInput1.addEventListener('input', (event) => {
      let value = event.target.value;
      value = value.replace(/\D/g, ''); // Remove all non-digit characters
      value = value.replace(/^(\d{3})(\d)/g, '$1-$2'); // Add a hyphen after the first 3 digits
      value = value.replace(/-(\d{3})(\d)/, '-$1-$2'); // Add a hyphen after the next 3 digits
      event.target.value = value;
    });

    const phoneInput2 = document.getElementById('guestphoneInput2');
    phoneInput2.addEventListener('input', (event) => {
      let value = event.target.value;
      value = value.replace(/\D/g, ''); // Remove all non-digit characters
      value = value.replace(/^(\d{3})(\d)/g, '$1-$2'); // Add a hyphen after the first 3 digits
      value = value.replace(/-(\d{3})(\d)/, '-$1-$2'); // Add a hyphen after the next 3 digits
      event.target.value = value;
    });

//form validation
const form = document.getElementById('form');
const pi_dropdown = document.getElementById('_PIdropdown');
const firstName = document.getElementById('firstNameInput');
const lastName = document.getElementById('lastNameInput');
const age = document.getElementById('ageInput');
const phoneNumber = document.getElementById('phoneInput');
const email = document.getElementById('emailInput');
const confirmEmail = document.getElementById('confirmEmailInput');
const howIHeard = document.getElementById('howIHeard');

const emailInput = document.getElementById('emailInput');
const emailConfirmationInput = document.getElementById('confirmEmailInput');
const ageInput = document.getElementById('ageInput');
const ageErrorTooltip = document.getElementById('age-error-tooltip');
const invalidEmailErrorTooltip = document.getElementById('email-error-invalid-tooltip');
const emailErrorTooltip = document.getElementById('email-error-tooltip');


//guest 1 inputs
const guestfirstName_1 = document.getElementById('guestfirstNameInput1');
const guestlastName_1 = document.getElementById('guestlastNameInput1');
const guestage_1 = document.getElementById('guestageInput1');
const guestphoneNumber_1 = document.getElementById('guestphoneInput1');
const guestemail_1 = document.getElementById('guestemailInput1');
const guestconfirmEmail_1 = document.getElementById('guestconfirmEmailInput1');
const guesthowIHeard_1 = document.getElementById('guestdropdown1');

const g1_emailInput = document.getElementById('guestemailInput1');
const g1_emailConfirmationInput = document.getElementById('guestconfirmEmailInput1');
const g1_ageInput = document.getElementById('guestageInput1');
const g1_ageTooltip = document.getElementById('g1-age-error-tooltip');
const g1_invalidEmailErrorTooltip = document.getElementById('g1-email-error-invalid-tooltip');
const g1_emailErrorTooltip = document.getElementById('g1-email-error-tooltip');

//guest 2 inputs
const guestfirstName_2 = document.getElementById('guestfirstNameInput2');
const guestlastName_2 = document.getElementById('guestlastNameInput2');
const guestage_2= document.getElementById('guestageInput2');
const guestphoneNumber_2 = document.getElementById('guestphoneInput2');
const guestemail_2 = document.getElementById('guestemailInput2');
const guestconfirmEmail_2 = document.getElementById('guestconfirmEmailInput2');
const guesthowIHeard_2 = document.getElementById('guestdropdown2');

const g2_emailInput = document.getElementById('guestemailInput2');
const g2_emailConfirmationInput = document.getElementById('guestconfirmEmailInput2');
const g2_ageInput = document.getElementById('guestageInput2');
const g2_ageTooltip = document.getElementById('g2-age-error-tooltip');
const g2_invalidEmailErrorTooltip = document.getElementById('g2-email-error-invalid-tooltip');
const g2_emailErrorTooltip = document.getElementById('g2-email-error-tooltip');


document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();
    checkInputs();
    
});

function validateAge(ageInput,ageErrorTooltip) {
    const age = parseInt(ageInput.value);
    if (age < 18) {
      ageErrorTooltip.classList.add('show-error');
      setError(ageInput);
      return false;
    } else {
      ageErrorTooltip.classList.remove('show-error');
      removeError(ageInput);
    //   return true;
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }

  function validateEmail(emailInput,emailConfirmationInput,invalidEmailErrorTooltip,emailErrorTooltip) {
    
    if (!isValidEmail(emailInput.value)) {
     invalidEmailErrorTooltip.setAttribute('data-error', 'Error: Invalid email address.');
     invalidEmailErrorTooltip.classList.add('show-error');
     setError(emailInput);
      return false;
    } else if (emailInput.value !== emailConfirmationInput.value) {
      emailErrorTooltip.setAttribute('data-error', 'Error: Email addresses do not match.');
      emailErrorTooltip.classList.add('show-error');
      setError(emailConfirmationInput);
      invalidEmailErrorTooltip.classList.remove('show-error');
      removeError(emailInput);
      return false;
    } else {
      invalidEmailErrorTooltip.classList.remove('show-error');
      removeError(emailInput);
      emailErrorTooltip.classList.remove('show-error');
      removeError(emailConfirmationInput);
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

function ageCheck(age,ageErrorTooltip){
    const ageValue = age.value.trim();
    if (ageValue === '') {
        setError(age);
    } 
    else{
        validateAge(age,ageErrorTooltip);
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

function emailCheck(e_mail,emailInput,emailConfirmationInput,invalidEmailErrorTooltip,emailErrorTooltip){
    const emailValue = e_mail.value.trim();
    if (emailValue === '') {
        setError(e_mail);
    } 
    else{
        validateEmail(emailInput,emailConfirmationInput,invalidEmailErrorTooltip,emailErrorTooltip); 
    }
    }
    

function confirmEmailCheck(emailcheck){
    const confirmEmailValue = emailcheck.value.trim();
    if (confirmEmailValue === '') {
        setError(emailcheck);
    } 
    
    
}

function dropdownCheck(select){
    const selectedOption = select.options[select.selectedIndex].value;
    console.log(selectedOption);

    if(selectedOption==="0"){
        setError(select);
    }
    else{
        removeError(select);
    }
    
}

function piDropdownCheck(select){
    const selectedOption = select.options[select.selectedIndex].value;
    console.log(selectedOption);

    if(selectedOption==="0"){
        setError(select);
    }
    else{
        removeError(select);
    }
    
}

function checkInputs() {
    piDropdownCheck(pi_dropdown)
    firstNameCheck(firstName);
    lastNameCheck(lastName);
    ageCheck(ageInput,ageErrorTooltip);
    phoneNumberCheck(phoneNumber);
    emailCheck(email,emailInput,emailConfirmationInput,invalidEmailErrorTooltip,emailErrorTooltip);
    confirmEmailCheck(confirmEmail);
    dropdownCheck(howIHeard);
    

    if(component.style.display === 'block'){
        firstNameCheck(guestfirstName_1);
        lastNameCheck(guestlastName_1);
        ageCheck(g1_ageInput,g1_ageTooltip);
        phoneNumberCheck(guestphoneNumber_1);
        emailCheck(guestemail_1,g1_emailInput,g1_emailConfirmationInput,g1_invalidEmailErrorTooltip,g1_emailErrorTooltip);
        confirmEmailCheck(guestconfirmEmail_1);
        dropdownCheck(guestdropdown1);

        if(component2.style.display === 'block'){
            firstNameCheck(guestfirstName_2);
            lastNameCheck(guestlastName_2);
            ageCheck(guestage_2,g2_ageTooltip);
            phoneNumberCheck(guestphoneNumber_2);
            emailCheck(guestemail_2,g2_emailInput,g2_emailConfirmationInput,g2_invalidEmailErrorTooltip,g2_emailErrorTooltip);
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

