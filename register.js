document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var companyName = document.getElementById('companyName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
   
    var user = {
      companyName: companyName,
      email: email,
      password: password
    };
    
    
    
    alert('Registration successful! You can now log in with your credentials.');
    
  });
  