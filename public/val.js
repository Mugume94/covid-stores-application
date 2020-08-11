var validate = ()=> {
    var item_name= document.product.item_name;
    var make= document.product.make;
    var serial =document.product.serial;

    //validating username
    // if (username.value.length=="") {
    //     username.style.border = '5px solid green'
    //     alert("username should not be empty")

    // }

    if (item_name.value.length < 6 || item_name.value.length > 22) {
        item_name.style.border = '5px solid red'
         alert("Item Name should be between 6 and 22")
        

    }
     //creating a value to store regex expression
    var letters = /^[0-9]+$/;

    if (item_name.value.match(letters)) {
       item_name.style.border = '1px solid red' 
       alert("Item Name should not be numbers")
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
