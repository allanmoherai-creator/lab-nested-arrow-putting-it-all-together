function createLoginTracker(user) {
  //Tracks the number of failed login attempts
  let failedAttempts = 0;

  //Nested function that handles each login attempt

  function login(password) {
    //check whether the entered password is correct
    if (password === user.password){
      return "Login successful";
    }
    
    //Increase failed logins
    failedAttempts++;
    
    //Allow upto 3 failed attempt
    if (failedAttempts <= 3) {
      return `Attempt ${failedAttempts}: Login failed`;
    }
    
    //Lock the account after 3 failed attempts
    return "Account locked due to too many failed login attempts";
  }
  
  //Return the nested function
  return login;
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};