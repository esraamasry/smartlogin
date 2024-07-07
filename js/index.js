var useremail = document.getElementById("useremail");
var userepassword = document.getElementById("userepassword");
var loginbtn = document.getElementById("loginbtn");





function login()
{
    var warningmsg = document.getElementById("warningmsg");
    var incorrectmsg = document.getElementById("incorrectmsg");
    if( (useremail.value == "" && userepassword.value == "") || (useremail.value == "" || userepassword.value == "") )
        {
            warningmsg.classList.remove("d-none");
            
        }
        else
        {
            warningmsg.classList.add("d-none");
            if(localStorage.getItem("userscontainer").includes(useremail.value))
                {
                 
                    window.location.href='home.html';
                    

                }



                else
                {
                    incorrectmsg.classList.remove("d-none");
                }


        }
}

