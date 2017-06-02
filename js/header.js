
//显示头部导航栏二级菜单
$(function(){
	var $oLi = $('header .head nav ul:nth-of-type(1) li');
	var $tabDiv = $('header .head-tab>div');
	var $oUl = $('header .head nav ul:nth-of-type(1)');
	var x ;

	//导航栏li
	$oLi.mouseover(function(e){
		
		x = $(this).offset().left

		//滑线动画
		$('#huaxian').stop(true).animate({left:x +'px'},500);

		$('#huaxian').animate({width:'70px'},500);

		if($oLi.index($(this))  == '0' || $oLi.index($(this))  == '2' || $oLi.index($(this))  == '4' || $oLi.index($(this))  == '7' ){			

			$('.head-tab').css('display','none');

		}else{

			$('.head-tab').stop(true).slideDown();

		}
		
		$tabDiv.eq($oLi.index($(this))).show().siblings().hide();
									
	})

	
			
	//二级菜单
	$('.head-tab').mouseenter(function(){

		$('.head-tab').css({display:'block'});

		$('#huaxian').css('width','70');

	})
	.mouseleave(function(){
			
		$('.head-tab').slideUp();

		$('#huaxian').stop(true).animate({width:'0'},500);


	})


	$oUl.mouseleave(function(e){

		if(e.pageX<235 ||e.pageX > 900 || e.pageY < 0 ){

			$('.head-tab').slideUp();

			$('#huaxian').stop(true).animate({width:'0'},500);
		}
			
	})


	//二级菜单向上箭头
	
	$('.head-tab .jiantou2').on('click',function(){
		
		console.log($('.jiantou2'))

		$('.head-tab').slideUp();
	})
		
})


/*
	header .head-tab div:nth-of-type(1) 头部二级菜单的第一盒子的选项卡
*/
//左边盒子的选项卡
$(function(){
	var $oLi = $('header .head-tab div:nth-of-type(2) .h-t-one ul li');
	var oDiv = document.getElementById('h-t-none');//元生获取

	$oLi.mouseover(function(){
		$(this).addClass('h-t-xxk1').siblings().removeClass('h-t-xxk1');
		$('header .head-tab div:nth-of-type(2) .h-t-two div').eq($oLi.index($(this))).show().siblings().hide();
		if(oDiv.style.display == 'none'){

			$('header .head-tab div:nth-of-type(2) .h-t-three').css({display:'none'});
		}else{
			$('header .head-tab div:nth-of-type(2) .h-t-three').css({display:'block'});
		}


	})
})


//中间盒子的选项卡
$(function(){
	var $oLi = $('header .head-tab div:nth-of-type(2) .h-t-two div ul li');
	$oLi.mouseover(function(){
		$(this).addClass('h-t-xxk2').siblings().removeClass('h-t-xxk2');
		$('header .head-tab div:nth-of-type(2) .h-t-three div').eq($oLi.index($(this))).show().siblings().hide();
	})
})




//头部最下面的盒子
$(function(){
	$('.xia ul li').click(function(){
		console.log($(document).scrollTop());
		var index = $('.xia ul li').index($(this)) ;
		

		switch(index){
			case 0: $('html,body').animate({scrollTop: '500'}, 400);
			break;

			case 1: $('html,body').animate({scrollTop: '950'}, 400);
			break;

			case 2: $('html,body').animate({scrollTop: '1970'}, 400);
			break;

			case 3: $('html,body').animate({scrollTop: '2800'}, 400);
			break;

			case 4: $('html,body').animate({scrollTop: '3440'}, 400);
			break;

			case 5: $('html,body').animate({scrollTop: '3920'}, 400);
			break;
		}



	})


	$('.xia ul li').hover(function(){

		//$(this).css('fontSize','18px');
	},function(){

		//$(this).css('fontSize','14px');

	})


})