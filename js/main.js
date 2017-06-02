

// 选项卡
//main中第二个盒子的选项卡
$(function(){

	var $oLi = $('main .main-two .m-t-bottom ul li');
	 $('main .main-two .m-t-bottom ul li').click(function(){

	 	$(this).addClass('xuan-x').siblings().removeClass('xuan-x');

	 	$('main .main-two .m-t-bottom .xuan-x-k>div').eq($oLi.index($(this))).show().siblings().hide();


	 })


})

//main第四个盒子的选项卡
$(function(){
	 var $oli = $('main .main-four .m-f-right ul li');

	 var $img = $('main .main-four .m-f-right ul li img');

	$('main .main-four .m-f-right ul li').click(function(){
		
		$(this).addClass('m-f-one').siblings().removeClass('m-f-one');

		$img.css({transform:'scale(1)'});

		$img.eq($oli.index($(this))).css({transform:'scale(1.3)'});

		$('main .main-four .m-f-right .m-f-xuan>div').eq($oli.index($(this))).show().siblings().hide();
	})



})



$(function(){

		var $oLi = $('main .main-two .m-t-top ul li');
		var $oImg = $('main .main-two .m-t-top ul li img')
		$oLi.mouseover(function(){

			$(this).css({borderColor:'#00a2ca',});
			var index = $oLi.index($(this));

			switch(index){

				case 0:$oImg.eq(0).attr('src','images/t-gwc-2.png');
				break;

				case 1:$oImg.eq(1).attr('src','images/t-sp-2.png');
				break;

				case 2:$oImg.eq(2).attr('src','images/t-wz-2.png');
				break;

				case 3:$oImg.eq(3).attr('src','images/t-sj-2.png');
				break;

			}
									

		})
		.mouseout(function(){

			$(this).css({borderColor:'#ddd'});
			$oImg.eq(0).attr('src','images/t-gwc-1.png');
			$oImg.eq(1).attr('src','images/t-sp-1.png');
			$oImg.eq(2).attr('src','images/t-wz-1.png');
			$oImg.eq(3).attr('src','images/t-sj-1.png');


		})

})

//main的第二盒子的hover效果
$(function(){

		var $oLi = $('main .main-two .m-t-bottom .xuan-x-k div ul li');
		var $oImg = $('main .main-two .m-t-bottom .xuan-x-k div ul li img')
		$oLi.mouseover(function(){

			$(this).css({borderColor:'#00a2ca',});
			var index = $oLi.index($(this));
			console.log(index);

			switch(index){

				case 0:$oImg.eq(0).attr('src','images/t-gwc-2.png');						
				break;

				case 4:$oImg.eq(4).attr('src','images/t-gwc-2.png');
				break;

				case 8:$oImg.eq(8).attr('src','images/t-gwc-2.png');
				break;

				case 1:$oImg.eq(1).attr('src','images/t-sp-2.png');
				break;
				case 5:$oImg.eq(5).attr('src','images/t-sp-2.png');
				break;
				case 9:$oImg.eq(9).attr('src','images/t-sp-2.png');
				break;

				case 2:$oImg.eq(2).attr('src','images/t-wz-2.png');
				break;
				case 6:$oImg.eq(6).attr('src','images/t-wz-2.png');
				break;
				case 10:$oImg.eq(10).attr('src','images/t-wz-2.png');
				break;

				case 3:$oImg.eq(3).attr('src','images/t-sj-2.png');
				break;
				case 7:$oImg.eq(7).attr('src','images/t-sj-2.png');
				break;
				case 11:$oImg.eq(11).attr('src','images/t-sj-2.png');
				break;


			}
									

		})
		.mouseout(function(){

			$(this).css({borderColor:'#ddd'});
			$oImg.eq(0).attr('src','images/t-gwc-1.png');
			$oImg.eq(4).attr('src','images/t-gwc-1.png');
			$oImg.eq(8).attr('src','images/t-gwc-1.png');

			$oImg.eq(1).attr('src','images/t-sp-1.png');
			$oImg.eq(5).attr('src','images/t-sp-1.png');
			$oImg.eq(9).attr('src','images/t-sp-1.png');


			$oImg.eq(2).attr('src','images/t-wz-1.png');
			$oImg.eq(6).attr('src','images/t-wz-1.png');
			$oImg.eq(10).attr('src','images/t-wz-1.png');

			$oImg.eq(3).attr('src','images/t-sj-1.png');
			$oImg.eq(7).attr('src','images/t-sj-1.png');
			$oImg.eq(11).attr('src','images/t-sj-1.png');
		})

})


//main第三个盒子的hover效果

$(function(){

	var oDiv = $('main .main-three .m-t-xia div');

	oDiv.hover(function(){
		$(this).css({borderColor:'#00a2ca'})
	},function(){
		$(this).css({borderColor:'#eee'});
	})


})



//main第五个盒子的效果
$(function(e){
	
	var five = document.getElementById('main-five')	
	
	var img = five.getElementsByTagName('img');
	
	for(var i=0;i<img.length;i++){
			img[i].style.left = img[i].offsetLeft + 'px';
			img[i].style.top = img[i].offsetTop +'px'
					
		}

		for(var i=0;i<img.length;i++){
			img[i].style.position = 'absolute';
			img[i].style.margin = 0;
		}
	

	
	var $oImg = $('main .main-five ul li img');

	$oImg.hover(function(){
		$(this).css('z-index','99');
		$(this).stop(true).animate({width:'380px',height:'200px',marginLeft:'-50px',marginTop:'-35px'})

		console.log($(this).css('zIndex'));

	},function(){
		$(this).css('z-index','9');
		$(this).stop(true).animate({width:'280px',height:'130px',marginLeft:0,marginTop:0})

	})


})


//main第六个盒子的效果

$(function(){

		var $oDiv = $('main .main-sex .m-s-xia div');
		var $oImg = $('main .main-sex .m-s-xia div img')
		$oDiv.mouseover(function(){

			$(this).css({borderColor:'#00a2ca',});
			var index = $oDiv.index($(this));

			switch(index){

				case 0:$oImg.eq(0).attr('src','images/m-ws-2.png');
				break;

				case 1:$oImg.eq(1).attr('src','images/m-sb-2.png');
				break;

				case 2:$oImg.eq(2).attr('src','images/m-cz-2.png');
				break;


			}
									

		})
		.mouseout(function(){

			$(this).css({borderColor:'#ddd'});
			$oImg.eq(0).attr('src','images/m-ws-1.png');
			$oImg.eq(1).attr('src','images/m-sb-1.png');
			$oImg.eq(2).attr('src','images/m-cz-1.png');


		})

})
