if (document.getElementById('inscription-form')){
  document.getElementById('inscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (this.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      console.log('Prénom:', firstName);
      console.log('Nom:', lastName);
      console.log('Email:', email);
      console.log('Mot de passe:', password);
    }
  
    this.classList.add('was-validated');
  });
}
