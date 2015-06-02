// JavaScript Document
$(document).ready(function(e) {
	
 document.addEventListener("deviceready",function(){
	 audio=window.plugings.lowLatencyAudio;//se esta creado un objeto para primera cargar el audio y luego reproducirlo
	 audio.preloadFX('b1','audio/C.mp3',function(msg){alert("Error "+msg);});
	  audio.preloadFX('b2','audio/C.mp3',function(msg){alert("Error "+msg);});
	   audio.preloadFX('b3','audio/C.mp3',function(msg){alert("Error "+msg);});
	    audio.preloadFX('b4','audio/C.mp3',function(msg){alert("Error "+msg);});	 
	$('#btnjugar').on('tap',function(){//Asigna a los cuadros
	
		var pantalla=$.mobile.getScreenHeight();
		var encabezado=$('.ui-header').outerHeight();
		var pie=$('.ui-footer').outerHeight();
		var contenido=$('.ui-content').outerHeight();
		var alto=(pantalla - encabezado - pie)/2
		alert('pantalla  '+ pantalla)
		alert('encabezado  '+ encabezado)
		alert('pie  '+ pie)
		alert('contenido  '+ contenido)
		alert('alto ' + alto)
		$('.cuadro').height(alto);
		
	});
	
	
	$('.cuadro').on('vmousedown',function(){//Agregaba la clase "pulsado" al elemento cuadro
	 $('#pantalla').append(quien($(this).attr('id')));

			$(this).addClass('pulsado');
			
    });//Agregaba la clase "pulsado" al elemento cuadro
	
	
	
	
	
	
	
	$('.cuadro').on('vmouseup',function(){
	 $(this).removeClass('pulsado');
	});
	
	function quien (q)
	{
		audio.play(q);
		return q.substring(1);
	}
 });  
 
});

