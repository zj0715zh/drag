var Box=$("#box");
	window.onload = function (){
				var senddate={};
				var Div=[];
	            
				var oDiv =Box.find('div');
				for(var i=0;i<oDiv.length;i++){
	                  Div[i]=oDiv[i];
	                  senddate = {
					   l : 0,
					   r : Box.offsetWidth - Div[i].offsetWidth,
					   t : 0,
					   h : Box.offsetHeight - Div[i].offsetHeight,
				     };
				   drag(Div[i],senddate);
				}	//ѭ������div�������Ӧ�����ݶ���drag������
				
			}

	function drag(obj,senddate){

				var senddate = senddate;
				var l = senddate.l;
				var r=Box.width()-obj.offsetWidth;
				var t = senddate.t;
				var b = Box.width()-obj.offsetHeight;

				obj.onmousedown = function (e){
					var Event = e || event;
					var senddateX = Event.clientX - obj.offsetLeft;
					var senddateY = Event.clientY - obj.offsetTop;
					   Box.append(obj);
					   //ͨ������¼����ö�Ӧ��Ԫ�����²��뵽��Ԫ�ص�����Ա�֤��ק��Ԫ��ʼ�ձ��������Ϸ�
					document.onmousemove = function (e){
						var Event = e || event;

						var slideLeft = Event.clientX - senddateX;
						var slideTop = Event.clientY - senddateY;

						if(slideLeft <= l){
							slideLeft = l;
						}
						if(slideLeft >= r){
							slideLeft = r;
						}
						if(slideTop <= t){
							slideTop = t;
						}
						if(slideTop >= b){
							slideTop = b;
						}//if�ж�div�����λ�ã���div�̶��ڸ�Ԫ�ر�ǩ��

						obj.style.left = slideLeft + 'px';
						obj.style.top = slideTop + 'px';
					}

					document.onmouseup = function (){
						document.onmousemove = null;
						document.onmouseup = null;
					}

					return false;
				}
			}