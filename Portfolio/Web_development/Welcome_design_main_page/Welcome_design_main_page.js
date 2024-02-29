setTimeout(delayFunction, 7000);

    var delay_Cafe_page = document.getElementById('Cafe_page');
    var delay_login_flex = document.getElementById('login_flex');
        
    function delayFunction() {
        alert('Login Required!');
        delay_Cafe_page.style.display='none'
        delay_login_flex.style.display='block'

    }

      var button_1 = document.getElementById("Show_menu_1");
      var menu_1 = document.getElementById("food-menu_1");
        
      var button_2 = document.getElementById("Show_menu_2");
      var menu_2 = document.getElementById("food-menu_2");
      
      var button_3 = document.getElementById("Show_menu_3");
      var menu_3 = document.getElementById("food-menu_3");

      button_1.addEventListener("click", function() {

      if (menu_1.style.display === "none") {
          menu_2.style.display = "none"
        menu_3.style.display = "none"
        menu_1.style.display = "block";
      } else {
        menu_1.style.display = "none";  
    }
    
      });

      button_2.addEventListener("click", function() {
          
      if (menu_2.style.display === "none") {
        menu_1.style.display = "none"
        menu_3.style.display = "none"
        menu_2.style.display = "block";
      } else {
        menu_2.style.display = "none";  
      }

      });
      button_3.addEventListener("click", function() {

      if (menu_3.style.display === "none") {
        menu_1.style.display = "none"
        menu_2.style.display = "none"
        menu_3.style.display = "block";
      } else {
        menu_3.style.display = "none";  
      }

      });

      function Form(formType) {
    var loginForm = document.getElementById('loginForm');
    var signupForm = document.getElementById('signupForm');
  
    if (formType === 'login') {
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
    } else if (formType === 'signup') {
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
    }
  }
  
  var newUsername;
  var newPassword;

  function signup(event) {
    event.preventDefault();
  
    newUsername = document.getElementById('newUsername').value;
    newPassword = document.getElementById('newPassword').value;
  
    // Add your signup logic here
    // For simplicity, you can just log the new user in
    alert('Sign up successful! Logging in as ' + newUsername);
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
  }


  function login(event) {
  event.preventDefault();
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === newUsername && password === newPassword) {
    alert('Logged in successfully');
    
    document.getElementById('login_flex').style.display = 'none';
    
    document.getElementById('Cafe_page').style.display = 'block';

  } else {
    alert('Invalid username or password. Please try again.'); 
  }
}
  

function sign_in_login(){


    document.getElementById('Cafe_page').style.display = 'none';
    
    document.getElementById('login_flex').style.display = 'block';    
}
