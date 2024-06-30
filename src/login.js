if (document.getElementById('login-form')){
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (this.checkValidity() === false) {
          event.stopPropagation();
        } else {
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          console.log('Email:', email);
          console.log('Mot de passe:', password);
        }
        this.classList.add('was-validated');
    });
}
  