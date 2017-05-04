	var friendmsg = document.getElementById('friendmsg');
	    	
	    	var speechMsg = document.getElementById('speechMsg');
	    	
	    	var friendHpic = document.getElementById('friendHpic');
	    	
	    	var friendNews = document.getElementsByClassName('friendNews')[0];
	    	
	    	var send = document.getElementsByClassName('send')[0];
	    	
	    	var talkNews = document.getElementsByClassName('talkNews')[0];
	    	
	    	send.addEventListener('touchend',speMsg);
	    	
	    	var chatTop = document.documentElement.scrollTop || document.body.scrollTop;

	    	function speMsg(){
	    		
	    		if(speechMsg.value !== ""){
	    			
	    			var myNewsDiv = document.createElement("div");
	    			
	    			myNewsDiv.setAttribute("class","myNews");
	    			
	    			myNewsDiv.innerHTML = '<img class="mui-media-object mui-pull-right" src="./hpic/me.jpg"><span id="myMsg">'+speechMsg.value+'<span></span></span>';
	    			
	    			talkNews.appendChild(myNewsDiv);
	    			
	    			document.documentElement.scrollTop = document.documentElement.scrollHeight;
	    			
	    	        document.body.scrollTop = document.body.scrollHeight; 
	    	        
	    			speechMsg.value = "";
	    		}
	    		
	    	}
	    	
			    	
			    mui.plusReady(function() {
				
				 //1.获取当前窗体  
				var cw = plus.webview.currentWebview();
				
				//选中h1标签 
				var header = document.querySelector(".mui-title");
				
				//将h1标签的值赋值为传递过来的值
				header.innerText = cw.title;
				
				getMsg(cw.title);
				
			});
			
			function getMsg(name){
				
				var name = name;
								
				mui.ajax('friendList.json',{
     	
				dataType:'json',
				type:'get',
				success:function(data){
					
					mui.each(data,function(index,item){
						
						if(name == item.name){
							if(item.msg == ""){
								
								friendNews.style.display = "none";
								
							}else{
								
							  friendmsg.innerText = item.msg;
							  
							  friendHpic.setAttribute("src","./hpic/"+item.name+".jpg");
							  
							}
						}
					
					});
				  }
		        });
			}