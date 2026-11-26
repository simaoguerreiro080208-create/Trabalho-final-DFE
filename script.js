$(document).ready(function () {
    // 1. Efeito de sombra e redução de altura ao fazer scroll na página
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 30) {
            $('.navbar-alucarro').addClass('scrolled');
        } else {
            $('.navbar-alucarro').removeClass('scrolled');
        }
    });

    // 2. Abrir dropdowns ao passar o rato APENAS em ecrãs grandes (> 991px)
    $('.navbar-alucarro .dropdown').on('mouseenter', function () {
        if ($(window).width() > 991) {
            const $toggle = $(this).find('.dropdown-toggle');
            const dropdownInstance = bootstrap.Dropdown.getOrCreateInstance($toggle[0]);
            dropdownInstance.show();
        }
    }).on('mouseleave', function () {
        if ($(window).width() > 991) {
            const $toggle = $(this).find('.dropdown-toggle');
            const dropdownInstance = bootstrap.Dropdown.getOrCreateInstance($toggle[0]);
            dropdownInstance.hide();
        }
    });

    // 3. Atualizar estado ativo e fechar o menu mobile de forma segura
    $('.navbar-alucarro .nav-link:not(.dropdown-toggle), .navbar-alucarro .dropdown-item').on('click', function () {
        if ($(this).hasClass('nav-link')) {
            $('.navbar-alucarro .nav-link').removeClass('active');
            $(this).addClass('active');
        }

        // Fecha o menu hambúrguer apenas se estiver aberto em ecrãs pequenos
        const navbarCollapse = document.getElementById('navbarAluCarro');
        if ($(window).width() <= 991 && navbarCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
            bsCollapse.hide();
        }
    });
});