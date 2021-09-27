
let fnameNode = document.getElementById("fname");
let spanNode1 = document.getElementById("err1");

function validate1(){
    let fname = fnameNode.value;
    if(fname == ''){
       
        alert("this field required");
         }
    else if(fname.includes(' ')){
        alert("space are not allowed");
       }
    else
        fnameNode.style.border = "3px solid green";
}


let lnameNode = document.getElementById("lname");
//let spanNode1 = document.getElementById("err1");
function validate2(){
    // spanNode1.innerHTML="";
    let lname = lnameNode.value;
    if(lname == ''){
        // spanNode1.innerHTML="This Field is Required";
        alert("this field required");
        // fnameNode.style.border = "3px solid red";
    }
    else if(lname.includes(' ')){
        alert("space are not allowed");
        //spanNode1.innerHTML="Space not allowed";
        //fnameNode.style.border = "3px solid red";
    }
    else
        lnameNode.style.border = "3px solid green";
}


let mobileNode = document.getElementById("mobileno");
//let spanNode7 = document.getElementById("err7");
function validate3(){
  //  spanNode7.innerHTML = "";
    let mobileno = mobileNode.value;
    if(mobileno == ''){
        alert("this field required");
        //spanNode7.innerHTML="This Field is Required";
       // mobileNode.style.border = "3px solid red";
    }
    else if(mobileno.length < 10 || mobileno.length > 10){
        alert("Please enter only 10 digit number");
        //spanNode7.innerHTML="Please Enter only 10 digit number";
        //mobileNode.style.border = "3px solid red";
    }
    else{
        mobileNode.style.border = "3px solid green";
    }
}


let emailNode = document.getElementById("mailId");
//let spanNode5 = document.getElementById("err5");
function validate4(){
  //  spanNode5.innerHTML ="";
    let emailID = emailNode.value;
    let subs = emailID.substring(emailID.indexOf('@')+1);
    if(emailID == ''){
        alert("This field is required");
      //  spanNode5.innerHTML="This Field is Required";
       // emailNode.style.border = "3px solid red";
    }
    else if(!emailID.includes('@') || subs==''){
        alert("Invalid Email Id");
       // spanNode5.innerHTML="Invalid Email ID";
       // emailNode.style.border = "3px solid red";
    }
    else{
        emailNode.style.border = "3px solid green";
    }
}


let passNode = document.getElementById("pass");
let spanNode3 = document.getElementById("err3");
function validate5(){
   // spanNode3.innerHTML ="";
    let password = passNode.value;
    var strongReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])")
    if(password == ''){
        alert("this field is required");
       // spanNode3.innerHTML="This Field is Required";
       // passNode.style.border = "3px solid red";
    }
    else if(password.length < 4 || password.length > 8){
        alert("Password should be 4-8 character long");
       // spanNode3.innerHTML="Password should be 4-8 character long";
       // passNode.style.border = "3px solid red";
    }
    else if(strongReg.test(password)==false){
        alert("Password should be alphanumeric with special expression");
        //spanNode3.innerHTML="Password should be alphanumeric with special expression";
        //passNode.style.border = "3px solid red";
    }
    else{
        passNode.style.border = "3px solid green";
    }
}



function validateForm(){
    
    let v1 =  validate1();
    let v2 =  validate2();
    let v3 =  validate3();
    let v4 =  validate4();
    let v5 =  validate5();
  
  
  
       return (v1 && v2 && v3 && v4 && v5);
  }