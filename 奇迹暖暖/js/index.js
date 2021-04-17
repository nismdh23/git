var i=0;//翻屏变量，初始第一屏
var s = 0; //该变量作用是鼠标滑轮一直向下或者向上滑动时出现抖动现象
$(function(){
	//花瓣全屏飘落特效，用的snowfall插件
	$('.one').snowfall('clear');
	$('.one').snowfall({
		image:'../img/huaban.png',
		flakeCount:50,
		minSize:20,
		maxSize:30
	});
	
	//鼠标滚轮翻页效果
	var starttime = 0,
	  endtime = 0;
	$("body").mousewheel(function(event, delta) {
		   
	  starttime = new Date().getTime(); //记录翻屏的初始时间
		   
	  if (delta < 0&& i>=0 && i<=2) { 
		   
	    if (s>=0&&(starttime == 0 || (endtime - starttime) <= -500)) { //在500ms内执行一次翻屏
	      s=1;
	      i++;
	      renderPage(i,true); //翻屏函数
	      endtime = new Date().getTime(); //记录翻屏的结束时间
	    }
	  } else if (delta > 0&& i>=1&&s==1&& (starttime == 0 || (endtime - starttime) <= -500)) {  
	    i--;
	    //console.log(i);
	    renderPage(i,true);
	    endtime = new Date().getTime();           
	  }  
		   
	});
		   
	var div_height=$(window).height(); 
		   
	$(".one,.two,.three,.four").css({height:div_height});
		   
	$(window).resize(function(){
		   
	var div_height=$(window).height();
		   
	$(".one,.two,.three,.four").css({height:div_height});
		   
	});
		   
	function renderPage(pageNumber, isScroll){ 
	  if (isScroll){
	      $('body, html').animate({scrollTop:pageNumber*div_height }, 'slow');
	      $(".left-btn ul li").removeClass("active");
	      $(".left-btn ul li").eq(pageNumber).addClass("active");
	    }
		   
	   return;
	  }
		   
	$(".left-btn ul li").on("click", function(){ //点击小导航也执行翻屏
	  var index = $(this).index();
	  renderPage(index, true);
	  $(".left-btn ul li").removeClass("active");
	  $(this).addClass("active");
	  return false;
	});
	
	//美好之旅
	$(window).mousewheel(function(e){
		if(e.deltaY == -1){
		$('.two-f>img').eq(0).animate({left:'170px',opacity:'1'},3000)
		$('.two-f>img').eq(1).animate({right:'170px',opacity:'1'},3000)
		}
	})
	//游戏特色
	setTimeout(function(){
		$('.two-l>div').fadeIn(3000)
	},3)
	var num=0;
	var timer = setInterval(run,3000)
	var run = function(){
		num++;
		if(num>4){
			num=0
		}
		$('.two-l>div>img').eq(num).show().siblings().hide()
		$('.two-l>ul>li').eq(num).css('background','#FFBDC2').siblings().css('background','white')
	}
	//鼠标移入轮播图停止
	$('.two-l').mouseover(function(){
		clearInterval(timer);
	})
	//鼠标移出轮播图继续动
	$('.two-l').mouseout(function(){
		 timer = setInterval(run,3000)
	})
	
	
	//游戏攻略
	$(window).mousewheel(function(e){
		if(e.deltaY == -1){
			$('.three-f>ul').animate({height:'400px',opacity:'1'},3000)
			$('.three-l>ul').animate({height:'400px',opacity:'1'},3000)
		}
	})

	//轮播图
	$('.four>button').eq(1).click(function(){
		$('div.banner').append($('.banner>img').eq(0))
	})
	$('.four>button').eq(0).click(function(){
		$('div.banner').prepend($('.banner>img').eq(2))
	})
})
