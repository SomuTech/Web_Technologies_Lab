function validateForm()
{
    var exp = /^[A-Za-z]+$/; 
    if(form.fname.value==null || form.fname.value==" ")
        alert("First Name can't be Empty!");
    else if(! form.fname.value.match(exp))
        alert("First Name must be in Alphabets");

    if(form.lname.value==null || form.lname.value==" ")
        alert("Lat Name can't be Empty!");
    else if(! form.lname.value.match(exp))
        alert("Last Name must be in Alphabets");

    var exp = /^[A-Za-z0-9_]+$/; 
    if(form.username.value==null || form.username.value==" ")
        alert("Username can't be Empty!");
    else if(! form.username.value.match(exp))
        alert("UserName should be in Alphabets, Numbers and _");

            //password validation
    if(form.psd1.value != "" && form.psd1.value == form.psd2.value) {
        const exp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/
        if(!exp.test(form.psd1.value)){
            alert("password must be a minimum of 8 characters including number, Upper, Lower And one special character");
            return false;
        }
    }
    else{
        alert("Error: Please check that you've entered and confirmed your password!");
        form.pwd1.focus();
        return false;
    }
            //end
    if(form.pcode.value.length !=6){
        alert("pincode must be 6 digits");
        return false;
    }

    if(form.mobile.value.length !=10){
        alert("mobile number must be 10 digits");
        return false;
    }
}
