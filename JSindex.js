function validName(){
    let uName=document.getElementById('username').value;
        if (uName!=null && uName==""){
            alert("Enter correct name");
            return false;
        }
        
    let psw=document.getElementById('psw').value;    
        if(psw != null && psw =="") {
            alert('password not null.');
            return false;
        }
        return true;	
    }
    
function checkPwd() {
    let str = document.getElementById('psw').value;
    let hasLowercase = /[a-z]+/.test(str);
    let hasUppercase = /[A-Z]+/.test(str);
    let hasNumber = /[0-9]+/.test(str);
        if (hasLowercase && hasUppercase && hasNumber && String.length>=8) {
            return true;
        } else {
        if(hasLowercase===false) {
                alert('need lowercase');
            }
        if(hasUppercase===false) {
                alert('need uppercase');
            }
        if(hasNumber ===false) {
                alert('need number...');
            }
        if(str.length<8){
                alert('need 8 characters...');
            }
            
            return false;
        } 
            
    }
   

function checkEmail(){
    let newEmail = document.getElementById('useremail').value;
    let userEmail = newEmail.indexOf("@");
        if(userEmail !== newEmail)
        {alert ('use correct E-mail'); return false;}
        
}

function checkDob(){
     curDate = new Date();
    let newDob= new Date(document.regisform.userdob.value);
        if(newDob > curDate)
        {alert('You are not exist yet!'); return false;}
}


function checkMob(){
    let newMob = document.getElementById('usermob').value;
    if(newMob.length==12){return true}
    else{alert("Check your mobile numers"); return false;}
}
   


  






























