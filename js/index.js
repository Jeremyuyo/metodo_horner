//Función para dar la animación en el menu acordeon
$(document).ready(function(){
    $('.item_pols').click(function(e){ //Al dar click en los li con submenu

        if($(this).hasClass('activado')){ //Si tiene la clase activado
            $(this).removeClass('activado'); 
            $(this).children('ul').slideUp(); //Los hijos del Submenu
        }else{
            $('.menu_pols li ul').slideUp();
            $('.menu_pols li').removeClass('activado');
            $(this).addClass('activado');
            $(this).children('ul').slideDown();
        }
    });
});