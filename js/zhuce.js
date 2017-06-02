$(function(){

	var $user = $('#user');
	
	var $pass = $('#pass');

	var $nopass = $('#nopass');

	var $phone = $('#phone');

	var $span = $('#span');

	var $but = $('#button');
	
	var flag = false;

	var pattern1 = /^\w{6,12}$|^\w{6,12}@(qq|QQ)\.com$/;
	
	var pattern2 = /^\w{6,15}$/;

	var pattern4 = /^13[0-9]{9}$|^147[0-9]{8}$|^1[58][0125689][0-9]{8}$|^17[017][0-9]{8}$/;

	$('.main input').on('blur',function(obj){

		var index = $('.main input').index($(this));
		
		var pat1 = pattern1.test($user.val());
		
		var pat2 = pattern2.test($pass.val());

		var pat4 = pattern4.test($phone.val());
		
		console.log(pat1);
		switch(index){
			case 0:
				if(pat1){
					
					$user.next().text('账号可用').css({color:'#0f0',fontSize:'14px'});

				}else{
					$user.next().text('账号不可用').css({color:'#f00',fontSize:'14px'});
				}
				break;
			case 1:
				if(pat2){
					
					$pass.next().text('密码设置符合要求').css({color:'#0f0',fontSize:'14px'});

				}else{
					$pass.next().text('密码设置不符合要求').css({color:'#f00',fontSize:'14px'});
				}
				break;
			case 2:
				if($pass.val() == $nopass.val() && $nopass.val() != '' ){
					
					$nopass.next().text('密码一致').css({color:'#0f0',fontSize:'14px'});

					flag = true;

				}else{
					$nopass.next().text('请输入一致的密码').css({color:'#f00',fontSize:'14px'});

					flag = false;
				}
				break;

			case 3:
				if(pat4){
					
					$phone.next().text('√').css({color:'#0f0',fontSize:'14px'});

				}else{
					$phone.next().text('×').css({color:'#f00',fontSize:'14px'});
				}
				break;

		

		}

		if(pat1 && pat2 && pat4 && flag){
			
			$but.removeAttr('disabled');
		}else{
			$but.attr('disabled');
		}

		
	})

	$('.main input').on('focue',function(){
		
		$(this).css('borderColor','#66afe9');
		
	})

})