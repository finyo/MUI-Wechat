	
        	mui.init({
        		
        		//右滑关闭页面
				swipeBack:true
				
       		  });
        	
        	var searchInput = document.getElementById('searchInput');
        	
        	var tipsGrounp = document.getElementsByClassName('tipsGrounp')[0];
        	
        	var result = document.getElementsByClassName('result')[0];
        	
        	var ulSection = document.getElementsByClassName('ulSection')[0];
        	
        	var friendImg = document.getElementsByClassName('friendImg')[0];
        	
        	var friendName = document.getElementsByClassName('friendName')[0];
        	  	
        	searchInput.addEventListener('keyup',searchName);
        	
        	
        	//获取用户输入的value值
        	function searchName(){
        		
        		if(this.value == ""){
        			
        			tipsGrounp.style.display = "block";
        			
        			 result.style.display = "none";       
        			 
        		}else{
        			tipsGrounp.style.display = "none";
        			
        			var data = this.value;
        			
        			doSearch(data);
        		}
        	}
        	
        	
        	//向后天发送数据请求 进行名字验证
        	function doSearch(value){
              		
        		var value = value;
        		var friend = null;
        		
        	    mui.ajax('friendList.json',{       	    	
				dataType:'json',
				type:'get',
				success:function(data){
					mui.each(data,function(index,item){
				         if(item.name == value){
                    		friend = value;
                    	}
					});
                    
                    if(friend !== null){
                    	result.style.display = "none";
                    	friendName.innerHTML = value;
                    	friendImg.setAttribute("src","./hpic/"+value+".jpg");
                    	ulSection.style.display = "block";
                    	
                    }else{
                    	
                    	ulSection.style.display = "none";
                    	
	                    result.style.display = "block";
	                    
					 	result.innerText = ''
					 	
						result.innerText = "You don't have a friend named " + value;
                    }
					
				}
	     	});        		
        	}