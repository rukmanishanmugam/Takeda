   
const component = document.getElementById('guestForm');
const component2 = document.getElementById('guestForm2'); 


document.getElementById('addIcon').addEventListener('click', function(){
    dynamicGuest();
});

document.getElementById('addIcon2').addEventListener('click', function(){
    dynamicGuest2();
});

function dynamicGuest(){
    const component = document.getElementById('guestForm');
    const component2 = document.getElementById('guestForm2'); 
    console.log(component.style.display);
    
    if(component.style.display == 'none'){
        component.style.display = 'block';
        document.getElementById("guest1").textContent="Guest 1";
        document.getElementById("guest1_add").textContent="Remove Guest";
        updateGuestFormValue1();
        changeIcon(true);
        

    }
    else{
        if(component2.style.display == 'block'){
            updateguestValue();
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
}
function dynamicGuest2(){
    const component2 = document.getElementById('guestForm2'); 
    if(component2.style.display == 'none'){
        component2.style.display = 'block';
        document.getElementById("guest2").textContent="Guest 2";
        document.getElementById("guest2_add").textContent="Remove Guest"; 
        updateGuestFormValue2();
        changeIcon2(true); 
    }
    else{
        component2.style.display = 'none';
        document.getElementById("guest2").textContent="You may add upto 1 guest";
        document.getElementById("guest2_add").textContent="Add Guest";
        changeIcon2(false); 
    }
}
function updateguestValue(){
    guestfirstName_1.value = guestfirstName_2.value;
    guestfirstName_2.value= "";
    guestlastName_1.value = guestlastName_2.value;
    guestlastName_2.value ="";
    guestage_1.value = guestage_2.value;
    guestage_2.value ="";
    guestemail_1.value = guestemail_2.value;
    guestemail_2.value="";
    guestconfirmEmail_1.value = guestconfirmEmail_2.value;
    guestconfirmEmail_2.value="";
    guestphoneNumber_1.value = guestphoneNumber_2.value;
    guestphoneNumber_2.value="";
}

function updateGuestFormValue1(){
    guestfirstName_1.value="";
    guestlastName_1.value="";
    guestage_1.value="";
    guestemail_1.value="";
    guestconfirmEmail_1.value="";
    guestphoneNumber_1.value="";
}

function updateGuestFormValue2(){
    guestfirstName_2.value="";
    guestlastName_2.value="";
    guestage_2.value="";
    guestemail_2.value="";
    guestconfirmEmail_2.value="";
    guestphoneNumber_2.value="";
}


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

//////////

const dropdown = document.getElementById('dropdownValue');
const dropdownButton = document.getElementById('inputFocusOut');
const dropdowninfo = document.getElementById('dropdown-info');
const dropdownButtoninfo = document.getElementById('inputFocusOut-info');

document.addEventListener("click", (event) => 
{  
    const isClickInsideDropdown = dropdown.contains(event.target); 
    const isClickOnDropdownButton = dropdownButton.contains(event.target); 
    if (!isClickInsideDropdown && !isClickOnDropdownButton && dropdown.style.display === "block") 
    { 
        toggleDropdown();
    } 

    const isClickInsideDropdownInfo = dropdowninfo.contains(event.target); 
    const isClickOnDropdownButtonInfo = dropdownButtoninfo.contains(event.target); 
    if (!isClickInsideDropdownInfo && !isClickOnDropdownButtonInfo && dropdowninfo.style.display === "block") 
    { 
        toggleDropdownInfo();
    } 

});

///////////////////////////////////////
function toggleDropdownInfo() {
    const dropdown = document.getElementById('dropdown-info');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }
  function handleSelectInfo(textValueInfo) {
    const input = document.getElementById('custom-input-info');
    input.value = textValueInfo;
    toggleDropdownInfo();
  }

////////////////////
 
function toggleDropdown() {
    const dropdown = document.getElementById('dropdownValue');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }
  
  function handleSelect(textValue) {
    const selectedOption = document.getElementById('custom-input');
    selectedOption.value = textValue;
    console.log(textValue);

    if(textValue==="a carepartner for someone with PI"){
     document.getElementById("addGuest").style.display= 'flex';
        document.getElementById("carePartnerForm").style.display= 'block';
        if(document.getElementById("guestForm").style.display == 'block'){
            
            if(document.getElementById("guestForm2").style.display == 'block'){
                dynamicGuest2();
            }
            dynamicGuest();
        }
        
    }
    else{
     document.getElementById("carePartnerForm").style.display= 'none';  
    }
    toggleDropdown();
  
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
guestageinput_1.addEventListener("input", restrictToTwoDigits1);

function restrictToTwoDigits1() {
  if (guestageinput_1.value.length > 2) {
    guestageinput_1.value = guestageinput_1.value.slice(0, 2);
  }
}
const guestageinput_2 = document.getElementById("guestageInput2");
guestageinput_2.addEventListener("input", restrictToTwoDigits2);

function restrictToTwoDigits2() {
  if (guestageinput_2.value.length > 2) {
    guestageinput_2.value = guestageinput_2.value.slice(0, 2);
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
const pi_dropdown = document.getElementById('custom-input');
const firstName = document.getElementById('firstNameInput');
const lastName = document.getElementById('lastNameInput');
const age = document.getElementById('ageInput');
const phoneNumber = document.getElementById('phoneInput');
const email = document.getElementById('emailInput');
const confirmEmail = document.getElementById('confirmEmailInput');
const howIHeard = document.getElementById('custom-input-info');

const emailInput = document.getElementById('emailInput');
const emailConfirmationInput = document.getElementById('confirmEmailInput');
const ageInput = document.getElementById('ageInput');

const ageErrorTooltip = document.getElementById('age-error-tooltip');
const invalidEmailErrorTooltip = document.getElementById('email-error-invalid-tooltip');
const emailErrorTooltip = document.getElementById('email-error-tooltip');
const phoneErrorTooltip = document.getElementById('phone-error-tooltip');



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
const g1_phoneErrorTooltip = document.getElementById('g1-phone-error-tooltip');

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
const g2_phoneErrorTooltip = document.getElementById('g2-phone-error-tooltip');


document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();
    checkInputs();
    
});

/// Validating age <18
function validateAge(ageInput,ageErrorTooltip) {
    const age = parseInt(ageInput.value);
    if (age < 18) {
      ageErrorTooltip.classList.add('show-error');
      setError(ageInput);
      return false;
    } else {
      ageErrorTooltip.classList.remove('show-error');
      removeError(ageInput);
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }

  function validateEmail(emailInput,emailConfirmationInput,invalidEmailErrorTooltip,emailErrorTooltip) {
    
    if (!isValidEmail(emailInput.value)) {
     invalidEmailErrorTooltip.setAttribute('data-error', 'Invalid email address.');
     invalidEmailErrorTooltip.classList.add('show-error');
     setError(emailInput);
      return false;
    } else if (emailInput.value !== emailConfirmationInput.value) {
      emailErrorTooltip.setAttribute('data-error', 'Email address do not match.');
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
        ageErrorTooltip.classList.remove('show-error');
    } 
    else{
        validateAge(age,ageErrorTooltip);
    }
}

function phoneNumberCheck(pNumber,phoneErrorTooltip){
    
    const phoneNumberValue = pNumber.value.trim();
    if (phoneNumberValue === '') {
        setError(pNumber);
        phoneErrorTooltip.classList.remove('show-error');
    }
    else if(phoneNumberValue.toString().length != 12){
        setError(pNumber);
        
        phoneErrorTooltip.classList.add('show-error');
    }
    else{
        phoneErrorTooltip.classList.remove('show-error');
        removeError(pNumber);
    }
}

function emailCheck(e_mail,emailInput,emailConfirmationInput,invalidEmailErrorTooltip,emailErrorTooltip){
    const emailValue = e_mail.value.trim();
    if (emailValue === '') {
        setError(e_mail);
        invalidEmailErrorTooltip.classList.remove('show-error');
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
    const dropdown_info = select.value.trim();
    if(dropdown_info==''){
        setError(select);
    }
    else{
        removeError(select);
    }
    
}

function piDropdownCheck(select){
    const pi_dropdown_info = select.value.trim();
    if(pi_dropdown_info ==''){
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
    phoneNumberCheck(phoneNumber,phoneErrorTooltip);
    emailCheck(email,emailInput,emailConfirmationInput,invalidEmailErrorTooltip,emailErrorTooltip);
    confirmEmailCheck(confirmEmail);
    dropdownCheck(howIHeard);
    

    if(component.style.display === 'block'){
        firstNameCheck(guestfirstName_1);
        lastNameCheck(guestlastName_1);
        ageCheck(g1_ageInput,g1_ageTooltip);
        phoneNumberCheck(guestphoneNumber_1,g1_phoneErrorTooltip);
        emailCheck(guestemail_1,g1_emailInput,g1_emailConfirmationInput,g1_invalidEmailErrorTooltip,g1_emailErrorTooltip);
        confirmEmailCheck(guestconfirmEmail_1);
       

        if(component2.style.display === 'block'){
            firstNameCheck(guestfirstName_2);
            lastNameCheck(guestlastName_2);
            ageCheck(guestage_2,g2_ageTooltip);
            phoneNumberCheck(guestphoneNumber_2,g2_phoneErrorTooltip);
            emailCheck(guestemail_2,g2_emailInput,g2_emailConfirmationInput,g2_invalidEmailErrorTooltip,g2_emailErrorTooltip);
            confirmEmailCheck(guestconfirmEmail_2);
            
        }
    }
    var parentForm = document.getElementById("form"); 
    if (!parentForm.querySelector(".inputerror")) { 
        document.getElementById('error-message').style.display='none';
        document.getElementById("form").reset();
        window.location.href="../thanks_Medicare.html"
        }
}

function setError(inputControl){

        document.getElementById('error-message').style.display='inline-block';
        document.getElementById('errortextField').style.display='inline';
        document.getElementById('errortextField').innerHTML='Please fill out every field that is marked with an asterisk (*).';
        inputControl.className= 'inputerror';
}
function removeError(inputControl){
     inputControl.className= 'input';
}

