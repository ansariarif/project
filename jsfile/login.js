
let fnameNode = document.getElementById("fname");
let spanNode1 = document.getElementById("err1");
function validate1(){
    spanNode1.innerHTML="";
    let fname = fnameNode.value;
    if(fname == ''){
        spanNode1.innerHTML="This Field is Required";
        fnameNode.style.border = "3px solid red";
    }
    else if(fname.includes(' ')){
        spanNode1.innerHTML="Space not allowed";
        fnameNode.style.border = "3px solid red";
    }
    else
        fnameNode.style.border = "3px solid green";
}


let passNode = document.getElementById("pass");
let spanNode3 = document.getElementById("err2");
function validate2(){
    spanNode3.innerHTML ="";
    let password = passNode.value;
    var strongReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])")
    if(password == ''){
        spanNode3.innerHTML="This Field is Required";
        passNode.style.border = "3px solid red";
    }
    else if(password.length < 4 || password.length > 8){
        spanNode3.innerHTML="Password should be 4-8 character long";
        passNode.style.border = "3px solid red";
    }
    else if(strongReg.test(password)==false){
        spanNode3.innerHTML="Password should be alphanumeric with special expression";
        passNode.style.border = "3px solid red";
    }
    else{
        passNode.style.border = "3px solid green";
    }
}
