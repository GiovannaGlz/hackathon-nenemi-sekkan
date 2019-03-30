(function(window, document) {
   // let isEditable = false;
    
    library.controller('login', {
  
      showFormLogin: function() {
        const loginSection = library.get('login-section');
        loginSection.style.display = "block";
      },
      showFormSingUp: function() {
        const registerSection = library.get('register-section');
        registerSection.style.display = "block";
      },

      signIn: function(form) {
        const email = form.email_input.value;
        const password = form.password.value;
        const passwordConfirm = form.confirm_password.value;
  
        document.getElementById("alert-password").style.display = "none";
        document.getElementById("alert-confirm-pass").style.display = "none";
        document.getElementById("alert-email").style.display = "none"; 
  
  
        const checkPasswords = window.equality.checkPasswords(password, passwordConfirm);
        if (checkPasswords) {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function() {
              window.location.hash = '#/home'; /*vista de acceso a la pag principal*/
             // result = window.redSocial.checkEmail()
            //  return result
            })
            .then(function(response) {
  
              response = response.json;
  
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              switch (errorCode) {
                case 'auth/email-already-in-use':
                  document.getElementById("alert-email").style.display = "block";
                  document.getElementById("email_text").innerHTML = 'this email already exist';
                  break;
                case 'auth/invalid-email':
                  document.getElementById("alert-email").style.display = "block";
                  document.getElementById("email_text").innerHTML = 'El correo electrónico es invalido';
                  break;
                default:
                  break;
              }
            });
        }/*cierre de if*/
      },
  
      logIn: function(form) {
  
        const emailSingIn = form.email_sing_in.value;
        const passwordSingIn = form.password_sing_in.value;
  
        firebase.auth().signInWithEmailAndPassword(emailSingIn, passwordSingIn)
          .then(function() {
  
            let userSigIn = window.equality.obtainUser(); /*cambier wiondow*/
            //if (userSigIn.emailVerified) {
              window.location.hash = '#/home'; /*ingreso al acceso de menu*/
           // } else {
            window.equality.signOut(); /*cambier wiondow*/
            //  alert('Favor de ir a tu correo y validar el email que registraste');
  
           // }
          })
          .catch(function(error) {
            //Handle Erros here.
            const errorCode = error.code;
            const errorMessages = error.messages;
          });
      },
  
      observer: function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            console.log('hay usuario')
            if(location.href.includes('editprofile')){ /*cambiar window*/
              const postButton = library.get('add-btn');
            //  library.getController().printData();
              var displayName = user.displayName;
              if (displayName == null) {
                displayName = user.email;
              }
  
            /*  var photoURL = 'img/profile.jpg';
              if (user.photoURL != null) {
                photoURL = user.photoURL;
              }*/
  
  
             // const photoDefault = library.get('cliente-photo');
              const userNameField = library.get('user-name');
              //photoDefault.setAttribute("src", photoURL);
              userNameField.value = displayName;
  
              /*postButton.addEventListener('click', () => {
                library.getController().addPost();
                })
  
            }else if(location.href.includes('wall')){
              library.getController().printWall();
            }
          } else {
            window.location.hash = '#/';*/
          }
          }
        });
      },
  
  
     
  
     
    });
  })(window, document);
  