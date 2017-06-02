
$(function(){

	$('.a-one').hover(function(){
		
		$(this).text('云博士')

	},function(){

		$(this).text('点我提问')
	})

	



	$(document).scroll(function(){

		var scroll = $(document).scrollTop();
		
		if( scroll < 600 ){

			$('.a-three').slideUp();

		}else{
			
			$('.a-three').slideDown();
		}

	})

})



$(function(){

	var $scrollTop = null;

	var li = $('#m-fixed ul li');

	$(document).scroll(function(){

		$scrollTop = $(document).scrollTop();
		
		if($scrollTop < '450'){

			$('#m-fixed').hide();

		}else{

			$('#m-fixed').show();
		}
		$('#m-fixed').css({top:$scrollTop});


		if( 480<$scrollTop && $scrollTop<900){
			
			li.eq(1).addClass('m-fixed').siblings().removeClass('m-fixed');

		}else if(900<$scrollTop && $scrollTop<1920){

			li.eq(2).addClass('m-fixed').siblings().removeClass('m-fixed');

		}else if(1920<$scrollTop && $scrollTop<2720){

			li.eq(3).addClass('m-fixed').siblings().removeClass('m-fixed');

		}else if(2720<$scrollTop && $scrollTop<3400){

			li.eq(4).addClass('m-fixed').siblings().removeClass('m-fixed');

		}else if(3400<$scrollTop && $scrollTop<3860){

			li.eq(5).addClass('m-fixed').siblings().removeClass('m-fixed');

		}else if(3860<$scrollTop){

			li.eq(6).addClass('m-fixed').siblings().removeClass('m-fixed');

		}
		
	})

	

	$('#m-fixed ul li').not($('#m-fixed ul li').eq(0)).on('click',function(){

		var index = $('#m-fixed ul li').index($(this)) ;
		
		$(this).addClass('m-fixed').siblings().removeClass('m-fixed');

		switch(index){
			case 1: $('html,body').animate({scrollTop: '500'}, 400);
			break;

			case 2: $('html,body').animate({scrollTop: '950'}, 400);
			break;

			case 3: $('html,body').animate({scrollTop: '1970'}, 400);
			break;

			case 4: $('html,body').animate({scrollTop: '2800'}, 400);
			break;

			case 5: $('html,body').animate({scrollTop: '3440'}, 400);
			break;

			case 6: $('html,body').animate({scrollTop: '3920'}, 400);
			break;
		}
		

	})


	
	$('#m-fixed ul li').eq(0).mouseenter(function(){

		$(this).css('zIndex','999');

		if($('#m-fixed .caidan').css('display') == 'none'){

			$('#m-fixed .caidan').stop(true).slideDown();

		}			
	
	})

	$('#m-fixed .caidan').mouseenter(function(){
		
		$('#m-fixed .caidan').css('display','block');

	})
	.mouseleave(function(){
		
		$('#m-fixed .caidan').css('display','none');


	})


})