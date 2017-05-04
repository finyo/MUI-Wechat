var imgLst = document.getElementsByClassName('imgLst')[0];
			
			var send = document.getElementById('send');
			
			var msg = document.getElementById('msg');
			
			send.addEventListener('touchend',shareEvent);
			
			var imglg = null;
			
			mui.plusReady(function() {
				
				 //1.获取当前窗体  
				var cw = plus.webview.currentWebview();
				
                var path = cw.path
                
                var img = '';
                
			    for(var i in path.files){
			    	
				img += '<img src="'+path.files[i]+'"alt="">';
				
			    }
			    
			    imgLst.innerHTML = img;
			    
			    imglg = path.files.length
				
				
			});
			
			function shareEvent() {
				
				if(imglg>=2){
					
					 mui.toast('Do not support multi share！',{ duration:'long', type:'div' });
					 
				}else{
					mui.openWindow({
		  	
					    url: 'Moments.html', 
					    
					    id:'Moments.html',
					    
					    createNew:false,
					    
					    extras:{
							value:msg.value
							   },
					    
					    show:{
							autoShow:true,//是否自动显示 
							
							aniShow:'auto'
						}
		           });
				}
				
				
			}