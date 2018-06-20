$(function () {
	var page  = 1;
	var pagesize = 10;
	var Total = 0;

	getAjax();


	$('#nextBtn').on('click',function () {
		console.log(123456)
		page++;
		if (page > Total) {
			page = Total;
		}
		getAjax();
	})

	$('#prevBtn').on('click',function () {
		console.log(789)
		page--;
		if (page < 1) {
			page = 1;
		}
		getAjax();
	})


	$('#baocun').on('click',function () {
		var categoryName = $('#inputBtn').val();

		if(!$.trim(categoryName)){
			alert('请输入分类名称')
		}else {
			$.ajax({
				url:`${App.baseUrl}/category/addTopCategory`,
				data:{
					categoryName:categoryName
				},
				type:'post',
				success:function (msg) {
					if (msg.success) {
						location.reload()
					}else{
						alert(msg.message)
					}
				}
			})
		}
	})


	function getAjax(){
		$.ajax({
			url:`${App.baseUrl}/category/queryTopCategoryPaging`,
			data:{
				page:page,
				pageSize:pagesize
			},
			type:'get',
			success:function (msg){
				console.log(msg)
				var html = template('categoryTpl',msg)
				$('#categoryBox').html(html)

				Total = Math.ceil(msg.total/pagesize)
			}
		})
	}

})

