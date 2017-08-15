# Js this指向  

### 前言  
	在js中，this指向是必须要掌握的知识点，　首先必须要说的是，this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，实际上this的最终指向的是那个调用它的对象。我将在以下文章中举例说明this指向问题；
	
首先我们都知道对于一个定义在全局上的变量和函数来言，我们可以视为他是定义在window对象下的属性或方法。
	
	举个例子来说
	var a = 1；
	function a(){
    	console.log(this); //Window
    	console.log(this.a)；//1
	}
	a();
	这个其实就可以看作是
	window.a()
	这里的this指向window
	所以打印出来的结果是window、1
	  
	
	当我们定义一个对象来说  
	var feng = {
	 	name:"冯",
    	fn:function(){
        	console.log(this.name);  //冯
    	}
	}
	如果我们调用feng对象下的fn函数
	feng.fn();
	打印出来的结果就是 “冯“	
	这里说明的是this的最终指向的是那个调用它的对象，这里调用他的不是window，而是feng
	所以	，这里this的指向是feng


	而在构造函数中this的指向是是用new关键字定义了的实例化对象
	function Fn(){
    	this.name = "feng";
	}
	var a = new Fn();
	console.log(a.name); //feng
	这里的this指向的是实例化的对象


	在事件绑定中this指向事件触发的元素
	例如
	btn.onclick = function（）{
		var btn.index = 1;
		console.log(this.index)// 1		
	
	}
	这里的this指向btn
	
	
	在jq中 this的指向始终是事件触发的元素
	例如
	$("div").click(function(){
		$(this).css({background,"red"})
	})	
	这个函数会在div点击时改变div的背景颜色。
	
	





	

