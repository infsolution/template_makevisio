function audio_desc(element){
    const espeak_links = document.getElementById(element);
    espeak_links.play(); 
}

function show_content(element, text){
	var show_item = document.getElementById(element).innerHTML=document.getElementById(text).innerHTML;
}