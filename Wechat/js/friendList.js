
            var nameArr = [];
            
			var firstNameArr = [];
			
			var Allfrined = [];
			
			var muiContent = document.getElementsByClassName('mui-content')[0];
			
			var searchHeader = document.getElementsByClassName('searchHeader')[0];
			
			var indexR = document.getElementById('indexR');
			
			var groupNum = null;
			
			var touchTime = null;
			
			var picUrl = "./hpic/";
			
			searchHeader.addEventListener('touchstart',searchName);
			
			//获取数据
			mui.ajax('friendList.json',{
				dataType:'json',
				type:'get',
				success:function(data){
					
					mui.each(data,function(index,item){	
						
					Allfrined.push(item.name);	
					
					var username = item.name.toUpperCase();
					
					username = username.slice(0,1);
					
					nameArr.push(username);
					
					nameArr.sort();
					
					Allfrined.sort();
					});
					
				   	Doname(nameArr);
				}
		    });
		    
		    function addindexR(data){ 
		    	
		    	var search = document.createElement('li');
		    	
		    	search.setAttribute('class','iconfontyyy');
		    	
		        search.innerHTML = "&#xe606;";
		        
		        search.style.paddingRight = '0.75rem';
		        
		        indexR.appendChild(search);
		        
                for(var i =0;i<data.length;i++){
                	
                	var li = document.createElement('li');
                	
                	li.setAttribute('class','li'+data[i]);
                	
                	li.innerHTML = '<a href="#'+data[i]+'">'+data[i]+'</a>';
                	
                	indexR.appendChild(li);                	
                }
                
		        var li = document.createElement('li');
		        
		        li.innerHTML = "#";
		        
		        indexR.appendChild(li);
		       
		    }
		
           function Doname(nameArr){
           	
		    for(var i =1;i<nameArr.length;i++){
		    	
		    	if(nameArr[i+1] != nameArr[i]){
		    		
		    		firstNameArr.push(nameArr[i]);
		    		
		    	}
		    }
		    
		    addindexR(firstNameArr);
		    
		    BuildGroup();
		}
           
        
          function BuildGroup(){
          	
        	for(var i=0;i<firstNameArr.length;i++){
        		
        	   var div = document.createElement('div');
        	   
               div.setAttribute('class','groupFirend');
               
               div.setAttribute('id',firstNameArr[i]);
               
               var newli = '';
               
               for(var j=0;j<Allfrined.length;j++){
               
               	 if(Allfrined[j].slice(0,1).toUpperCase() ==firstNameArr[i]){
               	 	
               	 	var linkimg = picUrl +Allfrined[j]+ '.jpg';
               	 	
               	 	newli += '<li id="'+Allfrined[j]+'" class="mui-table-view-cell mui-media"><a href="javascript:;"><img class="mui-media-object mui-pull-left" src='+linkimg+'><div class="mui-media-body friends">'+Allfrined[j]+'</div></a></li>';
               	 }
               	 
               	 div.innerHTML = '<h6>'+firstNameArr[i]+'</h6><ul class="news mui-table-view">'+newli+'</ul>';
               	 
               }
               
               muiContent.appendChild(div);
          	}
        	  addOpenChatEvent();
         }
        
        
        function addOpenChatEvent() {
        	var list = document.getElementsByTagName('li');
            for(var i=0;i<list.length;i++){
            	if(list[i].id !== ""){
            		
            		list[i].addEventListener('touchstart',toutime);
            		
			        list[i].addEventListener('touchend',openChat);
			        
            	}
            }
        	
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
				
				  if(move<=10){
				  	
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
        

