$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

});

$.ajaxSetup({crossDomain: true, xhrFields: {withCredentials: true}});

var App = {

	baseUrl : 'http://fullstack.net.cn:3000'
	// baseUrl : 'http://locahost:3000'
};


$.fn.serializeToJson = function () {

	var formAry = this.serializeArray();

	// var result = {username:'zhangsan', password:123123}
	var result = {};

	formAry.forEach(function (item) {
		result[item.name] = item.value;
	});

	return result;

}