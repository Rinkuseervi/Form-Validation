
function isEmail(email) {
var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
return regex.test(email);
}
$("#submitButton").click(function(){
    var errorMessage="";
    var fieldsMissing="";
    if($("#email").val()==""){
        fieldsMissing+="<br>Email";
    }
    if($("#phone").val()==""){
        fieldsMissing+="<br>Telephone";
    }
    if($("#password").val()==""){
        fieldsMissing+="<br>password";
    }
    if($("#passwordconfirm").val()==""){
        fieldsMissing+="<br>Confirm Password";
    }
    if(fieldsMissing!=""){
        errorMessage+="<p> The following field(s) are missing:</p>"+fieldsMissing;
    }
    if(isEmail($("#email").val())==false){
        errorMessage+="<p> your email address is not valid:</p>";
    }
    if($("#phone").val()==false){
        errorMessage+="<p> your phone number is not numeric:</p>";
    }
    if($("#password").val()!= $("#passwordconfirm").val()){
        errorMessage+="<p> your password don't match:</p>";
    }
    if(errorMessage!=""){
        $("#errorMessage").html(errorMessage)

    }
    else{
        $("#successMessage").show();
        $("#errorMessage").hide();
    }
});

