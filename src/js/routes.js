(function(window, document){
  $.getId('view').router()
    .route('/', 'views/cover_page.html', null, function(){
     showAuthenticationBottons();
    })
    .route('/login', 'views/login.html', 'login', function(){
      library.getId('login-form').noSubmit();
     // showBackButton();
    })
    .route('/signIn', 'views/signIn.html', 'login', function(){
      library.getId('sigIn-form').noSubmit();
    //  showBackButton();
    })
    .route('/home', 'views/home.html', 'login', function(){
      library.getController().observer();
     // showPerfil();
    })
    /*.route('/wall', 'views/wall.html', 'login', function(){
      library.getController().observer();
      showPerfil();
    })*/

})(window, document);