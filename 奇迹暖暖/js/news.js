$(function(){
	tabPage({
		notice:'#notice',
		pN:'#pageNav',
		pP:'#prev',
		pNe:'#next',
		pNum:'7',//每页显示7条信息
		ini:0//初始化页面
	});
	function tabPage(tabPage){
		/* 获取列表内容 */
		var notice = $(tabPage.notice)
		/* 获取分页 */
		var pN = $(tabPage.pN)
		/* 上一页 */
		var pP = $(tabPage.pP)
		/* 下一页 */
		var pNe = $(tabPage.pNe)
		/* 每页显示数 */
		var pNum  = tabPage.pNum;
		/* 计算总页数 */
		var len = Math.ceil(notice.find('li').length/pNum);
		// console.log(len)
		/* 生成页码 */
		var pList = '';
		/* 当前索引值 */
		var iNum = 0;
		
		pList = '<span>第'+1+'页</span>';
		pN.html(pList);

	
	$(notice).find('li').hide();
	/* 首页的显示 */
	for(var i=0;i<pNum;i++){
		$(notice).find('li').eq(i).show()
	}
	
	/* 下一页 */
	pNe.click(function(){
		$(notice).find('li').hide()
		if(iNum == len-1){
			alert('已经是最后一页');
			for(var i=(len-1)*pNum;i<len*pNum;i++){
				$(notice).find('li').eq(i).show()
			}
			return false;
		}else{
			iNum++;
			pList = '<span>第'+(iNum+1)+'页</span>';
			pN.html(pList);
		}
		for(var i=iNum*pNum;i<(iNum+1)*pNum;i++){
			$(notice).find('li').eq(i).show()
		}
	});
	/* 上一页 */
	pP.click(function(){
		$(notice).find('li').hide();
		if (iNum == 0) {
			alert('当前是第一页');
			for (var i = 0; i < pNum; i++) {
				$(notice).find("li").eq(i).show()
			}
			return false;
		} else {
			iNum--;
			pList = '<span>第'+(iNum+1)+'页</span>';
			pN.html(pList);
		}
		for (var i = iNum * pNum; i < (iNum + 1) * pNum; i++) {
			$(notice).find("li").eq(i).show()
		}
	})
	}
})