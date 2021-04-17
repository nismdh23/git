$(function(){
	var img = document.querySelectorAll('ul.fangd>li>img')
	$('ul.fangd>li').click(function(){
		//点击图片显示出来放大镜
		$('.magnif').show()
		//把图片放入要放大的区域
		var a = $(this).index()
		// console.log(a)
		$('.magnif').append($(img[a]).clone(true))
		// if(a>=5){
		// 	$('.magnif').append($(img[a+1]).clone(true))
		// }
		$('.magnif').click(function(){
			$('.magnif').hide()
			$('.magnif').empty()
		})
	})
	
	// $(window).scroll(function(){
	// 	console.log($(document).scrollTop())
	// })
})
