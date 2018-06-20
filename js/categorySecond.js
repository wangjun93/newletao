$(function () {
	
	var page  = 1;
	var pagesize = 2;
	var Total = 0;

	getSecondAjax();

	$('#prevBtn').on('click',function () {
		page--;
		if (page < 1 ) {
			page = 1
		}
		getSecondAjax();
	})

	$('#nextBtn').on('click',function () {
		page++;
		if (page > Total) {
			page = Total;
		}
		getSecondAjax();
	})

	// $('#secondBtn').on('click',function () {
	// 	$.ajax({
	// 		url:`${App.baseUrl}/category/addSecondCategory`,
	// 		data:
	// 		type:'post',
	// 		success:function (msg){
	// 			console.log(msg)
	// 		}
	// 	})
	// })


	function getSecondAjax() {
		$.ajax({
			url:`${App.baseUrl}/category/querySecondCategoryPaging`,
			data:{
				page:page,
				pageSize:pagesize
			},
			type:'get',
			success:function (msg){
				console.log(msg)
				var html = template('categorySecondTpl',{
					list:msg,
					api: 'http://fullstack.net.cn:3000'
				})
				$('#categorySecondBox').html(html)
				Total = Math.ceil(msg.total/pagesize)
			}
		})
	}

})