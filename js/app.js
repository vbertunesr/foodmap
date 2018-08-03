$(document).ready(function(){
    $(".splash").delay(3000).fadeOut('slow');
    $(".initial-page").hide();
    $(".initial-page").delay(3000).fadeIn('slow');

var mapMobile;

function initMap() {
    mapMobile = new google.maps.Map(document.getElementById('map-mobile'), {
    center: {lat: -23.5576413, lng: -46.6623001},
    zoom: 10
    });
}

initMap();

});


