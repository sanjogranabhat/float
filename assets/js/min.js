function formValidation() {
    var n= document.myForm.name.value;
    var e= document.myForm.name.value;
    var p= document.myForm.email.value;

    if(document.myForm.name.value==""){
        document.getElementById("nMessage").innerHTML="name is required";
        return false;

    }
    if(document.myForm.email.value==""){
        document.getElementById("eMessage").innerHTML="email is required";
        return false;

    }
    if(document.myForm.phone.value==""){
        document.getElementById("pMessage").innerHTML="phone is required";
        return false;

    }
    if (isNaN(document.myForm.phone.value)){
        document.getElementById("pMessage").innerHTML="phonenumber must be numeric";
        return false;

    }
    if ((document.myForm.phone.value.length !=10)){
        document.getElementById("pMessage").innerHTML="phonenumber must be 10 digit";
        return false;

    }
    if(document.myForm.pass.value==""){
        document.getElementById("passMessage").innerHTML="password is required";
        return false;

    }
    if(document.myForm.cpass.value==""){
        document.getElementById("cpassMessage").innerHTML="This feild cannot be empty";
        return false;

    }
    if(document.myForm.pass.value.length !=document.myForm.cpass.value.length){
        document.getElementById("cpassMessage").innerHTML="Password doesnot match";
        return false;

    }

    if(document.myForm.cpass.value.length<8){
        document.getElementById("cpassMessage").innerHTML="Password must be 8 characters";
        return false;

    }

    return true;

}