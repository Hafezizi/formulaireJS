/*function Valid() {
    if(document.getElementById('myField').value ==''){
        //document.getElementById('myFieldError').innerHTML = 'le champ ne peut pas etre vide ';
        //alert('le champ ne peut pas etre vide');
        return false;
    } else{
        document.getElementById('myFieldError').innerHTML = '';
        alert('le formulaire ne peut pa etre envoye');
        return true;
    }

}*/
/* let form=document.getElementById('form');
let username=document.getElementById('username');
let email=document.getElementById('email');
let password=document.getElementById('password');
let password2=document.getElementById('password2');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    validateInputs();
});

let SetError=(element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.text = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

let SetSuccess=element =>{
    let inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector('.error');

    errorDisplay.text = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

    let isValidEmail = email => {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

let validateInputs = () => {
   let usernameValue = username.value.trim();
   let emailValue    = email.value.trim();
   let passwordValue = password.value.trim();
   let password2Value = password2.value.trim();

    if (usernameValue === '') {
        SetError(username,'Username is required');
    }  else {
            SetSuccess();
    }

    if(emailValue === ''){
        SetError(email,'Email is required');
    }   else if (!isValidEmail(emailValue)){  
        SetSuccess(email,'Provide a valid email address');
    } else {
        SetSuccess(email);
    }

    if(passwordValue=== ''){
        SetError(password,'Password is required');
    }else if (passwordValue.length < 8){
        SetError(password, 'Password must be at least 8 character.')
    } else {
        SetSuccess(password);
    }

    if (password2 === '' ) {
        SetError(password2,'please confirm your password');
    }else if(password2Value !== passwordValue)  {
            SetError(password2,"Passwords doesn't match");
    }else {
        SetSuccess(password2);
    }
};  */


function validate(){
    if(document.myForm.Name.value == ""){
        alert("Veuillez entrer votre nom d'utilisateur");
        
        document.myForm.Name.style.border="2px solid red";
        document.myForm.Name.focus();
        return false;
    }

    if(document.myForm.Email.value == ""){
        alert("Veuillez entrer votre email");
        document.myForm.Email.style.border ="2px solid red";
        document.myForm.Email.focus();
        return false;
    }

    if(document.myForm.password.value == "" || document.myForm.password.value.length <=4){
        alert("veuillez saisir le mot de passe");
        document.myForm.password.style.border ="2px solid red";
        document.myForm.password.focus();
        return false;
    }
    if(document.myForm.repassword.value == "" || document.myForm.repassword.value.length <=4){
        alert("Veuillez resaisir le mot de passe");
        document.myForm.repassword.style.border ="2px solid red";
        document.myForm.repassword.focus();
        return false;
    }
    return (alert('success'));    

    
}
