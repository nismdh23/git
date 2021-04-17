$(function(){
	$('.nav>ul>li').click(function(){
		$(this).attr('class','ctr').siblings().removeAttr('class')
	})
	$('div.xidi>ul>li').click(function(){
		$(this).attr('class','ctr').siblings().removeAttr('class')
	})
	$('.nav>div').mouseover(function(){
		$(this).css({height:'154px',lineHeight:'200px'})
	})
	$('.nav>div').mouseout(function(){
		$(this).css({height:'120px',lineHeight:'120px'})
	})
	
	//轮播图
	var num=0;
	$('.beiS>li').eq(0).show().siblings().hide()
	setInterval(function(){
		num++;
		if(num>4){
			num=1
		}
		if(num==1){
			$('.beiF').css({background:'url(../img/tlun2.jfif) no-repeat center/100%'})
		}else if(num==2){
			$('.beiF').css({background:'url(../img/tlun3.jfif) no-repeat center/100%'})
		}else if(num==3){
			$('.beiF').css({background:'url(../img/tlun4.jfif) no-repeat center/100%'})
		}else{
			$('.beiF').css({background:'url(../img/tlun5.jfif) no-repeat center/100%'})
		}
		$('.beiS>li').eq(num).show().siblings().hide()
		$('.beiT>li').eq(num-1).attr('class','bian').siblings().removeAttr('class')
	},3000)
	
	var n=0;
	var time = setInterval(function(){
		n++;
		if(n>1){
			n=0;
		}
		if(n==0){
			$('.bo').css({background:'url(../img/tlun6.jfif) no-repeat center/100%'})
			$('.bo>ul>li').eq(0).css('background','lightgray').siblings().css('background','none')
		}else{
			$('.bo').css({background:'url(../img/tlun7.jfif) no-repeat center/100%'})
			$('.bo>ul>li').eq(1).css('background','lightgray').siblings().css('background','none')
		}
	},3000)
	$('.bo>ul').mouseover(function(){
		clearInterval(time)
	})
	$('.bo>ul').mouseout(function(){
		time = setInterval(function(){
		n++;
		if(n>1){
			n=0;
		}
		if(n==0){
			$('.bo').css({background:'url(../img/tlun6.jfif) no-repeat center/100%'})
			$('.bo>ul>li').eq(0).css('background','lightgray').siblings().css('background','none')
		}else{
			$('.bo').css({background:'url(../img/tlun7.jfif) no-repeat center/100%'})
			$('.bo>ul>li').eq(1).css('background','lightgray').siblings().css('background','none')
		}
	},3000)
	})
	$('.bo>ul>li').click(function(){
		var a = $(this).index()
		if(a==0){
			$('.bo').css({background:'url(../img/tlun6.jfif) no-repeat center/100%'})
			$('.bo>ul>li').eq(0).css('background','lightgray').siblings().css('background','none')
		}else{
			$('.bo').css({background:'url(../img/tlun7.jfif) no-repeat center/100%'})
			$('.bo>ul>li').eq(1).css('background','lightgray').siblings().css('background','none')
		}
	})
	
	/* 视频区域选项卡 */
	$('ul.ship>li').mouseover(function(){
		if($(this).index()==1||$(this).index()==2){
			$('.shi>div').hide()
		}else{
			$('.shi>div').show()
		}
	})
	
	// 导航栏吸顶特效
	$(window).scroll(function(){
		var c = $(document).scrollTop();
		if(c>=97){
			$('div.xidi').show()
		}else if(c<97){
			$('div.xidi').hide()
		}
		if(c>=1000){
			$('.retur').show()
		
		}else{
			$('.retur').hide()
		}
		if(c<=0){
			clearInterval(t)
			$('.nav>ul>li').eq(0).attr('class','ctr').siblings().removeAttr('class')
		}
	})
	var t
	$('.retur').click(function(){
		t = setInterval(function(){
			window.scrollBy(0,-10)
		},10)
	})
	
	//点击跳转相应页面
	$('.nav>ul>li').eq(0).click(function(){
		$('html,body').animate({scrollTop:$('.header').offset().top},200)
		$('div.xidi>ul>li').eq(0).attr('class','ctr').siblings().removeAttr('class')
	});
	$('.nav>ul>li').eq(1).click(function(){
		$('html,body').animate({scrollTop:$('.tu').offset().top},200)
		$('div.xidi>ul>li').eq(1).attr('class','ctr').siblings().removeAttr('class')
	});
	$('.nav>ul>li').eq(2).click(function(){
		$('html,body').animate({scrollTop:$('.yuedu').offset().top},200)
		$('div.xidi>ul>li').eq(2).attr('class','ctr').siblings().removeAttr('class')
	});
	$('.nav>ul>li').eq(3).click(function(){
		$('html,body').animate({scrollTop:$('.shi').offset().top},200)
		$('div.xidi>ul>li').eq(3).attr('class','ctr').siblings().removeAttr('class')
	});
	$('div.xidi>ul>li').eq(0).click(function(){
		$('html,body').animate({scrollTop:$('.header').offset().top},200)
		$(this).attr('class','ctr').siblings().removeAttr('class')
	});
	$('div.xidi>ul>li').eq(1).click(function(){
		$('html,body').animate({scrollTop:$('.tu').offset().top},200)
		$(this).attr('class','ctr').siblings().removeAttr('class')
	});
	$('div.xidi>ul>li').eq(2).click(function(){
		$('html,body').animate({scrollTop:$('.yuedu').offset().top},200)
		$(this).attr('class','ctr').siblings().removeAttr('class')
	});
	$('div.xidi>ul>li').eq(3).click(function(){
		$('html,body').animate({scrollTop:$('.shi').offset().top},200)
		$(this).attr('class','ctr').siblings().removeAttr('class')
	});
})