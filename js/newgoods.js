//Jquery写法；

var inc=0;
function movetoleft(){
	inc++;
	inc2++;
	if(inc>2){
	 inc=2;
	 inc2=2;
	}else{
		$("#goodslist").animate({marginLeft:-1*inc*1088+"px"},1000)	;
	}
}
var inc2=0;
function movetoright(){
	inc--;
	inc2--;
	if(inc2<0){
		inc2=0;
		inc=0;
	}else{
		$("#goodslist").animate({marginLeft:-1*inc2*1088+"px"},1000)	;
	}
}