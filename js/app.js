$(document).ready(function(){
    $(".splash").delay(2500).fadeOut('slow');
    $(".initial-page").hide();
    $(".initial-page").delay(2500).fadeIn('slow');

var mapMobile;

function initMap() {
    mapMobile = new google.maps.Map(document.getElementById('map-mobile'), {
    center: {lat: -11.606968, lng: -77.059364},
    zoom: 10
    });
}

initMap();

});

