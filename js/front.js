
// $('body').scrollspy({ target: '#myScrollspy' })
// document.querySelector('.menu-btn').addEventListener('click', () => {
//     document.querySelector('.nav-menu').classList.toggle('show');
// })

ScrollReveal().reveal('.header');
ScrollReveal().reveal('.container', {delay: 350});
ScrollReveal().reveal('.cards-banner-one', {delay: 350});
ScrollReveal().reveal('.py-4', {delay: 350});
ScrollReveal().reveal('.social', {delay: 350});

// BOTON -----------------------------------

    // https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

    //Get the button
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }

// FIN DE BOTON ----------------------------------

//  SIDEBAR ---------------------------------
// Según veo el signo dollar es para el JQuery

    $(document).ready(function () {

        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });

        $('#sidebarCollapse').on('click', function () {
            // open or close navbar
            $('#sidebar').toggleClass('active');
            // close dropdowns
            $('.collapse.in').toggleClass('in');
            // and also adjust aria-expanded attributes we use for the open/closed arrows
            // in our CSS
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });

    });

// FIN DE SIDEBAR --------------------------------


/* =========================================
 *  map
 *  =======================================*/

    $(function () {
        map();
    });

    function map() {

        var mapId = 'map',
            mapCenter = [-12.067322, -76.948439],
            mapMarker = true;

        if ($('#' + mapId).length > 0) {

            var icon = L.icon({
                iconUrl: 'img/marker.svg',
                iconSize: [25, 25],
                popupAnchor: [0, -18],
                tooltipAnchor: [0, 19]
            });

            var dragging = false,
                tap = false;

            if ($(window).width() > 700) {
                dragging = true;
                tap = true;
            }

            var map = L.map(mapId, {
                center: mapCenter,
                zoom: 13,
                dragging: dragging,
                tap: tap,
                scrollWheelZoom: false
            });

            var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
                attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                subdomains: 'abcd',
                minZoom: 0,
                maxZoom: 20,
                ext: 'png'
            });

            Stamen_TonerLite.addTo(map);

            map.once('focus', function () {
                map.scrollWheelZoom.enable();
            });

            if (mapMarker) {
                var marker = L.marker(mapCenter, {
                    icon: icon
                }).addTo(map);

                marker.bindPopup("<div class='p-4'><h5>Info Window Content</h5><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p></div>", {
                    minwidth: 200,
                    maxWidth: 600,
                    className: 'map-custom-popup'
                })

            }
        }

    }
