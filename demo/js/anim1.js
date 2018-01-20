
var PageControl =  function(index){    
	

	let [onOff2,ul,page,onOff3,total,startY,moveY,y,onOff,touch,joinArea] = 
		[true,(document.querySelector("ul")),(document.querySelectorAll("ul>li")),false,document.querySelectorAll("ul>li").length-1,,,false,,];


	this.addEvent = function(){
		if(page.length>1){ul.addEventListener("touchstart",start,false);
		ul.addEventListener("touchmove",move,false);
		ul.addEventListener("touchend",end,false);}
	}
	this.removE = function(){
		ul.removeEventListener("touchstart",start,false);
		ul.removeEventListener("touchmove",move,false);
		ul.removeEventListener("touchend",end,false);
	}

	function start(){
		touch = event.touches[0];
		startY = Number(touch.pageY);
		y = Number(touch.pageY);
		onOff = false;
	}
	function move(){
		window.event? window.event.cancelBubble = true : event.stopPropagation();     //remove the browser's defalut action
		window.event? window.event.returnValue = false : event.preventDefault();
		touch = event.touches[0];
		moveY = Number(touch.pageY);
		if(moveY - startY>= 20){
			onOff = true;
		}else if(moveY - startY<= -20){
			onOff = true;
		}else{
			onOff = false;    
		}   
	}
	function end(){
			if(onOff){
			if(moveY - startY>= 20){   
				joinArea = document.querySelector(".joinArea");
				if(joinArea != undefined){
					joinArea.style.display = "none";
				}
				onOff3 = false;
				if(onOff2 == true){
					onOff2 = false;
					if(index ==0){  
						page[index].className = "anitod";    
						setTimeout(function(){
							page[0].style.display = "none";
						},800);
						index = total;
						page[index].style.display = "block";
						page[index].className = "anotid";
						setTimeout(function(){
							onOff2 = true;
						},800);
					}else{
						page[index].className = "anitod";
						setTimeout(function(){
							page[index+1].style.display = "none";
						},800);
						page[index-1].style.display = "block";
						page[index-1].className = "anotid";
						setTimeout(function(){
							onOff2 = true;
						},800);
						index--;
					}
					
					onOff2 = false;
				}
				window.event? window.event.cancelBubble = true : event.stopPropagation();
				window.event? window.event.returnValue = false : event.preventDefault();	
			}
			if(moveY - startY<=- 20){      
				if(onOff2){
					onOff2 = false;
					if (index == total) {
						joinArea = document.querySelector(".joinArea");
						if(joinArea != undefined){
							joinArea.style.display = "none";
						}
						page[index].className = "anitou";
						setTimeout(function(){
							page[total].style.display = "none";
						},800);
						index = 0;
						page[index].style.display = "block";
						page[index].className = "anotiu";
						setTimeout(function(){
							onOff2 = true;
						},800);
					}else{
						joinArea = document.querySelector(".joinArea");
						if(joinArea != undefined){
							joinArea.style.display = "none";
						}
						if(index == (total - 1)){
							joinArea = document.querySelector(".joinArea");
						if(joinArea != undefined){
							joinArea.style.display = "block";
							}
						}
						page[index].className = "anitou";
						setTimeout(function(){
							page[index-1].style.display = "none";
						},800);
						page[index+1].style.display = "block";
						page[index+1].className = "anotiu";
						setTimeout(function(){
							onOff2 = true;
						},800);
						index++;
					}
					
					
				}
				window.event? window.event.cancelBubble = true : event.stopPropagation();
				window.event? window.event.returnValue = false : event.preventDefault();
			}
		}
		onOff = false;
	}
}
// pageControl();


var pageEvent = [];
function pageinit(index){
	var pageList = document.querySelectorAll("ul>li");
	for(i=0;i<pageList.length;i++){
		pageList[i].style.display = "none";
	}
	pageList[index].style.display = "block";
	for(i=0;i<pageEvent.length;i++){
		pageEvent[i].removE();
	}
	pageEvent[0] = new PageControl(index);
	pageEvent[0].addEvent();
	return pageEvent;
}
pageinit(0);








