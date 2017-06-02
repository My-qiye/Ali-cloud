$(function(e){

	
	var timer = null;

	var n = 0;
	
	
	timer = setInterval(fun,3000);	

	$('#lun-an li').eq(0).css('background','#ddd').siblings().css('background','#333');
	
	var $width = $(document).width();

	
	$('#lunbo').css({width:$width*5})

	$('#lunbo img').css({width:$width})
	

	$('#lun-an li').on('click',function(){

		$('#lunbo').stop().animate();

		clearInterval(timer);

		if(!$('#lunbo').is(':animated')){

			$(this).css('background','#ddd').siblings().css('background','#333');

			var index = $('#lun-an li').index($(this));
			

			n = index ;

			$('#lunbo').animate({left:(-$width * index )+'px'},1000,function(){

				timer = setInterval(fun,3000);
			});
			

			
		}

	})
		

	function fun(){

		
		$('#lun-an li').eq(n+1).css('background','#ddd').siblings().css('background','#333');

		n++;

		if(n < 5){

			$('#lunbo').animate({left:-$width * n +'px'},2000);
						
		}else {

			

			$('#lunbo').css({left:0+'px'});

			n=0;

			$('#lun-an li').eq(n).css('background','#ddd').siblings().css('background','#333');

						
		}

		
		
	}
		
	

})


// $(function(e){

// 	var img = $('#lun-bo img');

// 	var qifei = $('#qifei li');

// 	var li = $('#anniu li');

// 	console.log(qifei);

// })