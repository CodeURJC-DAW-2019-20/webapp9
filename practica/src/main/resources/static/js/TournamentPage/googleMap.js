function loadCoordenates(callback) {
    $.ajax({
        url: 'https://localhost:8443/tournaments/loadCoordenates'
    }).done(function (coordenates) {
    	console.log("olo " + coordenates.latitude);
    	callback(coordenates);
    });
}

function loadMap(coordenates) {
    var latlng = new google.maps.LatLng(coordenates.latitude, coordenates.longitude);
    
    var myOptions = {
    	      zoom: 4,
    	      center: latlng,
    	      mapTypeId: google.maps.MapTypeId.ROADMAP
    	    };
    
    var map = new google.maps.Map(document.getElementById("map_container"),myOptions);
    
    var marker = new google.maps.Marker({
        position: latlng, 
        map: map, 
        title:"Tournament Title"
      });
    
    
  }

$(document).ready(function(){
	loadCoordenates(function(coordenates){
		loadMap(coordenates);
	});
});




