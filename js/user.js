$.ajax({
	url:`${App.baseUrl}/employee/checkRootLogin`,
	type:'get',
	async:false,
	success:function (msg) {
		if (msg.error) {
			alert('未登录，请登陆');
			location.href = 'login.html';
		}	
	}
})
$(function () {
	$.ajax({
		type:'get',
		url:`${App.baseUrl}/user/queryUser`,
		data:{
			page:1,
			pageSize:100
		},
		success: function (msg) {
			console.log(msg)
			var html = template('userTpl',msg);
			$('#urseBox').append(html)
		}
	})

	$('#urseBox').on('click','.statusBtn',function () {
		var id = $(this).data('user-id');
		var isDelete = $(this).data('user-isdelete');
		// console.log(id,isDelete)
		$.ajax({
			type:'post',
			url:`${App.baseUrl}/user/updateUser`,
			data:{
				id:id,
				isDelete: isDelete == 1 ? 0 : 1
			},
			success:function(msg) {
				if (msg.success) {
					// alert('修改成功')
					location.reload();
				}else{
					alert(msg.message)
				}
			}
		})
	})
})