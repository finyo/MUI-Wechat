     var searchHeader = document.getElementsByClassName('searchHeader')[0];
     
     searchHeader.addEventListener('touchstart',searchName);
     
     var touchTime = null;
     
     var posY = null;
     
     mui.ajax('friendList.json',{
     	
				dataType:'json',
				type:'get',
				success:function(data){
					
					mui.each(data,function(index,item){
						
					loadNews(item.name,item.msg,item.hpic,item.time);
					
					});
				}
		});
			
		
		mui.init({
		  pullRefresh : {
		    container:"#refreshContainer",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
		    down: {
		      height:50,//可选,默认50.触发下拉刷新拖动距离,
		      auto: true,//可选,默认false.自动下拉刷新一次
		      contentdown : "",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
		      contentover : "释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
		      contentrefresh : "正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
		      callback :pullfresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
		    }
		  }
		});
		
					      	   	   		
		function loadNews(name,msg,hpic,time) {			
			
			var news = document.getElementById('news');
			
			var li = document.createElement('li');
			
			var picUrl = "./hpic/";
			
			var picHed = picUrl + hpic;
			
			li.setAttribute('class','mui-table-view-cell mui-media');
			
			li.setAttribute('id',name);
			
			li.innerHTML = '<a href="javascript:;"><img class="mui-media-object mui-pull-left" src="'+picHed+'"><div class="mui-media-body friends">'+name+'<p class="mui-ellipsis">'+msg+'</p><h6>'+time+'</h6></div></a>';
			
			news.appendChild(li);
			
			li.addEventListener('touchstart',toutime);
			
			li.addEventListener('touchend',openChat);
		}
		
		function toutime(e) {
			
			var timeObj = new Date();
			
			touchTime = timeObj.valueOf();
			
			posY = e.pageY;
		}
		
		function openChat(e) {
			
			var move = Math.abs(posY - e.pageY);
			
			
			var timeObj = new Date();
			
			var endTime = timeObj.valueOf();
			
			var msg = null;
			
			if((endTime-touchTime)>=50){
				
				  if(move<=30){
				  	
						var name = this.id;
											
					    mui.openWindow({
					    	
						url:"chatRoom.html",
						
						id:"chatRoom.html",
						
						createNew: false,
						
						extras:{
							title:name,
							mesg:msg
						},
						show:{
							autoShow:true,
							aniShow:'slide-in-right',
							duration:100
						}
						
	    	});
	      }
		}else{
//			console.log("@1321");
		}
			
		}
		
		
		
		function pullfresh() {
			
			     mui.ajax('friendList.json',{
					dataType:'json',
					type:'get',
					success:function(data){
						
						var data = data;
						
						setTimeout(function(data){
							
							mui.each(data,function(index,item){
								
						    loadNews(item.name,item.msg,item.hpic,item.time);
						    
						});
						
						mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
						
						},1000);
				   }
		      });	     
            }
		
		
		function searchName(){
        	
		  mui.openWindow({
		  	
		    url: 'searchFriend.html', 
		    
		    id:'searchFriend.html',
		    
		    createNew:false,
		    
		    show:{
				autoShow:true,//是否自动显示 
				
				aniShow:'auto'
			}
		  });
        }