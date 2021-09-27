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