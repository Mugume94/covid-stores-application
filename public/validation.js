var validate = ()=> {
    var username= document.mydata.username;
    var phone_number= document.mydata.phone_number;
    var email =document.mydata.email;

    //validating username
    // if (username.value.length=="") {
    //     username.style.border = '5px solid green'
    //     alert("username should not be empty")

    // }

    if (username.value.length < 5 || username.value.length > 12) {
        username.style.border = '5px solid red'
        //  alert("username should be between 5 and 12")
        document.getElementsByName("username").innerHTML = "username should be between 5 and 12!"; 

    }
     //creating a value to store regex expression
    var letters = /^[0-9]+$/;

    if (username.value.match(letters)) {
       username.style.border = '1px solid red' 
       alert("username should not be number")
   }
   var phone_no = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (!phone_number.value.match(phone_no)) {
        phone_number.style.border = '2px solid red';
        // alert('invalid phone number');
    }
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.value.match(mail)){
        email.style.border = '2px solid red';
        alert('invalid email address, please check ur email')
    } 

}


    