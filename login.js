document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
   
    if (email === 'example@example.com' && password === 'password') {
     
      alert('Logged in successfully!');
      
    } else {
      
      alert('Invalid email or password. Please try again.');
    }
  });
  