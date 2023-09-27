
let Result = document.getElementById("result");
let SubmitBtn = document.getElementById("submit-btn");

SubmitBtn.addEventListener('click', function () {
    let PhoneNumber = document.getElementById("phonenum").value;
    if (PhoneNumber.length ==10) {
            if(PhoneNumber.charAt(0)==6|| PhoneNumber.charAt(0)==7|| PhoneNumber.charAt(0)==8|| PhoneNumber.charAt(0)==9){
                Result.innerHTML="your mobile number is successfully verified"
                Result.style.color="green";
               
            }
            else{
                Result.innerHTML="Enter valid mobile number"
                Result.style.color="red";
            }
        }
    else {
        Result.innerHTML = "Enter 10 digit number";
        Result.style.color="red";
    }
});
