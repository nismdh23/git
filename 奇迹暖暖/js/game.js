var i=0;//翻屏变量，初始第一屏
var s = 0; //该变量作用是鼠标滑轮一直向下或者向上滑动时出现抖动现象
$(function(){
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
		   
	$(".tsf,.tss,.tst").css({'height':div_height});
		   
	$(window).resize(function(){
		   
	var div_height=$(window).height();
		   
	$(".tsf,.tss,.tst").css({'height':div_height});
		   
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
	
	$(window).scroll(function(){
		// console.log($(document).scrollTop())
		var srTp = $(document).scrollTop()
		if(srTp>=$('.tsf').offset().top&&srTp<$('.tss').offset().top){
			$('.tsf>div>p').animate({opacity:'1'},3000)
			$('.tsf>div>img').animate({width:'1050px',height:'250px'},3000)
		}else if(srTp>=$('.tss').offset().top&&srTp<$('.tst').offset().top){
			$('.tss>div>p').animate({opacity:'1'},3000)
			$('.tss>div:nth-child(1)>img').animate({marginLeft:'0',opacity:'1'},3000)
			$('.tss>div:nth-child(2)>img').animate({marginRight:'0',opacity:'1'},3000)
		}else if(srTp>=$('.tst').offset().top){
			$('.tst>div>p').show(3000)
			$('.tst>div>img').show(3000)
		}
	})
	
	/* 返回顶部 */
	$(window).scroll(function(){
		var c = $(document).scrollTop();
		if(c>=1000){
			$('.retur').show()
		
		}else{
			$('.retur').hide()
		}
		if(c<=0){
			clearInterval(t)
		}
	})
	var t
	$('.retur').click(function(){
		t = setInterval(function(){
			window.scrollBy(0,-10)
		},10)
	})
})