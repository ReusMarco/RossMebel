$(document).ready(function(){
	var admin = 'a';
	var pass_admin = 's';

	$('.btn').click(function(){
		var usr = $('#username').val();
		var psw = $('#password').val();
		if (admin === usr){
			if (pass_admin === psw){
				window.open("www.youtube.com","_self")
				alert(usr + ' ' + psw)
			}
			else{
				alert('Your password is not correct! Try again!')
			}
		}
		else{
			alert('Your username is not correct! Try again!')
		}
	});
});