function xuanze(data){
	var xuanxiangli=document.getElementById("xuanxiang").children;
	for(var i=0;i<xuanxiangli.length;i++){
		xuanxiangli[i].className="";
	}
	xuanxiangli[data-1].className="act";
	var nerrongbox=document.getElementById("neirong");
	var arrdiv=[];
	for(var i in nerrongbox.childNodes){
		if(nerrongbox.childNodes[i].nodeType==1){
			nerrongbox.childNodes[i].id="hide";
			arrdiv.push(nerrongbox.childNodes[i]);
		}
	}
	arrdiv[data-1].id="";
}
