var login_validate = document.querySelector(".login_validate");
var error = document.querySelector(".error")
//inputs
valid_email = (e)=>{
    if(e.target.value === ""){
error.value = "Email Is empty"
    }
}