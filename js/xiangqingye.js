



//主体内容的第二个盒子
$(function(){

	var $oLi = $('main .m-two .two-left ul li');
	
	$oLi.mouseover(function(){

		var index = $oLi.index($(this));

		$(this).addClass('xuan').siblings().removeClass('xuan');

		$('main .m-two .two-right > div').eq(index).removeClass('hidden-1').siblings().addClass('hidden-1');

	})

})

$(function(){

	var $oLi = $('main .m-three .three-left ul li');
	
	$oLi.mouseover(function(){

		var index = $oLi.index($(this));
		
		$(this).addClass('xuan').siblings().removeClass('xuan');

		$('main .m-three .three-right > div').eq(index).removeClass('hidden-1').siblings().addClass('hidden-1');

	})

})


//第四个盒子

$(function(){

	var $oLi = $('#four-ul li');

	var $oUl = $('main .m-four div ul');



	$oLi.on('click',function(){

		index = $oLi.index($(this))

		/*js 方法*/
		$(this).css({background:'#333'}).stop(true).animate({width:'35px'},500).siblings().css({background:'#ccc'}).stop(true).animate({width:'20px'},500);

		/*css3 方法*/
		//$(this).css({background:'#333',width:'35px',transition:'all 1s'}).siblings().css({background:'#ccc',width:'20px',transition:'all 1s'});

		$oUl.stop(true).animate({left:-1200 * index },1000);

	})

})


$(function(){

	var $scrollTop = null;

	var li = $('#m-fixed ul li');

	$(document).scroll(function(){

		$scrollTop = $(document).scrollTop();

		if($scrollTop < '400'){

			$('#m-fixed').stop(true).fadeOut();

		}else{

			$('#m-fixed').stop(true).fadeIn();
		}
		$('#m-fixed').offset({top:$scrollTop});

		if( 420<$scrollTop && $scrollTop<780){
			
			li.eq(0).addClass('m-fixed').siblings().removeClass('m-fixed');

		}else if(780<$scrollTop && $scrollTop<1180){

			li.eq(1).addClass('m-fixed').siblings().removeClass('m-fixed');

		}else if(1180<$scrollTop && $scrollTop<1580){

			li.eq(2).addClass('m-fixed').siblings().removeClass('m-fixed');

		}else if(1580<$scrollTop ){

			li.eq(3).addClass('m-fixed').siblings().removeClass('m-fixed');

		}

			
				
	})

	$('#m-fixed ul li').on('click',function(){

			var index = $('#m-fixed ul li').index($(this)) ;
			
			$(this).addClass('m-fixed').siblings().removeClass('m-fixed');

			switch(index){
				
				case 0: $('html,body').animate({scrollTop: '420'}, 400);
				break;

				case 1: $('html,body').animate({scrollTop: '800'}, 400);
				break;

				case 2: $('html,body').animate({scrollTop: '1200'}, 400);
				break;

				case 3: $('html,body').animate({scrollTop: '1600'}, 400);
				break;
			
			}
			

	})

})


$(function(){

	$('.a-one').hover(function(){
		
		$(this).text('云博士')

	},function(){

		$(this).text('点我提问')
	})



	$(document).scroll(function(){

		var scroll = $(document).scrollTop();
		
		if( scroll < 400 ){

			$('.a-three').slideUp();
			
		}else{
			
			$('.a-three').slideDown();
		}

	})

	
})




/*轮播图*/
$(function(e){

	var img = $('#lun-bo img');

	var qifei = $('#qifei>li');

	var li = $('#anniu>li');

	var n = 0;

	var a = 0;

	var b = 0;

	var timer = null;

	qifei.each(function(i){

		$(this).css({left:a,background:'url(img/'+n+'.png)no-repeat 0 0'})

		a +=120;

		$(this).css({backgroundPosition:-120 * i})

	})

	li.eq(0).css({background:'#888'})
	.animate({width:'50'},1200)
	.siblings().css('background','#fff')
	.animate({width:'40'},1200);

	timer = setInterval(show,4000);

	li.click(fun);

	//点击的轮播
	function fun (){

		if( !li.is(':animated')){

			clearInterval(timer);

			index = li.index($(this));

			if(b != index ){
				
				//第一种方法
				//li.css('background','#fff').eq(index).css('background','#888');
				
				//第二种方法
				//$(this).css('background','#888').siblings().css('background','#fff');

				$(this).css({background:'#888'})
						.animate({width:'50'},1200)
						.siblings().css('background','#fff')
						.animate({width:'40'},1200);

				img.css('display','none').eq( b ).show();

				qifei.css({

					backgroundImage:'url(img/'+index+'.png)',

					top: -400
				})

				qifei.eq(0).animate({top:0},800)
				.end()
				.delay(200)
				.eq(1).animate({top:0},800)
				.end()
				.delay(200)
				.eq(2).animate({top:0},800)
				.end()
				.delay(200)
				.eq(3).animate({top:0},800)
				.end()
				.delay(200)
				.eq(4).animate({top:0},800)
				.end()
				.delay(200)
				.eq(5).animate({top:0},800)
				.end()
				.delay(200)
				.eq(6).animate({top:0},800)
				.end()
				.delay(200)
				.eq(7).animate({top:0},800)
				.end()
				.delay(200)
				.eq(8).animate({top:0},800)
				.end()
				.delay(200)
				.eq(9).animate({top:0},800,function(){

					b = index;
					n = index;
					timer = setInterval(show,4000);

				})

				
			}

		}

	}

	//定时器的轮播
	function show (){
		b++;
		if(b > 3){

			b = 0;
		}

		

		li.eq(b).css({background:'#888'})
				.animate({width:'50'},1200)
				.siblings().css('background','#fff')
				.animate({width:'40'},1200);

		img.css('display','none').eq(n).show();

		qifei.css({

			backgroundImage:'url(img/'+b+'.png)',

			top: -400
		})

		qifei.eq(0).animate({top:0},800)
		.end()
		.delay(200)
		.eq(1).animate({top:0},800)
		.end()
		.delay(200)
		.eq(2).animate({top:0},800)
		.end()
		.delay(200)
		.eq(3).animate({top:0},800)
		.end()
		.delay(200)
		.eq(4).animate({top:0},800)
		.end()
		.delay(200)
		.eq(5).animate({top:0},800)
		.end()
		.delay(200)
		.eq(6).animate({top:0},800)
		.end()
		.delay(200)
		.eq(7).animate({top:0},800)
		.end()
		.delay(200)
		.eq(8).animate({top:0},800)
		.end()
		.delay(200)
		.eq(9).animate({top:0},800)

		n = b;

	}
	
	

})
