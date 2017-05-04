		
	var subPages = ['wechat.html','contact.html','discover.html','memsg.html'];
	
	//让手机的硬件准备完毕 
	mui.plusReady(function() {
		
		//1.获取当前的显示窗体 
		var self = plus.webview.currentWebview();	
		
		//定义子页面打开的样式 
		var subPageStyle = {
			top:'0px',
			bottom:'50px'
		};
		
		
		//2.循环创建子窗体
		for(var i=0;i<subPages.length;i++){
			
			var sub = plus.webview.create(subPages[i],subPages[i],subPageStyle);
			
			//先将所有的子页面隐藏 
			sub.hide();
			
			//将创建好的子窗体追加到主窗体中  
			self.append(sub);
		}
		
		//默认显示第一个子窗体 
		plus.webview.show(subPages[0]);
	});
	
	
	//选中a标签绑定tap事件
	mui(".mui-bar-tab").on("tap","a",function(e) {
		
		//通过每个被点击的a标签去获取定义的href属性值 
		var targetPage = this.getAttribute("href");
		
		//将对应的子页面显示出来  
		//show(子页面id,采用的动画名称,动画执行时间【单位毫秒】)
		plus.webview.show(targetPage,"fade-in",100); 
	});

