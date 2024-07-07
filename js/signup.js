var useremail = document.getElementById("useremail");
var userepassword = document.getElementById("userepassword");
var username = document.getElementById("username");






var usersList=[];
localStorage.getItem("userscontainer");

function signup()
{
    var warningmsg = document.getElementById("warningmsg");
    var successmsg = document.getElementById("successmsg");
    var existmsg = document.getElementById("existmsg");

    if( (useremail.value == "" && userepassword.value == "" && username.value=="") || (useremail.value == "" || userepassword.value == ""|| username.value=="") )
        {
            warningmsg.classList.remove("d-none");
        }
    
        
    else
    {
        warningmsg.classList.add("d-none");

        var users = 
        {
           name: username.value,
            email: useremail.value,
            password: userepassword.value
        }

        usersList.push(users);

        if(localStorage.getItem("userscontainer").includes(useremail.value))
            {

                existmsg.classList.remove("d-none");
                successmsg.classList.add("d-none");

                return false

            }
            else
            {

                localStorage.setItem("userscontainer" , JSON.stringify(usersList));
                successmsg.classList.remove("d-none");
                existmsg.classList.add("d-none");                
                return true

            }


    }


}

