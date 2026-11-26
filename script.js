$(document).ready(function () {
    // 1. Efeito de sombra e redução de altura ao fazer scroll na página
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 30) {
            $('.navbar-alucarro').addClass('scrolled');
        } else {
            $('.navbar-alucarro').removeClass('scrolled');
        }
    });

    // 2. Abrir dropdowns ao passar o rato (hover) em ecrãs Desktop (> 991px)
    $('.navbar-alucarro .dropdown').hover(
        function () {
            if ($(window).width() > 991) {
                $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(180);
                $(this).addClass('show');
                $(this).find('.dropdown-toggle').attr('aria-expanded', 'true');
            }
        },
        function () {
            if ($(window).width() > 991) {
                $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(150);
                $(this).removeClass('show');
                $(this).find('.dropdown-toggle').attr('aria-expanded', 'false');
            }
        }
    );

    // 3. Atualizar estado ativo ao clicar nos links simples da barra
    $('.navbar-alucarro .nav-link:not(.dropdown-toggle)').on('click', function () {
        $('.navbar-alucarro .nav-link').removeClass('active');
        $(this).addClass('active');

        // Fechar o menu hambúrguer automaticamente em mobile após clicar
        if ($(window).width() <= 991) {
            $('.navbar-collapse').collapse('hide');
        }
    });
});