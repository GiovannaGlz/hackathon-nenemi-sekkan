const loginButton = $.get('button-login');
const signInButton = $.get('button-sigIn');
const backButton = $.get('button-back');
/*const searchButton = $.get('search-button');
const searchButton = $.get('search-btn');*/

const showAuthenticationBottons = ()=>{
  signInButton.style.display = 'block';
  loginButton.style.display = 'block';
  backButton.style.display = 'none';
 // searchButton.style.display = 'none';
//  searchButton.style.display= 'none';
}

const showBackButton = () => {
  loginButton.style.display = 'none';
  signInButton.style.display = 'none';
  backButton.style.display = 'block';
 // searchButton.style.display = 'none';
//searchButton.style.display= 'none';
}

const showPerfil = () => {
  loginButton.style.display = 'none';
  signInButton.style.display = 'none';
  backButton.style.display = 'none';
  //searchButton.style.display = 'block';
  //searchButton.style.display= 'block';
}