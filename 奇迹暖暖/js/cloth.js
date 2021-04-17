$(function(){
	//点击对应图标切换对应套装
	$('ul.day>li').click(function(){
		$(this).attr('class','big').siblings().removeAttr('class')
		$('ul.clothes>li').eq(0).show().siblings().hide()
		var a =$(this).index()
		if(a){
			$('ul.clothes>li').eq(a).show().siblings().hide()
		}
	})
})