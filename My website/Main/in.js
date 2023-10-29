function verify(){
     const a = document.getElementById("address");
     const b = document.getElementById("code");
    if(a.value == ''){
        document.getElementById("mail").innerHTML = "E-mail is Empty."
    }
    else if(a.value.length < 12){
        document.getElementById("mail").innerHTML = "E-mail is required min 12 Char."
    }
    else{
        document.getElementById("mail").innerHTML = " "
    }

    if(b.value == ''){
        document.getElementById("pass").innerHTML = "Password is Empty."
    }
    else if(b.value.length < 8){
        document.getElementById("pass").innerHTML = "Password is required min 8 Char"
    }
    else{
        document.getElementById("pass").innerHTML = ""
    }
     
    console.log("E-mail is"+" : "+ a.value);
    console.log("Password is"+" : "+ b.value);
    
    document.getElementById("address").value = '';
    document.getElementById("code").value = '';
}