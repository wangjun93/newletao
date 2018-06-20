$(function() {
	
	
	$('#loginBtnBtn').on('click',function () {
		var result = $('#loginBtn').serializeToJson();
		if(!$.trim(result.username)){
			alert('用户名错误')
			return;
		}
		if (!$.trim(result.password)) {
			alert('密码错误')
		}
		$.ajax({
			data: result,
			url: `${App.baseUrl}/employee/employeeLogin`,
			type: 'post',
			success:function (msg) {
				console.log(msg)
				if (msg.success) {
					alert('登陆成功')
					location.href = 'user.html'
				}else{
					alert(msg.message)
				}
			}
		})
	})

})