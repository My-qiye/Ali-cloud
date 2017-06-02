

	var user = document.getElementById('user');

	var pass = document.getElementById('pass');

	var but = document.getElementById('button');
	
	var pattern1 = /^\w{6,12}$|^\w{6,12}@(qq|QQ)\.com$/;

	var pattern2 = /^\w{6,15}$/;

	


	user.addEventListener('blur',fun,false);
	pass.addEventListener('blur',fun,false);
	
		

	function fun(obj){
		
		var pat1 = pattern1.test(user.value);
		
		var pat2 = pattern2.test(pass.value);

		switch(this){
			case user:
				if(pat1){
					user.previousSibling.innerHTML= '用户名正确';
					user.previousSibling.style.color = '#0f0';
				}else{
					user.previousSibling.innerHTML= '用户名不正确';
					user.previousSibling.style.color = '#f00';
				}
					
			break;
			case pass:
				if(pat2){
					pass.previousSibling.innerHTML= "密码正确";
					pass.previousSibling.style.color = '#0f0';
				}else{
					pass.previousSibling.innerHTML= '密码错误';
					pass.previousSibling.style.color = '#f00';
				}
			break;
		}

		if(pat1 && pat2){
			but.removeAttribute('disabled');
		}else{
			but.setAttribute('disabled');
			
		}
		
	}




//验证的选项卡
$(function(){

	$('#m-xuan li').on('click',function(){

		$(this).css('color','#333').siblings().css('color','#999');
		console.log($('#m-xuan li').index($(this)));
		$('.xuan>div').eq($('#m-xuan li').index($(this))).removeClass('hidden').siblings().addClass('hidden');


	})
})
	
//轮播图

$(function(){

	var $uLi = $('#lunbo ul li');

	var $oli = $('#lunbo ol li');

	var $img = $('#lunbo img');

	var n = 0;

	var a = 0;

	var timer = null;

	$uLi.each(function(e){

		
		$(this).css({left:a,background:'url(images/deng'+n+'.jpg) no-repeat 0 0'});

		a+=80;

		$(this).css({backgroundPosition:-80 * e})
	})


	$oli.eq(0).css({background:'#999'}).stop(true)
		.animate({width:'35'},1200)
		.siblings().css('background','#ddd').stop(true)
		.animate({width:'20'},1200);

	timer = setInterval(show,3000)
	$oli.click(fun);

	function show(){

		n++
		if(n >3){
			n=0
		}
		
		$oli.eq(n).css({background:'#999'}).stop(true)
		.animate({width:'35'},1200)
		.siblings().css('background','#ddd').stop(true)
		.animate({width:'20'},1200);

		$img.css('display','none').eq(n).css('display','block');

		$uLi.eq(0).animate({top:-300,opacity:.6},2000)
		.end()
		.eq(1).animate({top:300,opacity:.6},2000)
		.end()
		.eq(2).animate({top:-300,opacity:.6},2000)
		.end()
		.eq(3).animate({top:300,opacity:.6},2000)
		.end()
		.eq(4).animate({top:-300,opacity:.6},2000,function(){
			$uLi.css({backgroundImage:'url(./images/deng'+n+'.jpg)'});
			
			
			$uLi.css({top:'0',opacity:1});
		})
	}

	

	function fun(){

		clearInterval(timer);
			
		if( ! $uLi.is(':animated')){

			var index = $oli.index($(this));

			if(n != index ){

				n = index;

				$(this).css({background:'#999'}).stop(true)
				.animate({width:'35'},1200)
				.siblings().css('background','#ddd').stop(true)
				.animate({width:'20'},1200);

				$img.css('display','none').eq(index).css('display','block');

				$uLi.eq(0).animate({top:-300,opacity:.6},2000)
				.end()
				.eq(1).animate({top:300,opacity:.6},2000)
				.end()
				.eq(2).animate({top:-300,opacity:.6},2000)
				.end()
				.eq(3).animate({top:300,opacity:.6},2000)
				.end()
				.eq(4).animate({top:-300,opacity:.6},2000,function(){
					$uLi.css({backgroundImage:'url(./images/deng'+index+'.jpg)'});
					$uLi.css({top:'0',opacity:1});
					timer=setInterval(show,3000);
				})
				
			}	
				
		}	

	}


})
	