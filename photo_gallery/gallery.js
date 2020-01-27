

function upDate(previewPic){

 document.getElementbyId("image").style.backgroundImage:url"("+previewPic.src+")";
document.getElementbyId("image").innerHTML=previewPic.alt;
	}

	function unDo(){
     document.getElementbyId("image").style.backgroundImage:url("");
   document.getElementbyId("image").innerHTML="Hover over an image below to display here.";

	}
