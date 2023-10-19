//Given stored username and password and input username and password, Print if the user can login or not.
//signup
let credential_username = "Bhumit_cap06-028";
let credential_password = "Lemonade";

//login
let username = "Bhumit_cap06-028";
let password = "Lemonade";

if(credential_username == username)
{
  if(credential_password == password)
  {
    console.log("logged in successfully")
  }
  else
  {
    console.log("error your password didn't matched")
  }
}

else
{
  console.log("error your username didn't matched")
}