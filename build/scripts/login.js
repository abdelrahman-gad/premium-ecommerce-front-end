$('.login-nav .login-nav-item .login-nav-link').click(function(e){
    e.preventDefault();

    if($(this).hasClass('signin-link')){
        $('.login-nav .login-nav-item .login-nav-link').removeClass('active-link');
        $(this).addClass('active-link');
        $('.login-content .login-content-form').removeClass('active');
        $('.login-content .signin').addClass('active');

    }

    if($(this).hasClass('register-link')){
        //console.log('register');
        $('.login-nav .login-nav-item .login-nav-link').removeClass('active-link');
        $(this).addClass('active-link');
        $('.login-content .login-content-form').removeClass('active');
        $('.login-content .register').addClass('active');

    }
});