function ola(){
	alert("Eu sou javascript");
}

function audio_desc(element){
    const espeak_links = document.getElementById(element);
    espeak_links.play(); 
}

function show_content(element, text){
	//var text_show = document.getElementById(text);
	var show_item = document.getElementById(element).innerHTML=document.getElementById(text).innerHTML;
	//show_item.style.display = "block";
	/*if(show_item.style.display == "block"){
		show_item.style.display = "none";
	}else{
		show_item.style.display = "block"
	}*/
}