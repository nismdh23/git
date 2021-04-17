$(function(){
	var selec = document.querySelector('select')
	var input = document.querySelectorAll('input')
	var but = document.querySelector('button')
	selec.onchange = function(){
		// console.log($(this).val())
		if($(this).val()==0){
			alert('请选择大区')
		}
	}
	
	input[0].onfocus = function(){
		this.placeholder = "16位CDKEY,字母,数字,下划线"
	}
	input[0].onblur = function(){
		// console.log(this.value)
		var pattern = /^\w{16}$/
		var str= this.value;
		var res = pattern.exec(str)
		if(!res){
			alert('16位CDKEY，包含字母数字下划线')
		}
	}
	
	input[1].onfocus = function(){
		this.placeholder = "4位验证码"
	}
	input[1].onblur = function(){
		// console.log(this.value)
		var pattern = /^\w{4}$/
		var str= this.value;
		var res = pattern.exec(str)
		if(!res){
			alert('请输入验证码')
		}
	}
	
	but.onclick = function(){
		if(selec.value == 0){
			alert('请选择大区')
		}else if(input[0].value == ''){
			alert('请输入16位CDKEY')
		}else if(input[1].value == ''){
			alert('请输入验证码')
		}else if(input[1].value != 'dgOD'){
			alert('验证码错误')
		}else{
			alert('成功')
		}
	}
})