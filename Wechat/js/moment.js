mui('#sheet1').popover('toggle');
     	
     	var gallaryBtn = document.getElementById('gallary');
     	
     	var openCamera = document.getElementById('openCamera');
     	
        mui.ajax('moments.json',{
     	
				dataType:'json',
				type:'get',
				success:function(data){
					
					mui.each(data,function(index,item){
						
					loadShare(item.name,item.msg,item.hpic,item.time,item.mpic);
					
					});
				}
		});
		
		function loadShare(name,msg,hpic,time,mpic){
			if(mpic == null){
				
				var div = document.createElement('div');
				
				div.setAttribute('class','mui-card-header mui-card-media');
				
				div.innerHTML = '<img class="hpic" src="./hpic/'+hpic+'" />';
				
				div.innerHTML += '<div class="msgBox mui-media-body"><p>'+name+'</p><p>'+msg+'</p><h6>'+time+' ago</h6>'
				
				document.body.appendChild(div);
			}else{
				var div = document.createElement('div');
				
				div.setAttribute('class','mui-card-header mui-card-media');
				
				div.innerHTML = '<img class="hpic" src="./hpic/'+hpic+'" />';
				
				div.innerHTML += '<div class="msgBox mui-media-body"><p>'+name+'</p><p>'+msg+'</p><img src="./mentPic/'+mpic+'" alt="" /><h6>'+time+' ago</h6>'
				
				document.body.appendChild(div);
			}
		}
		
		
		//Choose from Album
	    gallaryBtn.addEventListener('tap',function() {
	    	
		plus.gallery.pick(
			
			function(path) {
				
			var imgs = path;	
			
			mui.openWindow({
		  	
		    url: 'sureSend.html', 
		    
		    id:'sureSend.html',
		    
		    createNew:false,
		    
		    extras:{
				path:imgs
				   },
		    
		    show:{
				autoShow:true,//是否自动显示 
				
				aniShow:'auto'
			}
		   });
			
			},
            
            //error
			function(e) {
              mui.toast('Failed to get album') 
			},

			{
				filter:"image",
				multiple:true 
			}
		);
		
	})
	    
	    openCamera.addEventListener('tap',function() {
		
		var cm = plus.camera.getCamera(1);//获取主摄像头
		
		cm.captureImage(
			function(path) {
               console.log('sucessful');
			}
		);
	});