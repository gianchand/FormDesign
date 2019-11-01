
	var email_ptrn=/^[A-Za-z._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
function validate(){
	var f_name=document.frm.fname.value;
	var l_name=document.frm.lname.value;
	var u_pass=document.frm.pass.value;
	var u_email=document.frm.uemail.value;
	if(f_name==""){
		document.getElementById("ferror").innerHTML="*First Name cannot be empty";
		return false;
	}
	if(l_name==""){
		document.getElementById("lerror").innerHTML="*Last Name cannot be empty";
		return false;
	}
	if(u_pass==""){
		document.getElementById("passerror").innerHTML="*Password cannot be empty";
		return false;
	}
		
	if(email_ptrn.test(u_email)){
		
		return true;
	}else{
		document.getElementById("eerror").innerHTML="* Look Like this is not an email";
		return false;
	}
}