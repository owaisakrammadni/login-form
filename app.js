let fullNames = [];
let emailAddresses = [];
let passwordSign = [];

function signUpForm(){
    let names = document.getElementById("names").value;
    // names = names.toLowerCase();
    fullNames.push(names);
    
    let emails = document.getElementById("emails").value;
    emails = emails.toLowerCase();
    emailAddresses.push(emails);
    let passwords = document.getElementById("passwords").value;
    // passwords = passwords.length;
    passwordSign.push(passwords);

    console.log(fullNames);
    console.log(emailAddresses);
    console.log(passwordSign);
}

function LoginForm(){
    let loginEmail = document.getElementById("loginEmail").value;
    let loginPass = document.getElementById("loginPass").value;


    if (emailAddresses === loginEmail && passwordSign === loginPass ){
        // window.location.href="profile.html"
        window.open("profile.html");
    }
    else{
        alert("Please input correct information ")
    }
}














 // let newNames = names.length;
    // for (var i = 0; i < newNames; i++){
    //     if(newNames.slice(i, i + 2) === "  ") {
    //         alert("No double spaces");
    //         break;
    //     }
    // }
