
  const changeLang = (languageCode) => {
   document.documentElement.setAttribute("lang", languageCode);

   if(languageCode == 'en'){
		document.getElementById("t1").innerHTML="Restaurant";
		document.getElementById("Menu").innerHTML="Menu";
		document.getElementById("Bar").innerHTML="Bar";
		document.getElementById("inf").innerHTML="Children's menu";
		document.getElementById("prom").innerHTML="Promotions";
		document.getElementById("ubi").innerHTML="Locations";
		document.getElementById("Terrazas").innerHTML="Terrace";
	    document.getElementById("eng-menu").href="https://pendulo.com/especial/english-menu";
	    document.getElementById("eng-bar").href="https://pendulo.com/especial/english-menu";
	    document.getElementById("pl").innerHTML="LEGAL PAGES";
	    document.getElementById("al").innerHTML="Legal Warning";
	    document.getElementById("pd").innerHTML="Data Protection";
	    document.getElementById("pc").innerHTML="Cookies pokicy";
	    document.getElementById("cc").innerHTML="Purchase conditions";
	    document.getElementById("c").innerHTML="CONTACT";
	    document.getElementById("cs").innerHTML="Contact us";
	    document.getElementById("bs").innerHTML="Job bank";
	    document.getElementById("s").innerHTML="Branch offices";
	    document.getElementById("ac").innerHTML="CUSTOMER SUPPORT";
	    document.getElementById("pf").innerHTML="Frequent questions";
	    document.getElementById("f").innerHTML="Billing";
	    document.getElementById("d").innerHTML="All rights reserved";
	}else if(languageCode == 'es'){
		document.getElementById("t1").innerHTML="Restaurante";
		document.getElementById("Menu").innerHTML="Menú";
		document.getElementById("Bar").innerHTML="Bar";
		document.getElementById("inf").innerHTML="Menú infantil";
		document.getElementById("prom").innerHTML="Promociones";
		document.getElementById("ubi").innerHTML="Ubicaciones";
		document.getElementById("Terrazas").innerHTML="Terrazas";
	    document.getElementById("eng-menu").href="https://pendulo.com/especial/menu";
	    document.getElementById("eng-bar").href="https://pendulo.com/especial/menu";
	    document.getElementById("pl").innerHTML="PÁGINAS LEGALES";
	    document.getElementById("al").innerHTML="Aviso Legal";
	    document.getElementById("pd").innerHTML="Protección de datos";
	    document.getElementById("pc").innerHTML="Política de cooikes";
	    document.getElementById("cc").innerHTML="Condiciones de compra";
	    document.getElementById("c").innerHTML="CONTACTO";
	    document.getElementById("cs").innerHTML="Contáctanos";
	    document.getElementById("bs").innerHTML="Bolsa de Trabajo";
	    document.getElementById("s").innerHTML="Sucursales";
	    document.getElementById("ac").innerHTML="ATENCIÓN AL CLIENTE";
	    document.getElementById("pf").innerHTML="Preguntas Frecuentes";
	    document.getElementById("f").innerHTML="Facturación";
	    document.getElementById("d").innerHTML="Todos los Derechos Reservados";
		}
  };

$(document).ready(function() {
    $('.carousel1').carousel({mouseDrag:true, interval:3000});
    $('.carousel2').carousel({mouseDrag:true, interval:3500});
    $('.carousel3').carousel({mouseDrag:true, interval:3500});
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	$('#bgfilter').addClass('footer{background-color: #2F5F5F;}');
};

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	$('#bgfilter').removeClass('show-1');
};


$(document).ready(function(){

	//MARGIN OWL

  if(window.matchMedia('(max-width:1250px)').matches){
	$(".owl-carousel").owlCarousel(
  	{
  		dots:false,
  		autoplay:true,
  		margin:15,
  		speed:4000,
  		mouseDrag:true,
  		responsiveClass:true,
   		responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        768:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:2,
	            nav:false,
	        }
    	}
  	});
	}else{
		$(".owl-carousel").owlCarousel(
  	{
  		dots:false,
  		autoplay:true,
  		margin:25,
  		speed: 4000,
  		mouseDrag:true,
  		responsiveClass:true,
   		responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        768:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:2,
	            nav:false,
	        }
    	}
  	});
	}


//FLOATING BUTTON
});

// $('.btn_floated').hover(function (e) {
// 	e.preventDefault();
// 	$(".btn_whats_app").slideToggle(100)
// 	$(".btn_phone").slideToggle(140)
// });

$('.btn_floated').hover(function (e) {
	e.preventDefault();
  // $(".btn_floated_menu").animate({
  //   height: "250px"
  // }, 400)
	$(".btn_whats_app").toggle(200)
	$(".btn_phone").toggle(350)
	$(".btn_uber").toggle(400)
});

$('.btn_floated_menu').hover(function (e) {
	e.preventDefault();
	$(".btn_whats_app").toggle(200)
	$(".btn_phone").toggle(350)
	$(".btn_uber").toggle(400)
});


// $(document).ready(function(){
//   $('.fixed-action-btn').floatingActionButton();
// });
// $(document).ready(function(){
//   $('.tooltipped').tooltip();
// });
//
// $("#fab-btn").mouseover(function(){
// setTimeout(function(){
//     $('.tooltipped').tooltip('open');
// },600);
// });
// $("#fab-btn").mouseout(function(){
//     $('.tooltipped').tooltip('close');
// })



$( document ).ready(function() {
	$('.carousel').carousel();
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
document.getElementById("mySidenav").style.width = "250px";
$('#bgfilter').addClass('show-1');
};

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
$('#bgfilter').removeClass('show-1');
};


$(window).resize(function(){

       if ($(window).width() < 500 ){
		$('.nav').addClass('nav-pills');
       }

});

$('i').click(function() {
  $(this).toggleClass('fa-plus fa-minus');
});

$('.collapse-button').click(function() {
  $(this).siblings().find('i').toggleClass('fa-plus fa-minus');
});
